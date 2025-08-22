import { ComponentX, LabelComp, loadScene, ProgressTimerComp, SceneComponent, SpriteRender } from '@safe-engine/pixi'

import { sf_progress_bar, sf_progress_bg } from '../assets'
import { loadAssets } from '../binding/loader'
import { CYAN } from '../helper/constant'
import { Game } from './Game'

export class Loading extends ComponentX {
  loadingSprite: ProgressTimerComp

  async start() {
    console.log('Loading start')
    await loadAssets(this.onProgress.bind(this), () => {
      loadScene(Game)
    })
  }

  onProgress(p: Float) {
    console.log('onProgress', p)
    this.loadingSprite.fillRange = p
  }

  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ xy: [406, 140], color: CYAN }} string="Loading" />
        <SpriteRender node={{ xy: [960, 850] }} spriteFrame={sf_progress_bg}>
          <ProgressTimerComp $ref={this.loadingSprite} node={{ xy: [-161, -10] }} spriteFrame={sf_progress_bar} fillRange={0} />
        </SpriteRender>
      </SceneComponent>
    )
  }
}
