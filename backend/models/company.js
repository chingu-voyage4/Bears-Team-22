const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Company = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,

  companyName: String,
  introduction: String,


  languages: [{
    language: String,
  }],

  social: {
    linkedin: String,
    personalWebsite: String,
    facebook: String,
    twitter: String,
    google: String
  },

  posting: [{
    position: String,
    seniorityLevel: [String],
    industry: [String],
    emloymentType: [String],
    jobFunctions: [String],
    location: {
      aboutCity: String,
      dailyLivingCosts: {
        lunch: Number,
        publicTransport: Number,
        movieTicket: Number,
        internet: Number,
        apartment: Number,
      },
      coordinates: {
        latitude: Number,
        longitutde: Number,
      }
    },
    keywords: [String],
    qualifications: String,
    responsibilities: String,
    educationRequirements: String,
    languageRequirements: [String],
    compensation: String,
    active: Boolean,
  }],

  isDeactivated: { type: Boolean, default: false },




  loginToken: String,
  loginTokenValid: { type: Boolean, default: false }

})

CompanySchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Company', CompanySchema)