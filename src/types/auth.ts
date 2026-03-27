export type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  image: string
  gender: string
}

export type UserResponse = User & {
  refreshToken: string
  accessToken: string
}
