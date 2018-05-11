# Why

TELUS has had a long standing commitment to putting customers first, and part of putting customers first is protecting their privacy. In this age of information and constant connectivity, there is more data available than ever, and customers expect their data to be used responsibly and their personal information protected persistently. TELUS has a strong commitment to going above and beyond these expectations.

  

At TELUS Digital we strive to improve the customer experience through the use of the Digital Platform. In our efforts to improve each and every customer’s experience, we utilize consumer data to provide insights into how we can help improve our platform and services to make customers’ lives easier. In the data that we use there is often sensitive information that can be personally identifiable. This sensitive information, although useful to our goal of improving customer experience, can pose a privacy risk if this sensitive information is connected to an individual. One of the hurdles at TELUS Digital is how we can de-identify these datasets to protect privacy while still preserving its utility and referential integrity.

# What

This documentation outlines the different methods available to the creators at TELUS Digital to de-identify their data while maintaining a harmonious relationship between privacy and utility.

# How


## Redaction

Redaction is the process of partially masking-out fields deemed sensitive or identifying. A common example of redaction is a credit card number masked with asterisks. This method can reduce the referential integrity of data as syntactic correctness is lost and statistical correctness is reduced. Redaction is not reversible unless a mapping to the original data has been made. Redaction is often used when the values are not needed downstream.
![TEST](https://photos.app.goo.gl/agYPBv6x3ijhcjJa2)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **GOOD**  | Reasonable protection of sensitive information.                   |
|  Privacy  |  **FAIR**  | Still allows for correlation of transactions with the individual. |
|  Utility  |  **FAIR**  | Allows significant secondary production uses                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]
## Pseudonymization/Substitution

Pseudonymization or Substitution is the process of replacing identifying data with alternative values (often partially randomized), these values can be tokenized so that the pseudonymized data can be linked back to the original dataset. This method provides a good degree of protection as, unlike with encryption, no information is stored in the pseudonymized values themselves. Pseudonymization preserves a favourable amount of utility as the correlations between values are maintained.

![](https://lh3.googleusercontent.com/xOdxL8J5rlQTvRazHB54Pg62aGL0HADl2qiywHPhISkmXaiNGtAjCyoXGSK3RQQl71WDaBw_MLAvsVFDDFuXXWnhl_4rKIngpqY9pPYdbFMjiLkYsXFMJDQczSNq3xvfF2HfbL7op7uhFGATE3hCletPogbVbmeRPEQIdY1rV_9Mrj6GELHiioGHRcT1zqqtn3ZvJeRMrU0J7peW0N5x6hIFqFu5-esRVf09c2yOvQzmLFNlRR7_VBCBqsRR6HmAQzUp-U9mJRzB3j_UQ7gVKYKS_s9snkqrBHSzDyKhU-VkkE-hwUw3Llq0AzEXa1nzbfduG-msVzNZeqg-fyYsASb7b0i9UlBoaI0H4vsRFpBJt7w0_eA0Mjtw4gN7j1kN0NAsn08WdqpX_5Dt56oj2dhyHXdFG0J380Nl7YMxKqbAGsUYz5_loF96VhJYkLbODbsVtjjrYwjenINKSfdqYJAou3sgl9E04S0imgg8nTtqu2JCztHNCUAfgbOs3bio1HHoYdSKg1onh8fMFrRGTpIKcL1fCJ4mcq1bG_LEb7bfpYNTq-BfyDgQcyjxgzalvoGVzSlQdlmew6KLU_9A8FTDnvXoVJGhtwJgXA=w2494-h1088-no)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **GOOD**  | Obscures sensitive data elements.                    |
|  Privacy  |  **POOR**  | By preserving consistency, correlation of the substituted value still allows tracking of the individual. |
|  Utility  |  **FAIR**  | It preserves referential integrity and can be used to preserve syntactic and semantic correctness.                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]
## Shuffling
Shuffling is the process of moving elements around in a dataset. This breaks the correlations between individuals and their identifying data, however, the sensitive data is still contained in the set. Shuffling allows for the analysis of statistical distribution but the correlation between fields is lost.

![](https://lh3.googleusercontent.com/6GMun8nEVb9SXesaetXnocRmRErxTFOuIXUv0v8RP7G_FqB972YcvUffd0EK5ZuCqzjYf_kNRrJ1fJLLNxW-QuqU8Ujhi9ELDzquR95RS7jVtMr_MIGNHH6ifoES1aD8_YQ_3t8sS_mmXnsoUW0SWOKQGlzIIfDwCPcZ-mV3d00NcqPbMXwR3Th66zer8RMKnDGmndiU9WzyU1bMqwBUF-7pWPzSyFuz9Jj3EX8i5dMI_y43ykRSBRDQt-r1r-GetOstpgqtjSixEnFVm9GThYnhJ69gftB2yV-BlTvN0CwBAQKTCsITEqU89zP5ST_qSyowDVIiy_gJM9yofXFld61TifXuOpGVxGUpUp8p0CZ2XnHW_cV1OBKrSXuSE8j64x2d7Nki6YGZzGE1ucRA2aKAlkWWHhO8TlFDagwY0AiP7x40g4Iv3KesrM64hOi1vl4SADa1JlX2UEJdOxaGw-3sDv_ujMnr53OyTJrkyX6FyiLK8NpUAKPHP5q5a8phdPui3tvi9WJNYcTQcz7OHFiUjK4NV-k1r2mu9SmdObVoQzXNV7JC9hXkAdQHVSbh3BL0XJG_oUZ0IpnhQuAp4U9CmjdkY-hZaSavyw=w2164-h1692-no)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **POOR**  | Sensitive data elements are still present, although context is obscured                   |
|  Privacy  |  **FAIR**  | Obscures the context for sensitive data |
|  Utility  |  **FAIR**  | Syntactic correctness can be maintained. Statistical correctness may be maintained. Semantic correctness is hard to maintain.                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]


## Generalization

Generalization is the process replacing exact values with value ranges to preserve privacy. For example, it may not be necessary to know an individual's exact birthday but rather they are in their 50s. This can only be done to certain types of data; fields like gender, names, and credit card information cannot be generalized.

![](https://lh3.googleusercontent.com/wLuzHK8NRsAodNQXzQEDTngSF6OZN54ikAUfkLr-u8eNo4dlcoW-lTVYDoqzuAb3pMFRUTEHkqTJ_KovBZOAAN-__r0PwnMt81JEtaKUJGjnqGLbbsmFDaoCZdJhWCNdOqMhtFKvi-c2m9KtdbHCgYbIZ71Xq7a-fakqnIzOwUxpjkoEMZRElsTocnndIrwhu_vOZWmrW7mXvddPZdU51Jl6fS8RdZGNIRaqe0Hl21VWxQ8FEPSIacOCax_-2HazjN9BtBuF4aXKTeK6MNCOVdL0yxsHPzeuFFNfoAiC1YqjzWjHcEX6_x6RL_OXTCJleVg0a1J2U-mTZ-f9kuuxueJ1_37SxrGCv9HmpmV-pomGUGmZjyRfcCH5SfxcTjla07app0D_HprKJYzusajxIw_WEQiT2L6Z_9VB7SWQhk87HTlsnXbOqqRrbM2U7Z-JmmD_89HJJBV-f4zVb9eE_ywoDsWVvcb4al0qMHt4j6UYCIIZusLM3SZ4dLPt8Wx9-zRZ3AEPjd0ivhJ5PwGi5f-Bup83x3XlE-Lbau9114oLVcxWap2kK2yPp_Pg0ubRNmKLCIe9wX4iAYt84yildioWniYwiCM3cNiqCQ=w2092-h334-no)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **POOR**  | This method often leaves sensitive data present while generalizing data elements that correlate with it.                   |
|  Privacy  |  **FAIR**  | Properly done, privacy can be preserved, but many approaches have proven to be weak or poorly thought out. |
|  Utility  |  **GOOD**  | Preserves many of the functional requirements.                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]


## Suppression

Suppression is the complete removal of sensitive fields. No place holders are used and there is no evidence of the original values. Suppression has strong negative impacts impacts on the utility of a dataset but is an effective way of eliminating PII.

![](https://lh3.googleusercontent.com/7VMIHNQeRSFJANnmGsSvaQkXpD2SaQTgM5ff-ltoeiXfGHx-LVLPiKV00t-QhBA8jDufCOecsL35HJSAahBnP9BWQEEACBQBpj44q-0vMe2lNDkjWoiKRIad0YwJHwhB_QW28N4PY9wqsA4A9R2e2yk1zr1P4o0Pv12w_bHRRClycGcJIToWFOJ4vhuvzn5tByNPlc0yWHOF7Q0Qp24e-RUDKB0Zu1LCXPC_HqLOncomoZjQHtdVJ1w2e7OjNQ-Enq8p9UKUDLMzwi0wwbnGRwE3goMUft5o_qpau3M_gUIfkdBil1-SSchP7cq-zMqlSt3W1gN6Jp1bV_T-5VDGHGleEdiO9QvGix_FEpVNU8EdWzkkIxapyE89cAEzV1XlM4V7Tmv8nz9I1Mk5lgfEpTUp63ZBsmlW_V1Hdy7BJ2fxDw9d3KZ426PIWD4JEtMo5q96fv2vuDavN8x9d6SLgmunbdAHmbZu1lHP7RjFDXYZxGhOU6uBGyWSCGxuzdnnOyGReGuCBpehOKHUcNk5Cl5mBpct203VFlt6u6doKE2z--DWOLLHF1ooVLJ0wOoOn3jAQKXVYCsZjOSTgF-fnXBGh0siT4AZTePxMw=w2142-h610-no)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **BEST**  | Complete elimination of sensitive data.                   |
|  Privacy  |  **BEST**  | Complete elimination of sensitive data. |
|  Utility  |  **POOR**  | Functionality related to sensitive data is completely lost.                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]


## Randomization

Randomization is the process of replacing sensitive values with randomized values which bear no relationship to the original fields. This reduces both the semantic and the statistical correctness of the values but effectively protects the privacy and secrecy of the data. Randomization is useful when the values being masked have low context in the analysis being done.

![](https://lh3.googleusercontent.com/1mpvxmVCIZU8Uxuj2SAMSeiq_BX0nf8pk369OYlp6xxVjL8rfQumbrd-r4iBJpF9xsEwniqfwGyLLfd9DgmVzFZu0tdQ2afK_yrPvxbaIlQdBr1pfgWhYUuBq1oiC5G4XXTjb30m4KdHOah6qRloz3kie2QzBSVOpTvSU2eHg_6OUYCijerXGYg_B8h_2wwlI504NGVhbebC2ZJVnMF7UrfLREiUfG4UfXJxkc33gveR55zIADhfLP5NX2OWUycMCI2XfbuJSjSpZ1pcAjUNXay3Jqrd1-oGm76hL53Z0C6RjNIlIjIqDbvyagsaQI4AnwDALRVl_Sy6ij-moyBviAvWle9jAFSZXfzrVtNw7lBnQ_SLWDb4-iYPRv4ZwlohziQ6cr-0m7RcITaC2x353sFsIAHLrtcNroMT1vp2xuALKYHrjTQA4DusN_1uVlTcYmZ9gHCFnjTD7c2mldKF1sOXs6_CISscw0DxEOz1Zpq36AZfKO-kw3-t_nKE0p-6Sm-glMQwSJFRxwuY7c_sRPGbwDTovz5RdvUr8usCCaPE3l-XqKl-8VEhl7xjYulFtv7naL65S2kFAmV6zDJYFjbpC7IKFw1jjRkUqw=w1822-h174-no)

| Attribute | Rating | Explanation                                                       |
|:---------:|:------:|-------------------------------------------------------------------|
|  Secrecy  |  **BEST**  | Complete replacement of sensitive information.                   |
|  Privacy  |  **BEST**  | Done properly this breaks the connection between the data element and the individual. |
|  Utility  |  **POOR**  | Data loses many of it’s functional properties.                      |

[Contents of table taken from “_Data Masking Guidelines - Chief Security Office - Habitat Communities”_ by Neil McKellar]



## Data Attributes of Masking Methods
![](https://lh3.googleusercontent.com/pHbN0ssr7sVLL42ES-obVx5lDi0-vS1s19acvsNWSVdp8gqJa8PyqLIWKuEr42hZwNVBxCqMgI_jYd6c3u2iL9NxItdPhd0Yke3eXBecQD7tNVh1JzRLEvbJEdKie5MM0JpvAWAGhlKNms-DmOUoCu8zcJDBmN4Hvk5AaNoI0L9ZdbXSzyruozuN54pG6x6ND1lUWKHMaqyyXyhVIeyhhb0G3Q9nwycbTR7hrgVtYQ-9Vo419V1_DTnzzckaVcSto4K7DiGljhNJfcnSO0XOpWrTv3-V_RjWRhgFj1aMmvvaLg7bjkgDsyR8g-a60rAgkVPRUB4cQSJ6nB1GUE-VzaLg_SlBj5XOP9FpMTQQT29rcl60Fj9gWN2ofy-m48fyXuk9fEbJxcbQmcj66kQJMQQQ6HZyaMYFGb4va6nz9fLN_LSNfMwHOR4xnEwq9zXHV8PvEtNfK0hboOT_-yn65lAW-WKwH7kv9n2Ia8bnYiavb5ksajkHiRa_taJxRs66QyFj6trDrC0ZdldJgtLLHpnFJnZQO-9S_UOp81XGrxKCa9noMriI_pVgdCAJL3PJKO4X4WoFWKdC7xDs3RV20L0VtjJTdlyNgXRLxg=w2638-h888-no)



