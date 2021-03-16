import Taro from '@tarojs/taro'
import { AppContextType } from '@/config/context'

const db = Taro.cloud.database()
const _ = db.command

export const DEPARTMENT_READ = (appContext: AppContextType) => {
    let filter = {}
    const User = appContext.user
    const UserDepartment = appContext.department
    const UserDepartmentIds = UserDepartment.map(item => item._id)
    switch (User?.role) {
        case '清淘队伍':
            filter = {}
            break;
        case '村委会':
            filter = { '_id': _.in(UserDepartmentIds) }
            break;
        case '镇政府':
            filter = {}
            break;
        default:
            break;
    }
    return filter
}

export const FARMER_READ = (appContext: AppContextType) => {
    let filter = {}
    const User = appContext.user
    const UserDepartment = appContext.department
    const UserDepartmentIds = UserDepartment.map(item => item._id)
    switch (User?.role) {
        case '清淘队伍':
            filter = {}
            break;
        case '村委会':
            filter = { 'committee._id': _.in(UserDepartmentIds) }
            break;
        case '镇政府':
            filter = {}
            break;
        default:
            break;
    }
    return filter
}

export const TASK_READ = (appContext: AppContextType) => {
    let filter = {}
    const User = appContext.user
    const UserDepartment = appContext.department
    const UserDepartmentIds = UserDepartment.map(item => item._id)
    switch (User?.role) {
        case '清淘队伍':
            filter = { 'teams._id': _.in(UserDepartmentIds) }
            break;
        case '村委会':
            filter = { 'farmers.committee._id': _.in(UserDepartmentIds) }
            break;
        case '镇政府':
            filter = {}
            break;
        default:
            break;
    }
    return filter
}