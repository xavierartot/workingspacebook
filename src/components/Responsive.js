/*
 * test-semanticui.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { Icon, Input, Menu, Button } from 'semantic-ui-react'

class Responsive extends Component {
  state = { activeItem: 'gamepad' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div className="">
        <div className="ui vertical center aligned segment">
          <div className="ui container">
            <div className="ui secondary menu huge greyb font-europa-normal ">
              <div className="left item">
                <Menu.Item
                  active={activeItem === 'home'}
                  name="home"
                  onClick={this.handleItemClick}
                >
                  <Icon name="home" />
                Home
                </Menu.Item>
                <Menu.Item
                  active={activeItem === 'shop'}
                  name="shop"
                  onClick={this.handleItemClick}
                >
                  <Icon name="shop" />
                Shop
                </Menu.Item>
                <Menu.Item
                  active={activeItem === 'certificate'}
                  name="certificate"
                  onClick={this.handleItemClick}
                >
                  <Icon name="certificate" />
                Featured
                </Menu.Item>
              </div>
              <div className="menu-logo">
                <span>logo</span>
              </div>
              <div className="right item">
                <Menu.Item className="fz-normal" position="right">
                  <Input
                    className="sign-btn "
                    icon="search"
                    iconPosition="left"
                    placeholder="Search..."
                  />
                </Menu.Item>
                <Menu.Item className="fz-normal" >
                  <Button.Group size="small">
                    <Button toggle >Log in</Button>
                    <Button.Or />
                    <Button color="green" toggle>Join</Button>
                  </Button.Group>
                </Menu.Item>
              </div>
            </div>
          </div>
        </div>

        <div className="ui brown vertical segment">
          <div className="ui grid page" >
            <div className="ui menu">
              <div className="item">
                <div className="ui icon input">
                  <input placeholder="Search..." type="text" />
                  <i className="search icon" />
                </div>
              </div>
              <div className="right item">
                <div className="ui action input">
                  <input placeholder="Navigate to..." type="text" />
                  <div className="ui button">Go</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui inverted brown vertical segment">
          <div className="ui grid page" >

            <Menu>
              <Menu.Item active={activeItem === 'gamepad'} name="gamepad" onClick={this.handleItemClick}>
                <Icon name="gamepad" />
                Games
              </Menu.Item>

              <Menu.Item
                active={activeItem === 'video camera'}
                name="video camera"
                onClick={this.handleItemClick}
              >
                <Icon name="video camera" />
                Channels
              </Menu.Item>

              <Menu.Item
                active={activeItem === 'video play'}
                name="video play"
                onClick={this.handleItemClick}
              >
                <Icon name="video play" />
                Videos
              </Menu.Item>
            </Menu>
            <Menu className="right menu">
              <Menu.Item position="right">
                <Input className="icon" icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item>
                <Button>Sign In</Button>
              </Menu.Item>
              <Menu.Item>
                <Button>Sign Up</Button>
              </Menu.Item>
            </Menu>
          </div>
        </div>

        <div className="ui inverted yellow vertical segment">
          <div className="ui grid page">
            <Menu icon="labeled">
              <Menu.Item active={activeItem === 'gamepad'} name="gamepad" onClick={this.handleItemClick}>
                <Icon name="gamepad" />
                Games
              </Menu.Item>

              <Menu.Item
                active={activeItem === 'video camera'}
                name="video camera"
                onClick={this.handleItemClick}
              >
                <Icon name="video camera" />
                Channels
              </Menu.Item>

              <Menu.Item
                active={activeItem === 'video play'}
                name="video play"
                onClick={this.handleItemClick}
              >
                <Icon name="video play" />
                Videos
              </Menu.Item>
            </Menu>
          </div>
        </div>

        <div className="ui inverted green vertical segment">
          <div className="ui grid page">
            <div className="ui text menu ">
              <a className="active item">
              Home
              </a>
              <a className="item">
              Messages
              </a>
              <a className="item">
              Friends
              </a>
            </div>
          </div>
        </div>

        <div className="ui inverted orange vertical segment">
          <div className="ui grid page">
            <div className="stackable three column row centered">
              <div className="column">
                <div className="ui segment tac">orizontal section, column 1</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 2</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui inverted teal vertical segment">
          <div className="ui grid page">
            <div className="stackable three column row centered">
              <div className="column">
                <div className="ui segment tac">orizontal section, column 1</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 2</div>
              </div>
              <div className="column">
                <div className="ui segment tac">orizontal section, column 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui five column grid">
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
        </div>
        <div className="ui five column grid page">
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
          </div>
        </div>
        <div className="ui inverted gris vertical segment">
          <div className="ui five column grid page">
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
          </div>
        </div>
        <div className="ui inverted teal vertical segment">
          <div className="ui four column grid page stackable ">
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
            <div className="column">
              <div className="ui segment">1</div>
            </div>
          </div>
        </div>
        <div className="ui grid page">
          <div className="two column row">
            <div className="column">
              <div className="ui segment">
                <div className="ui vertical segment">
                  <p>Left column, row 1</p>
                </div>
                <div className="ui vertical segment">
                  <p>Left column, row 2</p>
                </div>
                <div className="ui vertical segment">
                  <p>Left column, row 3</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="row"> Right column, row 1</div>
              <div className="row"> Right column, row 2</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Responsive
