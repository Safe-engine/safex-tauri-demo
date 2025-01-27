import { ComponentX, SceneComponent } from 'safex';

import { loadAssets } from '../binding/loader';
import { Game } from './Game';

export class Boot extends ComponentX {
  async start() {
    await loadAssets(this.onProgress.bind(this))
  }

  onProgress(p: number) {
    // console.log('onProgress', p)
    if (p === 1) {
      setTimeout(() => Game.create())
    }
  }

  render() {
    return (
      <SceneComponent>
      </SceneComponent>
    )
  }
}
