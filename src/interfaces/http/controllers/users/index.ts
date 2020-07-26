import { createUser } from '../../../../app/user'

import makePostUser from './postUser'

const postUser = makePostUser({ createUser })

export { postUser }
