import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.scss'

const Index: React.FC = () => {
    const [action, setAction] = useState<boolean>(false)

    return (
        <View className='copyright-wrap'>
            <View className='copyright'>Copyright © 2021.</View>
            <View className='copyright'
              onClick={() => { setAction(true) }}
            >
                技术支持:18608915221
            </View>
            <AtActionSheet
              isOpened={action}
              onCancel={() => { setAction(false) }}
              onClose={() => { setAction(false) }}
              cancelText='取消'
              title='您要拨打技术人员电话吗?'
            >
                <AtActionSheetItem onClick={() => { Taro.makePhoneCall({ phoneNumber: '18608915221' }) }}>现在拨打</AtActionSheetItem>
            </AtActionSheet>
        </View>
    )
}

export default Index