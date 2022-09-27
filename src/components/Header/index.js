import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                    <Route path="/about" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
        );
    }
}

export default Header;