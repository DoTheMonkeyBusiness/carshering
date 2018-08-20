import { schema, normalize } from 'normalizr'
import usersList from '../users/users'

//normalized query
// --------------------------------------------
const user = new schema.Entity('users')
const userL = new schema.Entity('userList', {
  users: [user]
})

const normalizedData = normalize(usersList, userL)
// --------------------------------------------

export default normalizedData
