# Redux

## Why

While [React.js](react.md) provides stateful components, managing state across entire
single-page-applications requires an [isomorphic](isomorphic.md) tool.
More specifically, we need a [Single Source of Truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
Managing state in a declarative framework like React.js is critical and easy to
get wrong. How can we minimize side effects, while maximizing testability and
reproducibility? We separate data, logic, and rendering. How can we visualize
the changes we are pushing to our state? We use
[Uni-directional data flow](http://redux.js.org/docs/basics/DataFlow.html)
to easily reason about the interactions between actors.

## What

[Redux](http://redux.js.org/) is a tiny (2kb) library used most commonly with
React.js single-page-applications to manage its state. It has an excellent
[browser dev tool](https://github.com/gaearon/redux-devtools) that shows
the actions you make, and the state mutations that are caused by them.

Redux uses a single source of truth, called "the store", which is an immutable
object tree. The only way to change the data is emitting "actions", which
describe what you want to do. These actions use "reducers" to perform the
mutations to the state. Since these concepts are rooted in functional
programming, the code is highly unit testable.

| Function                          | React With `react-redux` | Server              |
| --------------------------------- | ------------------------ | ------------------- |
| Presentation View                 | `React Components`       | Client API          |
| Communication                     | `Action`                 | Function Invocation |
| Logic to massage data for Storage | `Saga`                   | Services            |
| Data Storage                      | `Store`                  | Database            |

## How

Our
[TELUS isomorphic starter kit](https://github.com/telusdigital/telus-isomorphic-starter-kit)
defines our standard UI application, with React and Redux at its heart. The
[FAQ](https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/ui#faq)
has a lot of information about how we use Redux.

### React Component

- Responsible for Presentation and User Interactions.
- Blind to the complexities of the app since it does not know what happens after action is broadcasted.
- Able to react to state change via `connect`.

### Actions

- Responsible for communication between parts of redux
- Use event description instead of function Invocation
- Listeners determine how to react to actions

### Reactive Style

- Describe an event via Actions
- Actions describe a need as a fact or an event already happened without dictating how to fulfill the need. 

  Eg. Need => ``TIME_TO_TRAVEL_ARRIVED``

  - ``personOneSaga`` reacts by => ``startWalking()``
  - ``personTwoSaga`` reacts by => ``callTaxi()``

### Store

- Responsible for application state (immutability, persisting to disk, etc).
- The [Single Source of Truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
- Keeper of state information, should not keep business logic.
- Can only be affected by actions.
- Prevents unintentional modifications by other methods via Object Reference, or Directly Accessing Store Members.

```ts
//Reducer
export const people = (state = [], action) => {
  switch (action.type) {
    case 'PERSON_REMOVED':
      return state.filter(person => person.id !== action.payload);
    default:
      return state;
  }
};
```

### The Saga Library

- Responsible for Business Logic and Async actions (HTTP Calls).
- Does not keep local state.
- Typical use is take user input, make an HTTP call, and provide output to go into the store.

### Redux Dataflow

<img src="redux-and-data-flow.png" width="50%"/>

## Who

Front-end developers

## References

- [Redux](http://redux.js.org/)
- [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux)
- [Redux Devtools](https://github.com/gaearon/redux-devtools)
