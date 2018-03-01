import React from 'react';

const HomeCover = props => {
    return(
        <section className="cover">
                { props.title && <h1> {props.title} </h1>}
            <article className="cover__leftside">
                <p className="cover__title"> 
                    Work in something you love <br/> 
                    <small className="text-remark">and you'll never work</small>
                </p>
            </article>

            <article className="cover__rightside">
                <a href="/jobs" className="btn cover__button">Find Jobs</a>
            </article>
        </section>
    )
} 

export default HomeCover;