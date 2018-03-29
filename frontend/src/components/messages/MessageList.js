import React from 'react';
import { Link } from 'react-router-dom';

const MessageList = (props) => {
  return props.messages.map( message => {
    return (
      <Link className="thread" to={`/${props.type}/messages/${message.id}`}>
        <div className="thread__picture-container">
          <img className="thread__user-picture" src={message[props.type].picture}/>
        </div>
        <div className="thread__content">
          <div className="thread__header">
            <span className="thread__title"> {message[props.type].fullname} </span>
            <small className="thread__time"> 7:49 PM</small>
          </div>
          <p className="thread__body"> {message.messages[0].text} </p>
        </div>
      </Link>
    )
  })
}

export default MessageList;