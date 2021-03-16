import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDrawer, AtIndexes, AtSearchBar } from 'taro-ui'

const Index: React.FC = () => {
    const [indexesShow, setIndexesShow] = useState<boolean>(false)
    const [city, setCity] = useState<{ name: string }>({ name: '海口' })
    const { statusBarHeight, platform } = Taro.getSystemInfoSync()
    const { top, height, left } = Taro.getMenuButtonBoundingClientRect()
    const navigationBarHeight = (top - statusBarHeight) * 2 + height
    const list = [{
        title: 'A',
        key: 'A',
        items: [
            {
                'name': '阿坝'
                // 此处可加其他业务字段
            },
            {
                'name': '阿拉善'
            }]
    },
    {
        title: 'B',
        key: 'B',
        items: [
            {
                'name': '北京'
            },
            {
                'name': '保定'
            }]
    }
    ]

    return <View className='page'>
        <View style={{
            width: '100vw',
            height: navigationBarHeight + statusBarHeight,
            background: '#78A4FA',
            position: 'fixed',
            zIndex: 999
        }}>
            <View style={{
                width: '100vw',
                height: statusBarHeight
            }} />
            <View style={{
                height: navigationBarHeight,
                display: 'flex',
                alignItems: 'center',
                paddingRight: `calc(100vw - ${left}px)`
            }}>
                <View style={{
                    height: navigationBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    fontSize: 16,
                    color: '#F2F2F2',
                    whiteSpace: 'nowrap'
                }}>
                    <View onClick={() => { setIndexesShow(true) }}>
                        {city.name}
                    </View>
                    <View className='at-icon at-icon-chevron-down' />
                </View>
                {/* <View style={{
                    flexGrow: 1,
                    height: navigationBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                }}>
                    <View style={{
                        color: '#F2F2F2',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>综合科技服务平台</View>
                </View> */}
                <AtSearchBar customStyle={{ flexGrow: 1, height: navigationBarHeight, background: '#78A4FA', }} value='' onChange={() => { }}></AtSearchBar>
            </View>
        </View>
        <View style={{
            width: '100vw',
            height: navigationBarHeight + statusBarHeight
        }} />
        {
            indexesShow ? <AtIndexes
                list={list}
                onClick={(value) => {
                    setCity(value)
                    setIndexesShow(false)
                }}
            /> : null
        }
        {/* <AtDrawer
            show={true}
            mask
            onClose={() => { }}
        >
            <View style={{
                width: '100vw',
                height: navigationBarHeight + statusBarHeight
            }} />
            <AtIndexes
                list={list}
                onClick={(value) => {
                    setCity(value)
                    setIndexesShow(false)
                }}
            />
        </AtDrawer> */}
    </View>
}

export default Index