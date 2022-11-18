import { IAddress } from '@/Services/User/Models/User'
import axios from 'axios'

export async function searchAddress(cep: string) {
  const data = await axios.get<IAddress>(
    `https://viacep.com.br/ws/${cep}/json/`,
    {
      method: 'GET',
    }
  )
  return data.data
}
