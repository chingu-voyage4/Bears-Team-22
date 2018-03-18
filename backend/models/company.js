const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const CompanySchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
	name: String,

	social: {
		type: Object,
		default: {
			linkedin: '',
			personalWebsite: '',
			facebook: '',
			twitter: '',
			google: ''
		}
	},

	isDeactivated: { type: Boolean, default: false },
  loginToken: String,
  loginTokenValid: { type: Boolean, default: false },

	company: {
		introduction: String,

		languages: [{
			language: String,
		}],

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
		}]
	}
})

CompanySchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
})

module.exports = mongoose.model('Company', CompanySchema)
