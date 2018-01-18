var menubar = require('menubar')
var path = require('path')

var option = {
    icon:  path.join(__dirname, 'icon.png'),
    width: 400,
    height: 300
}

var mb = menubar(option)

mb.on('ready', function ready () {
  console.log('app is ready')
})