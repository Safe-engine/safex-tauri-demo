import { Assets, loadScene, startGame, Texture } from '@safe-engine/pixi'
import { setupCollider } from '@safe-engine/pixi/dist/collider'

import { defaultFont, sf_progress_bar, sf_progress_bg } from './assets'
import { Loading } from './scene/Loading'
import { designedResolution } from './settings'

async function start() {
  await startGame(defaultFont, designedResolution, Assets)
  await Assets.load<Texture>([sf_progress_bar, sf_progress_bg])
  setupCollider([true], true)
  loadScene(Loading)
}
start()
