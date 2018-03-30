import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './UserProfile.css';
import { getUserProfile } from '../../actions/userProfileActions';

class UserProfile extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getUserProfile());
  }

  render() {
    const { userProfile } = this.props;
    const { name, location, skills, languageSkills, links } = userProfile;
    return (
      <section className="user-profile-container">
        <main className="user-profile-content">
          <section className="user-profile-image-section">
            <div className="user-profile-image-container">
              <img
                className="user-profile-image"
                src="https://farm3.staticflickr.com/2463/4078338273_eb01dbde3c.jpg"
                alt="Guy posing"
              />
            </div>
          </section>
          <section className="user-profile-information-section">
            <div className="user-profile-form-container">
              <h3 className="user-profile-information-header">{name}</h3>
              <div className="user-profile-body">
                <p className="user-profile-information-paragraph">
                  Living in:{' '}
                </p>
                <p className="user-profile-information-subtext">{location}</p>
              </div>
              <p className="user-profile-information-paragraph">
                Introduction:{' '}
              </p>
            </div>
            <hr />

            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">Skills</h3>
                <p className="user-profile-paragraph-header">
                  My most important professional skills
                </p>
              </div>
              {skills.map((skill, i) => (
                <div className="user-profile-body" key={i}>
                  <p className="user-profile-information-paragraph">
                    {skill.skill}
                  </p>
                  <p className="user-profile-information-paragraph-dark">
                    {skills.length} {skills.length === 1 ? 'year' : 'years'}
                  </p>
                </div>
              ))}
            </div>
            <hr />
            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">
                  Language Skills
                </h3>
                <p className="user-profile-paragraph-header">
                  My languages and proficiency levels
                </p>
              </div>
              {languageSkills.map((language, i) => (
                <div className="user-profile-body" key={i}>
                  <p className="user-profile-information-paragraph">
                    {language.language}
                  </p>
                  <p className="user-profile-information-paragraph-dark">
                    {language.proficiency}
                  </p>
                </div>
              ))}
            </div>
            <hr />

            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">Links</h3>
                <p className="user-profile-paragraph-header">
                  My social media and homepage links
                </p>
              </div>
              {links.map((link, i) => (
                <div className="user-profile-body" key={i}>
                  <p className="user-profile-information-paragraph">
                    {link.name}
                  </p>
                  <p className="user-profile-information-paragraph-dark">
                    {link.link}
                  </p>
                </div>
              ))}
            </div>
            <hr />
            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">
                  Work Experience
                </h3>
                <p className="user-profile-paragraph-header">
                  Previous and Current Positions
                </p>
              </div>
            </div>
            <hr />
            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">Education</h3>
                <p className="user-profile-paragraph-header">
                  Schools and courses
                </p>
              </div>
            </div>
          </section>
        </main>
      </section>
    );
  }
}

UserProfile.propTypes = {
  userProfile: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userProfileReducer.userProfile
});

export default connect(mapStateToProps)(UserProfile);
