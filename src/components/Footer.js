/*
 * Footer.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'

import { Label, Segment, Menu, Input } from 'semantic-ui-react'

class Footer extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="Footer">
        <div className="box">
          <div>
            <div className="menuFooter">
              <Menu vertical>
                <Menu.Item active={activeItem === 'inbox'} name="inbox" onClick={this.handleItemClick}>
                  <Label color="teal">1</Label>
          Inbox
                </Menu.Item>

                <Menu.Item active={activeItem === 'spam'} name="spam" onClick={this.handleItemClick}>
                  <Label>51</Label>
          Spam
                </Menu.Item>

                <Menu.Item active={activeItem === 'updates'} name="updates" onClick={this.handleItemClick}>
                  <Label>1</Label>
          Updates
                </Menu.Item>
                <Menu.Item>
                  <Input icon="search" placeholder="Search mail..." />
                </Menu.Item>
              </Menu>
            </div>
          </div>
          <div>
            <Segment className="infos">
              sdfsalfdjasldfjsdlf
            </Segment>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
