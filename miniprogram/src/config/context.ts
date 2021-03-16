import React from 'react'

export type AppContextType = {
    menu: any[]
}

const appContextValue: AppContextType = { menu: [] }

export const AppContext = React.createContext(appContextValue)