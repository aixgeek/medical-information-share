import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtIcon } from 'taro-ui'
import { FetchParams } from '@/types/common'
import CommonList from '@/components/Common/List'
import { getFarmerByPageAndFilter, getFarmerCountByFilter } from '@/pages/farmer/service'

import '../index.scss'

const INIT_STATE_FETCH_PARAMS = { page: { current: 0, size: 10 }, filter: {} }

const Index: React.FC<{ chooseFarmer: (farmer) => void, setBack: () => void }> = (props) => {
    const [search, setSearch] = useState<string>('')
    const [fetchParams, setFetchParams] = useState<FetchParams>(INIT_STATE_FETCH_PARAMS)

    return <View className='FarmerIndexComponent'>
        <View className='filter-wrap'>
            <View className='filter-main'>
                <View className='filter-left' onClick={() => { props.setBack() }}>
                    <AtIcon value='chevron-left'
                        color='#fff'
                        customStyle={{
                            height: '80rpx',
                            lineHeight: '80rpx'
                        }}
                    />
                    <Text className='filter-text'>返回</Text>
                </View>
                <AtSearchBar
                    customStyle={{
                        backgroundColor: 'transparent',
                        width: '80vw',
                        height: '80rpx',
                    }}
                    actionName='搜索'
                    showActionButton
                    placeholder='搜索农户名称'
                    value={search}
                    onChange={(value) => { setSearch(value) }}
                    onActionClick={() => {
                        setFetchParams({
                            ...INIT_STATE_FETCH_PARAMS,
                            filter: {
                                ...INIT_STATE_FETCH_PARAMS.filter,
                                name: search
                            }
                        })
                    }}
                />
            </View>
        </View>
        <CommonList
            height='calc(100vh - 80rpx)'
            fetchParams={fetchParams}
            getData={getFarmerByPageAndFilter}
            getDataCount={getFarmerCountByFilter}
            itemNote={(f) => { return `户厕位置: ${f.address ? f.address : '信息待补充'}` }}
            itemExtraText={() => { return '选择农户' }}
            itemIconInfoValue='user'
            itemOnClick={(f) => {
                props.chooseFarmer({
                    _id: f._id,
                    name: f.name,
                    location: f.location,
                    committee: f.committee
                })
            }}
        />
    </View>
}

export default Index
