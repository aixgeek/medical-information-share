import React, { useEffect, useState } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { Map, View, Picker } from '@tarojs/components'
import {
    AtInput,
    AtIcon
} from 'taro-ui'
import { Selector, Toast } from '@/types/common'
import {
    INIT_STATE_SELECTOR,
    INIT_STATE_LOCATION,
    InitToast,
    LoadingToast,
} from '@/config/constant'
import CommonPage from '@/components/Common/Page'
import { Farmer } from '@/pages/farmer/model'
import { getFarmerById } from '@/pages/farmer/service'
import MarkerRed from '@/assets/images/MarkerRed.png'

import './index.scss'

const INIT_STATE_FARMER: Farmer = {
    name: "",
    idnum: "",
    phone: "",
    obj: "",
    toiletChange: "",
    committee: {
        _id: "",
        name: ""
    },
    group: "",
    location: INIT_STATE_LOCATION,
    address: "",
    septicTank: "",
    fillingDate: "",
    toiletArea: "",
    effectiveVolume: "",
    status: 'incomplete'
}

const Index: React.FC = () => {
    const [toast, setToast] = useState<Toast>(InitToast)
    const [farmer, setFarmer] = useState<Farmer>(INIT_STATE_FARMER)
    const [selector, setSelector] = useState<Selector>(INIT_STATE_SELECTOR)

    useEffect(() => {
        const CurdInit = async () => {
            setToast(LoadingToast)
            const { id } = getCurrentInstance().router?.params as { id: string, type: string }
            const res = await getFarmerById(id) as Farmer
            setFarmer(res)
            setToast(InitToast)
        }
        CurdInit()
    }, [])

    const handleInputFarmer = (stateName, value): void => {
        setFarmer({ ...farmer, [stateName]: value })
    }

    return (
        <CommonPage toast={toast}>
            <View className='panel'>
                <View className='panel-title'>个人信息</View>
                <View className='panel-content'>
                    <AtInput
                        required
                        disabled
                        name='name'
                        title='户主姓名'
                        type='text'
                        placeholder='请输入户主姓名'
                        value={farmer.name}
                        onChange={handleInputFarmer.bind(this, 'name')}
                    />
                    <AtInput
                        required
                        disabled
                        name='idnum'
                        title='身份证号'
                        type='idcard'
                        placeholder='请输入身份证号'
                        value={farmer.idnum}
                        onChange={handleInputFarmer.bind(this, 'idnum')}
                    />
                    <AtInput
                        required
                        disabled
                        name='phone'
                        title='联系方式'
                        type='phone'
                        placeholder='请输入联系方式'
                        value={farmer.phone}
                        onChange={handleInputFarmer.bind(this, 'phone')}
                    />
                </View>
                <View className='panel-title'>户厕信息</View>
                <View className='panel-content'>
                    <Picker
                        disabled
                        mode='selector'
                        range={selector.obj}
                        value={selector.obj.indexOf(farmer.obj)}
                        onChange={
                            (e) => {
                                setFarmer({
                                    ...farmer,
                                    obj: selector.obj[e.detail.value]
                                })
                            }}>
                        <AtInput
                            required
                            disabled
                            editable={false}
                            name='obj'
                            title='对象类型'
                            type='text'
                            placeholder='请选择对象类型'
                            value={farmer.obj}
                            onChange={() => { }}
                        />
                    </Picker>
                    <Picker
                        mode='selector'
                        disabled
                        range={selector.toiletChange}
                        value={selector.toiletChange.indexOf(farmer.toiletChange)}
                        onChange={
                            (e) => {
                                setFarmer({
                                    ...farmer,
                                    toiletChange: selector.toiletChange[e.detail.value]
                                })
                            }}>
                        <AtInput
                            required
                            disabled
                            editable={false}
                            name='toiletChange'
                            title='改厕类型'
                            type='text'
                            placeholder='请选择改厕类型'
                            value={farmer.toiletChange}
                            onChange={() => { }}
                        />
                    </Picker>
                    <AtInput
                        required
                        disabled
                        name='group'
                        title='小组(连队)'
                        type='text'
                        placeholder='请输入小组(连队)'
                        value={farmer.group}
                        onChange={handleInputFarmer.bind(this, 'group')}
                    />
                    <Picker
                        mode='selector'
                        disabled
                        range={selector.septicTank}
                        value={selector.septicTank.indexOf(farmer.septicTank)}
                        onChange={
                            (e) => {
                                setFarmer({
                                    ...farmer,
                                    septicTank: selector.septicTank[e.detail.value]
                                })
                            }} >
                        <AtInput
                            required
                            disabled
                            editable={false}
                            name='septicTank'
                            title='化粪类型'
                            type='text'
                            placeholder='请选择化粪池类型'
                            value={farmer.septicTank}
                            onChange={() => { }}
                        />
                    </Picker>
                    <Picker
                        mode='date'
                        disabled
                        value={farmer.fillingDate}
                        onChange={
                            (e) => {
                                setFarmer({
                                    ...farmer,
                                    fillingDate: e.detail.value
                                })
                            }}>
                        <AtInput
                            required
                            disabled
                            editable={false}
                            name='fillingDate'
                            title='填表日期'
                            type='text'
                            placeholder='请选择填表日期'
                            value={farmer.fillingDate}
                            onChange={() => { }}
                        />
                    </Picker>
                    <AtInput
                        required
                        disabled
                        name='toiletArea'
                        title='厕屋面积'
                        type='number'
                        placeholder='请输入厕屋面积(平米)'
                        value={farmer.toiletArea}
                        onChange={handleInputFarmer.bind(this, 'toiletArea')}
                    />
                    <AtInput
                        required
                        disabled
                        name='effectiveVolume'
                        title='有效容积'
                        type='number'
                        placeholder='请输入有效容积设置(平米)'
                        value={farmer.effectiveVolume}
                        onChange={handleInputFarmer.bind(this, 'effectiveVolume')}
                    />
                    <AtInput
                        required
                        disabled
                        editable={false}
                        name='location'
                        title='户厕定位'
                        type='text'
                        placeholder='请确认户厕定位'
                        value={farmer.location?.address}
                        onClick={() => {
                            Taro.chooseLocation({
                                success: (location) => {
                                    setFarmer({
                                        ...farmer,
                                        address: location.name,
                                        location: {
                                            name: location.name,
                                            address: location.address,
                                            latitude: location.latitude as unknown as number,
                                            longitude: location.longitude as unknown as number,
                                        }
                                    })
                                }
                            })
                        }}
                        onChange={() => { }}
                    >
                        <AtIcon value='map-pin' size='30' />
                    </AtInput>
                    <AtInput
                        required
                        disabled
                        name='address'
                        title='详细位置'
                        type='text'
                        placeholder='请输入详细位置'
                        value={farmer.address}
                        onChange={handleInputFarmer.bind(this, 'address')}
                    />
                </View>
                <View className='panel-title'>农户地图</View>
                <View className='panel-content'>
                    <View className='map-wrap'>
                        <View className='map-cover'>
                            <Map
                                className='map'
                                longitude={farmer.location.longitude}
                                latitude={farmer.location.latitude}
                                subkey='XQHBZ-5XKKU-LLGVQ-4EYNQ-XNKOQ-4HFLS'
                                layerStyle={1}
                                onTap={(res) => { console.log(res) }}
                                markers={[{
                                    id: 0,
                                    longitude: farmer.location.longitude,
                                    latitude: farmer.location.latitude,
                                    iconPath: MarkerRed,
                                    title: farmer.location.address,
                                    width: 32,
                                    height: 32
                                }]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </CommonPage>
    )
}

export default Index