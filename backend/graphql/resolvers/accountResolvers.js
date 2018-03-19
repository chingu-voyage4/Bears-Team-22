import Account from '../../models/Account';
import passport from './../../services/passport';

const AccountResolvers = {
  Query: {
    me(parent, args, context) {
			if(context.sessionID) {
				return context.user
			}
				return false
		},

		accounts() {
			return Account.find(accunts => accounts)
		}
  },

  Mutation: {
      registerAccount(_, args, context) {
				return Account.register( new Account({email: args.email, fullname: args.fullname}), args.password)
			},

			async login(_, args, context) {
				const account = new Account({email: args.email});
				const result = await account.authenticate( args.password);
				return (result) ? result.user : {};
      },

      async forgotPassword(_, args, context) {
				const result = await Account.find({ email: args.email });
				return (result) ? 'your_token' : {};
			},


			remove() {
				return Account.remove({})
			}
  }
}

export default AccountResolvers

