const header = React.createElement("h1", {
    id: 'header',
    xyz: "fuck"
}, "Hello from React CDN!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(header);
// console.log(root);


const h1 = React.createElement("h1", { id: 'h1' }, " this is h1 tag ");
const h2 = React.createElement("h2", { id: 'h2' }, " this is h1 tag ");

const child = React.createElement("div", { id: "child" }, [h1, h2])
const parent = React.createElement("div", { id: "parent" }, [child, child])

console.log(parent);

root.render(parent);