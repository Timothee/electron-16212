const { app, BrowserWindow, BrowserView } = require('electron')

function createWindow () {
  let win = new BrowserWindow({

    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools({mode: 'detach'})

  let view1 = new BrowserView({
    width: 800,
    height: 600,
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  view1.webContents.loadURL(`file://${__dirname}/index2.html`)
  view1.webContents.openDevTools({mode: 'detach'})

  win.addBrowserView(view1)
  view1.setBackgroundColor(`#00000000`)
  view1.setBounds({
    x: 0,
    y: 100,
    width: 800,
    height: 100
  })

  let view2 = new BrowserView({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  view2.webContents.loadURL(`file://${__dirname}/index3.html`)
  view2.webContents.openDevTools({mode: 'detach'})

  win.addBrowserView(view2)
  view2.setBackgroundColor(`#00000000`)
  view2.setBounds({
    x: 0,
    y: 200,
    width: 800,
    height: 100
  })
}

app.on('ready', createWindow)
