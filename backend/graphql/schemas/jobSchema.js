const jobSchema = `
  type Query {
      jobs: [Job],
      job(id: Int!): Job
    }
  type Job {    
      id: Int,
      positionName: String  
            
  }
`;

export default jobSchema;