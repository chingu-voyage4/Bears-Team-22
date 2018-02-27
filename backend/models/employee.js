const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  email: { type: String, unique: true }, 
  password: String,

  firstName: String,
  lastName: String,
  living: String,
  introduction: String,

  skills: [{
    skill: String,
    experience: String
  }],

  languages: [{
    language: String,
    proficiency: String
  }],

  social: {
    linkedin: String,
    personalWebsite: String,
    facebook: String,
    twitter: String,
    google: String
  },

  work: [{
    position: String,
    company: String,
    location: String,
    from: Date,
    to: Date,
    current: Boolean,
    additionalInfo: String
  }],

  education: [{
    degree: String,
    field: String,
    university: String,
    location: String,
    from: Date,
    to: Date,
    current: Boolean,
    additionalInfo: String
  }],


  preferences: {
    personal: {
      locations: [String],
      jobs: [String],
      citizenship: [String],
      lookingFor: String
    },
    dob: Date,
    gender: String,
    social: {
      facebook: { type: Boolean, default: false },
      google: { type: Boolean, default: false },
      linkedin: { type: Boolean, default: false }
    },
    notifications: {
      lookingForJob: { type: Boolean, default: true },
      subscribeNewsJob: { type: Boolean, default: true },
      subscribeNewsBusiness: { type: Boolean, default: false },
      hideProfile: { type: Boolean, default: false }
    }
  },

  isDeactivated: { type: Boolean, default: false },


  savedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jobs"
  }],

  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jobs"
  }],

  loginToken: String,
  loginTokenValid: { type: Boolean, default: false }
  
})