import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'samir ',
    email: 'samir@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
