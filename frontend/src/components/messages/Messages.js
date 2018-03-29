import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageView from './MessageView';
import './Messages.css';
import placeholder from './../../assets/img/placeholder.jpg';
export default class Messages extends Component {

  state = {
    threads: [
      {
      id: 1,
      members: ['jesusant.guerrero@gmail.com','test@example.com'],
      company: {
        picture: placeholder,
        fullname: 'The Company'
      },
      employee: {
       fullname: 'The Candidate',
       picture: placeholder
      },
      messages: [{
        text: 'Hello World'
      }]
      },

      {
        id: 2,
        members: ['jesusant.guerrero@gmail.com','test@example.com'],
        company: {
          picture: placeholder,
          fullname: 'The Company'
        },
        employee: {
        fullname: 'The Candidate',
        picture: placeholder
        },
        messages: [{
          text: 'Message Two'
        }]
      }
    ],

    thread: {
        id: 1,
        members: ['jesusant.guerrero@gmail.com','test@example.com'],
        company: {
          picture: '',
          fullname: 'The Company',
          email: 'test@example.com'
        },
        employee: {
         fullname: 'The Candidate',
         picture: '',
         email: 'jesusant.guerrero@gmail.com'
        },

        messages: [{
          id: 1,
          thread: 1,
          sender: 'me@jesusant.guerrero.com',
          receiver: 'test@example.com',
          text: 'Hello I am the candidate',
          seen: false },
          {
            id: 2,
            thread: 1,
            sender: 'test@example.com',
            receiver: 'me@jesusant.guerrero.com',
            text: 'Hello I am the company ',
            seen: false
          },
          {
            id: 1,
            thread: 1,
            sender: 'me@jesusant.guerrero.com',
            receiver: 'test@example.com',
            text: 'candidate message',
            seen: false },
            {
              id: 2,
              thread: 1,
              sender: 'test@example.com',
              receiver: 'me@jesusant.guerrero.com',
              text: 'company message',
              seen: false
            },
            {
              id: 1,
              thread: 1,
              sender: 'me@jesusant.guerrero.com',
              receiver: 'test@example.com',
              text: 'candidate message',
              seen: false },
              {
                id: 2,
                thread: 1,
                sender: 'test@example.com',
                receiver: 'me@jesusant.guerrero.com',
                text: 'company message',
                seen: false
              },
              {
                id: 1,
                thread: 1,
                sender: 'me@jesusant.guerrero.com',
                receiver: 'test@example.com',
                text: 'candidate message',
                seen: false },
                {
                  id: 2,
                  thread: 1,
                  sender: 'test@example.com',
                  receiver: 'me@jesusant.guerrero.com',
                  text: 'company message',
                  seen: false
                }
        ]
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="message-section">
        <div className="message-list__container">
          <div className="message-list__header">
            <h4> Messages </h4>
          </div>
            <MessageList messages={this.state.threads} accountType="company" receiverType="employee"/>
        </div>

        <div className="message-view">
          <div className="message-view__header">
            <h4> {this.state.thread.employee.fullname} </h4>
          </div>
            <MessageView messages={this.state.thread.messages} me={this.state.thread.company}/>
        </div>
      </div>
    );
  }
}
