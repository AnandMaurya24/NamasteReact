const heading =React.createElement("h1",{id:"gadar"},"JavaScript Jindabad");
const heading2 =React.createElement("h2",{id:"gadar"},"Tha , Jindabad hai, Aur Jindabad Rahega");
const container=React.createElement("div",{id:"container"},[heading,heading2]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(container);