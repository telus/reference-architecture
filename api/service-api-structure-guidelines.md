# Service API structure guidelines

## Why

Structure guideline for API help to formalize structure and conventions of request response for TELUS enterprise services.
Note that it provides guideline on structures like naming conventions, formats and request response skeleton preferences 
and _does not_ dictate REST design of API like use of verbs and resources.

The goal of these guidelines is to:
1.  Bring consistency in interface so that there is potential to write common code and runtime (like common parser, validator and logging). 
2.  Promote best practices in interface design

## What

This document provides central place for set of service api guidelines that can be reference at time of new service/feature implementation.
It can also be used to evaluate existing service interface and update it to follow these guidlines as reusable common code will be more valuable if most of services have consistency in interface.

Service API providers and Consumers should contribute and debate on these guideline so that interest of both parties is retained.

## How

### 1. Use primitive data types

Use primitive JSON data type for attributes, avoid using string values to represent all attributes.
Prefer simple data types from swagger interface definition as follows:

- string
- number
- integer
- boolean
- array
- object

### 1. Use null value instead of suppressing fields

Use

```javascript
{
	"name": {
		"first": null,
		"last": "Turner"
	},
	"address": null
}
```

Instead of

```javascript
{
	"name": {
		"last": "Turner"
	}
}
```

Implication - 
1.	Populating null values makes initial integration efforts easier for consumer and response schema always available in response
2.	It is always easier for consumer to check field for nullability than to check for fields existence and then check for valid value.
3.	Consumers need to code for ignoring additional fields. As new minor version are introduced additional attributes may be returned while maintaining backward compatibility these should not result in parsing errors.

### Return empty array instead of null value

Use

```javascript
{
	"name": {
		"first": null,
		"last": "Turner"
	},
	"alias": []
}
```

Instead of 

```javascript
{
	"name": {
		"first": null,
		"last": "Turner"
	},
	"alias": null
}
```

Implications -
(??? how empty array benefits ui? is empty array check is easier than checking null and then array length?)

### Use consistent textual date format

For data and date time attributes, default behaviour of JSON serializers is to write datetime in unix time format. Unix time is not very human readable and since the time is absolute, it become hard to share date or timestamp without time zone context. Hence following textual representation of date and timestamp should be used where we have option to share date with or with out timezone.
Having textual date format also helps in debugging and investigations as they are easy to infer.

#### Date and timestamp without timezone

It is important not to mention time zone when date or timestamp does not indicate absolute time. Implementation and consumer systems could be running in different default timezone of their own and qualifying timezone info usually add complexity to parsing logic
Always check if given attribute can be shared without timezone information
Use following formats
Date: "yyyy-MM-dd"
Time: "yyyy-MM-dd'T'HH:mm:ss.SSS"

#### Date and timestamp with timezone

When request or response attribute information has to have timezone information to qualify; use following formats
Date: "yyyy-MM-ddZ"
Time: "yyyy-MM-dd'T'HH:mm:ss.SSSZ"

#### Formatting symbols

| Formatting placeholder | description                       | example/s                           |
| ---------------------- | --------------------------------- | ----------------------------------- |
| yyyy                   | 4 digit year value                | 2018, 1999, 2005                    |
| MM                     | Month in year `[01..12]`          | 04, 10, 12                          |
| dd                     | Day in month `[01..31]`           | 05, 12, 30                          |
| "T"                    | Literal symbol                    | T                                   |
| HH                     | Hours in a day `[00..23]`         | 02, 18, 22                          |
| mm                     | Minutes in hour `[00..59]`        | 45, 20, 03                          |
| ss                     | Seconds in minutes `[00..59]`     | 00, 23, 50                          |
| SSS                    | milliseconds in seconds           | 999, 204, 735                       |
| Z                      | RFC 822 timezone format (+/-HHmm) | -0400,-0500,+0530,Z (represent UTC) |

### Anonymous object wrapper

> use anonymous object wrapper while returning response or error result

Use error response as

```javascript
{
	"status": {
		"statusCd": "404",
		"statusSubCd": "ACNF",
		"statusTxt": "Customer not found by accountNumber",
		"systemErrorCd": "DG_CCMS_0001",
		"systemErrorTs": "2018-02-20T03:04:15.234-0000"
	}
}
```

Instead of 

```javascript
{
   "statusCd": "404",
   "statusSubCd": "ACNF",
   "statusTxt": "Customer not found by accountNumber",
   "systemErrorCd": "DG_CCMS_0001",
   "systemErrorTs": "2018-02-20T03:04:15.234-0000"
}
```

And use success response to any method that should return JSON payload as 

```javascript
{
	"response":{
		"attr1":"val1",
		"attr2":234
	},
	status:{
		"
	}
}
```

Instead of 

```javascript
{
	"attr1":"val1",
	"attr2":234,
	status:{
		"
	}
}
```

Implication - 
1. Wrapping response with anonymous object gives opportunity to name object structure in response (in above case "status" and "response" respectively)
2. In case of errors in intermediate layers - like SDF - response structure can be maintain consistent (TODO: ask SDF to change attribute name to systemErrorTs)
3. In case of success value 'response' can be directly used in consumer layer by dropping 'status' object which is related to API invocation. 

### Use standard definition of status object across services

Status object in response that is typically useful in error conditions should be using same schema across services for consistency and to allow tooling
YAML definition of "Status"

```yaml
Status:
    type: object
    required:
      - statusCd
      - systemErrorTs
    properties:
      statusCd:
        type: string
        example: '404'
        description: response code that corresponds to HTTP response code 
      statusSubCd:
        type: string
        example: IB
        description: |-
         Api specific error code constant. Constant values per operation response
         should always be document since it can be used by consumer for conditional 
         error processing.
      statusTxt:
        type: string
        example: 'Could not find customer'
        description: Short description of status
      systemErrorCd:
        type: string
        description: |-
          error identifier from dependent system. error identifier that can be
          useful for problem diagnosis
      systemErrorTxt:
        type: string
        description: |-
         error text from dependent system. detailed message that can be useful for
         probleam diagnosis
      systemErrorTs:
        type: string
        format: date
        example: "2017-07-20T20:45:31.345-0400"
        description: |- 
         system error timestamp qualified with default timezone of system 
         hosting service implementation. qualifying timestamp with timezone
         helps to correlate error events across multiple systems.
         timestamp format is 'yyyy-MM-dd'T'HH:mm:ss.SSSZ'
```

### Use limited HTTP methods

For API designing use HTTP methods that are supported across all layers of service delivery. Currently SOA policy manager (v 6.1) supports narrowest set of HTTP methods
All api should be designed only with following HTTP methods

- GET
- POST
- PUT
- DELETE

### Response body is required only for GET method

JSON payload in response is optional for POST, PUT and DELETE method. Requests with these methods can get empty body with HTTP status code 200 if operation execution is successful.

\###Status object should be returned for all responses
If operation execution has failed and service is returning non HTTP 200 response (for example 404, 500) then response should contain status object as per following

```javascript
{
	"status":{
	//status object describing error
	}
}
```

It is important to note that error response can be returned service itself or by intermediate processing layer like SDF. this layer can return response in case caller failed to authorization or service is not reachable.
Error response schema should be aligned across layers that can generate error response.
Following is sample of how SDF response is generated today

```javascript
{
	"status":{
		"statusCd":"403",
		"statusSubCd":"SDF",
		"statusTxt":"HomePhoneManagement call failed.  Unauthorized request.  BAN is not found or invalid. ",
		"systemErrorTimeStamp":"2018-02-09T18:13:21.345-05:00",
		"systemErrorTxt":"Unauthorized BAN",
		"X-TELUS-SDF-TraceId":"225f820e-ebe2-4d2b-af6f-32e1e6fed2d9"
	}
}
```

Things to consider: for internal REST consumers alignment of response status in case of error would also help. Currently SOA policy manager has its own schema to respond error which can be troublesome for internal clients to deal with
Sample error from SOA: `{"faultcode":"Server", "faultstring":"Authentication challenge issued"}`

If operation execution is successful and service is returning HTTP 200 response then response should contain status and response object wrapped in anonymous object 

```javascript
{
	"status":{
		"statusCd": "200",
		"systemErrorTimeStamp":"2018-02-09T18:13:21.345-05:00"
	},
	"response":{
	//operation specific response object
	}
}
```

### Use "filter" parameter to allow partial response

Avoid use of ad hoc boolean flags to partially return response. Use fields parameter as per [TMF630_REST_API_Design_Guidelines](https://projects.tmforum.org/wiki/display/API/API+Design+Guidelines?preview=/43253967/43221039/TMF630_REST_API_Design_Guidelines_Part_1_R14.5.1.pdf) to allow partial data response. 
All path constants allowed in fields list should be documented.

### Support query resource with standardized attribute filtering

Allow partial entity response by using basic filtering expression as mentioned in [TMF630_REST_API_Design_Guidelines](https://projects.tmforum.org/wiki/display/API/API+Design+Guidelines?preview=/43253967/43221039/TMF630_REST_API_Design_Guidelines_Part_1_R14.5.1.pdf)
