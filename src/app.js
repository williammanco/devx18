import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { ThemeProvider } from 'react-jss'
import { theme } from './style'
import { connect } from 'react-redux'
import Home from './pages/Home'
import Test from './pages/Test'
import Layout from './layout'
import Canvas from './canvas'
import { setLoader, setReady } from './actions/loader'

class App extends Component {
  componentDidMount() {
    this.update()
  }
  update() {
    this.canvas.update()
    requestAnimationFrame(this.update.bind(this))
  }
  render() {
    const { location } = this.props.history
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 500, exit: 1000 }
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
          </Switch>
          <Canvas
            loader={this.props.getLoaderState}
            setLoader={this.props.setLoaderState}
            onRef={ref => (this.canvas = ref)}
          />
        </Layout>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  getLoaderState: state.loader.get('state'),
})
const mapDispatchToProps = dispatch => ({
  setLoaderState: (state) => { setLoader(state) },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
