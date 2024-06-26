# namaste-react

A Repository to store all the learnings of my Namaste React Course

# React Fiber Architecture blog : https://github.com/acdlite/react-fiber-architecture

# React Reconciliation documentation : https://legacy.reactjs.org/docs/reconciliation.html

# Ep 4 : Create a food Ordering App

- Create a separate components for every element.
- Config driven architecture/development for UI.
  - The UI is controlled on the basis of data for different audience/locations.
  - Do not need to create separate UI every time.
- What are props and props destructuring and spread operator.
- Make dynamic cards using copy of data from any food delivery app api.
- Use map instead of for loop to render multiple cards/elements.
- Always make sure the components have a unique key and avoid using index from the map functions unless last resort.
  - key attribute needed to every component to uniquely identify the component while rendering.
  - if no key attribute then React is unable to identify the component and will try to re-render the components again in the process rerendering everything, adding key attribute will optimize the app.
  - unique key (best) >>>>>> index key (ok but not recommended) >>>>>> no key (bad practice).

# Ep 5

- Named export and Default export
- Import with and without {} difference
- try using both named and default export on a component
- Hooks
  - useState
    - Used to manage state within the function components.
    - recommended way to declare or manipulate the value of a state variable in a function component.
    - Whenever a state variable updates React rerenders the component
- React fiber & Reconciliation Algorithm
  - read this blog for more info https://github.com/acdlite/react-fiber-architecture

# Ep 6

- useEffect Hook

  - it takes 2 arguments a callback function and a dependency array eg: useEffect(()=>{},[]).
  - the useEffect hook is executed after the UI is rendered ie. every thing within the function component will be executed and only then the useEffect Hook will be executed (something similar to a settimout function which will not execute until the call stack is empty).
  - if there is any other function being called after the useEffect before return that part is still executed ex. useEffect(()=>{},[]); console.log("logging"); return(); here the useEffect will be skipped console.log will execute then return and the code will be rendered and the the useEffect will be executed and if it changes the state of any variables then a reconciliation cycle is triggered (to rerender the component).

- Optional chaining of the api data if the data returned is null or undefined. (eg : json?.data).

# Ep 7

- useEffect Hook is always executed once after the component is rendered and:

  - if the 2nd argument(i.e, the dependency array) is not passed then in that case the useEffect hook is called every time the component is rerendered.
  - if the 2nd argument the dependency array is empty then the useEffect Hook will be called just once when the component will be rendered for the first time.
  - if the dependency array has some variable in it (state variable) passed then the useEffect will be called once in the initial render and then every time when the value of the variable in the dependency array changes.

- react-router-dom package for routing i.e, search the site with URL.
  -useRouteError() hook available in react-router-dom package to log error object.

  - don't use anchor tag <a></a> tag in React instead use <Link></Link> tag because anchor tag refresh the entire page whereas the Link tag only renders the component to be routed to.
  - children object is used for nested routings in routing along with Outlet tag and Link tag.
  - useParams() hook which is part of react-router-dom used for reading the dynamic route parameters.

- 2 types of routing
  - Client Side Routing : Used in Single Page Application here all the components are loaded at once initially and when the route is called then the preloaded component is rendered.
  - Server Side Routing : Used in old multipage application where whenever a page called then the page is loaded from the server to the browser and then the entire page is rendered/refreshed.

# Ep 8

Reference diagram link : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- Class Components
  - Hooks are a newly added feature and are not available inside the class components.
  - render() method returns the JSX which is rendered.
  - the component class Extends the React.Component class ie. implements the parent class.
  - constructor() is initialized and contains a super() inside the constructor which implements the super constructor from the Parent class.
  - If the component is passed any props then it is passed with constructor(props) and then super(props) and then the props is accessed with this.props.
  - this.state object used to store the state variables in the class.
  - this.setState() function is used to change the state variables in the class components. It takes object as an input parameter and updates only those variables in this.state which are passed as properties of the input object.
  - React Lifecycle and Lifecycle methods and their execution sequence.
    - constructor() : executes first while a class component is rendered
    - render() : executes after the constructor
    - componentDidMount() : executes after the component is mounted ie, render() method executed.
      - eg if a parent class component with 2 child class component
        - Parent Constructor
        - Parent Render  
           (Render Phase)
          - First Child Constructor
          - First Child Render
          -
          - Second Child Constructor
          - Second Child Render
            (DOM Update Phase: All child component DOM updated in on single batch)
          - First Child ComponentDiDMount
          - Second Child ComponentDidMount
        - Parent ComponentDidMount
    - componentDidUpdate() : is invoked immediately after updating occurs
    - componentWillUnmount() : is invoked immediately before a component is unmounted and destroyed (eg routing to different page/component)

# Ep 9

- Custom Hooks: it allows developers to encapsulate and reuse logic within functional components.
  - We can create hooks of our own for logic which is reusable in the application.
  - create a separate file for every custom hook for better maintainability of the code
  - according to convention while naming a hook always starts with the word use eg: useErrorLogging();
- Chunking : also known with other names like Lazy loading/Code Splitting/Dynamic Bundling/OnDemand Loading/Dynamic Import :
  - When the code is bundled by the package manager it gets compressed into a single JS file.
  - When the code size increases the size of the file increases and this can make the app slow.
  - We can instead created multiple smaller files which can be later loaded on demand whenever required thus reducing the size of the main js bundled file.
  - The app can be split into multiple modules and we can create the bundle of each module separately so that they can be called later separately whenever required. eg: on makemytrip separate module for flights booking, hotel bookings, bus booking, cab booking etc.
  - React gives us lazy() method to enable lazy loading of the code which will in turn help creating separate smaller bundles and calling them whenever required.
  - We use <Suspense> tag in routing along with lazy() method to show some dummy data or loading screen or shimmer ui till the files is imported/downloaded to be rendered.
  - The <Suspense fallback={JSX here}> tag has a fallback argument which will take JSX code for a loading screen till the actual UI is rendered

# Ep 10

- Various ways to use CSS: scss, sass, less
- UI libraries: MaterialUI, ChakraUI, Styled Componenets
- CSS most trending framework: tailwindcss
- Tailwindcss installation guide : https://tailwindcss.com

# Ep 11

- Higher Order Components takes a component as an argument and returns a new component that wraps the original component
- Pure components / Pure Functions : a function (a block of code) that always returns the same result if the same arguments are passed
- Lifting the state :
  - if there is a child component which is repeated and each component has its own state we can share the state by lifting it up to its closest parent and avoid implementing the state in child component
  - eg: accordions where only one accordion can be open at a time here instead of each accordion tile having its state for open or closed we can lift the state to the parent and control the child to have only one or multiple accordions expanded from the parent
- Controlled and uncontrolled component
  - Controlled Component :
    - when the component is driven by the props rather than its own local state.
    - this lets the parent component fully specify its behavior.
    - these are most flexible but we need to properly configure the props to be passed
  - Uncontrolled Component :
    - when the local state of the component drives the component.
    - this component is not influenced by its parents state or props.
    - these are less flexible but less complex to configure
- Context Api:

  - it provides a way to pass data through the component tree without having to pass props down manually at every level.
  - it is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
  - createContext({object}) lets you create a context that components can provide or read. it takes an object as an input parameter which you can use anywhere in the application.
  - useContext(SomeContext) is a react hook which lets you read and subscribe to the context from a component.
  - we can have multiple context created and they can be read & updated from anywhere in the application.

# Ep 12

- Redux Toolkit

  - Redux Toolkit (RTK) : https://redux-toolkit.js.org/

  - store is a central big JS Object where most of the data is stored
  - to avoid the store from becoming very big and clumsy we can split it into parts known as slices which is a small portion of the store and we can create multiple slices in our redux store
  - in our application the various slices which we can create are loggedin User data, cart data, payment options data, Ui or theme slice
  - we cannot directly modify/update our slice instead we have to dispatch an action which calls a function which inturn updates the slice
  - to read the data from the store we use selectors which can then be displayed/used and this process is called subscribing to the store.
  - useSelector() : Allows us to extract data from the Redux store state for use in this component, using a selector function
  - useDispatch() : This hook returns a reference to the dispatch function from the Redux store. We may use it to dispatch actions as needed.
  - dispatch(action) : Dispatches an action. This is the only way to trigger a state change.
  - Redux Thunks earlier used while making api requests
  - RTK Query : is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.
  - RTK Query document : https://redux-toolkit.js.org/rtk-query/overview

# Ep 13

- Different types of testing for developer:
  - Unit Testing : Focuses on individual unit (components) to determine wether they are ft to use or not.
  - Integration Testing : Focuses on verifying interaction or data exchange between different component
  - End to End Testing (e2e testing) : Tests entire application flow from start to finish, needs special tools to perform this test
- React Testing library : https://testing-library.com/docs/react-testing-library/intro/
  - Most popular for testing react applications.
  - Build as a wrapper on DOM Testing Library by adding API for react components.
- Jest : https://jestjs.io/
  - Most widely used JS framework for writing test cases.
  - Works with React, Vue, Angular, Vanilla JS or Typescript, Babel, NodeJS
  - initiate jest to create jest.config.js file : npx jest --init
  - install jest-environment-jsdom 
  - install @babel/preset-react to make JSX work in test cases.
  - include @babel/preset-react inside babel.config.js
  - install @testing-library/jest-dom

- testcases
  - test cases start with test function with 2 parameters fist being the test case description and second is a callback function which consist of the test code with the assertion for success scenario.
  - the test case description generally starts with should for better readability. eg test('should load a label Contact Us ',()=>{"test code here"}).
  - test() function can also be replaced with it() function both are one and the same.
  - we can use describe() function to group multiple testcases into one. 
  - we can also have multi level nesting of describe() function inside another describe() function.
  - for the components using react-redux code like useSelector or useDispatch we need to pass the store and provider and wrap the component to test inside the provider into the render() for the testcase.
  - similar to redux code for routing as well we need to warp the element to render inside the BrowserRouter element to provide the routing to the testing component.
  - we have multiple selection criteria available to test the render component like getByRole(), getByText(), getByPlaceholderText(), getByTestId() etc. some of these even accept regex as a parameter and some take an extra parameter to get the element with their internal attribute values for testing.
  - we can also simulate scenarios like click, change abort etc. events using the fireEvent function provided by the @testing-library/react
  - for the component receiving the props we need to create the mock data and provide it as props to the component in render().
  - for the component which has an api call using fetch() we need to fake the api call by using global.fetch = jest.fn() here we need to resolve the api call and then resolve the json as well which will provide the mock data to be used for test.
  - for integration testing we can render multiple components inside the render() function.
  - Startup and Teardown functions
    - beforeAll(() => { startup function/logic here }); // executes before all testcases are executed in the describe block
    - afterAll(() => { startup function/logic here }); // executes after all testcases are executed in the describe block
    - beforeEach(() => { teardown function/logic here }); // executes before each testcase is executed in the describe block
    - afterEach(() => { teardown function/logic here }); // executes after each testcase is executed in the describe block