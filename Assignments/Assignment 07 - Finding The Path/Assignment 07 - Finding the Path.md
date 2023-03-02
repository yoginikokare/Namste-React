Notes:
Rules to use useState hooks:

1. Never create useState hook inside if-else statment - bcz how react get to know whether thr is state variable or not. react works on concrete things u should exactly know what u r doing in component. this is not optimize way
2. Never create useState inside for loop - it will create multiple useState
3. Never create UseState outside of functional component - bcz its works only inside functional component and it is unused

4. Never create functonal comp inside another component - bcz every time when comp re-render then every time comp wriiten inside another comp gets created which is not necessary.
u can do composition (nexting comp -calling comp inside another)
  ex:
  const AppLayout = () => {
    //never do below comp creation always create outside
    const Header = () => {
    }
    return (
    <>
      <Header />
      <Body />
      <Footer />
    </>)
  }

Routing:
react-router-dom - developed by remix developer."react-router-dom" its a routing lib which help us to perform routing in our app

import{CreateBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = CreateBrowserRouter([
  {
    path: "/", //path to load in url
    element: <AppLayout/> //on certian path whaterver want to load give it to element
    errorElement: <Error/> //whatever you want load in case thr is error give it to errorElement
    children:[
      {
        path: "/about",
        element: <About/> 
      },
      {
        path: "/contact",
        element: <Contact/> 
      } 
    ]
  },
]);

    <React.Fragment>
      <Header />
      {/* Commented static body page and to load comp according to 
         route use route-outlet. this the place where we show outlet/}
      {/* <Body /> */}
      {/* this outlet will filled by child configuration */}
      <Outlet/>
      <Footer />
    </React.Fragment>

//pass routing data to ur applicatin
root.render(<RouterProvider router={appRouter}/>);

CreateBrowserRouter - is a component help us to create routing configration
RouterProvider - is a component used to provide crated routes to your root of app so your app so root.render() data according to your routes

Outlet - it is like a placeholder or container where your child comp gets load according to route changes without refreshing the page. content in the outlet should change according to child route config. all children go inside outlet. it is react comp at the EOD
 
Link - It is a component and it keeps track of all the links and behind the scene it uses anchor tag so in dom we see <a> tag.
<a href="/about"> about </a>on click of about it reloads your app which not create spa env so react give access to Link comp

create children of your route using children array
 
errorElement: this handled any wildcard match. it handle any random url it will take care of it and go to our error page

Error Handling in routing: How to read error in react?
react-router-dom lib - does not let u throw thorow any error in browser console. 
ex. if you type "/xyz" path which does not exist in path insted of throwing error in console, it shows default error page and shows 404 not found on that page

custom error page:
it catches all the routing errrors and gives a nice informaton about error and to show this info to user it gives us access to hook which is useRouteError.
useRouteError hook: This hook catches all the routing error and gives information about what type of error we have like 404- page not found.

      import {useRouteError} from 'react-router-dom';
      //error component
      const error = () => {
        const {status, statusText} = useRouteError();
        return (<h4>{status} - {statusText} </h4>)
      }


dynamic routing:
when we click on individual restaurant then urlchanges dynamically(restaurants ---> /restaurant/123) and load restaurant menu. this type routing is called dynamic routing

dynmic segment: If a path segment starts with : then it becomes a "dynamic segment". path="/teams/:teamId"
optional segment: You can make a route segment optional by adding a ? to the end of the segment.        path="/:lang?/categories".

what is useParms: it is hook used to read the dynamic url params. whatever we put in routes will come as param in useparms.
ex. {path:'/retaurent/:resId'} 
    console.log(useParms())  // { resId: 12343 }

Nested Routes:
U cannot create child path using '/' under parent routes.
all child path sould be relative path to its parent.
if u do `profile/` then error will be  thrown in console`Error: Absolute route path "/profile" nested under path "/about" is not valid.`
      {
        path: '/about',
        element: <About/>,
        children: [
          {
            path: 'profile',  //this relative path is valid
            element: <Profile/>
          }
        ]
      },

Assignments:
1. What are various ways to add images into our App? Explain with code examples.
   1. use link- store image in awsstorage or cloudanary storage server nd use CDN link
   <img src="http://">
   2. create asset folder and import 
    import reactLogo from "../../assets/images/reactLogo.png";
    <img src={reactLogo} alt="react logo" />
  
2.  What would happen if we do console.log(useState())?
    it return array of 2 elememnt [undefined, f()] where first item is the state variable name and second is functon used to update the value of state variable. here undefined bcz thr is no initial value set for var

3. How will useEffect behave if we don't add a dependency array?
  useEffect: it a just normal js function and we call it by passing another callback function into it and dependency array. this hook gets called after render of comp and we use it to make api call or to do task which want to do after render like settimeout..syntax- useEffect(()=>{});
  it calls in 3 ways:
  1. useEffect(()=>{}) - when no dependency array, useEffect will called after every render

  2. useEffect(()=>{}, []) - when empty dependency array, it called only once after initialization of component i.e initial render

  3. useEffect(()=>{}, [searchText]) - when dependency array with state variable, useEffect will called every after initial rendering of component and state variable define in dependency array changes


4. what is SPA? loads application content dynamically without refreshing entire page 
  older application reload or refresh entire page when we reuest them ex. we go from home to /about page it reload ur whole application it makes network call for every requested page and fetch page data. with spa it does not happened. it does not reload your application every time. it does not make network call when we are changing pages.in spa we load only single document(index.html) and updates only body content using js code i.e dynamiclly without refreshing the entire page.

5. what is the difference between Client Side Routing and Server Side Routing?
  In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

  In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.

read below what akshay told in lecture

what is server side routing?
it is way where all out pages comes from server. suppose changing route, going from home to about page then about then about.html page will come from server it means when we click on about page then route will become  "localhost:8080//about.html" in url ans we do network call and load html,css,js everything from server and loads the page

what is client side routing? we dont to load pages from server
in client side routing all our component data (html,css,js) present already in code. we not make newwork call to fetch that data. its already present inside code we just load component based on route changes

React Router enables "client side routing".
In traditional websites, the browser requests a document from a web server, downloads and execute CSS,JS and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
Benifits:
1. enables faster and dynamic user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JS for the next page.
Client side routing is enabled by creating a Router and linking/submitting to pages with Link and <Form>:


