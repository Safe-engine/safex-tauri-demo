import { button_sfx } from '../assets/AudioAssets'

export default class AudioController {
  private static _instance: AudioController
  private constructor() { }
  public static get Instance() {
    if (!AudioController._instance) {
      AudioController._instance = new AudioController()
    }
    return AudioController._instance
  }

  playEffectSound(type: any) {
    type.play()
  }

  playButtonClickSound() {
    this.playEffectSound(button_sfx)
  }
}
