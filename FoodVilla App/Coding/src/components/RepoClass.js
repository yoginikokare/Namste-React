import {Component} from 'react';
import { GITHUB_USER_REPO_API } from '../../constants'

class RepoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: null
        }
        console.log("Repo - Constructor");
    }

    async componentDidMount() {
        console.log("Repo - componentDidMount");
        console.log("Repo - componentDidMount - API called");
        const data = await fetch(GITHUB_USER_REPO_API);
        const json = await data.json();
        this.setState({
            repo: json
        })
        console.log("Repo - componentDidMount- State Updated");
    }

    componentDidUpdate() {
        console.log("Repo - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Repo - componentWillUnmount");
    }

    render() {
        console.log("Repo - render()");
        const {repo} = this.state;
        return (
            <div  className='bg-pink-200 p-5 shadow-lg'>
                <h1 className='font-bold'>User : {this.props.userName} </h1>
                <h1 className='font-bold pb-566'>Repositery List:</h1>
                {
                    repo?.map((r) => {
                        return (
                            <div className='bg-blue-200 shadow-lg p-5' key={r.id}>
                                <a className='font-bold underline' href={r.html_url}>{r.name}</a>
                                <h4>Forks {r.forks_count}</h4>
                                <h4>Views {r.watchers_count}</h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default RepoClass;