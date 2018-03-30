const AccountSchema = `
    type Account {
				id: String!
				email: String!,
				password: String,
        fullname: String,
				picture: String,
				livingIn: String,
				skills: [Skills],
				languageSkills: [LanguageSkills],
				social: Social,
				workExperience: [WorkExperience],
				education: [Education],
				accountType: String
        isDeactivated: Boolean,
  			loginToken: String,
  			loginTokenValid: Boolean,
		}

		type Social {
			linkedin: String,
			personalWebsite: String,
			facebook: String,
			twitter: String,
			google: String
		}

		type Skills {
			name: String,
			experience: String,
		}

		type LanguageSkills {
			name: String,
			proficiency: String,
		}

		type WorkExperience { 
			position: String, 
			company: String, 
			location: String, 
			from: Date, 
			to: Date, 
			current: Boolean, 
			additional: String 
		}

		type Education { 
			degree: String, 
			field: String, 
			university: String, 
			location: String, 
			from: Date, 
			to: Date, 
			current: Boolean, 
			additional: String 
		}

    extend type Query {
			currentUser: Account,
			accounts: [Account]
    }

    extend type Mutation {
      registerAccount(email: String, password: String, fullname: String, accountType: String) : Account
			login(email: String, password: String) : Account
			forgotPassword(email: String) : String
      logout: Boolean,
      remove: Boolean
    }
`;

export default AccountSchema;
