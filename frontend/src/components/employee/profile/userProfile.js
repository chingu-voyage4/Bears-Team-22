import React, { Component, Fragment } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import './userProfile.css';
import DropDownForm from '../../utils/helpers/DropDownForm';
import {
    skillsLabels,
    languageSkillsLabels,
    educationLabels,
    workExperienceLabels
} from '../../utils/services/listObj';


const currentUser = gql`
query currentUser{
    currentUser {
    id,
}}
`
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            languageSkills: [],
            education: [],
            workExperience: [],
        }

        this.onClickAddSkills = this.onClickAddSkills.bind(this);
        this.onClickRemoveSkills = this.onClickRemoveSkills.bind(this);
        this.onClickAddLanguageSkills = this.onClickAddLanguageSkills.bind(this);
        this.onClickRemoveLanguageSkills = this.onClickRemoveLanguageSkills.bind(this);
        this.onClickAddEducation = this.onClickAddEducation.bind(this);
        this.onClickRemoveEducation = this.onClickRemoveEducation.bind(this);
        this.onClickAddWorkExperience = this.onClickAddWorkExperience.bind(this);
        this.onClickRemoveWorkExperience = this.onClickRemoveWorkExperience.bind(this);
    }

    onClickAddSkills(name) {
        const { skills } = this.state;
        this.setState({
            skills: [...skills, name]
        });
        console.log(Object.keys(name).map(e => name[e]));
    }

    onClickRemoveSkills(item) {
        const { skills } = this.state;
        let array_1 = skills;
        this.setState({ ...this.state, skills: array_1.slice(0, array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item) + 1)) });

    }

    onClickAddLanguageSkills(name) {
        const { languageSkills } = this.state;
        this.setState({
            languageSkills: [...languageSkills, name]
        });
        console.log(Object.keys(name).map(e => name[e]));
    }

    onClickRemoveLanguageSkills(item) {
        const { languageSkills } = this.state;
        let array_1 = languageSkills;
        this.setState({ ...this.state, languageSkills: array_1.slice(0, array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item) + 1)) });
    }

    onClickAddEducation(name) {
        const { education } = this.state;
        this.setState({
            education: [...education, name]
        });
        console.log(Object.keys(name).map(e => name[e]));
    }

    onClickRemoveEducation(item) {
        const { education } = this.state;
        let array_1 = education;
        this.setState({ ...this.state, education: array_1.slice(0, array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item) + 1)) });
    }

    onClickAddWorkExperience(name) {
        const { workExperience } = this.state;
        this.setState({
            workExperience: [...workExperience, name],
        });
        console.log(Object.keys(name).map(e => name[e]));
    }

    onClickRemoveWorkExperience(item) {
        const { workExperience } = this.state;
        let array_1 = workExperience;
        this.setState({ ...this.state, workExperience: array_1.slice(0, array_1.indexOf(item)).concat(array_1.slice(array_1.indexOf(item) + 1)) });
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidUpdate() {
    }

    render() {
        const { skills, languageSkills, education, workExperience } = this.state;
        return (
            <div className="container">
                <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    <div className="flex_inner_col input_with_label">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="flex_inner_col input_with_label">
                        <label>Location</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <label>Skills <span className="secondaryText">My most important professional skills</span></label>

                        <DropDownForm
                            title={"Select Skills"}
                            itemSelected={skills}
                            list={skillsLabels}
                            onClickItem={this.onClickAddSkills}
                            onClickRemoveItem={this.onClickRemoveSkills}
                        />

                    </div>

                    <div className="flex_inner_col input_with_label">
                        <label>Language Skills <span className="secondaryText">My languages & proficiency levels</span></label>

                        <DropDownForm
                            title={"Select Language Skills"}
                            itemSelected={languageSkills}
                            list={languageSkillsLabels}
                            onClickItem={this.onClickAddLanguageSkills}
                            onClickRemoveItem={this.onClickRemoveLanguageSkills}
                        />


                    </div>
                </div>

                <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <label>Education <span className="secondaryText">Schools & Courses</span></label>

                        <DropDownForm
                            title={"Select Education"}
                            itemSelected={education}
                            list={educationLabels}
                            onClickItem={this.onClickAddEducation}
                            onClickRemoveItem={this.onClickRemoveEducation}
                        />

                    </div>

                    <div className="flex_inner_col input_with_label">
                        <label>Work Experience <span className="secondaryText">Previous & Current Positions</span></label>

                        <DropDownForm
                            title={"Select Work Experience"}
                            itemSelected={workExperience}
                            list={workExperienceLabels}
                            onClickItem={this.onClickAddWorkExperience}
                            onClickRemoveItem={this.onClickRemoveWorkExperience}
                        />


                    </div>
                </div>
                <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <label>Additional Information</label>
                        <textarea rows="4" cols="50">
                        </textarea>
                    </div>
                </div>
                <div className="flex_inner_row_1">
                    <div className="flex_inner_col input_with_label">
                        <button className='submitButton' type='button' onClick={() => console.log('hello save')}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default graphql(currentUser, {
    currentUser: ({ data }) => {
        return data.currentUser
    }
})(UserProfile)