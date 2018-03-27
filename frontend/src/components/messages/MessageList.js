import React from 'react';

const MessageList = (props) => {
  console.log(props);
  return props.messages.map( message => {
    return (
      <div>
        <p> {message[props.type].fullname} </p>
        <p> {message.messages[0].text} </p>
      </div>
    )
  })
}

export default MessageList;