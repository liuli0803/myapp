import React,{ Component } from 'react';
import "./Footer.less";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="App-footer">
                    <Link to="home"> 家</Link>
                    <Link to="product"> 产品</Link>
                    <Link to="about">我们</Link>
                </div>
            </div>
        );
    }
}
export default Footer;
