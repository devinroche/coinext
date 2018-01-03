var menubar = require('menubar')

var option = {
    icon: 'icon.png'
}

var mb = menubar(option)

mb.on('ready', function ready () {
  console.log('app is ready')
})