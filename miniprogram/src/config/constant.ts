import { Toast } from '@/types/common'
import AddInfo from '@/assets/menu/addInfo.png'
import SearchInfo from '@/assets/menu/searchInfo.png'
import Committee from '@/assets/menu/committee.png'
import WorkTeam from '@/assets/menu/workTeam.png'
import NewTask from '@/assets/menu/newTask.png'
import SearchTask from '@/assets/menu/searchTask.png'
import PunchIn from '@/assets/menu/punchIn.png'
import WaitTask from '@/assets/menu/waitTask.png'
import WorkLedger from '@/assets/menu/workLedger.png'
import Statistics from '@/assets/menu/statistics.png'
import User from '@/assets/menu/user.png'

export const TMPLIDS = ['yZVady_O5ejBKqo71dD1mZKbcUXCKhWUyqMeO76dbY8']

type Message = { type: 'success' | 'error' | 'warning' | 'info', message: string, duration: number }

export const RefreshMessage: Message = { type: 'success', message: '刷新成功!', duration: 1000 }
export const SuccessMessage: Message = { type: 'success', message: '操作成功!', duration: 1000 }
export const WarningMessage: Message = { type: 'warning', message: '操作失败!', duration: 1000 }
export const ErrorMessage: Message = { type: 'error', message: '危险操作!', duration: 3000 }

export const LOADING_EVENT = 'loading'
export const INIT_EVENT = 'init'
export const REFRESH_EVENT = 'refresh'

export const RefreshToast = { isOpened: true, text: "更新成功!", duration: 1000, status: 'success' } as Toast
export const LoadingToast = { isOpened: true, text: "正在加载!", duration: 15000, status: 'loading' } as Toast
export const SuccessToast = { isOpened: true, text: "操作成功!", duration: 1000, status: 'success' } as Toast
export const ErrorToast = { isOpened: true, text: "操作失败!", duration: 1000, status: 'error' } as Toast
export const UploadToast = { isOpened: true, text: '正在上传!', duration: 0, status: 'loading' } as Toast
export const InitToast = { isOpened: false } as Toast

export const INIT_STATE_SELECTOR = {
    sex: ['男', '女'],
    role: ['清淘队伍', '村委会', '镇政府'],
    obj: ['贫困户', '低保户', '特困户', '残疾户', '一般户'],
    toiletChange: ['新建', '改建'],
    septicTank: ['砖砌三格', '注塑拼装', '其他'],
    committee: [],
}

export const INIT_STATE_LOCATION = {
    name: "东成镇",
    address: "",
    latitude: 19.703781,
    longitude: 109.46154,
}

export const INIT_STATE_MAP = {
    _id: '',
    name: "东成镇",
    location: {
        latitude: 19.703781,
        longitude: 109.461540
    }
}

export const Menu = [
    {
        image: AddInfo,
        value: "病例建档",
        url: "/pages/farmer/curd/index?type=create",
    },
    {
        image: SearchInfo,
        value: "病例查询",
        url: "/pages/farmer/index",
    },
]