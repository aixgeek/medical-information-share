import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

const Index: React.FC<{ title: string, extra?: string, extraUrl?: string }> = (props) => {

    return (
        <View className='title-wrap'>
            <View className='title'>{props.title}</View>
            { props.extra && props.extraUrl ? <View className='extra' onClick={() => { Taro.navigateTo({ url: props.extraUrl! }) }}>{props.extra}</View> : null}
        </View>
    )
}

export default Index