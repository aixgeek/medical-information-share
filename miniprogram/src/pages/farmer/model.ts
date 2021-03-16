import { Base } from '@/types/model'

// 户厕信息
export interface Farmer extends Base {
    _id?: string
    name: string
    idnum: string
    phone: string
    obj: string
    toiletChange: string
    committee: {
        _id: string,
        name: string
    }
    group: string
    location: {
        name: string
        address: string
        latitude: number
        longitude: number
    }
    address: string
    septicTank: string
    fillingDate: string
    toiletArea: string
    effectiveVolume: string
    status: 'incomplete' | 'complete'
}

export const Descriptor = {
    _id: {
        type: 'string',
        required: false,
    },
    name: {
        type: 'string',
        required: true,
    },
    idnum: {
        type: 'string',
        required: true,
    },
    phone: {
        type: 'string',
        required: true,
    },
    obj: { type: 'string', required: true },
    toiletChange: { type: 'string', required: true },
    group: { type: 'string', required: true },
    location: {
        type: 'object',
        required: true,
        fields: {
            name: { type: 'string', required: true },
            address: { type: 'string', required: true },
            latitude: { type: 'number', required: true },
            longitude: { type: 'number', required: true },
        }
    },
    address: { type: 'string', required: true },
    septicTank: { type: 'string', required: true },
    fillingDate: { type: 'string', required: true },
    toiletArea: { type: 'string', required: true },
    effectiveVolume: { type: 'string', required: true },
    status: {
        type: 'enum',
        enum: ['incomplete', 'complete'],
        required: true,
    }
}