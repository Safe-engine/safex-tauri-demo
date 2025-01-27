import { ButtonComp, ComponentX, LabelComp, SceneComponent, SpriteRender } from 'safex'
import { defaultFont, sf_line } from '../assets'

export class Game extends ComponentX {
  score = 0

  start() {

  }

  // onUpdate(dt: number) {}
  onPress(event: ButtonComp) {
    console.log('Clicked')
    // this.uiRef.showDialog(true)
  }

  render() {
    return (
      <SceneComponent>
        <LabelComp node={{ x: 106, y: 240 }} string="Game" font={defaultFont} />
        {Array(4).map(i => <SpriteRender node={{ y: i * 200 + 300 }} spriteFrame={sf_line} />)}
        {Array(4).map(i => <SpriteRender
          node={{ x: 17 + i * 235, y: 300, angle: 90, width: 620 }}
          spriteFrame={sf_line} />)}
      </SceneComponent>
    )
  }
}
