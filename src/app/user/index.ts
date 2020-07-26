import { usersRepository } from '../../infra/database'
import makeCreateUser from './create'

const createUser = makeCreateUser({ usersRepository })

const userService = {
  createUser
}

export default userService
export { createUser }
