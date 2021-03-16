import React from 'react'
import { AtMessage, AtToast } from 'taro-ui'
import { View } from '@tarojs/components'
import { Toast } from '@/types/common'

const Index: React.FC<{ toast?: Toast }> = (props) => {
    const { toast } = props

    return (
        <View className='page'>
            <AtMessage></AtMessage>
            {
                toast ? <AtToast
                    hasMask
                    status={toast.status}
                    isOpened={toast.isOpened}
                    text={toast.text}
                    duration={toast.duration}
                    onClose={() => { }}
                /> : null
            }
            {
                props.children
            }
        </View>
    );
}

export default Index