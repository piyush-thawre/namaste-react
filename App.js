const heading = React.createElement("h1",{id:"heading"},"Hello from the react function");
const root = ReactDOM.createRoot(document.getElementById("root"));



const innerHeading = React.createElement("h1",{id:"innerHeading"} ,"Hello from the inside Heading");
const child = React.createElement("div",{id:"child"} , [innerHeading , React.createElement("h1" ,{id:"secondSib"} , "Hello from the second sib")]);
const parent = React.createElement("div" , {id:"parent"} , [child , child]);
console.log(parent);
root.render(parent);

