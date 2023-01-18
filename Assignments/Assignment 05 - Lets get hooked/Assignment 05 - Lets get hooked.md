Q: What is the difference between Named export, default export and * as obj import 

Named export :  when want to export few things from file but not all
ex. constants file contain 
const export img_url="http://";
const export Header=()=>{};
const Body=()=>{};

import {img_url, Header} from "./constants.js";

Default export: you can export only one thing from file
ex.  const Body=()=>{}
    export default Body;

import Header from "./constants.js";

* as obj export : if there’s a lot to export then, we can import everything as an object using import * as <obj>, for instance:
ex:
const export img_url="http://";
const export Header=()=>{};
const export Body=()=>{};
import * as obj from "./constants.js";
obj.Body() //access it like this

Q:what is importanace of config.js file?
we use this file store all hardcoded data or constants of application

Q.what is state in react?
in react every component maintain a its state. we use useState hook to create local state variable and react keeps track of state variable. state variable store the data used in component and whenever state variable change whole component get re-render and updated data get display on UI

Q:What are react Hooks?
React hooks are at the end is just normal javascript function but used for some specific operation to perform like useState,useEffects. we get that hooks from react lib.explain these hooks in detail

Q:Why do we need useState hook?
  to create local state variable which trigger reconciliation behind the scene

Notes:
what happend behind the scene of use state?
React support one way data bnding, so if we create local var then react does not get to know how to update that variable value on UI thr are may be thousands of varaible. to do that react uses hook that is useState which create local state variable and t keeps track of only those variable so whenever value of state variable gets updated react will re-render (destroy old component and create new comp) whole component.
this means behind the scene every time state variable changes it trigger reconcilation process and find diff btn 2 trees and get to know value is change in virtual dom and quickly replace only that value in actual dom
ex. const a = 10, later it changes to a = 20, recocliation trigger, react re-render the comp and create new virtual dom with upadted node value then diff algo find the difference and replace that value in actual dom