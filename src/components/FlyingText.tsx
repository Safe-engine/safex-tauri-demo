import { callFunc, ComponentX, LabelComp, moveBy, sequence, Vec2 } from '@safe-engine/pixi'
import { BLACK } from '../helper/constant'

export default class FlyingText extends ComponentX {
  label: LabelComp
  start() {
    const cb = callFunc(() => {
      this.node.destroy()
    })
    const seq = sequence(moveBy(2, Vec2(0, -20)), cb)
    this.node.runAction(seq)
  }

  render() {
    return <LabelComp $ref={this.label} outline={[BLACK, 15]}></LabelComp>
  }
}
