import { login, logout } from '../../actions/auth';

test('Should test login action generator', () => {
  const uid = 'xxxxx'
  expect(login('xxxxx')).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('Should test logout action generator', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  })
})