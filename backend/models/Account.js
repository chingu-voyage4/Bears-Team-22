import mongoose, { SchemaTypes as Types } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const AccountSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	password: String,
	fullname: String,
	picture: String,
	livingIn: String,
	skills: [{ name: String, experience: String }],
	languageSkills: [{ name: String, proficiency: String }],

	social: {
		linkedin: String,
		personalWebsite: String,
		facebook: String,
		twitter: String,
		google: String,
	},

	workExperience: [{ position: String, company: String, location: String, from: Date, to: Date, current: Boolean, additional: String }],
	education: [{ degree: String, field: String, university: String, location: String, from: Date, to: Date, current: Boolean, additional: String }],

	accountType: String,
	isDeactivated: { type: Boolean, default: false },
	loginToken: String,
	loginTokenValid: { type: Boolean, default: false },

})

AccountSchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
})

export default mongoose.model('Account', AccountSchema)
