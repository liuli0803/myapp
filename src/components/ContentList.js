/**
 * Created by 大丽丽 on 2017/10/16.
 */
import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';
import "./ContentList.css";

let data = [
    ["English", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
    ["Math", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Chinese", "J. K. Rowling", "English", "1997", "107 million"]
];

type Props = {
    data:array,
    index:string
};

class ContentList extends Component{
    props: Props;
    static defaultProps = {
        data:data
    };
    render(){
        return (
            <div className="listAll">
                {this.props.data.map(function( title,index ){
                    return <p key={index} className="clear" >
                                <Link to={"detail:"+title[0]}>
                                    <img className="lf" src={require('../img/luH.png')} alt=""/>
                                    <span className="lf">{index}{title}</span>
                                </Link>
                            </p>
                },this)}
            </div>
        )
    }

    //handleClick (){
    //    window.location.href="/detail";
    //    onClick={this.handleClick}
    //}

}

export default ContentList


















