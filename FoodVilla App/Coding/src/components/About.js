import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileFunComp from "./Profile";
import Profile from "./ProfileClass";
import BlogClass from "./BlogClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("About - Constructor");
    }

    componentDidUpdate() {
        console.log("About - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("About - componentWillUnmount");
    }
    
    render() {
        console.log("About - render()");
        return (
            <div>
                <h1 className="font-bold text-xl py-5">About Us:</h1>
                <div className="flex">
                    <Profile name="Yogini kokare"/>
                    <BlogClass name="Yogini kokare"/> 
                </div>
                <ProfileFunComp name="Yogini Kokare"/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1 className="font-bold text-xl py-5">About Us:</h1>
//             {/* 
//                 here profile comp from routing config willl display 
//                 <Outlet />
//             */}
//             <ProfileFunComp name="Yogini Kokare"/> 
//             <Profile name="Yogini kokare"/>
//         </div>
//     )
// }

export default About;