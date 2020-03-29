import auth from '../../reducers/auth';

test('should set uid on login action dispatch', () => {
  const state = auth(undefined, {type: 'LOGIN', uid: 'xxxxx'})
  expect(state).toEqual({
    uid: 'xxxxx'
  })
})

test('Should set empty state on logout', () => {
  const state = auth({uid: 'xxxxx'}, {type: 'LOGOUT'})
  expect(state).toEqual({})
})