import { User } from "./user"

export const testUser: User = {
  email: 'mywebtest0+auto@gmail.com',
  password: '12345678'
}

export const invalidPasswordUser: User = {
  email: 'mywebtest0+auto@gmail.com',
  password: '123456778' // invalid password
}
