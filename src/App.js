import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="Home">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <CreateBlog />
                        </Route>
                        <Route path="/blog/:id">
                            <BlogDetails />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
