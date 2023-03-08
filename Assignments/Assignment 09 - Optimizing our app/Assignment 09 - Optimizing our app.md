## Class Notes: 

`Custom hooks: why? How? When?`

`Why?` Like why we create fun in js - to write small logic and wrap up inside fun which we can reuse it later so hooks are also js function and purpose of creating hooks is same

The main reason for which you should be using Custom hooks is to maintain the concept of DRY(Don’t Repeat Yourself) in your React apps. For example, suppose you have some logic that makes use of some built-in hooks and you need to use the logic in multiple functional components. So, there are two ways left for you — 1) write the same logic in each and every component (which violates the concept of DRY) and 2) create a separate function that wraps the logic inside it and then call it from those components. The second option is undoubtedly a better choice as you have to write the logic only once.
benifits:
    Reusability- hooks are reusable 
    Readability - easy to read
    Maintainable - easy to test
    Modularity - modularity means we have broken down our code into small pieces (i.e separation of concern)

`When?` So whenever u feel that you have common logic which needed to use in multiple fun component then just create seperate custom hooks and call it from that component 

`Utils folder` - we could  write reusable function in this..this make our code testable 

`How? Create Custom hooks:`
RestaurantMenu component is doing 2 things : fetching data & Displaying Data 
to do one job So what logic we can extract from this component which get reused in other component also. Here fetching data is the common task

Whenever create customhook - creare new file - create hook with ` use` keyword before hook name
Inside custom hook we can write  => state & useEffect and async API call code

Create useReasturant hook - fetch the data for use and send us

Why we dont create function component or normal function instead of hooks?
Fun compo- FC always return some jsx. it does not return any value.
Normal Function- state var does not work with normal function
But hooks - return some value and work with state variables. 
so whenever your component does need to know about how u r finding data or doing some actions. if its care about only final output then create hook in such cases.


### Lazy Loading:

what is main core job of bundler -> bundle your multiple file code into one single file
how many js file created by bundler without lazy load -> only 1 js file `index.js` file
index.js -> hold all component, hooks etc js code

Why Lazy Loading?
suppose in large scale app there are 100's of component and your bundler take all that code and bundle it into one single index.js file then what will happend ? it will increase file size and your app load slow and app will not performant. so create one index.js file is not good idea

solution : is to break down your bundle into small chunks
all are same concept just name is diff
//Do Chunking
//Lazy Loading
//On demand loading
//dynamic bundling
//dynamic import


Is bundling good or bad? Good. But you cannot bundle everything into only one. so when u think ur app size is huge then do chunking based on ur use cases.

What happend when u do lazy load of component or you do on demand loading?
it happens in routing. When you load component data (ex. Instamart component) using lazy 
```const About = React.lazy(() => import('./Instamart'));
```
so when u do inital app load, the index.js does not contain Instamart comp code. It contain only home comp code. when we do click on Instamart then one more file (instamart.js) gets loaded into network tab which contain all Instamart comp code.

#### Suspens Component: 

When you are loading components on demand I.e When you do lazy load for component then that time it's bundle js file take some time to load but meanwhile react tries to load component which code is not even thr so in that case react tries to suspend component loading ad throws routing error.
To handle this case we use suspense component. we load component by wrapping into <suspense ></suspense >
So here react will get to know that this component will be lazy loaded and it will wait to load until component gets loaded. so till the time component gets loaded if we want to show something like loader or shimmer to user then display it using fallback : display stuff( any jsx ) until component will available 
```
element: (<suspense fallback={</shimmer>}>
   <instamart />
</suspense >)

OR 

(<suspense fallback={<h1>.....loading<h1>}>
   <about />
</suspense >)
```

Never ever dynamically load component inside another component. Not load using lazy load bcz this will lazy load after every render.. 
Do lazy loading on top of component whr u do import for other dependencies.


## Assignment:

### 1. When and why do we need lazy()?
React.lazy is used to dynamically import a component when it is first rendered, instead of importing at the beginning when the file loads. This is called Code Splitting/ On-demading loading.

In our example : In App.js, Instamart component and about component are lazy loaded, which means only when the user clicks on the navigation button, those components are imported and rendered. This improves the performance of the application. So, lazy is used when that component might not be used by all users, instead of loaded in the beginning, only when the user really needs it, its loaded.


### 2. What is suspense?

  Suspense component allows us to show some fallback content (such as a loading indicator/ Shimmer component) while we’re waiting for the lazy component to load. It is similar to `catch` block. If a component suspends, the closest `Suspense` component above the suspending component `catches` it

```javascript
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./About'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
```

The `fallback` prop accepts any `React elements` that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap `multiple lazy components` with a `single` Suspense component.


### 3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

  This error is thrown as Exception by React when the promise to dynamically import the lazy component is not yet resolved and react expect componentto load in the meantime. If only the dynamic import is done and there is no `<Suspense />` component then this error is shown. React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing the shimmer (loading indicator) is not desirable in some situations, then `startTransistion` API can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the Suspense component or its props from your code.

  
### 4. When do we and why do we need suspense?

Suspense are useful when the components are `waiting` (React.lazy components are getting dynamically loaded) before rendering. Today, React Suspense only supports one use case which is loading components dynamically with React lazy(). In the future, it will support other use cases like data fetching. 


### 5. Advantages and disadvantages of using this code splitting pattern?

| Advantages  | Disadvantages |
| :---------- | :----------   |
| Reduces the page load time by bundling the large code into smaller bundles and laoding dynamically only when the component is loaded | Though the initial page load time is reduced, this increases the load time of each component thats loaded dynamically |
| Only the components that the user needs are loaded initially | There will be many http requests as the components are loaded dynamically |
| Cna imporve the user experience while loaded by showing suspense fallback/ loading dicator | But, this suspense boundary needs a new chunk of code to be written for showing the shimmer component | 






