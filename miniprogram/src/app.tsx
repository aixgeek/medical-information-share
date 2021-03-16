import React from 'react'
import Taro from '@tarojs/taro'
import { AppContext, AppContextType } from '@/config/context'
import { Menu } from '@/config/constant'
import './app.scss'

class App extends React.Component<{}, { appContextValue: AppContextType }> {

  constructor(props) {
    super(props)
    this.state = {
      appContextValue: {
        menu: Menu,
      },
    }
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({ env: CLOUD_ENV })
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {
    const { appContextValue } = this.state

    return <AppContext.Provider value={appContextValue}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export default App
