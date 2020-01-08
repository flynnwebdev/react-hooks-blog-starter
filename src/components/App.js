import React,{Component, Fragment} from "react"
import Nav from "./Nav"
import BlogPosts from "./BlogPosts"
import Title from "./Title"
import dummyPosts from "../data/dummyData"


class App extends Component {
	constructor(props) {
        super(props)
        this.state = {
			loggedInUser: null,
			blogPosts: dummyPosts
        }
    }

    render() {
        const {loggedInUser, blogPosts}=this.state
        return (
            <Fragment >
                <Nav loggedInUser={loggedInUser}/>
				<div className="container">
					<Title />
					<BlogPosts blogPosts={blogPosts} loggedInUser={loggedInUser}/>
				</div>
            </Fragment>
        )
    }
}
export default App