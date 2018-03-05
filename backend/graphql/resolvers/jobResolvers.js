import  jobModel from '../model/jobModel';


const jobResolvers = {
  Query: {
     job(_,{id}) {       
       return jobModel.find({id: id}, {"_id":0, "id":1, "positionName":1}).then(function(job)
       {         
         return job[0];        
       },
       function(err) {
        console.log('cry error ', err);
       }
       );
     },
     jobs() {
     return jobModel.find({},{"_id":0, "id":1, "positionName":1}).then(function(job) {        
         return  job; 
       },    
       function(err) {  
         console.log('cry error ', err);                 
       }
     );
   }
  }
}

export default jobResolvers

