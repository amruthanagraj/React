const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"I'm H1 tag"),
    React.createElement("h2",{},"I'm h2 tag")]
    ),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I'm H1 tag"),
    React.createElement("h2",{},"I'm h2 tag")]
    )]
    );
    const rooting = ReactDOM.createRoot(document.getElementById("root"));
    rooting.render(parent);