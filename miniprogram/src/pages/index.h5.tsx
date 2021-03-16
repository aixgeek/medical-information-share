import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtDrawer, AtIndexes, AtSearchBar } from 'taro-ui'

const Index: React.FC = () => {
    const [indexesShow, setIndexesShow] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [city, setCity] = useState<{ name: string }>({ name: '海口' })

    return <View className='page'>
        {/* <View style={{
            width: '100vw',
            height: 40,
            background: '#78A4FA',
            position: 'fixed',
            zIndex: 999
        }}>
            <View style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
            }}>
                <View style={{
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: '16px',
                    color: '#F2F2F2',
                    whiteSpace: 'nowrap'
                }}>
                    <View onClick={() => { setIndexesShow(true) }}>
                        {city.name}
                    </View>
                    <View className='at-icon at-icon-chevron-down' />
                </View>
                <AtSearchBar customStyle={{
                    flexGrow: 1,
                    height: '40px',
                    background: '#78A4FA',
                }} value={search} onChange={(value) => { setSearch(value) }}></AtSearchBar>
            </View>
        </View>
        <View style={{
            width: '100vw',
            height: '40px'
        }} /> */}
        <AtSearchBar customStyle={{ height: '40px', lineHeight: '40px' }} value={search} onChange={(value) => { setSearch(value) }}></AtSearchBar>
    </View>
}

export default Index