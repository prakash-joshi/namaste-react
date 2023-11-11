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
