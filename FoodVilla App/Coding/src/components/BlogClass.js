import { Component } from "react";
import RepoClass from "./RepoClass";

class BlogClass extends Component {
    constructor(props) {
        super(props);
        console.log("Blog - Constructor");
    }

    componentDidUpdate() {
        console.log("Blog - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Blog - componentWillUnmount");
    }

    render() {
        console.log("Blog - render()");
        return (
            <div className="bg-yellow-200 grow p-5">
                <h1>My Blog </h1>
                <h3>This is {this.props.name} blog</h3>
                <RepoClass userName={this.props.name}/>
            </div>
        )
    }
}

export default BlogClass;