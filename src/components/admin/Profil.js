/*
 * Profil.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'// add
import { Redirect } from 'react-router-dom'

import AddProduct from './AddProduct'
// import ModalAddProduct from '../modals/ModalAddProduct'

import { Header, List, Tab, Container, Segment, Label, Icon, Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Profil extends Component {
  state = {
    tabLoading: false,
  }
  render() {
    if (!this.props.auth.uid) return <Redirect to="/" />
    const { profile, auth } = this.props
    const panes = [
      {
        menuItem: '0 Likes',
        render: () =>
          (<Tab.Pane active="false" loading>
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
          (<Tab.Pane loading>
            <AddProduct />
          </Tab.Pane>),
      },
      {
        menuItem: '0 Collections',
        render: () =>
          (<Tab.Pane loading>
          Tab 3 Content
          </Tab.Pane>),
      },
      {
        menuItem: 'Add Product',
        render: () =>
          (<Tab.Pane loading={false}>
            <AddProduct />
          </Tab.Pane>),
      },
      {
        menuItem: 'Edit Profil',
        render: () =>
          (<Tab.Pane>
          Tab 4 Content
          </Tab.Pane>),
      },
      {
        menuItem: 'Store',
        render: () =>
          (<Tab.Pane>
            Edit: link amazon, link Etsy, Store personal...
          </Tab.Pane>),
      },
    ]
    // https://canopy.co/xavierartot/likes
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
            <Header as="h1">{`${profile.firstName} ${profile.lastName}`}</Header>
            <Menu compact stackable>
              <Menu.Item as={Link} to="pseudo/likes">
                <Icon name="mail" /> {auth.email}
              </Menu.Item>
              <Menu.Item as={Link} to="/followers/pseudo">
                <Icon name="users" /> Follower
                <Label color="teal" floating>
                  0
                </Label>
              </Menu.Item>
              <Menu.Item as={Link} to="/following/pseudo">
                <Icon name="users" /> Following
                <Label color="red" floating>
                  0
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
          defaultActiveIndex={3}
          menu={{ fluid: true, vertical: true }}
          menuPosition="left"
          panes={panes}
        />

      </Container>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log(state)
  // console.log(state.firestore.data.collections)
  // console.log(state.firestore.data.products)
  return {
    state,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    collections: state.collections,
  }
}
export default compose(// HOC -  add
  connect(mapStateToProps),
  firestoreConnect([// arr
    'collections', // which collection we want connected
    'products',
  ]),
)(Profil)
