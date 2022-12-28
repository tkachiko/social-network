import {followSuccess, InitialStateType, unfollowSuccess, usersReducer, UserType} from './users-reducer'

let startState: InitialStateType

beforeEach(() => {
  startState = {
    users: [{
      id: 1,
      photos: {large: 'string', small: 'string'},
      followed: false,
      name: 'Elena',
      status: '',
      location: {city: 'string', country: 'string'},
    },
      {
        id: 2,
        photos: {large: 'string', small: 'string'},
        followed: true,
        name: 'Alex',
        status: '',
        location: {city: 'string', country: 'string'},
      },
      {
        id: 3,
        photos: {large: 'string', small: 'string'},
        followed: false,
        name: 'Hanna',
        status: '',
        location: {city: 'string', country: 'string'},
      },
    ] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 55,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 3],
  }
})

test('correct user should be followed', () => {
  const action = followSuccess(1)

  const endState = usersReducer(startState, action)

  expect(endState.users[0].followed).toBe(true)
})
test('correct user should be unfollowed', () => {
  const action = unfollowSuccess(2)

  const endState = usersReducer(startState, action)

  expect(endState.users[1].followed).toBe(false)
})
