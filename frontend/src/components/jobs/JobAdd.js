import React, {Component} from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";


const jobs = gql`
query jobs{
    jobs {
    id,
    positionName
}}
`
class JobAdd extends Component {
    
    render() {
        console.log('data from graph ', this.props.data.jobs)
        return (
            <div>
                { this.props.data.jobs ?
                    this.props.data.jobs.map(item => <p key={item.id}>{item.positionName}</p>)
                    :
                    null
                }
                <h1>Apollo graphql is a live!!!</h1>
            </div>
        )
    }
}


export default graphql(jobs, {
    jobs: ({data}) => {
        return data.jobs
    }
})(JobAdd)