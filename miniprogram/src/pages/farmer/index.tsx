import React from 'react'
import Taro from '@tarojs/taro'
import { InitToast } from '@/config/constant'
import { FetchParams, Page, Toast } from '@/types/common'
import CommonPage from '@/components/Common/Page'
import CommonList from '@/components/Common/List'
import TotalBoard from '@/components/TotalBorad'
import FarmerFilter from './components/Filter'
import {
    removeFarmerById,
    getFarmerByPageAndFilter,
    getFarmerCountByFilter
} from './service'
import './index.scss'

interface State {
    toast: Toast,
    page: Page,
    fetchParams: FetchParams,
}

const INIT_STATE_PAGE = { current: 0, size: 10 }

const INIT_STATE_FETCH_PARAMS = { page: { current: 0, size: 10 }, filter: {} }

export default class Index extends React.Component<{}, State> {

    constructor(props) {
        super(props)
        this.state = {
            toast: InitToast,
            page: INIT_STATE_PAGE,
            fetchParams: INIT_STATE_FETCH_PARAMS,
        }
    }

    onPullDownRefresh() {
        this.setState({ fetchParams: { ...INIT_STATE_FETCH_PARAMS } })
        Taro.stopPullDownRefresh()
    }

    render() {
        const { toast, page, fetchParams } = this.state

        return (
            <CommonPage toast={toast}>
                <FarmerFilter submitFilter={async (filter) => { this.setState({ fetchParams: { ...fetchParams, filter } }) }} />
                <TotalBoard title='新增户厕' num={page.total} note='户厕信息建档入库数量共有(户)' url='/pages/farmer/curd/index?type=create' />
                <CommonList
                    height='calc(100vh - 80rpx - 320rpx)'
                    fetchParams={fetchParams}
                    getData={getFarmerByPageAndFilter}
                    getDataCount={getFarmerCountByFilter}
                    onPageChange={(page) => { this.setState({ page }) }}
                    onToast={(toast) => { this.setState({ toast }) }}
                    removeById={removeFarmerById}
                    itemNote={(f) => { return `户厕位置: ${f.address ? f.address : '信息待补充'}` }}
                    itemIconInfoValue='user'
                    itemOnClick={(item) => { Taro.navigateTo({ url: "/pages/farmer/curd/index?type=update&id=" + item._id }) }}
                />
            </CommonPage>
        )
    }
}
