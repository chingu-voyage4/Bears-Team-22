import React from 'react';
import { NavLink } from 'react-router-dom';

const MessageList = (props) => {
  const receiverType = props.accountType == 'company' ? 'employee' : 'company';

  return props.messages.map( (message, i) => {

    return (
      <NavLink key={i} className="thread" to={`/${props.accountType}/messages/${message.id}`}>
        <div className="thread__picture-container">
          <img className="thread__user-picture" src={message[receiverType].picture}/>
        </div>
        <div className="thread__content">
          <div className="thread__header">
            <span className="thread__title"> {message[receiverType].fullname} </span>
            <small className="thread__time"> 7:49 PM</small>
          </div>
          <p className="thread__body"> {message.messages[0].text} </p>
        </div>
      </NavLink>
    )
  })
}

export default MessageList;