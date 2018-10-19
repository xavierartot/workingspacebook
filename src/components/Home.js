/*
 * Home.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component, Fragment } from 'react'
import { Container, Image, Responsive, Icon, Input, Menu, Button } from 'semantic-ui-react'

import { withRouter, Link } from 'react-router-dom'
import Gallery from './Gallery'

class Home extends Component {
  state = {
    isActive: false,
  }
  state = { activeItem: 'gamepad' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Fragment>
        <div className="ui vertical center aligned segment home">
          <div className="ui container">
            <div className="ui secondary menu huge greyb-home font-europa-normal ">
              <div className="left item">
                <Menu.Item
                  active={activeItem === 'trending'}
                  as={Link}
                  name="trending"
                  onClick={this.handleItemClick}
                  to="/"
                >
                  Trending
                </Menu.Item>
                <Menu.Item
                  active={activeItem === 'New'}
                  as={Link}
                  name="New"
                  onClick={this.handleItemClick}
                  to="/explore/new"
                >
                  New
                </Menu.Item>
                <Menu.Item
                  active={activeItem === 'popular'}
                  as={Link}
                  name="popular"
                  onClick={this.handleItemClick}
                  to="/explore/popular"
                >
                  Popular
                </Menu.Item>
              </div>
            </div>
          </div>
        </div>
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
