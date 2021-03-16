import Taro from '@tarojs/taro'
import { CommitteeMenu, GovMenu, TeamMenu } from '@/config/constant'
import { User } from '@/pages/user/model'
import { getAllDepartmentByUser } from '@/pages/department/service'

export const userLogin = async () => {
    const user = (await Taro.cloud.callFunction({ name: 'UserLogin' })).result as User
    let department
    let menu
    if (user.status && user.status == 'complete') {
        department = await getAllDepartmentByUser(user.openid)
        menu = getMenuByRole(user.role)
    }
    else if (user.status && user.status == 'incomplete') {
        Taro.reLaunch({ url: '/pages/user/authorize' })
    }
    else {
        Taro.reLaunch({ url: '/pages/user/register?openid=' + user.openid })
    }
    return { user, department, menu }
}

export const getMenuByRole = (role: string) => {
    let menu: { image: any, value: string, url: string }[] = []
    switch (role) {
        case '清淘队伍':
            menu = TeamMenu
            break;
        case '村委会':
            menu = CommitteeMenu
            break;
        case '镇政府':
            menu = GovMenu
            break;
        default:
            break;
    }
    return menu
}
