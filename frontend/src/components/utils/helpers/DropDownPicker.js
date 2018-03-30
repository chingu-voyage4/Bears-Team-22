import React, { Component } from 'react';
import DropDownItem from './DropDownItem';
import enhanceDropDown from '../services/enhanceDropDown'


class DropDownPicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowItems: false
        }
    }

    render() {
        return(
            <div className="add_item">
                     <ul className={`container_item_add ${this.props.itemSelected.length === 0 ? "container_item_add_show" : null}`}>                    
                         {this.props.itemSelected.sort().map((item,index)=><li className="item_plus item_plus_colors"
                                                                     onClick={()=>this.props.onClickRemoveItem(item)}
                                                                      key={index}>
                                                                      <i className="fa fa-minus" aria-hidden="true"></i>
                                                                      {item}</li>
                          )}                                         
                     </ul>
            <div className={`inline_plus`}>
                <span
                   onClick={()=>this.props.toggleShowList()} 
                   className="item_plus item_plus_colors">
                      <i className={`fa fa-plus`} aria-hidden="true"></i>{this.props.title}
               </span>
                <ul className={`item_pick ${this.props.isOpen ? "show_items" : null}`}>
                   { this.props.list.map((item,index) => {
                       return(
                            <DropDownItem
                                key={index}
                                onClick={this.props.handleClickItem}
                                class={""}
                                name={item}
                            />                     
                        )
                      })
                    }
                </ul>
            </div>
        </div>
       )
    }
}



export default enhanceDropDown(DropDownPicker)