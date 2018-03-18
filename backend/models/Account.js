import mongoose , { SchemaTypes as Types } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const AccountSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
	fullname: String,

	social: {
		linkedin: String,
		personalWebsite: String,
		facebook: String,
		twitter: String,
		google: String
	},
	accountType: String,
	isDeactivated: { type: Boolean, default: false },
  loginToken: String,
  loginTokenValid: { type: Boolean, default: false },

})

AccountSchema.plugin(passportLocalMongoose, {
	usernameField: 'email'
})

export default mongoose.model('Account', AccountSchema)
