import { withRouter } from 'react-router-dom';


const redirect = (path) => withRouter(({ history }) => {
  console.log('redirectin to %s', path)
  history.push(path)
})

export default redirect;