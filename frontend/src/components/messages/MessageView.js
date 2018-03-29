import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MessageView extends Component {

  componentDidMount() {
    this.goToMessagesEnd();
  }

  render() {
    return (
    <div className="message-view__container">
      <div className="message-view__messages">
        { this.renderMessageList()}
      </div>

      <div className="message-view__text-box">
        <textarea name="newMessage" className="message-view__new-message" placeholder="type a message"></textarea>
        <button className="btn message-view__send"> Send </button>
      </div>
    </div>)
  }

  renderMessageList = () => {
    const { messages } = this.props;
    return messages.map( (message, i) => {
      return (
        <div key={i} className={this.getMessageClass(message)}>
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

  goToMessagesEnd = () => {
    const messagesElement = document.querySelector('.message-view__messages');
    const top = messagesElement.scrollHeight - messagesElement.clientHeight;
    messagesElement.scrollTop = top
  }
}

export default MessageView;