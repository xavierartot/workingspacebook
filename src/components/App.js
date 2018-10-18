import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// conpoments
import Home from './Home'
import Header from './Header'
// import Add from './Add'
import PageNotFound from './PageNotFound'
import Page from './Page'
import Categories from './Categories'
import Responsive from './Responsive'
import 'semantic-ui-css/semantic.min.css'
import '../css/helper.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router basename="" >
        <Fragment>
          <Header />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Categories} path="/category/:category" />
            <Route component={Page} path="/page/:id" />
            <Route component={Responsive} path="/responsive" />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ categories, posts }) {
  // console.log(categories, posts)
  return {
    categories: categories.categories,
  }
}
export default connect(mapStateToProps)(App)
