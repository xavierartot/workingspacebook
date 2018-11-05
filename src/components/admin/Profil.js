/*
 * Profil.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import AddProduct from './AddProduct'

import { Header, List, Pane, Tab, Container, Segment, Label, Icon, Menu, Button, Input } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Profil extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const panes = [
      {
        menuItem: '0 Likes',
        render: () =>
          (<Tab.Pane>
            <List divided selection>
              <List.Item>
                <Label color="red" horizontal>
                  Fruit
                </Label>
                Kumquats
              </List.Item>
              <List.Item>
                <Label color="purple" horizontal>
                  Candy
                </Label>
                Ice Cream
              </List.Item>
              <List.Item>
                <Label color="red" horizontal>
                  Fruit
                </Label>
                Orange
              </List.Item>
              <List.Item>
                <Label horizontal>Dog</Label>
                Poodle
              </List.Item>
            </List>
           </Tab.Pane>),
      },
      {
        menuItem: '0 Finds',
        render: () =>
          (<Tab.Pane>
            <AddProduct />
          </Tab.Pane>),
      },
      {
        menuItem: '0 Collections',
        render: () =>
          (<Tab.Pane>
          Tab 3 Content
          </Tab.Pane>),
      },
      {
        menuItem: 'Add Product',
        render: () =>
          (<Tab.Pane>
            <AddProduct />
          </Tab.Pane>),
      },
    ]
    // https://canopy.co/xavierartot/likes
    const { activeItem } = this.state
    return (
      <Container className="Profil">
        <Segment className="mt-1 jumbotron" raised>
          <Label as={Link} className="profilRibbon" color="teal" ribbon="right" size="big" to="/">
            <Icon.Group size="large">
              <Icon inverted name="user" />
              <Icon corner inverted name="add" />
            </Icon.Group>
            <span className="fz-1">Find Friends</span>
          </Label>
          <div className="titleBox">
            <Header as="h1">Xavier Maxim</Header>
            <Menu compact stackable>
              <Menu.Item as={Link} to="pseudo/likes">
                <Icon name="mail" /> @xaviermaxim {/* name */}
              </Menu.Item>
              <Menu.Item as={Link} to="/followers/pseudo">
                <Icon name="users" /> Follower
                <Label color="teal" floating>
                  22
                </Label>
              </Menu.Item>
              <Menu.Item as={Link} to="/following/pseudo">
                <Icon name="users" /> Following
                <Label color="red" floating>
                  8
                </Label>
              </Menu.Item>
            </Menu>
            <Link className="editProfil" to="/editprofil">
              <Icon.Group className="mr-1" size="small">
                <Icon name="user" />
                <Icon corner name="add" />
              </Icon.Group>
              complete your profil
            </Link>
          </div>
        </Segment>
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
          panes={panes}
        />

      </Container>
    )
  }
}
export default Profil
