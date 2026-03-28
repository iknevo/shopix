export type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  image: string
  birthDate: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: {
    color: string
    type: string
  }
  ip: string
  macAddress: string
  university: string
  ssn: string
  userAgent: string
  role: string
  password: string
  phone: string

  address: {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    country: string
  }

  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }

  company: {
    department: string
    name: string
    title: string
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      country: string
    }
  }

  crypto: {
    coin: string
    wallet: string
    network: string
  }
}

export type UserResponse = User & {
  refreshToken: string
  accessToken: string
}
