/**
 * Created by 大丽丽 on 2017/10/19.
 */
import React, { Component } from 'react';
import Header from "./components/Header";
import ContentList from "./components/ContentList";
import Footer from "./components/Footer";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <ContentList />
                <Footer />
            </div>
        );
    }
}

export default Main;