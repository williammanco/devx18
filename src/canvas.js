import { Component } from 'react'
import {
  WebGLRenderer,
  Clock,
  Scene,
  PerspectiveCamera,
  Color,
} from 'three'

class Canvas extends Component {
  componentWillMount() {
    const width = window.innerWidth
    const height = window.innerHeight
    const canvas = document.querySelector('canvas')

    canvas.style.left = 0
    canvas.style.top = 0
    canvas.style.position = 'absolute'

    this.renderer = new WebGLRenderer({
      antialising: false,
      alpha: false,
      canvas: canvas
    })
    this.renderer.setSize(width, height)
    this.clock = new Clock()
    this.scene = new Scene()

    const aspect = width / height
    this.camera = new PerspectiveCamera( 65, aspect, 0.5, 5000 )
    this.scene.background = new Color( 0x474759 )
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  update() {
    this.renderer.render( this.scene, this.camera )
  }
  render() {
    return false
  }
}

export default Canvas
