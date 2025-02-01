import { BoxCollider, ComponentX, SpriteRender, v2 } from 'safex'
import { sf_circle, sf_x } from '../assets'

export default class Caro extends ComponentX {

  sprite: SpriteRender
  value = ''

  hide() {
    this.node.active = false
  }

  setX() {
    this.node.active = true
    // this.sprite.spriteFrame = sf_x
    this.value = 'x'
  }

  setO() {
    this.node.active = true
    this.sprite.setSpriteFrame(sf_circle)
    this.value = 'o'
  }

  render() {
    return <SpriteRender $ref={this.sprite} spriteFrame={sf_x}>
      <BoxCollider height={189} width={225} offset={v2(-10, -8)} />
    </SpriteRender>
  }

}
