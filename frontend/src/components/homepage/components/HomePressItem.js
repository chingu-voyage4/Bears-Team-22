import React from 'react';

const quote = props => {
    return(
        <article className="home-press-item">
            <h2 className="home-pres-item__title"> { props.title ? props.title : 'Jesus Guerrero'} </h2>
            {
                props.showSubtitle && (subTitle(props))
            }
            
            <p>
                daskdjaskjd laksjd kajsdkljas kdjaklsjd kajsdkljasakslj
                aslkdjaksjdkasjd klajskdjaksjdkajskjdkajsdkasjkdjkasjkj
            </p>
            <a href="/post"> Read Post</a>
        </article>
    )

}

const subTitle = props => {
    return (
        <p> {props.subTitle ? props.subTitle : 'From La Romana, Dominican Republic'}</p>
    )
}
export default quote;