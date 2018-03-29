import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MessageView extends Component {
  render() {
    return (
    <div className="message-view__container">
      <div className="message-view__messages">
        { this.renderMessageList()}
      </div>

      <div className="message-view__new">
      </div>
    </div>)
  }

  renderMessageList = () => {
    const { messages } = this.props;

    return messages.map( message => {
      return (
        <div className={this.getMessageClass(message)} key={message.id}>
            <p className="message__body"> {message.text} </p>
            <p className="message__footer">
              <small className="message__time"> 7:45 pm </small>
              <small className="message__state"></small>
            </p>
        </div>
      )
    })
  }

  getMessageClass = (message) => {
    const { me } = this.props;
    let messageClass = 'message'
    if (message.sender == me.email) {
      messageClass += ' me'
    }
    return messageClass;
  }
}

export default MessageView;