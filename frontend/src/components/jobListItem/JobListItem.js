import React from 'react';
import './JobListItem.css';
import placeholderImg from './../../assets/img/home-video-background.jpg';

const JobListItem = (props) => {
    return(
        <article className="job-item">
            <img className="job-item__image" src={placeholderImg}/>
            <div className="job-item__body">
            <h3 className="job-item__title"> Backend Software Engineer</h3>
            <p className="job-item__location"> At <span className="job-item__company">Uber,</span> Arrhus, Denmark</p>
            <p className="job-item__desciption">
                daskdjaskjd laksjd kajsdkljas kdjaklsjd kajsdkljasakslj
                aslkdjaksjdkasjd klajskdjaks...
            </p>
            <div className="job-item__action">
                <span className="job-item__apply">
                    <span className="job-item__limit">10 days</span> 
                    to apply
                </span>
                <button className="job-item__save">Save <i className="material-icons">bookmark_border</i></button>
            </div>
            </div>         
        </article>
    )
}

export default JobListItem;