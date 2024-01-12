what is babel? why we need it?
babel is just a js library you can consider as black box which take code and gives you another code. 
babel is javascript compiler which read your code line by line and coverts into a code which browser understand
it translate your modern js code(ES6) code into a code which is compatible with older version of browser. 
we need babel beacuse some older version of browser does not support new fatures like new operater (??), new syntax(map function), new variable type (let, const) due to that our application breaks on older browser
JSX internally uses babel to convert jsx element to react element

What is tree shaking
tree shaking means Removing unwanted code
In production builds, Parcel find out the imported and exported functions, constant from each module or from external libraries, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".
ex. if our app using external lib which have 10 helper fun but we are using only 2 then parcel only keep those function in build and ignore all unwanted function

why we need key in react ? reconcilation
react keeps track of key by using keys. it uniqly indetify element

suppose I have ul like this and have added one more li on the top then react does not get easily get to know that which li is gets added and which place. it has to put lot many efforts and it will re-rendered whole dom so it will affect on app performance but if we add unique key to each li then react will easiliy identify newly added li with minimal efforts and only inject that liin dom instaed of rendering whole dom
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li key="third">third</li>
  <li>first</li>
  <li>second</li>
</ul>


what is JSX? why we need it? how its executed?
JSX is HTML like syntax which look like html but its not HTML....dont call its as html inside javascript. 
it is syntax extention to javascript.
we need it => for better readibility, less coding line, developer friendly
bcz suppose we have big html structure or template and by using react.createElemnt writing whole html template is big complex, messy and and less readiable due to that fb developer introduces jsx

how: JSX => React.creatElement ===> object ===> HTML(Dom)
Babel convert your jsx code to react.createelemnt and then react elemet gives us a object which itself then converted to html tag and render on to dom

reactDom() root.render() method render react element object as html into dom

diff between html and jsx -

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For example, class becomes "className" in JSX, and tabindex becomes "tabIndex".
in js file html element included between string "".
const heading = <h1 className="header"> Header </h1>;   //JSX elememt
const heading = "<h1 class="header">Header</h1>"  //html element

Superpowers of JSX
1.Embedding Expressions in JSX - const element = <h1>Hello, {name}</h1>;
2.Prevents xxs scripting Attacks - cross site scripting attacks
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent cross scripting attacks.
3.You can also use the self-closing form of the tag if there are no children.
<div className="sidebar"  />
4.Attributes in JSX : We can pass all the html attributes inside jsx tag (attributes must be CamelCased). Even, custom attributes can be created, but it must not use CamelCase.
5.Props in JSX : The values of each attribute can be passed as properties (props) to a react element. This is my favourite superpower of jsx, since it can handle dynamic data to create react elements.

Role of type attribute in script tag? What options can I use there?
A: The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

type attribute can be of the following types:
text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
Syntax <script type="text/javascript"></script>
text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.


{titleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX.
{TitleComponent}: renders a react element.
{<TitleComponent/>}: renders a react function component.
{<TitleComponent><TitleComponent/>}: it's a function components and inside we can have another componets. 
Example
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>

Notes:
React.creatElement ===> object ===> HTML(Dom)
React.creatElemt gives us a object which itself then converted to html tag and render on to dom
abstract syntax tree -js engine class

components:
function component: its just normal javascript function which return some piece of jsx or react element
its a new way of writng code
functional component name start with caital letter. its recommeded way to write component

class based component: its old way of writing code

component compositions: 
using or calling or passing component into another component called component composition or composing component. its like nested component.


Component composition is a powerful pattern to make your components more reusable.

If you are already familiar with React, you're probably already using it (maybe without knowing its name).

This article will explain what component composition means and how to use it. After that, we'll see how we can use component composition to improve performance and avoid prop drilling.

What is component composition in React?
In React, we can make components more generic by accepting props, which are to React components what parameters are to functions.

Component composition is the name for passing components as props to other components, thus creating new components with other components.

const Button = ({ onClick, children }) => (
 <button onClick={onClick}>{children}</button>
);

const App = () => {
  const onClick = () => alert('Hey 👋');

  return (
    <Button onClick={onClick}>Click me!</Button>
  );
};
children is nothing more than a prop to the Button component.

Instead of passing down a string to Button, we may want to add an icon to the text as well:

const App = () => {
  const onClick = () => alert('Hey 👋');

  return (
    <Button onClick={onClick}>
      <img src="/logos/logo.svg" />
      Click me!
    </Button>
  );
};
But we're not limited to the children prop. We can create more specific props that can accept components as well:

const Button = ({ onClick, icon, children }) => (
 <button onClick={onClick}>{icon}{children}</button>
);

const App = () => {
  const onClick = () => alert('Hey 👋');

  return (
    <Button
      onClick={onClick}
      icon={<img src="/logos/logo.svg" />}
    >
      Click me!
    </Button>
  );
};
And that is the essence of component composition: a simple yet incredibly powerful pattern that makes React components highly reusable.

When working on React projects, you'll continuously find yourself refactoring components to be more generic through component composition so that you can use them in multiple places.

How can composition help prop drilling?
Prop drilling means passing props through multiple layers of components.(nested component)
Here's an example where we are passing userName through multiple layers:
const App = () => {
  const userName = 'Joe';

  return (
    <WelcomePage userName={userName} />
  );
}

const WelcomePage = ({ userName }) => {
  return (
    <>
      <WelcomeMessage userName={userName} />
      {/** Some other welcome page code */}
    </>
  );
}

const WelcomeMessage = ({ userName }) => {
  return (
    <h1>Hey, {userName}!</h1>
  );
}
