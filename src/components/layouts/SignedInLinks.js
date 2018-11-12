/*
 * SignedInLinks.js
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <ModalSignedIn/>
 * styl: menu.styl
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { signOut } from '../../store/actions/auth'
import { Label, Dropdown, Menu, Input } from 'semantic-ui-react'

const SignedInLinks = ({ signOut, profile }) => (
  <div className="right item signedIn">
    <Menu.Item className="fz-normal" position="right">
      <Input
        className="sign-btn "
        icon="search plus"
        iconPosition="left"
        placeholder="Search..."
      />
    </Menu.Item>
    <Dropdown
      basic
      className="medium"
      compact
      icon="star outline"
      pointing="top right"
    >
      <Dropdown.Menu className="dropdownSize">
        <Dropdown.Item
          as={Link}
          className="dropdownImage"
          content={`${profile.firstName} ${profile.lastName}`}
          image="http://place-hold.it/50x50"
          to="/pseudo/likes/0"
        />
        <Dropdown.Item
          as={Link}
          content="View Profile"
          icon="paper plane outline"
          to="/pseudo/likes/0"
        />
        <Dropdown.Divider className="m0" />
        <Dropdown.Item
          as={Link}
          content="Edit Profile"
          icon="edit outline"
          to="/"
        />
        <Dropdown.Divider className="m0" />
        <Dropdown.Item
          as="a"
          content="Sign Out"
          icon="window close outline"
          onClick={signOut}
          to="/"
        />
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>
      <Label as={Link} circular color="teal" to="/">
        {profile.initials}
      </Label>
    </Menu.Item>
  </div>
)
function mapStateToProps(state, props) {
  // console.log(props.profile)
  // console.log(state)
  // console.log(state.firebase.auth.uid)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
const mapDispatchToProps = {
  signOut,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignedInLinks))

