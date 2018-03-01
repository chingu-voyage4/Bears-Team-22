import React from 'react';

const quote = props => {
    return(
        <article className="home-quote">
            <img className="home-quote__image" src=""/>
            <h2 className="home-quote__title"> { props.title ? props.title : 'Jesus Guerrero'} </h2>
            {
                props.showSubtitle && (subTitle(props))
            }
            
            <p>
                daskdjaskjd laksjd kajsdkljas kdjaklsjd kajsdkljasakslj
                aslkdjaksjdkasjd klajskdjaksjdkajskjdkajsdkasjkdjkasjkj
                laskjdkasjdkjaskjdakjsdk aksjd akjsd kasj dka jdkjak jdkjak
                ksjadkjs dkajksjd ka dkaj dka dkajd akjd ksj kajs dkaj d.
            </p>
        </article>
    )

}

const subTitle = props => {
    return (
        <p> {props.subTitle ? props.subTitle : 'From La Romana, Dominican Republic'}</p>
    )
}
export default quote;