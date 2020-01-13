import React, {
  Component,
  Fragment,
  useState,
  useReducer,
  useEffect
} from "react";
import Nav from "./Nav";
import BlogPosts from "./BlogPosts";
import Title from "./Title";
import dummyPosts from "../data/dummyData";
import stateReducer from "../reducers/stateReducer";

const App = () => {
  const [loggedInUser, dispatchLoggedInUser] = useReducer(stateReducer, null);
  const [blogPosts, dispatchBlogPosts] = useReducer(stateReducer, []);

  function fetchBlogPosts() {
    dispatchBlogPosts({
      type: "setBlogPosts",
      data: dummyPosts
    });
  }

  useEffect(() => {
    console.log("Equivalent to componentDidMount()");
    fetchBlogPosts();
  }, []);

  useEffect(() => {
    console.log("Equivalent to componentDidUpdate()");
  }, [loggedInUser]);

  function handleLogin(username) {
    dispatchLoggedInUser({
      type: "foo",
      data: username
    });
  }

  return (
    <Fragment>
      <Nav loggedInUser={loggedInUser} />
      <button onClick={() => handleLogin("Matt")}>Login!</button>
      <div className="container">
        <Title />
        <BlogPosts blogPosts={blogPosts} loggedInUser={loggedInUser} />
      </div>
    </Fragment>
  );
};

export default App;
