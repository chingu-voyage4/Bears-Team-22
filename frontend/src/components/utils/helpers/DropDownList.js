import React, { Component } from 'react';
import enhanceDropDown from '../services/enhanceDropDown';
import DropDownItem from './DropDownItem';


class DropDownList extends Component{
    constructor(props) {
        super(props);       
    }    

    render() {
        return(
            <div className={`inline_plus`}>
                <span
                   onClick={()=>this.props.toggleShowList()} 
                   className="item_plus item_plus_colors">
                      <i className={`${this.props.classFontAwsome}`} aria-hidden="true"></i>{this.props.itemSelected.length >= 1 ? this.props.itemSelected : "Select Item" }
               </span>
                <ul className={`item_pick ${this.props.isOpen ? "show_items" : null}`}>
                   { this.props.list.map((item, index) => {
                       return (
                           <DropDownItem
                              name={item}
                              onClick={this.props.handleClickItem}
                           />
                       )
                   }) }
                </ul>
            </div>
       )
    }
}

export default enhanceDropDown(DropDownList)