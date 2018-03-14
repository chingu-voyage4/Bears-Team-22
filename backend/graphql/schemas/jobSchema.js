const jobSchema = ` 
extend type Query {
  jobs: [Job],
  job(_id: Int!): Job
}
  type Job {    
      _id: Int,
      positionName: String,
      jobTitle: String,
      company: [Company],
      location: String,
      employmentType: String,
      jobFunction: String,
      jobDescription: String
            
  }
`;

export default jobSchema;