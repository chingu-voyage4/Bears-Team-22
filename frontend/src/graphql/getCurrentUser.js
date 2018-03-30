import gql from "graphql-tag";

const getCurrentUser = gql`
query currentUser {
  currentUser {
    id,
    email,
    accountType,
    fullname,
    picture
  }
}`

export default getCurrentUser;