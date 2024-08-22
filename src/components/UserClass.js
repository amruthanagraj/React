import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super (props)

        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Default"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        
        this.setState({
            userInfo:json
        })
        console.log(json)
    }
   render () {
    const {name,location} = this.state.userInfo
    return(
        <div>
           
            
            <h2>Name:{name}</h2>
            <h2>Name:{location}</h2>
        </div>
    )
   }
}
export default UserClass;