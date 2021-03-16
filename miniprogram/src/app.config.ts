export default {
  pages: [
    'pages/home/index',
    'pages/farmer/index',
    'pages/farmer/detail',
    'pages/farmer/curd/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#78A4FA',
    navigationBarTitleText: '东成镇厕改粪污清淘管护平台',
    navigationBarTextStyle: 'white',
  },
  // tabBar: {
  //   color: '#000000',
  //   selectedColor: '#78A4FA',
  //   backgroundColor: '#ffffff',
  //   borderStyle: 'black',
  //   list: [{
  //     selectedIconPath: 'assets/tabbar/home-active.png',
  //     iconPath: 'assets/tabbar/home.png',
  //     pagePath: 'pages/home/index',
  //     text: '首页'
  //   },
  //   {
  //     selectedIconPath: 'assets/tabbar/message-active.png',
  //     iconPath: 'assets/tabbar/message.png',
  //     pagePath: 'pages/message/index',
  //     text: '消息',
  //   },
  //   {
  //     selectedIconPath: 'assets/tabbar/mine-active.png',
  //     iconPath: 'assets/tabbar/mine.png',
  //     pagePath: 'pages/mine/index',
  //     text: '我的',
  //   }
  //   ]
  // },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序定位'
    }
  },
  cloud: true
}
