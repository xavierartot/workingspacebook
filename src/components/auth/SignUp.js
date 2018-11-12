/*
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <ModalSignUp />
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Divider, Message, Form, Input, Button } from 'semantic-ui-react'
// import ImageUploader from 'react-images-upload'
import { withRouter } from 'react-router-dom'
import { signUp, loginFacebook } from '../../store/actions/auth'

import ModalSignIn from '../modals/ModalSignIn'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    lastName: '',
    firstName: '',
    errorForm: false,
    errorField: false,
    submitActive: false,
    pictures: [],
    content: {
    },
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(() => ({ submitActive: true }))
    this.props.signUp({
      email: this.state.email,
      password: this.state.password,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
    })
    // this.props.history.push('/')


    // setTimeout(() => this.closePopup(), 2000)

    this.setState(() => ({ submitActive: false }))
  }

  loginWithFacebook = (event) => {
    // console.log(3)
    this.props.loginFacebook()
  }
  // closePopup = (event) => {
  // console.log('yeag')
  // this.props.onClosePopup()
  // }
  // onDrop(picture) {
  // console.log(picture)
  // this.setState({
  // pictures: this.state.pictures.concat(picture),
  // })
  // }
  render() {
    const { authError } = this.props
    // console.log(this.props)
    return (
      <Fragment>
        <div className="centerButtons">
          <Button circular className="twitterButtons" onClick={this.twitterLogin}>Log in with Twitter</Button>
          <Button circular onClick={this.loginWithFacebook}>Log in with Facebook</Button>
        </div>
        <Divider />
        <Form
          className="formWidth"
          error={false}
          loading={false}
          onSubmit={this.handleSubmit}
          size="big"
          success={false}
        >
          { authError ?
            <Message
              content={`You have an error: ${authError}`}
              error
              header="Action Forbidden"
            />
          : null
          }
          <Form.Field
            control={Input}
            error={false}
            icon="at"
            iconPosition="left"
            id="email"
            onChange={this.handleChange}
            placeholder="E-mail address"
            required
            type="email"
            value={this.state.email}
          />
          <Form.Field
            control={Input}
            error={false}
            icon="lock"
            iconPosition="left"
            id="password"
            onChange={this.handleChange}
            placeholder="Password"
            required
            type="password"
            value={this.state.password}
          />
          <Form.Field
            control={Input}
            error={false}
            icon="user"
            iconPosition="left"
            id="firstName"
            onChange={this.handleChange}
            placeholder="First Name"
            required
            type="text"
            value={this.state.firstName}
          />
          <Form.Field
            control={Input}
            error={false}
            icon="user"
            iconPosition="left"
            id="lastName"
            onChange={this.handleChange}
            placeholder="Last Name"
            required
            type="text"
            value={this.state.lastName}
          />
          {/*
          <input onChange={this.fileSelectHandle} type="file" />
          <Button onClick={this.fileUploadHandler}>upload</Button>

          <ImageUploader
            buttonText="Choose images"
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
            onChange={this.onDrop}
            withIcon
          />
          */}
          <Button
            circular
            color="teal"
            fluid
            loading={this.state.submitActive}
            size="large"
          >Sign Up
          </Button>
          <Divider clearing horizontal>or</Divider>
          <ModalSignIn contentLogin="Log In" fromSignUp>
              login and get your collection
          </ModalSignIn>
        </Form>
      </Fragment>
    )
  }
}
function mapStateToProps(state, props) {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    loginFacebook: () => dispatch(loginFacebook()),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
