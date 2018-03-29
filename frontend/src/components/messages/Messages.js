import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageView from './MessageView';
import './Messages.css';
export default class Messages extends Component {

  state = {
    threads: [
      {
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
          text: 'Hola Como Estan',
          seen: false },
          {
            id: 2,
            thread: 1,
            sender: 'test@example.com',
            receiver: 'me@jesusant.guerrero.com',
            text: 'Hola Pueblo ',
            seen: false
          },
          {
            id: 1,
            thread: 1,
            sender: 'me@jesusant.guerrero.com',
            receiver: 'test@example.com',
            text: 'Hola Como Estan',
            seen: false },
            {
              id: 2,
              thread: 1,
              sender: 'test@example.com',
              receiver: 'me@jesusant.guerrero.com',
              text: 'Hola Pueblo ',
              seen: false
            },
            {
              id: 1,
              thread: 1,
              sender: 'me@jesusant.guerrero.com',
              receiver: 'test@example.com',
              text: 'Hola Como Estan',
              seen: false },
              {
                id: 2,
                thread: 1,
                sender: 'test@example.com',
                receiver: 'me@jesusant.guerrero.com',
                text: 'Hola Pueblo ',
                seen: false
              },
              {
                id: 1,
                thread: 1,
                sender: 'me@jesusant.guerrero.com',
                receiver: 'test@example.com',
                text: 'Hola Como Estan',
                seen: false },
                {
                  id: 2,
                  thread: 1,
                  sender: 'test@example.com',
                  receiver: 'me@jesusant.guerrero.com',
                  text: 'Hola Pueblo ',
                  seen: false
                }
        ]
    }
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
