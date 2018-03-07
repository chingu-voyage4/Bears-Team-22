import React from 'react';
import HomeCover from './components/HomeCover';
import HomeCoverVideo from './components/HomeCoverVideo';
import HomeQuote from './components/HomeQuote';
import HomePressItem from './components/HomePressItem';
import JobListItem from './../jobListItem/JobListItem';
import './Home.css';

const Home = props => {

    return(
        <div className="home">
            <HomeCover/>

            <section className="section-part latest-jobs">
                <h1 className="section-part__title"> Latest Jobs </h1>

                 <div className="row-container">
                    <JobListItem/>
                    <JobListItem/>
                    <JobListItem/>
                </div>

            </section>

            <section className="section-part quote">
                <h1 className="section-part__title white"> Are you a Company? </h1>
                <a href="/new_job" className="btn-white"> Post a Job </a>

            </section>

            <section className="section-part offers">
                <h1 className="section-part__title"> What we offer </h1>
                <div className="row-container">
                    <HomeQuote 
                        title="Life changing Careers" 
                        showSubtitle={false} 
                        text="" 
                        picture=""/>
                    <HomeQuote 
                        title="Relocation Help" 
                        showSubtitle={false} 
                        text="" 
                        picture=""/>
                </div>
                
            </section>

             <section className="section-part offers">
                <h1 className="section-part__title"> Press About us </h1>
                <div className="row-container">
                    <HomePressItem 
                            title="Life changing Careers" 
                            showSubtitle={false} 
                            text="" 
                            picture=""
                            classToAdd="press"/>
                    <HomePressItem
                            title="Life changing Careers" 
                            showSubtitle={false} 
                            text="" 
                            picture=""
                            classToAdd="press"/>
                    <HomePressItem 
                            title="Life changing Careers" 
                            showSubtitle={false} 
                            text="" 
                            picture=""
                            classToAdd="press"/>
                </div>
                
            </section>

            <HomeCoverVideo title="Our Mission"/>

            <section className="section-part quote">
                <h1 className="section-part__title white"> Quotes </h1>
                <div className="row-container">
                    <HomeQuote
                        showSubtitle={true}
                        />
                    <HomeQuote
                        showSubtitle={true}
                    />
                </div>

                <h2 className="title"> Start your journey </h2>
                <p>
                    akdljaksd jkajd kasjd kajsd kjaskdj askjd kasjd kajsd kdjaklsjd
                    skladj aksjdk sajdkajsd kasj dkjas kjdkas jdksaj kdja ksjks jdk
                </p>

                <a href="/registration" className="btn-white"> Join </a>


            </section>
        </div>
    )
}

export default Home;