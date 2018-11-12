/*
 * Footer.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'

import { Icon, Grid } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Grid stackable>
          <Grid.Row columns={3}>
            <Grid.Column className="tac">
              <div className="navigation" />
              <span > @copyright Frenchbooks All Rights Reserved</span>
            </Grid.Column>
            <Grid.Column className="tac">
              <span className="tac">
                made with <Icon name="heart outline" /> and passion
              </span>
            </Grid.Column>
            <Grid.Column className="box-social">
              <div className="box-social">
                <Icon className="social" link name="facebook f" />
                <Icon className="social" link name="twitter" />
                <Icon className="social" link name="instagram" />
                <Icon className="social" link name="pinterest" />
                <Icon className="social" link name="mail" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default Footer
