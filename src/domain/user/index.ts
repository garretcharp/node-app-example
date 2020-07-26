import Id from '../../utils/id'
import buildMakeUser from './user'

import * as upash from 'upash'
import argon from '@phc/argon2'
upash.install('argon2', argon)

async function generatePasswordHash (password: string): Promise<string> {
  return await upash.use('argon2').hash(password)
}

const makeUser = buildMakeUser({ Id, generatePasswordHash })

export default makeUser
