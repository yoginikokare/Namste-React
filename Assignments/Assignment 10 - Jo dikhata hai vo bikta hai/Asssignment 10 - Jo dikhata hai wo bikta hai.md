1. why we should use css frameworks/libabry for our app? what is in framework which we cant do normally? what is good way to style your component?
   pros of using library:
   1. first thing is it optimizes ur css
   2. it saves us lot of time. faster developmemt
   3. it is a fatser way of writing css
   4. It take care of responsiveness
   5. reusability
   6. It provides Consistance UI - As a front end developer i should focus on logical things more instead of customizing thing like how the button should look like etc. writing css for such small thing is pain itself. so in that case these libraries help us
   7. It gives us automatic themeing ex. all buttons look similar in whole app
   8. It has lot of prebuild component. ex. calender, model

cons:
    1. it makes bundle size heavy
    2. we loose lot of control on how UI look like. lib forces you to dislay calnder in style which they offers to us. persnal customization becomes hard we need to write lot of css to override lib css styling

3. which lib is best for development?
   none of them best or worst. all lib are same. its upto you want you want to use based on your app

4. list of css framework/libraries
   1. Tailwind css
   2. Material UI
   3. Bootstrap
   4. Base UI
   5. Ant UI

5. CSS can be added to HTML documents in 3 ways:
   Inline - by using the style attribute inside HTML elements
   Internal - by using a <style> element in the <head> section
   External - by using a <link>, @import css3 feature

6. what are ways to put css in your app? ways to style your component? explore all the ways of writing css?
   1. basic native css file - time consuming way to write css
   2. using sass or scss
   3. Inline css - ex. style={{color: red, height: '30px'}} OR style={styleObj} fatser way but not good way to write css bcz its difficult to maintain and cant reuse it.always try to avoid it
   4. Component libraries - like bootstrap, material ui, styled compnent, Base UI, tailwind css framework. it has lot of prebuild component which are already styled. its a faster way to style component.

7. what is styled component lib
   like we write html into js file, we also able to write css into js file and this lib used for that

8. what is tailwind css framework?
   -when u start using tailwind css it override everything. your default basic css for h1, h2, h3 all are override and comes in same size.
   -every style u apply will become a new className
   -Only the classes which you use shipped to the production build not whole lib.
   -benifits - 1. we can write inline css on the go means in same html file 2. reusability 3. less bundle size 4. flexibal UI- means its very much customizable
   cons: too much inline css

9. How do we configure tailwind?

    1.  use CDN link - add script of link
        <script src="https://cdn.tailwindcss.com"></script>
    2.  using npm
    -npm install tailwindcss postcss
    -npx tailwindcss init - it initlialize tailwing in our project and create tailwind.config.js file in projet
    -Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
    {
    "plugins": {
    "tailwindcss": {}
    }
    }

    - add tailwind into index.css file
      @talewind used to indicate that our poject using tailwind so whenever bundler parses css file it came to that he has convert tailwind classes to normal css. its like importing tailwind classes into our css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

10.  in tailwind.config.js file what does all key means
    contnet: name of the which will be using talwind classes
    theme: here you define your project default color, font-size, font-family
    /** @type {import('tailwindcss').Config} \*/
    module.exports = {
    content: ["./src/**/\*.{html,js,ts,jsx,tsx}"],
    theme: {
    fontFamily: {
    sans: ['Graphik', 'sans-serif']
    },
    extend: {
    borderRadius: {
    '4xl': '2rem',
    }
    },
    },
    plugins: [],
    }

11.  what is postcss
    it is tool used to transform your talwind css to normal css as browser does not understand tailwind classes
12.  why do we have .postcssrc file?
    we use to tell our bundler(parcel) that we will be using tailwind css so while bundling or buildng your app for development or production compile this tailwind css to normal css.
