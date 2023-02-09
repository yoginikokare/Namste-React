1. What is Microservice?

2. What is Monolith architecture?

3. What is the difference between Monolith and Microservice?

4. Why do we need a useEffect Hook?
   useeffect is basically is react hook which is normal js function at the end of day. this hooks get executed everytime after rendering of UI. so if we want to perform some operations after component render then use useEffect. we can use it for to make API call or to execute function after certain period(setTimeout). so when we do api call first comp gets loaded and then api call goes and then components re-render again.   

5. what is Shimmer UI?
It is like skeleton of your actual UI. It gives user an basic idea of what’s about to come and what’s happening. it feel user eyes good. Ex. Youtube empty boxes before loading actual vedio in that box is a shimmer ui effect

6. what is conditional rendering? explain with code example
conditional rendering means load jsx element or component based on certain conditions.
if condition matches then display somehing if not then display something else
ex. if list data is thr => then display actual UI list
    if list data is not thr => then display shimmer ui or empty box 
ex. {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};

7. What is differenece between JS Expression and JS Statement?
expression - is a bit of JavaScript code that produces a value.
1 → produces 1
"hello" → produces "hello"
5 * 10 → produces 50
num > 100 → produces either true or false
isHappy ? "🙂" : "🙁" → produces an emoji
[1, 2, 3].pop() → produces the number 3

Statement:
Each statemet is an instruction to computer to do something. Statements often have "slots" for expressions
let hi = 5;  let hi = /* some expression */;
let hi= isHappy ? "🙂" : "🙁"
if(){}, for(){} etc.

8. What is async and await?
    Async: It simply used to write promises-based code.It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value. 
    Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait. for example:

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants() {
        const data = await fetch("Swiggy_API_URL");
        const json = await data.json();
        // we get the Swiggy API data in json format
        console.log(json);
    }

9. What is the use of const json = await data.json(); in getRestaurants()?
   const data = await fetch('http://');
   const json = await data.json();

   here js fetch method used to make http api call and its returns type is promise and it returns big json or xml in response. data.json() is a method on the data object that lets you extract a JSON object from the data or response. so here const data.json() returns promise and we have to again wait to fullfill that promisea due to that we use await
   

10. what is optional chaining (?.) in javascript?
   if the object or function called is undefined or null then instead of throwing error in console it returns undefined for that
   ex. const dogName = adventurer.dog?.name; //returns undefined
       adventurer.someNonExistentMethod?.();  //returns undefined. without oprator it returns function does not exist error


Notes:
when will my component re-render? After every state variable changes or props passed in functional component changes

where should i call API call? inside useEffect()

as in when page loads what we do -we call an API and fill the data
thr can be 2 way to load the page
1. load the page -      Make API call      RenderPage

2. load the page - Show something on UI(Render HTML page quickely) - Make API call - update UI

second approch is best and used lots in used in react. it feel user eye better

How will useEffect behave if we don't add a dependency array?

useEffect: it a just normal js function and we call it by passing another callback function into it and dependency array. this hook gets called after rendering of comp and we use it to make api call or to do task which want to do after render like settimeout..syntax- useEffect(()=>{});
it calls in 3 ways:
1. useEffect(()=>{}) - when no dependency array, useEffect will called after every re-
render

2. useEffect(()=>{}, []) - when empty dependency array, it called only once after initialization of component i.e initial render

3. useEffect(()=>{}, [searchText]) - when dependency array with state variable, useEffect will called every after initial rendering of component and state variable define in dependency array changes

fetch() method: this method used to request data from server. it return promise whether it is resolve or not and data in form of json or xml. by default its get request
fetch(url, options).then(response => response.json());

Get Request: fetch('https://swiggy.com/todos/1').then(response => response.json());
Post Request: 
const data = {  "name": "Geeks for Geeks", "age": "23" }
const optons: {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(data)
}
fetch("https://swiggy.com/todos/1",options).then(response => response.json());
