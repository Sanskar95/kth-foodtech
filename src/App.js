import React, { useEffect } from "react";
import {BrowserRouter, Route, withRouter } from "react-router-dom";
import BlogPostScreen from "./views/BlogPostScreen";
import Home from "./Home";
import Navbar from "./components/organisms/Navbar";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/MainTheme";
import Layout from "./components/Layout";

function App() {

    return (
        <BrowserRouter>


            <Layout/>
            <Route exact  path="/blogs" component={BlogPostScreen}></Route>
            <Route exact path="/" component={Home}></Route>


            {/*<Route exact path="/events" component={EventScreen}></Route>*/}
        </BrowserRouter>
    );
}

export default App;
