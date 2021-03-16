import React from 'react'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { View } from '@tarojs/components'

import './index.scss'

const Index: React.FC<{ title?: string, num?: number, note: string, url?: string }> = (props) => {

    return (
        <View className='info-wrap'>
            <View className='info'>
                <View className='num'>
                    {props.num}
                </View>
                <View className='note'>
                    {props.note}
                </View>
                {
                    props.url ? <AtButton
                      type='primary'
                      className='form-btn'
                      onClick={
                            () => {
                                if (props.url) Taro.navigateTo({ url: props.url, })
                            }}
                    >
                        {props.title}
                    </AtButton> : null
                }

            </View>
        </View>
    )
}

export default Index