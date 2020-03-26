import React, { Component, useReducer } from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import WithCategories from '../withCategories'


class SideNav extends Component {
    state = {
      
    };

    
    handleonClick = (catID) => {
        //console.log(this.props);
        console.log(catID);
       
    }



    render() {

        if (window.location.pathname.includes('/login') || window.location.pathname.includes('/signup')) {   
            return <div></div>;
        }
        else {

            // console.log("Cate-List" + this.props);

            return (
                <React.Fragment>
                    <div className="sidenav">
                        
                        {this.props.CategoryList.map(cat => <Link onClick={this.handleonClick} key={cat.Id} to={`/${cat.Name}/${cat.Id}`}   
                        className="Category">
                            {cat.Name}
                        </Link>)}

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default WithCategories(SideNav);