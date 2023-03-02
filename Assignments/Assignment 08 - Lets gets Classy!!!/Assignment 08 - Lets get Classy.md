Class Notes:

Class Based Component:
Class based component are normal javascript classes which has return method which return some jsx EOD.
Important : render () -> without this we can't create class based component

React started with components with class-based components and there was no functional components. Functional components became popular after the introduction of Hooks.

    -less maintainable
    -little confusing
    -more code
    -difficult for new developer to understand


How to tell React it's a class based component and not a normal class?
by extending superpowers of React.Component
class ProfileClass extends React.Component {
    render() {}
}

//create ProfileClass.js file

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <h1> Profile Class Component </h1>
            <h2> {this.props.name}</h2>
        </div>
    }
}
export default Profile;

extends keyword : use to inherit properties of React.Component class

pass props to react class component:
<ProfileClass name={"AkshayClass"} xyz={"xyz"}>
react collect all this declared props and attches to the this(refer to the class obj) of class (Profile class)
in constructor recievs passed in props and use it {this.props.name}
constructor(props) 
{
    super(props);
    console.log(this.props.name)
}

in fc, {props.name}

constructor: are used to intialize class instance

How to create state ?
in fc, useState() hook to create a state
In CC, created inside constructor method of class
   constructor() {
    super(props);
    this.state = {count:0,count2:0}
   }

How to use state ? in FC, {stateName} IN cc, {this.state.stateName}

How to create multiple states ?  
    in FC, const [state1, setState1] = usestate(0); const [state2, setState2] = useState(0)
    in CC, this.state = { state1 : 0, state2 : 0 }

How to set state or mutate state?
    we do not mutate or modify state variable directly.
    In FC, setState1(1); setState2(8);
    In CC, we use setState() method of class and pass modified object
    this.setState({state1: newValue,state2: newValue})

life cycle methods of class based component
    constructore()get called then render() method then componentDidMount()

what is the best place make an API call?
    in FC - useEffect() hook used to make API call
    in CC - componentDidMount() method. It gets called after component render

how component lifecycle gets executed in 
1. parent->child 

    parent-->child (parent contain 1 child)
    parent constructor -> parent render -> child constrcutor -> child render -> child componentDidMount -> parent componentDidMount

2. parent -> child1, child2 (parent contain 2 child)
    -> parent constructor 
    -> parent render 
        -> child1 constructor 
        -> child1 render 
        -> child2 constructor 
        -> child2 render 
        -> DOM UPDATED for children  //core html gets loaded into browser
        -> child1 componentDidMount 
        -> child2 componentDidMount 
    -> parent ComponentDidMount

- lifecycle phases

    when react is rendering, render happens in 2 phases render and commit phase.
    render phase - in this phase constructor and render() method get called
    commit phase - in this phase react actully modifies i.e update ur dom and then componentDidmount gets called that means it gets called after initial render has finish i.e after ur componnet loaded on the browser
    componentWillount- this method called only once after initial render
    componentDidUpdate - this method gets called after every subsequent re-render i.eafter every update. it will not get called after initial render.
    ComponnetWillUnmount - this gets called when u left the page or remove component

add here lifecycle image

In modern react (above 16.4) we dont need to remember life cycle method...they remove the life cycle method. To render component they come up with special hook which is useEffect which handle all this rendering stuff

3. Parent -> child (with child contain api call)
    Parent controller
    Parent render
        Child controller
        Child render
    Dom gets updated
        Child componentDidMount
        Child componentDidMount - API called
    Parent componentDidMount finishes as no async operation
        Child componentDidMount - state updated
        Child re-render
        Child componentDidUpdate
        child componentwillUnmount
    parent componentWillUnmount

1. Render phase
    Parent controller
    Parent render
    Child controller
    Child render

2. Commit phase
- Actually start updating Dom into browser that means start putting actual data into dom like image,name
- Child componentDidMount: it gets called after rendering of dom into browser
    child api call make and rtuns promise as its sync operation it will take time to resolv promise

- Parent componentDidMount get called and finish execution as its does not contain api call

- Child componentDidMount 
   - api call fullfill promise and return data
   - data assign to state varbale. once state var changes it trigger update 
   - re-render child component. render() get called
   - dom gets updated with new values and display into browser
   - child componentDidUpdate() method gets called

- Unmounting:
   In CC, ComponnetWillUnmount - this gets called when u left the page or remove component
   In FC, useEffect callback fun returns a fun which get called when unmounting starts

What cleanup should I do while unmounting
- clear setTimeout, setinterval 
- as We work on single page app and we just interchange component inside that page based on routing 
- but thr are cons of single page app it will not clear setinteval, setTimeout declared in component when u left that component..it still called in background bcz ract not reloading the page it just interchanging the components which make lot of performance loss
     
How to re-render in class based component only when dependent state variable changes
    componentDidUpdate(prevProps, prevState) {
        If (this.state.count !== prevState.count) {/// To Do task}
    }

What you do to perform separate operation based on state var changes
    In FC, we write seperate useEffect for each one state var
    In CC, we write seperate if condition for each one 
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count1 !== prevState.count1) {/// To Do task}
        if (this.state.count2 !== prevState.count2) {/// To Do task}
    }
 
Assignments:

1. How do you create Nested Routes react-router-dom cofiguration?
2. Read abt createHashRouter, createMemoryRouter from React Router docs.?
3. What is the order of life cycle method calls in Class Based Components?

Class based components are executed in two phases : Render phase & commit phase.

Render phase is pure and no side effects. It may be paused, restarted or aborted by React (when child component is created for eg). The constructor(), render() happens in this phase.

Commit Phase: 
 - In this phase react actually start updating Dom into browser that means start putting actual data into dom like image,name and
 - then componentDidMount, CmponentDidUpdate and componentWillUnmount get called in folloing order when an instance of a component is being created and inserted into the DOM:

 execution happens in 3 step:

Mounting :

1. constructor - constructor gets called very first and it Initialize local state by assigning an object to this.state.Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

2. render() - this method gets called after constructor

3. componentDidMount() - componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). You may call setState() immediately in componentDidMount() so that it triggers re-render before the browser updates the screen.

Updating : trigger state variable gets changed 
render() method called - it re-render component
4. componentDidUpdate() - componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

Unmounting : trigger before user left page
5. componentWillUnmount() -componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().


4. Why do we use componentDidMount?
If you need to load data from a remote endpoint, this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen.

5. Why do we use componentWillUnmount? Show with example
componentWillUnmount is used to cleanup any function/subscriptions that will be running even after the component is unmounted that is when user left the page

For example, in Repo class, during componentDidMount() a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realise and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.

6. what is inheritance in js?
    -  inhertance means inherating properties and methods from parent class or base class.
    - "extends" keyword used to inherit all methods from parent class.
    - The super() method refers to the parent class. By calling the super() method in the  constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
   - Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
   <script>
        class Car {
            constructor(brand) {
                this.carname = brand;
            }
            present() {
                return 'I have a ' + this.carname;
            }
        }

        class Model extends Car {
            constructor(brand, mod) {
                super(brand);
                this.model = mod;
            }
            show() {
                return this.present() + ', it is a ' + this.model;
            }
        }

        let myCar = new Model("Ford", "Mustang");
        document.getElementById("demo").innerHTML = myCar.show();
        //output: I have a Ford, it is a Mustang
    </script>

7. (Research) Why do we use super(props) in constructor of class base component?
    - super() method used to call the constructor of the parent class.
    - super(props) used When you want to access this.props in constructor.
    here super(props) calls constructor of parent class i.e React.Component which accept (props) as parameter and assign props to "this". once we called super(prop), will get access to "this.props" inside constructor of the child compoenent i.e profile component.
    if we dont define super(props) inside child constructor and try to access this.props inside child constructor then error gets thrown "Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor". without super() u will not able to access "this" inside child constructor.

     - Note that passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.

    please Read More: https://www.geeksforgeeks.org/what-is-the-use-of-superprops/

    class Profile extends React.Component {
        constructor(props) {
            super(props) //get access to "this.props" of parent comp
            super()  //get Only access to "this" of parent not "this.props"
            this.state = {}   //if not super() called then error will thrown
        }
        render() {
            return (
            <div>
                <h1> Profile Class Component </h1>
                <h2> {this.props.name}</h2> 
            </div>)
        }
    }

8. What's the difference between "super()" and "super(props)" ? 
    - super(props) used When you want to access this.props in constructor.
        class MyComponent extends React.Component {    
            constructor(props) {
                super(props) 

                console.log(this.props)
                // -> { icon: 'home', … }
            }
        }

    - Not passing - get Only access to "this" of parent not "this.props" inside constructor.
      but it has no effect on uses of this.props outside constructor.
     
        class MyComponent extends React.Component {    
            constructor(props) {
                    super()  //Not passing props

                    console.log(this.props)
                    // -> undefined

                    // Props parameter is still available
                    console.log(props)
                    // -> { icon: 'home', … }
            }

            render() {
                // No difference outside constructor
                console.log(this.props)
                // -> { icon: 'home', … }
            }
    }

9. (Research) Why can't we have the callback function of useEffect async?
we cannot make callback function async bcz async function always return promise and here useEffect expect its callback to retuen either nothing or cleanup function(fn which get called when component is unmounted i.e get destroyed).
if u make it async then it throws warning so Solution to use async await in useEffect is to create another async function and call it right after its declared inside callback 

    useEffect(() => {
        const fetchData = async () => {
            const products = await fetch(`${API_URL}/products.json`);
            setProducts(products);
        });

        fetchData();
    }, []);

10. Play with the console logs to find out the correct order of their execution.

   Component Hierarchy

    About 
    - Profile (API call)
    - Blog 
        - Repo (API call)
    ------------------------------------
    About - Constructor
    About - render()
        profile - Constructor
        profile - render()
        Blog - Constructor
        Blog - render()
            Repo - Constructor
            Repo - render()
        profile - componentDidMount
        profile - componentDidMount - API called
            Repo - componentDidMount
            Repo - componentDidMount - API called
            Repo - componentDidMount- State Updated
            Repo - render()
            Repo - componentDidUpdate
        profile - componentDidMount - state updated
        profile - render()
        profile - componentDidUpdate
    About - componentWillUnmount
        profile - componentWillUnmount
        Blog - componentWillUnmount
            Repo - componentWillUnmount
    

