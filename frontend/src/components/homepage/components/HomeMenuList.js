import React from 'react';

const HomeMenuList = props => {
    return(
        <article className="home-press-item">
            <h2 className="home-pres-item__title"> { props.title ? props.title : 'Jesus Guerrero'} </h2>
            {
                props.showSubtitle && (subTitle(props))
            }
            
            <ul className="footer-menu">
                {getLinks(props.links)}              
            </ul>
        </article>
    )

}

export default HomeMenuList;

const subTitle = props => {
    return (
        <p> {props.subTitle ? props.subTitle : 'From La Romana, Dominican Republic'}</p>
    )
}

const getLinks = links => {
    return links.map((link) => (<li className="footer-menu__link"><a href={link.href}>{link.title}</a></li>))
}
