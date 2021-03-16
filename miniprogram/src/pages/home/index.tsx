import React, { useContext, useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { AtNoticebar, AtGrid } from 'taro-ui'
import { InitToast } from "@/config/constant"
import { Toast } from '@/types/common'
import { AppContext } from '@/config/context'
import CommonPage from '@/components/Common/Page'
import Copyright from '@/components/Copyright'
import "./index.scss"

const Index: React.FC = () => {
  const { menu } = useContext(AppContext)
  const [toast, setToast] = useState<Toast>(InitToast)
  const [swipers, setSwipers] = useState<{ _id: string, img: string, url: string }[]>([])
  const [notice, setNotice] = useState<{ title: string; url: string }>()

  return (
    <CommonPage toast={toast}>

      <AtNoticebar
        icon='volume-plus'
        showMore
        single
        moreText='详情'
        onGotoMore={() => {
          Taro.navigateTo({
            url: '' + notice?.url, // TODO
          })
        }}
      >
        {notice ? notice.title : '暂无通知公告'}
      </AtNoticebar>

      <AtGrid
        hasBorder={false}
        columnNum={5}
        data={menu}
        onClick={(item) => { Taro.navigateTo({ url: item.url }) }}
      />

      <Copyright />
    </CommonPage>
  );
}

export default Index
