import Account from '../models/company';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(Account.createStrategy());
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

export default passport;
