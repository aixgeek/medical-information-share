import Taro from '@tarojs/taro'

const db = Taro.cloud.database()
const _ = db.command
const CollectionHome = db.collection('dongcheng_home')

export const getDefaultHome = async () => {
  const res = (await CollectionHome
    .where({
      status: _.eq('default')
    })
    .field({
      swipers: true,
      notice: true
    })
    .get()).data.shift() as { swipers: { _id: string, img: string, url: string }[], notice: { title: string; url: string } }
  return res
}