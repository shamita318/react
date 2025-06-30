  const parent = React.createElement("div" , { id:"parent"} ,
        React.createElement("div" , { id:"child"} , [React.createElement("h1" , {} , " hey i am h1 heading" ), React.createElement("h2" , {} , " hey i am h2 heading" )]) );
      console.log("hello i n  in new branch")
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);