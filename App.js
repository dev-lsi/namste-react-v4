

const reactHeading1 = React.createElement("h1", {id:"heading"}, "Hello 1!");
const reactHeading2 = React.createElement("h1", {id:"heading"}, "Hello 2!");

const root1 = document.getElementById("root1");
const root2 = document.getElementById("root2");

const reactRoot1 = ReactDOM.createRoot(root1);
const reactRoot2 = ReactDOM.createRoot(root2);

reactRoot1.render(reactHeading1);
reactRoot2.render(reactHeading2);


