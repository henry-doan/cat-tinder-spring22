import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import Flash from '../shared/Flash';

const Login = ({ handleLogin, errors, setErrors }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
    setUser({ email: '', password: '' })
  }

  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        :
        null
      }
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          required
          name='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='Email'
        />
        <input 
          type='password'
          required
          name='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Password'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedLogin;