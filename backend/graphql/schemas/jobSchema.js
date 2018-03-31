export default ` 

  type Job {    
      id: Int,
      positionName: String,
      jobTitle: String,
      company: [Company],
      location: String,
      employmentType: String,
      jobFunction: String,
      jobDescription: String
            
  }
   type Query {
  jobs: [Job],
  job(id: Int!): Job
}
`;

