# namaste-react

A Repository to store all the learnings of my Namaste React Course

# Ep 4 : Create a food Ordering App
- Create a seperate components for every element.
- Config driven architecture/developemnt for UI.
    - The UI is controlled on the basis of data for different audience/locations.
    - Do not need to create seperate UI everytime.
- What are props and props destructuring and spread operator.
- Make dynamic cards using copy of data from any food delivery app api.
- Use map instead of for loop to render multiple cards/elements.
- Always make sure the components have a unique key and avoid using index from the map functions unless last resort.
    - key attribute needed to every component to uniquely identify the component while rendering.
    - if no key attirbute then React is unable to identify the component and will try to re-render the components again in the process rerendering everything, adding key attribute will optimize the app.
    - unique key (best) >>>>>> index key (ok but not recommended) >>>>>> no key (bad practise).

# Ep 5
- Named export and Default export
- Import with and without {} difference
- try using both named and default export on a component
- Hooks
    -  useState
        - Used to manage state within the function components.
        - recommended way to declare or manipulate the value of a state varable in a function component.
        - Whenever a state varaible updates React rerenders the component
- React fiber & Reconciliation Algorithm 
    - read this blog for more info https://github.com/acdlite/react-fiber-architecture

# Ep 6
- useEffect Hook
    - it takes 2 arguments a callback function and a dependency array
    - the useEffect hook is executed after the UI is rendered ie. every thing within the function componenet will be executed and only then the useEffect Hook will be excuted (something similar to a settimout function which will not execute until the call stack is empty).
    - if there is any other function being called after the useEffect before return that part is still executed ex. useEffect(()=>{},[]); console.log("logging"); return(); here the useEffect will be skipped console.log will execute then return and the code will be rendered and the the useEffect will be executed and if it changes the state of any variables then a reconciliation cycle is triggered (to rerender the component).
    - 
- Optional chaining of the api data if the data returned is null or undefined. (eg : json?.data)

