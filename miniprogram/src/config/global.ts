import { User } from '@/pages/user/model'
import { Department } from '@/pages/department/model'

type IGlobalData = {
  User?: User,
  UserDepartment: Department[],
  Menu: [],
  RequestSubscribeMessageCount: number,
}

const GlobalData: IGlobalData = {
  RequestSubscribeMessageCount: 0,
  UserDepartment: [],
  Menu: []
}

export const set = (key:
  'User' |
  'UserDepartment' |
  'Menu' |
  'RequestSubscribeMessageCount', val) => { GlobalData[key] = val }

export const get = (key:
  'User' |
  'UserDepartment' |
  'Menu' |
  'RequestSubscribeMessageCount') => { return GlobalData[key] }

