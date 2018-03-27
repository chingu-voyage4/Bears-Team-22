import React, { Component } from 'react';
import MessageList from './MessageList';

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
    }]
  }
    render() {
        return (
            <div className="">
                <h1> I am the Messages Page </h1>
                <MessageList messages={this.state.threads} type="employee"/>
            </div>
        );
    }
}
