import { BoxCollider, ComponentX, NodeComp, SpriteRender, v2 } from 'safex'
import { sf_x } from '../assets'

export default class Caro extends ComponentX {

  node: NodeComp

  render() {
    return <SpriteRender spriteFrame={sf_x}>
      <BoxCollider height={189} width={225} offset={v2(-10, -8)} />
    </SpriteRender>
  }

}
