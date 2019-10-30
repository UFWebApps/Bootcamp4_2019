### Bootcamp 4 - Introduction to Front-end Development with React

In this assignment, we will continue to build upon our directory application by creating a front-end interface with React.js to display listings, as well as the ability to add new listings and delete old ones. 

This readme file contains a very detailed overview of the technologies and concepts we will be using for this project. I highly suggest reading through it throughly and as you start working on the project visiting many of the linked items to understand the concepts and technologies in more depth.

### FRONT-END DEVELOPMENT
Front-end web development revolves around anything you create that the users of that specific app sees. To put it plainly, it is everything to do with the User Interface (UI) of the app.

When developing the UI of your web application you will be using three major languages:
- [**HTML**](https://www.w3schools.com/html/) (HyperText Markup Language) is a [**markup language**](https://en.wikipedia.org/wiki/Markup_language) most commonly used to create web pages. HTML is used to build the structure of your web page.
- [**CSS**](https://www.w3schools.com/css/default.asp) (Cascading Style Sheets) is used to describe the presentation of our HTML pages. It is a styling markup language is used to format the appearance of different structural elements. 
- [**JavaScript:**](https://www.w3schools.com/js/default.asp) A programming language is used to describe the functionality and handle all the dynamic elements on the web page. 
- [**JSX**](https://reactjs.org/docs/introducing-jsx.html) - JSX is a syntax extension to JavaScript used by React. JSX mixes HTML and JavaScript. It is similar to a template language, but it has full power of JavaScript.

If you aren't familiar with these technologies, please go through [this tutorial](http://learn.shayhowe.com) to learn the fundamentals of these two web technologies before continuing to the ***Bootstrap 4*** section. Keep in mind that this tutorial is very detailed and may take some time. Make sure to pay specific attention to:

-   The semantic nature of HTML
-   Layering CSS styles in a modular fashion using multiple classes
-   The box model
-   Positioning content with CSS

To get a basic introduction to JSX [**see the docs here**](https://reactjs.org/docs/introducing-jsx.html) and find a more in-depth tutorial on JSX [**here**](https://reactjs.org/docs/jsx-in-depth.html). In most cases, we will use JSX instead of Javascript to develop our application. 

### Bootstrap 4 - Styling Templates
While we could create our web application with just HTML, CSS, and Javascript, writing all of our styles from scratch would be tedious.

Say we have an application that will be used by desktop, tablet, and mobile users alike. Our CSS would have to be responsive, changing the layout of the page depending on the user's device. Luckily, we have [Bootstrap](http://getbootstrap.com/), a responsive HTML/CSS/JS framework made by Twitter, to style our web applications. Bootstrap provides a [grid system](https://getbootstrap.com/docs/4.3/layout/grid/) for easy layout and many components that will give the application a clean, modern, and consistent look.

Bootstrap's documentation is extensive, so don't worry about memorizing everything Bootstrap has to offer. If you understand the fundamentals of HTML and CSS, you should feel comfortable with the mechanics of the grid system and using classes to add styles to your HTML components. It'll be a better use of time to just refer back to the documentation whenever you need to add a new component to your webpage.

**Getting Started - Bootstrap 4**  https://getbootstrap.com/docs/4.3/getting-started/introduction/

**Resources**
- [Bootstrap Style Guide](https://drive.google.com/file/d/1fumbJT-ln-WzrSY_ZEtN44WhAw2asyXF/view) created for course
- Example Bootstrap Components and Layouts (https://getbootstrap.com/docs/4.3/examples/)
- [Components](https://getbootstrap.com/docs/4.3/components/) - Look in the sidebar for additional components - buttons, input groups, toasts, forms, etc
- [Feather](https://feathericons.com/) Open Source Icons

### Single-page Application
In this course and project we will be building, a single-page application. A single-page applictation is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded. Most modern web development relies on single-page applications. 

### Model-View-Controller (MVC) Architecture

A common design pattern used for developing user interfaces is the **model-view-controller** architecture. As the name suggests, in this architecture the application is broken up into three main components:

-   The **model** is where the application's main data objects are stored.
-   The **view** presents models to the user, and allows the user to interact with the models
-   The **controller** interfaces between the model and the view
    -   it updates models according to input provided by the user in the view
    -   it updates the view when a model changes

The MVC concept has many variations and often does not _exactly_ follow the pattern described above. You can take a look at [this page](https://developer.chrome.com/apps/app_frameworks) for more information, or simply go a Google search for MVC architecture.

### Component-Based Architecture (CBA)
[**Component-Based-Architecture**](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238) is a newer architecture design method creating the  user interface (UI) of web applications. The goals is to encapsulate individual pieces of a larger UI (aka components) into self-sustaining, independent micro-systems. This architecture was created and popularized by Facebook developers as a means of maximize the functionality and performance of their newsfeed.

You can think of a component as a small feature that makes up a piece of the user interface (e.g., buttons, newsfeeds, blogs, comments). Each of these components exist within the same space, yet interact independently from one another. Components have their own structure, their own methods and their own APIs. Components are also reusable and can be “pasted” into interfaces at will. The independent nature of components allows for developers to create a UI with many different moving parts.


Facebook developers based component based architecture off of the concept of [**AJAX**](https://www.w3schools.com/xml/ajax_intro.asp) request, in which call to the server are made directly from the client-side, allowing for the [**DOM**](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (Document Object Model) to be dynamically uploaded without the need to refersh the page.  Components each have their own interfaces that can make calls to the server and update their interfaces. Because components are independent, one component can refresh without affecting other components or the UI as a whole. Additional resources: [**Good DOM Explanation with pictures**](https://css-tricks.com/dom/) and [**DOM as defined by W3C**](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html).

React.js, specifically, handles components in an extremely performance focused way. React.js uses something called a [**virtual DOM**](https://programmingwithmosh.com/react/react-virtual-dom-explained/) which uses a “diffing” algorithm to detect changes to a component and only render those changes, as opposed to re-rendering the entire component.

*Differnce Between MVC and CBA*
CBA also requires that all methods and APIs pertaining to a single component exist within that component’s structure, a JavaScript class. 

MVC splits responsibilities of an application horizontally, e.g., separates structure, helper methods, and routing into different levels of the application. This results in a multi layered horizontal architecture. On the other hand, CBA splits them vertically, e.g., components contain all of design, logic, and helper methods within the within a single class and the same level of the architecture (generally the view).  This means that developers don’t have to spend much time trying to find which functions pertain to which parts of an application’s UI.

The purpose of MVC is ensure that each level of an application has it’s own separate responsibility, while the purpose of CBA is the encapsulate all of those responsibilities within one space.

*Beware of Issues with CBA*
One of CBA’s most glaring issues is a propensity towards over-engineering. While CBA encourages reusability and single-responsibility, it can often lead to bloated and polluted views. When using many components, there is the possibility that readability might actually become degraded.

 In the case of React.js, the library was created with the intention of being used in applications wherever needed. Essentially, you can “sprinkle” React components across several different parts of your UI. However, many developers treat React.js as a framework and engineer every. single. aspect of their UI as a component. This is unnecessary and self-indulgent. CBA should only be use in specific instances and does not need to dictate the entire structure of your application.

Thus, only use React Components for implementing dynamic functionality when needed in your application.


### REACT

[**React**](https://reactjs.org/) is a JavaScript library for building user interfaces. Created by Facebook, Instagram, and the community. React is the V is View in the MVC architecture. React uses a compinent-based architecture to implemnt and manage the View of a web applciation. 

React makes it (relatively) easy to start building an application by extending HTML so that the markup can describe not only the static webpage but also dynamic behavior. 

Note: Outside of the pure React library itself, there are 3 distinct versions of React: React-devtools, ReactJS.Net, React Native. Other than React itself, React Native is pretty popular as well for creating Native mobile apps. However we will be using React.js.

React uses its own flavor og Javascript called JSX. JSX allows us to describe our User Interfaces (UIs) in a syntax very close to the HTML that we are used to. It is, however, optional. React can be used without JSX, as you can see on the right side. In fact, React just compiles the JSX you see on the left to the pure JavaScript you see on the right. Then it works with compiled JavaScript in the browser. 

[**React Components**](https://www.freecodecamp.org/news/how-to-write-your-first-react-js-component-d728d759cabc/)
Components are the basic building blocks of a React Application.As you think about the UI of your web application, identify aspects of your UI that are used several times (Button, Panel, Avatar), or are complex enough on its own (App, FeedStory, Comment). These are good candidates for reusable components you should develop.  

React components are small, reusable pieces of code that return a React element to be rendered to the page. A components can be broken down into distinct pieces of functionality and used within other components. Components can return other components, arrays, strings and numbers. 

 A React component can be one of two types: (1) a function component or (2) a class component. Sometimes you will hear different terms to describe these two types, like stateless and stateful. Function components are stateless and are often associated with the presentational concept. Class Components are stateful.

The simplest version of React component is a plain JavaScript function that returns a React element:
```Javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Function components take in props (i.e., data), and output to the DOM. It returns what looks like HTML, but is really a special JavaScript syntax called JSX.

Components can also be ES6 classes
```Javascript
class Hello extends React.Component {
    render() {
        return <h1> Hello, {this.props.name}</h1>;
      }
} 
ReactDOM.render(<Hello />, mountNode);


```
This code creates a simple Hello Component and renders a modified `<h1>` tag and the name of the person passed in from another component.

A class component is the predominant way to define a React component. It also acts like a function that receives props (i.e., data), but also considers a private internal state as input that controls the returned JSX. This private internal state is what gives React its reactive nature. When the state of a class component changes, React will re-render that component in the browser. Therefore, class components, take as input state and props, process them, and output to the DOM using the render() function. 

Note: Class components can only change their internal state, not their properties.

[**Anatomy of a React Componnent**](https://codeburst.io/react-state-vs-props-explained-51beebd73b21)

[React Components](https://reactjs.org/docs/react-component.html)  
Component names should also always start with a capital letter (`<Wrapper/> not <wrapper/>`). See [**documentation**](https://reactjs.org/docs/components-and-props.html#rendering-a-component) for more information on rendering components.

All react Components have the following featuress:
- *render()* - Mandatory
- *constructor()*
- *Import* 
- Usage *<component />* - Looks similar to an HTML Tag and is used by parent components to add the child component to your application
- *Export* - Makes the componenet accessible for us in other parts of the application

Components classes
```Javascript
import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: ''
    };
  }

  nameUpdate(value) {
       this.setState({
          nameText: value
    })
  }

  render() {

      return <h1> Hello, {this.props.nameText}</h1>;
  }
}
export default Hello;
```
This simple Hello Component takes in a value and when the nameUpdate function is called, it triggers a change state, and stores the name passed to it

*Component Communication* -State vs Props

In a React component, props carry data around your application. Props are variables passed to it by its parent component. State on the other hand are also variables, but directly initialized and managed by the component. The state can be initalized by props.

The State and Props objects have one important difference. Inside a class component, the State object can be changed while the Props object represents fixed values.

For example, a parent component might include a child component by calling
```Javascript
<ChildComponent />
````
The parent can pass a prop by using this syntax:
```Javascript
<ChildComponent color=green/>
````
Inside the ChildComponent constructor we could access the prop:
```Javascript
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.color)
  }
}
````
and any other method in this class can reference the props using this.props.

Props can be used to set the internal state based on a prop value in the con
structor, like this:
````Javascript
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state.colorName = props.color
  }
}
````
Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state.

Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.

Most of your components will just display some kind of information based on the props they received, and stay stateless.

### Getting Started with React
React certainly has a learning curve, and you should take some time going through tutorials to understand the basics. Below is a list of concepts and resources that may be helpful.

[**React Vocabrulary**](https://reactjs.org/docs/glossary.html) - This is a must read as you are working though the assignment and tutorials.
[**Thinking in React**](https://reactjs.org/docs/thinking-in-react.html) - This gives you an overview and philosophy for developing in React.
[**React Developer Tools**](https://www.freecodecamp.org/news/how-to-see-your-react-state-props-in-the-browser-774098a50fcc/) Download the React Developer Tools Chrome Plug-in to help you debug your application or use the Chrome Developer Tools

**Tutorials**
*Getting Started: Creating a simple react app*
[**Baby Name Tutorial**](https://www.youtube.com/playlist?list=PLHrxuCR-0CcT7hgVVlh0lBWTqYkEEF55m) This is a 12 part video tutorial that walks through how to create a simple web applicaiton. It is very similar to the app that you will create in this assignment. *NOTE: I highly recommend working throuhg this tutorial and adapting it to complete this assighment.*
[**Create-react-app**](https://reactjs.org/docs/create-a-new-react-app.html) is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

**Other Tutorials**
-   *Tutorialspoint*: [ReactJS Tutorial](https://www.tutorialspoint.com/reactjs/index.htm)
-   *Code Academy*: [Learn ReactJS](https://www.codecademy.com/learn/react-101)
-   *Tutorial provided from the [*ReactJS website*](https://reactjs.org/tutorial/tutorial.htmll)
-   *Egghead_io* [videos on ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-react)


**React Concepts, you'll need for this bootcamp**
**Note:** You _do not_ need to go through all of these, just start to get familiar enough with React-specific concepts to complete this assignment, particularly the following:

*React Basics*
- ReactDOM - https://reactjs.org/docs/react-dom.html
*Note: ReactDOM uses camelCase property naming convention instead of HTML attribute names. For example, tabindex becomes tabIndex in JSX. The attribute class is also written as className since class is a reserved word in JavaScript.*
- DOM Elements - https://reactjs.org/docs/dom-elements.html
- React components -   [Components](https://reactjs.org/docs/react-component.html)  
*Note: Component names should also always start with a capital letter <Wrapper/>*
-- render() -
-- constructor()
-- Import & Usage <component /> // Looks similar to an HTML Tag
-- Export

*State & Pasing State*
-   Passing State - props
-- https://reactjs.org/docs/react-component.html#props 
-- https://reactjs.org/docs/render-props.html
-- https://reactjs.org/docs/components-and-props.html
-   refs - https://reactjs.org/docs/refs-and-the-dom.html
-- Forwarding Refs https://reactjs.org/docs/forwarding-refs.html
- this.state - https://reactjs.org/docs/react-component.html#state
--  this.setState
- .bind(this) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


*Processing an Array of objects*
- Filter -   [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- Map -   [Array.map](https://reactjs.org/docs/lists-and-keys.html) 

*Forms & Event Handling*
- Forms - https://reactjs.org/docs/forms.html
- Event Handling - https://reactjs.org/docs/handling-events.html
-- onClick
-- onChange 


### Assignment Overview
For this assignment you will be building upon our UF directory application by creating a front-end interface with React.js to display listings, search/filter, as well as the ability to add new listings and delete old ones. Note: We won't connect the front-end to the back-end in this assignment, we will leave that for Bootcamp #5.

#### In this GitHub Repository, you are given the following files
*When using the [create-react-app](https://github.com/facebook/create-react-app) read the readMe to get a starter application up and running, you can replace the src file in the starter application with the src file from the Bootcamp #4 assignment repo*
- *Data.js* - A list of buildings formatted to work with React and JSX to render the contents to the browser
- *index.css* - A starter CSS templage for you to use for this project
- *app.css* - An empty file that we aren't using for this project but do not delete it as it will affect the functioning of your program
- *index.js* - This file is used in creating the application file that you will be manipulating through the App.js file. This is where we have injected the data.js file and the building data that we pass around for the entire application.
- *App.js* - This is the main application we are developing. The majority of our development will be in this file.
    - It prints out the directory listings
    - It has a Textbox for searching/filtering the results
    - It has a display box for printing out more details about the selected building
    - It imports and uses several React Component files to implement this functionality

- React Component Files - *React use compoenents to organize and squirrel away functionality so that we can reuse it in multiple places. Ultimately, it allows our code to look cleaner and maximizes reusability for future developmen.*
    - *BuildingList.js* - This is a React Component that prints the building code and the name to the screen
    - *Search.js*  - This is a React Component that filters the contents of the list based on the user's input in the textbox
    - *ViewBuilding.js* - This is a React Component that allows us to view additional listing details for the current selected building             when a user clicks on a listing

#### Development Goals - To DO List:
In this assignment, we are only focused on creating your front-end user interface to filter and display listings, as well as add new listings or delete existing listings.

As you develop the solution to this assignment you will need to complete at least the following tasks.  

- App.js - Main Application
    - Create the filterUpdate() function - to set the state of filter
    - Create the selectUpdate() function - to set the state of selected building

- BuildingList.js: *In this file you will*
    - create a filter on the building list constant that allows you to filter on the name of the building 
    - display only the buldings the meet the filter criteria
    - Create an onClick listener action that will allow you to click on a building name and capture the ID

- Search.js: *In this file you will*
    - Capture the text that is typed into the textbox and store this value using the filterUpdate() function
    - use the onChange listener function
    - Note: You will need to understand how to use ref values from form inputs

- ViewBuilding.js:
    - Captured building ID to look-up the additional information for the building
    - Return additional details of the building to be rendered on the screen for the user

- Create two new components that allow you to add and remove elements from the list.
    - AddBuilding.js - Add a buliding to the listings
    - RemoveBuilding.js - remove a building from the listings

- index.css - Style the User Interface of this app using CSS and Bootstrap 4 to make this app look professional and user friendly, e.g., 
    - style the listings
    - add icons for search, add, and delete
    - search bar
    - buttons
    - card for viewing the selected listing (ViewBuilding.js)


### Setup
*Note: This is a big assignment, start early and work on getting simple things working first. **Remember the Baby Name App tutorial listed in the React section, provides a video tutorial walkthrough of many of the feaures you will be completing for this project.**

1. Install Bootstrap 4, [there are 3  ways](https://getbootstrap.com/docs/4.3/getting-started/download/):
   (1) npm install bootstrap (or yarn add bootstrap) - *Recommended*
   -   Install other dependencies - see console log messages during install
       -    `npm install bootstrap`
       -    `npm install jquery@1.9.1`
       -    `npm install typescript@*`
       -    `npm install popper.js@^1.14.7`
    
    (2) through CDN 
       -   simply add the link in head tag and script before closing body tag
       -   see notes about additional CDNs for jQuery and Popper.js before it.
    
    (3) download - ***great for project*** not recommended for Bootcamp #4 project

    [Bootstrap Style Guide](https://drive.google.com/file/d/1fumbJT-ln-WzrSY_ZEtN44WhAw2asyXF/view) created for course 
    *You will use this later in the project when you start to style your page* 

2. Install the [create-react-app](https://github.com/facebook/create-react-app#creating-an-app)
To help us get started quickly, we will be using the create-react-app, a template generator for creating React Applciations quickly without having to install a ton of external dependencies. 

Run the command in terminal to create a starter application my-app (note: you can change this to bootcamp4 if you like.)

`npx create-react-app my-app`

or

`yarn create react-app my-app`

or

`npm init react-app my-app`

3.  after it is installed, you should be able to cd into the project directory 

4. Inside the newly created project, you can run some built-in commands:

    `npm start` or `yarn start`

    Runs the app in development mode.

5. It should auto-open http://localhost:3000 in the browser after it starts up a server for you. If a browser doesn't open up, copy and paste this link into your web brower with a starter page.

6. After this you should open the folder and replace the src file wit the file for this Bootcamp #4 github repo. You should then be able to see a listing of the building codes and buildings, search/filter texbox and space to output details about your project.

7. Use the starter code (e.g, create-react-app with Bootcamp #4 code you created in steps 1-3) to create a front-end interface with React.js to display listings, as well as the ability to add new listings and delete old ones. 

**See Development Goals** above for specific implemenetation details for this project.

**Debugging Tips:** 

(1) Use console.log statements in your render functions to print to the browser console to debug your program and to ensure you are passing the data around that you expected. This will help tremendously when you have errors that you can't figure out. 

(2) Use [**React Developer Tools**](https://www.freecodecamp.org/news/how-to-see-your-react-state-props-in-the-browser-774098a50fcc/) - Download the React Developer Tools Chrome Plug-in, it is specifically designed to help you debug React applications.

#### Submission: See Canvas for Submission Instructions
