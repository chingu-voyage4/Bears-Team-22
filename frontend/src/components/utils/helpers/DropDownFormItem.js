import React, {Component} from 'react';

class DropDownFormItem extends Component {
    constructor(props) {
       super(props);
    }

  handleChange(event, item) {
    const value = event.target.value;
    this.setState({[item]: {item, value}});
  }


render() {
    const {list, onClick} = this.props;
   return (
       <main>
           {list.map((item, index) => {
               return (
                   <div key={index} >
                   <label>{item}:</label>
                   <input placeholder={item} onChange={event => this.handleChange(event, item)}/>
               </div>
                )
           })}
                           <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <label>Additional Information</label>
                        <textarea rows="4" cols="50">
                        </textarea>
                    </div>
                </div>
            <li onClick={()=> onClick(this.state)}>
                <i className={`fa fa-plus`} onClick={() => onClick(this.state)}></i>
            </li>

       </main>
   )
}
   
}
                           
export default DropDownFormItem;