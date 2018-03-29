import React, { Component } from 'react';
import MessageList from './MessageList';
import './Messages.css';
export default class Messages extends Component {

  state = {
    threads: [{
      id: 1,
      members: ['jesusant.guerrero@gmail.com','test@example.com'],
      company: {
        picture: '',
        fullname: 'The Company'
      },
      employee: {
       fullname: 'The Candidate',
       picture: ''
      },
      messages: [{
        text: 'Hello World'
      }]
    },
    {
      id: 2,
      members: ['jesusant.guerrero@gmail.com','test@example.com'],
      company: {
        picture: '',
        fullname: 'The Company'
      },
      employee: {
       fullname: 'The Candidate',
       picture: ''
      },
      messages: [{
        text: 'Message Two'
      }]
    }
  ]
  }
    render() {
      return (
        <div className="message-section">
          <div className="message-list__container">
            <div className="message-list__header">
              <h4> Messages </h4>
            </div>
              <MessageList messages={this.state.threads} type="employee"/>
          </div>
        </div>
      );
    }
}
