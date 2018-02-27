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
  }]
})