/*
 * Home.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <App/>
 * Style: home.styl
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'
import MenuHome from './menus/MenuHome'
import ProductGallery from './ProductGallery'
// import { handleAddProduct } from '../store/actions/shared'

class Home extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <MenuHome />
        <Container>
          <div className="ui three column grid stackable">
            { [1, 2, 3, 4, 5, 6, 7].map(item => <ProductGallery key={item}>{item}</ProductGallery >)}
          </div>
        </Container>
      </Fragment>
    )
  }
}
export default connect(null, null)(Home)
