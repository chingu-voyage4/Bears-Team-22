import React, {Component, Fragment} from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import './jobForm.css';
import DropDownPicker from '../utils/helpers/DropDownPicker';
import DropDownList from '../utils/helpers/DropDownList';
import DropDownItem from '../utils/helpers/DropDownItem';
import {jobFunctions,
        employmentTypes,
        companyIndustry, 
        seniorityLevel } from '../utils/services/listObj';


const jobs = gql`
query jobs{
    jobs {
    id,
    positionName
}}
`
class JobForm extends Component {    
    constructor(props) {
        super(props);
          this.state = {
            itemEmploymentType: "",
            itemFunction: [],
            itemCompanyIdustry: [],
            itemSeniorityLevel: ""
        }
    }

    onClickShowListEmploymentType() {        
        this.setState((prevState)=>{return{...this.state, showEmploymentType: !prevState.showEmploymentType}});
    }

    onClickAddEmploymentType = (val) => {        
        this.setState((prevState) => (
            { ...this.state,
                itemEmploymentType: val }));
    }

    onClickAddSeniorityLevel = (val) => {        
        this.setState((prevState) => (
            { ...this.state,
                itemSeniorityLevel: val }));
    }

    onClickAddJobFunction = (name) => {        
        this.setState((prevState)=>{
            return { ...this.state, itemFunction: [...prevState.itemFunction, name] }});
    }

    onClickRemoveJobFunction = (item) => {                                
       let array_1 = this.state.itemFunction;          
       this.setState({ ...this.state, itemFunction: array_1.slice(0,array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item)+1)) });

    }

    onClickAddCompanyIndustry = (name) => {        
        this.setState((prevState)=>{
            return { ...this.state, itemCompanyIdustry: [...prevState.itemCompanyIdustry, name] }});
    }

    onClickRemoveCompanyIndustry = (item) => {                                
        let array_1 = this.state.itemCompanyIdustry;          
        this.setState({ ...this.state, itemCompanyIdustry: array_1.slice(0,array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item)+1)) });
 
     }

    
    shouldComponentUpdate(nextProps, nextState) {    
        return true;
    }
    componentDidUpdate() {        
    }

    render() {        
        return (
           <div className="container">
               <div className="flex_inner_row_1">
                 <div className="flex_inner_col input_with_label">
                     <label>Job title<i className="fa fa-spinner">r</i></label>
                     <input type="text"/>
                 </div>
                 <div className="flex_inner_col input_with_label">
                     <label>Company</label>
                     <input type="text"/>
                 </div>
                 <div className="flex_inner_col input_with_label">
                     <label>Location</label>
                     <input type="text"/>
                 </div>
               </div>
               <div className="flex_inner_row_1">
                 <div className="flex_inner_col input_with_label">
                   <label>Choice a function <span className="explicity_warnning">(no more then 3)</span></label>

                   <DropDownPicker
                    title={"select function"}
                     itemSelected={this.state.itemFunction}
                     list={jobFunctions}
                     onClickItem={this.onClickAddJobFunction}
                     onClickRemoveItem={this.onClickRemoveJobFunction}
                   />                                 
                  
                 </div>

                 <div className="flex_inner_col input_with_label">
                  <label>Employment type</label>

                    <DropDownList
                       itemSelected={this.state.itemEmploymentType}
                       list={employmentTypes}
                       onClickItem={this.onClickAddEmploymentType}
                      />
                     

                 </div>
              </div>

               <div className="flex_inner_row_1">
                 <div className="flex_inner_col input_with_label">
                   <label>Company industry <span className="explicity_warnning">(select up to 3)</span></label>

                   <DropDownPicker
                    title={"select industry"}
                     itemSelected={this.state.itemCompanyIdustry}
                     list={companyIndustry}
                     onClickItem={this.onClickAddCompanyIndustry}
                     onClickRemoveItem={this.onClickRemoveCompanyIndustry}
                   />                                 
                  
                 </div>

                 <div className="flex_inner_col input_with_label">
                  <label>Seniority level</label>

                    <DropDownList
                       itemSelected={this.state.itemSeniorityLevel}
                       list={seniorityLevel}
                       onClickItem={this.onClickAddSeniorityLevel}
                      />
                     

                 </div>
              </div>
              <div className="flex_inner_row_1">
                <div className="flex_inner_col input_with_label">
                <label>Job description</label>
                    <textarea rows="4" cols="50">
                    </textarea>
                </div>                
              </div>
              <div className="flex_inner_row_1">
                <div className="flex_inner_col input_with_label">
                  <button className='submitButton' type='button' onClick={()=>console.log('hello save')}>Save</button>
                </div>
               </div>
            </div>
        )
    }
}


export default graphql(jobs, {
    jobs: ({data}) => {
        return data.jobs
    }
})(JobForm)