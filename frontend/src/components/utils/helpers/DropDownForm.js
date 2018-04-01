import React, { Component } from 'react';
import DropDownFormItem from './DropDownFormItem';
import enhanceDropDown from '../services/enhanceDropDown';


class DropDownForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowItems: false
        }
    }


    render() {
        const {itemSelected, onClickRemoveItem, toggleShowList, title, list, isOpen, handleClickItem} = this.props;
        return(
            <div className="add_item">
                     <ul className={`container_item_add ${itemSelected.length === 0 ? "container_item_add_show" : null}`}>                    
                         {itemSelected.sort().map((item,index)=><li className="item_plus item_plus_colors"
                                                                     onClick={()=> onClickRemoveItem(item)}
                                                                      key={index}>
                                                                      <i className="fa fa-minus" aria-hidden="true"></i>
                                                                      {item}</li>
                          )}                                         
                     </ul>
            <div className={`inline_plus`}>
                <span
                   onClick={()=>toggleShowList()} 
                   className="item_plus item_plus_colors">
                      <i className={`fa fa-plus`} aria-hidden="true"></i>{title}
               </span>
                <ul className={`item_pick ${isOpen ? "show_items" : null}`}>

                            <DropDownFormItem
                                onClick={handleClickItem}
                                class={""}
                                list={list}
                            />                     

                    
                </ul>
            </div>
        </div>
       )
    }
}



export default enhanceDropDown(DropDownForm)