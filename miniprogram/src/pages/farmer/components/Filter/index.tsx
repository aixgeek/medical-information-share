import React, { useContext, useState } from 'react'
import { AtButton, AtDrawer, AtInput, AtIcon, AtSearchBar } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import { AppContext } from '@/config/context'
import { removeEmpty } from '@/utils/object'

import '../index.scss'

interface Filter {
    phone: string,
    committee: {
        _id: string,
        name: string
    },
    name: string
}

interface Props {
    submitFilter: (filter: Partial<Filter>) => void
}

const INIT_STATE_FILTER: Filter = {
    phone: "",
    committee: { _id: "", name: "" },
    name: ""
}

const Index: React.FC<Props> = (props) => {
    const appContext = useContext(AppContext)
    const [show, setShow] = useState<boolean>(false);
    const [filter, setFilter] = useState<Filter>(INIT_STATE_FILTER);

    return (
        <View className='FilterComponent'>
            <View className='filter-wrap'>
                <View className='filter-main'>
                    <View className='filter-left' onClick={() => { setShow(true) }}>
                        <AtIcon value='filter'
                            color='#fff'
                            customStyle={{
                                height: '80rpx',
                                lineHeight: '80rpx'
                            }}
                        />
                        <Text className='filter-text'>筛选</Text>
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
                        value={filter.name}
                        onChange={(value) => { setFilter({ ...filter, name: value }) }}
                        onActionClick={() => { props.submitFilter(removeEmpty(filter)) }}
                    />
                </View>
            </View>
            <AtDrawer
                show={show}
                mask
                customStyle={{ top: '80rpx' }}
                onClose={() => { setShow(false) }}
            >
                <View className='panel'>
                    <View className='panel-title'>农户信息筛选条件组合</View>
                    <View className='panel-content'>
                        <AtInput
                            name='name'
                            type='text'
                            placeholder='根据农户姓名查找'
                            value={filter.name}
                            onChange={(value) => { setFilter({ ...filter, name: value as string }) }}
                        />
                        <AtInput
                            name='phone'
                            type='phone'
                            placeholder='根据联系方式查找'
                            value={filter.phone}
                            onChange={(value) => { setFilter({ ...filter, phone: value as string }) }}
                        />
                    </View>
                    <AtButton
                        type='primary'
                        full={false}
                        customStyle={{ width: '80%' }}
                        onClick={() => {
                            props.submitFilter(removeEmpty(filter))
                        }}
                    >保存</AtButton>
                    <AtButton
                        type='secondary'
                        full={false}
                        customStyle={{ width: '80%', marginTop: 10 }}
                        onClick={() => {
                            setFilter({
                                ...INIT_STATE_FILTER
                            })
                        }}
                    >重置</AtButton>
                </View>
            </AtDrawer>
        </View>
    )
}

export default Index