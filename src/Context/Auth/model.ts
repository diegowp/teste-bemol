export interface IAuth {
  uid: string
  name: string
  photo: string
  email: string
  address?: IUserAddress
}

export interface IUserAddress {
  zipcode: string
  street: string
  number: string
  neighborhood: string
  complement: string
  city: string
  state: string
}
