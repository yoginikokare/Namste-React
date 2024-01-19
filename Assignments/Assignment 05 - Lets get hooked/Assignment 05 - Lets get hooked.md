Q: What is the difference between Named export, default export and \* as obj import

Named export : when want to export few things from file but not all
ex. constants file contain
const export img_url="http://";
const export Header=()=>{};
const Body=()=>{};

import {img_url, Header} from "./constants.js";

Default export: you can export only one thing from file
ex. const Body=()=>{}
export default Body;

import Header from "./constants.js";

- as obj export : if there’s a lot to export then, we can import everything as an object using import _ as <obj>, for instance:
  ex:
  const export img_url="http://";
  const export Header=()=>{};
  const export Body=()=>{};
  import _ as obj from "./constants.js";
  obj.Body() //access it like this

Q:what is importanace of config.js file?
we use this file store all hardcoded data or constants of application

Q:what is state in react?
in react every component maintain a its state. we use useState hook to create local state variable and react keeps track of state variable. state variable store the data used in component and whenever state variable change whole component get re-render and updated data get display on UI that means keep your ui in sync with updated data we use state variable

Q:What are react Hooks?
React hooks are at the end is just normal javascript function but it used to perform some special react features like useState,useEffects.
Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.
React Hooks are new addition to React from React 16.8 version. Earlier, state and other component features could be handled only using Class Components. But with version 16.8, React introduced a new pattern called Hooks. With React Hooks, we can use state, and other React features, in a functional component empowering functional programming in React.

React provides a bunch of standard in-built hooks like useState(), useEffect(), usecontext(), useReducer(), usecallback, useMemo(), useRef(), useLayoutEffect(), useDebugValue() and other additional hooks.

Q:Why do we need useState hook?
it is a hook that react gives us to create local state variable inside your functional component. and to keep your ui in sync with updated data we use state variable. also react keep track of only those variable.
this hook trigger reconciliation behind the scene so whenever state variable updated react will re-render whole component so updated value gets display on UI(Two way binding)happening

Notes:
what happend behind the scene of use state?
React support one way data bnding, so if we create local var then react does not get to know how to update that variable value on UI thr are may be thousands of varaible. to do that react uses hook that is useState which create local state variable and to keep your ui to sync with updated data we use state var. also react keeps track of only those variable so whenever value of state variable gets updated react will re-render (destroy old component and create new comp) whole component.
this means behind the scene every time whenever state variable changes your virtul dom gets updated and in reconcilation process diff algo finds diff between current virtul dom and updated virtual dom (btn 2 trees) and quickly replace only that chanded value in actual dom
ex. const a = 10, later it changes to a = 20, recocliation trigger, react re-render the comp and create new virtual dom with upadted node value then diff algo find the difference and replace that value in actual dom

why react is so fast:
react is fast for his faster dom manipualation which is very expensive process on ui and dom manipulation is fast bcz of superpower of diff algoritham. it has virtual dom, reconciliation.also only react lib doesnt make your application fast there are other dependencies also which male your appplication fast. here explain bundler parcel babel, image optimization, minification etc
