Q: Is JSX mandatory for React?
No. JSX is not mandatory but its usefull for writing better and clean code instead of writing code using React.CreateElement.

Q: Is ES6 mandatory for React?
ES6 is not mandatory for React but is highly recommendable.

Q: How can I write comments in JSX?
A: {//} - for single
{/_ A JSX comment _/} multiline comments

Q: What is <React.Fragment> and <></>?
React.Fragment is component which is exported by react lib. It is like a empty tag and its not even render in dom also u cant add styles to React.Fragmant. jsx can only have one parent so it basically used to wrap or group mulitiple element without adding extra node in dom. <></> is a shorthand of <React.Fragment>.

Q: what is virtual dom? Why we need virtual dom in react?

- It is an represetaion of actul dom. it store in form of object in browser memory. whenever a state changes in run time then corresponding node and its children in virtual dom gets rerendred.
- when anything changes, virtul dom gets upadted instead of real dom. like real dom it also represented in tree structure.
- we need it for reconciliation process
- It is big js object at the end and diff algo compares 2 object (current and updated) and replace

Q. What is Recociliation in React?
Reconciliaion is process where we have diff algorithm which finds out diff between the one tree(current) and another tree(updated one) and rerender or change only specific portion of tree(dom) which found by diff algo instead of rerendering of whole dom

Q. Why we need keys in React? when do we need key in React?

- keys are used to uniquly idenify element when we have multiple children with same html tag under one root. 
- keys make reconciliation process faster.
  Ex. suppose we have list component which contain 4 div and one more div gets added on top of the list then react will get confuse which div gets added and at which place in the list. he does not able to idenify newly added div so instaed of only rendering newly added div it will re-render whole list.
- so if we give unique keys to all div then diff algo will uniquley identify which div newly introduced and which are existing and it will quickly render only that div with minimal effort.

Q: what is React Fiber?
React Fiber is new reconcilation engine which is responsible for diff and introduced in react 16.

Q: Can we use index as keys in React?
Yes, we can use the index as keys, but it is not considered as a good practice. if thr is unique key then not use index bcz if the order of the items change then this can be negatively impact performance.

Q. what is Config Driven UI?

- It is an system design concept.
- means config or configuration data i.e a big json object is send from backend.
- for building ui we need config data it either come from backend or we can hardcode it in frontend side also
- the UI which is created from config are called config driven UI. if config change then similrly our UI should also change. this config driven by backend that means everything handle by backend (api).
  Example: I have food app and we have show diff offers in diff cities.then instaed of keeping diff site for every city we use CD UI that means on the basis of api data we show diff offer in diff cities.
  2. diff popup messages which u build in uber project

Q: What is prop in react?
means passing some data as agrument into functional component. In react every component at the end is function. so passing prop in component menas passing data as agrument is prop in react and we recive it into a function parameter

Notes:
passing props in react - means passing some data as agrument into functional component

arguments - passing data into arguments
parameter - reciving data into param
//receiving data into param
ex. function foo(param1 , param2) { }
foo(arg1, arg2) //passing argument

object destructuring :
it is an js syntax which extract properties from object, arrays and assign them to individual variable. it breaks down complex structure into simpler part
example: [a, b, ...rest] = [10, 20, 30, 40, 50]; // a=10, b=20, rest = Array [30, 40, 50]
const { a, b, ...rest } = obj; //

spread operator={...obj}

You can have only one root element in jsx
