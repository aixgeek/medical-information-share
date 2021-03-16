export interface Toast {
    isOpened: boolean
    text?: string
    duration?: number
    status?: "success" | "loading" | "error" | undefined
}

export interface Selector {
    sex: string[],
    obj: string[],
    role: string[],
    toiletChange: string[],
    septicTank: string[],
    committee: { _id: string, name: string }[],
}

export interface Page {
    total?: number,
    current: number,
    size: number
}

export interface FetchParams {
    filter: object
}