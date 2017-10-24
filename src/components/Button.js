/**
 * Created by 大丽丽 on 2017/10/11.
 */
import React,{ Component } from 'react';
//import button from 'react-bootstrap';
import './Button.css';

class ButtonBtn extends Component{
    clickMe(text) {
        alert(text)
    }
    render(){
        return (
            <div>
                <button className="myBtn" onClick={this.clickMe.bind(this,"来来来")}>click</button>
            </div>

            )
    }
}


export default ButtonBtn