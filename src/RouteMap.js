/**
 * Created by 大丽丽 on 2017/10/19.
 */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Detail from './components/Detail';

class RouteMap extends Component{
    render (){
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/detail:OrderId" component={Detail}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/product" component={Product}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default RouteMap





















