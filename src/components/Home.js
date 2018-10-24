/*
 * Home.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component, Fragment } from 'react'

import { Container } from 'semantic-ui-react'
import MenuHome from './MenuHome'
import Gallery from './Gallery'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <MenuHome />
        <Container>
          <div className="ui three column grid stackable">
            { [1, 2, 3, 4, 5, 6, 7].map(item => <Gallery key={item}>{item}</Gallery >)}
          </div>
        </Container>
      </Fragment>
    )
  }
}
export default Home
