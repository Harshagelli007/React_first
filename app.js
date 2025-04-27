


const h1 = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"heading"},"im am react"),React.createElement("h1",{id:"heading2"},"im am react from child")]),React.createElement("div",{id:"child2"},
        React.createElement("h1",{id:"heading2"},"im am react"))])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);