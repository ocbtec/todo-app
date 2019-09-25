import React from "react";
import Header from "./Header";

class Help extends React.Component {
    componentDidMount() {
        document.title = "Help | What to do?";
    }
    render() {
        return (
            <div className="container">
                <Header tagline="Your questions will be answered here." />
                <p>Where is the data stored</p>
                <p>We store all information in your browsers' LocalStorage.</p>
            </div>
        );
    }
}

export default Help;
