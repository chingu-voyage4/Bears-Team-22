import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
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
              <h3 className="user-profile-information-header">Captain Gates</h3>
              <div className="user-profile-body">
                <p className="user-profile-information-paragraph">Living in:</p>
                <p className="user-profile-information-subtext">Washington</p>
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
              <div className="user-profile-body">
                <p className="user-profile-information-paragraph">Accounting</p>
                <p className="user-profile-information-paragraph-dark">
                  7+ years
                </p>
              </div>
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
              <div className="user-profile-body">
                <p className="user-profile-information-paragraph">French</p>
                <p className="user-profile-information-paragraph-dark">
                  Professional working proficiency
                </p>
              </div>
            </div>
            <hr />

            <div className="user-profile-form-container">
              <div className="user-profile-header">
                <h3 className="user-profile-information-header">Links</h3>
                <p className="user-profile-paragraph-header">
                  My social media and homepage links
                </p>
              </div>
              <div className="user-profile-body">
                <p className="user-profile-information-paragraph">LinkedIn</p>
                <p className="user-profile-information-paragraph-dark">
                  https://www.linkedin.com/in/captain-gates
                </p>
              </div>
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

export default UserProfile;
