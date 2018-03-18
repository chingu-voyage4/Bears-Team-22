const AccountSchema = `
    type Account {
				id: String!
				email: String!,
				password: String,
        fullname: String,
				social: Social,
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

    extend type Query {
			me: Account,
			accounts: [Account]
    }

    extend type Mutation {
      registerAccount(email: String, password: String, fullname: String) : Account
			login(email: String, password: String) : Account
			remove: Boolean
    }
`;

export default AccountSchema;
