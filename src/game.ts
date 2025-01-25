import { addGameCanvasTo, app, setupResolution, startGameSystems } from 'safex'

import { Boot } from './scene/Boot'
import { settings } from './settings'

const { designedResolution } = settings

async function start() {
  await addGameCanvasTo()
  Object.assign(app.canvas.style, {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
    overflow: 'visible',
  })
  setupResolution(designedResolution)
  startGameSystems()
  Boot.create()
}
start()

// if (module.hot) {
//   module.hot.dispose(() => {
//     try {
//       extensions.remove(ResizePlugin)
//       extensions.remove(TickerPlugin)
//     } catch (error) {
//       console.log(error)
//     }
//   })
//   module.hot.accept(() => {
//     console.log('hot accept is needed')
//   })
// }
