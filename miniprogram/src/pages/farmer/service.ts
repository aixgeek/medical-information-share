import Taro from '@tarojs/taro'
import Schema, { Rules } from 'async-validator'
import { FetchParams, Page } from '@/types/common'
import { AppContextType } from '@/config/context'
import { UpdateParams, AddParams } from '@/config/common'
import { Farmer, Descriptor } from './model'

const db = Taro.cloud.database()
const _ = db.command
const CollectionFarmer = db.collection('farmer')

export const addOrUpdateFarmer = async (farmer: Farmer) => {
    try {
        const Validator = new Schema(Descriptor as Rules)
        await Validator.validate(farmer)
    } catch (err) {
        throw err
    }
    if (farmer._id) {
        // const res = await CollectionFarmer.where({ _id: farmer._id }).update({ data: {} })
        const res = await CollectionFarmer.doc(farmer._id).update(
            {
                data: {
                    ...farmer,
                    ...UpdateParams()
                }
            }
        )
        return res
    } else {
        const res = await CollectionFarmer.add({
            data: {
                ...farmer,
                ...AddParams()
            },
        })
        return res
    }
}

export const getFarmerByDepartment = async (id: string) => {
    const res = (await CollectionFarmer
        .where({
            committee: {
                _id: _.eq(id)
            }
        })
        .field({
            name: true,
            location: true,
            status: true
        })
        .get()).data
    return res
}

export const getFarmerByPageAndFilter = async (fetchParams: FetchParams, fetchPage: Page, appContext: AppContextType) => {
    let { filter } = fetchParams
    let page = fetchPage
    const res = (await CollectionFarmer
        .where(filter)
        .skip(page.current * page.size)
        .limit(page.size)
        .orderBy('_updateTime', 'desc')
        .get()).data
    return res
}

export const getFarmerCountByFilter = async (fetchParams: FetchParams, appContext: AppContextType) => {
    let { filter } = fetchParams
    const res = (await CollectionFarmer
        .where(filter)
        .count()).total
    return res
}

export const getFarmerById = async (param: string) => {
    const res = (await CollectionFarmer.doc(param).get({})).data
    return res
}

export const removeFarmerById = async (param) => {
    const res = await CollectionFarmer.doc(param).remove({})
    return res
}


