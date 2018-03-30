import Account from '../../models/Account';
import passport from './../../services/passport';

const AccountResolvers = {
  Query: {
   async currentUser(parent, args, req) {
      console.log(req.session.user)
      return (req.session.user) ? await Account.findById(req.session.user._id) : null
		},

		accounts() {
      return Account.find(accunts => accounts)
		}
  },

  Mutation: {
      async registerAccount(_, args, context) {
        const result = await Account.register( new Account({email: args.email, fullname: args.fullname, accountType: args.accountType}), args.password)
        saveToSession(result.user, context);
        return result;
      },

			async login(_, args, context) {
        const account = new Account({email: args.email});
        const result = await account.authenticate( args.password);
        saveToSession(result.user, context)
				return (result) ? result.user : {};
      },

      async logout(...rest) {
        const context = rest[3];
        delete context.session.user;
        context.session.save();
        return true;
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

function saveToSession(user, context) {
  console.log(context);
  context.session.user = user;
  context.session.save();
}

export default AccountResolvers

