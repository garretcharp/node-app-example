import makeDb from '../../../../__test__/fixtures/db'
import makeUsersDb from './usersRepository'
import createFakeUser from '../../../../__test__/fixtures/user'

describe('comments db', () => {
  let usersRepository: any

  beforeEach(async () => {
    usersRepository = makeUsersDb({ makeDb })
  })

  it('inserts a user', async () => {
    const user = createFakeUser({})
    const result = await usersRepository.insert(user)
    return expect(result).toEqual(user)
  })
})