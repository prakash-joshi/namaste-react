import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", {
    id: 'header',
    xyz: "fuck"
}, "Hello from React CDN!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement("h1", { id: 'h1' }, " this is h1 tag via npm ");
const h2 = React.createElement("h2", { id: 'h2' }, " this is h2 tag via npm");
const child = React.createElement("div", { id: "child" }, [h1, h2])
const parent = React.createElement("div", { id: "parent" }, [child, child])

root.render(parent);