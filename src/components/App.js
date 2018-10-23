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
import Responsive from './Responsive'
import Shop from './Shop'
import Featured from './Featured'
import User from './User'
import Explore from './Explore'
import Footer from './Footer'
import Profil from './admin/Profil'

// import { DB_CONFIG } from '../config/base'
// import * as firebase from 'firebase'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router basename="">
        <Fragment>
          <Header />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={User} exact path="/:id" />
            <Route component={Shop} path="/shop/:id" />
            <Route component={Featured} path="/featured/" />
            <Route component={Page} path="/page/:id" />
            <Route component={Explore} path="/explore/:id" />
            <Route component={Responsive} path="/responsive" />
            <Route component={Profil} path="/:id/likes" />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
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
