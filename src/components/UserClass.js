import React from "react";
class UserClass extends React.Component{
    constructor(props){
         super(props) 

         this.state={
           userInfo :{
            name:"Dummy",
            location:"default"
           },
         };

          
    }
   async componentDidMount(){
    const data =  await fetch("https://api.github.com/users/shamita318");
    const json = await data.json();

    this.setState({
    userInfo: json,
   });
    console.log(json);
   };

   
   
    render() {
       
        const { login, location} =this.state.userInfo;
        return(
            <div className="user-card">
                
                 <h1> Name:{login}</h1>
            <h2> contact- Shamita1610@gmail.com </h2>
            </div>
        )
    }
}
 export default UserClass;
