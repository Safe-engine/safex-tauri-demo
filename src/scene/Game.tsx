import { ComponentX, ExtraDataComp, LabelComp, NodeComp, SceneComponent, SpriteRender, Touch, TouchEventRegister } from '@safe-engine/pixi'
import { Collider, pointInPolygon } from '@safe-engine/pixi/dist/collider'
import { sf_line } from '../assets'
import Caro from '../components/Caro'
import { CHECK_CELLS_LIST } from '../helper/logic'

export class Game extends ComponentX {
  score = 0
  root: NodeComp
  isX = false
  carosList: Caro[] = []

  start() {
    // hide all caros in list
    this.carosList.forEach(caro => caro.hide())
  }

  onTouchStart(event: Touch) {
    console.log('Touch start', event, this.carosList.length)
    const clicked = this.carosList.find(caro => {
      const points = caro.getComponent(Collider)._worldPoints
      return pointInPolygon(event.getLocation(), points)
    })
    console.log('Clicked', clicked?.node.getData('id'))
    if (clicked.value) return
    if (this.isX) {
      this.isX = false
      clicked?.setO()
    } else {
      this.isX = true
      clicked?.setX()
    }
    if (this.checkWin()) {
      console.log(this.isX ? 'X win!' : 'O win!')
    }
  }

  checkWin() {
    //check logic for tic tac toe game with caros list
    const board = this.carosList.map(c => c.value)
    function checkIndexArray(arr: number[] = []) {
      if (arr.some((idx) => !board[idx])) return false
      const [i1, i2, i3] = arr
      return (
        board[i1] === board[i2] && board[i2] === board[i3]
      )
    }
    return CHECK_CELLS_LIST.some(checkIndexArray)
  }

  render() {
    return (
      <SceneComponent $refNode={this.root}>
        <TouchEventRegister onTouchStart={this.onTouchStart} />
        <LabelComp node={{ xy: [320, 140] }} string="Game" />
        {Array(4).map(i => <SpriteRender node={{ xy: [120,i * 200 + 300] }} spriteFrame={sf_line} />)}
        {Array(4).map(i => <SpriteRender
          node={{ xy: [8 + i * 235, 600], angle: 90, width: 620 }}
          spriteFrame={sf_line} />)}
        {Array(3).map((i) =>
          Array(3).map((j) =>
            <Caro $push={this.carosList} node={{ xy: [125 + i * 236, 395 + j * 201] }} >
              <ExtraDataComp key='id' value={j * 3 + i} />
            </Caro>)
        )}
      </SceneComponent>
    )
  }
}
