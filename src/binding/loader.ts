import HowlerLoaderParser from 'howler-pixi-loader-middleware'

import { Assets, extensions, Texture } from '@safe-engine/pixi'
import * as AudioAssets from '../assets/AudioAssets'
import * as FontAssets from '../assets/FontAssets'
import * as TextureAssets from '../assets/TextureAssets'

extensions.add(HowlerLoaderParser)

export function loadAssets(cb: (progress: number) => void, onCompleted: () => void) {
  // load the texture we need
  const fontBundle = {}
  Object.keys(FontAssets).forEach((key) => {
    const val = FontAssets[key]
    fontBundle[val] = val
  })
  Assets.addBundle('fonts', fontBundle)
  const keys = []
  return Promise.all([
    Assets.loadBundle('fonts'),
    Assets.load(keys),
    ...Object.keys(AudioAssets).map((key) => {
      return Assets.load(AudioAssets[key]).then((audioResource) => {
        AudioAssets[key] = audioResource
      })
    }),
  ]).then(async () => {
    await Assets.load<Texture>(Object.values(TextureAssets), cb)
    onCompleted()
  })
}

const jsonCache = {}
export async function loadJsonAsync<T>(filePath: string): Promise<T> {
  const json = await Assets.load(filePath)
  jsonCache[filePath] = json
  return json
}

export function loadJsonFromCache<T>(filePath: string): T {
  return jsonCache[filePath]
}
