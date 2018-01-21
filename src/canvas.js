import { Component } from 'react'
import {
  WebGLRenderer,
  Clock,
  Scene,
  PerspectiveCamera,
  Color,
  LoadingManager,
  AmbientLight,
  Mesh,
  MeshLambertMaterial,
  PointLight,
} from 'three'
import OBJLoader from 'three-react-obj-loader'
import OrbitControls from 'orbit-controls-es6'
import obj3d from './assets/obj/ddd.obj'

class Canvas extends Component {
  componentWillMount() {
    const width = window.innerWidth
    const height = window.innerHeight
    const canvas = document.querySelector('canvas')
    const aspect = width / height

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
    this.camera = new PerspectiveCamera(65, aspect, 0.5, 5000)
    this.ambientLight = new AmbientLight(0x404040)
    this.pointLight = new PointLight(0x0040ff, 2, 50)

    this.scene.background = new Color(0x474759)
  }
  componentDidMount() {
    this.props.onRef(this)
    this.loader()
  }
  componentDidUpdate(prevProps) {
    if (this.props.loader !== prevProps.loader) {
      if (this.props.loader === 1) {
        this.ready()
      }
    }
  }
  update() {
    this.renderer.render( this.scene, this.camera )
  }
  loader() {
    this.loaderManager = new LoadingManager()

    this.model3d = new OBJLoader( this.loaderManager )
    this.model3d.load(obj3d, object => {
      object.traverse(child => {
        if(child instanceof Mesh) {
          child.material = new MeshLambertMaterial()
        }
      })
      this.scene.add(object)
    })

    this.loaderManager.onLoad = () => {
      this.props.setLoader(this.props.loader + 1)
    }
  }
  ready() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.enabled = true
    controls.maxDistance = 1500
    controls.minDistance = 0
    this.scene.add(this.ambientLight)
    this.scene.add(this.pointLight)
    this.camera.position.z = 200

  }
  render() {
    return false
  }
}

export default Canvas
