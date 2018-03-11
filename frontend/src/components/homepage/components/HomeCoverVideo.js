import React from 'react';

const HomeCoverVideo = props => {
    return(
        <section className="cover video">
                { props.title && <h1 className="section-part__title white"> {props.title} </h1>}
            <article className="cover__leftside">
                <p className="cover__title"> 
                    <small className="text-remark">
                    Is get you there, cross barriers <br/> and connect you <br/> 
                    with your dreams' job
                    </small>
                </p>
            </article>

            <article className="cover__rightside">
                <a href="/jobs" className="btn cover__button">Play Video</a>
            </article>
        </section>
    )
} 

export default HomeCoverVideo;