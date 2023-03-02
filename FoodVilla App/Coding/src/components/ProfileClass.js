import { Component } from "react";
import { GITHUB_USER_API } from '../../constants'

class Profile extends Component {///+
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            count: 0,
            count2:0
        }
        console.log("profile - Constructor");
    }

    async componentDidMount() {
        console.log("profile - componentDidMount");
        console.log("profile - componentDidMount - API called");
        const data = await fetch(GITHUB_USER_API);
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log("profile - componentDidMount - state updated");
    }

    componentDidUpdate() {
        this.timer = setTimeout(()=> {
            console.log("setTimeout callback fun called after 30 second");
        }, 30);
        console.log("profile - componentDidUpdate");
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        console.log("profile - componentWillUnmount");
    }
 
    render() {
        console.log("profile - render()")
        return (
            <div className="bg-gray-200 shadow-lg w-[25%] h-[200px] p-5">
                <h3 className="font-bold">Profile Class: {this.props.name} </h3>
                <div>
                    <h3>Name: {this.state.userInfo.name}</h3>
                    <h3>Email: {this.state.userInfo.email}</h3>
                    <h3>Count: {this.state.count}</h3>
                    <h3>Count2: {this.state.count2}</h3>
                    <button className="bg-blue-500 p-2 rounded-xl"
                    onClick={()=>{
                        this.setState({
                            count: 1,
                            count2: 10
                       });
                    }}>Set Count</button>
                </div>
            </div>
        );
    }
}

export default Profile;

