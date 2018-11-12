/*
 * SignIn
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 * Parent: <ModalSignIn />
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { signIn, loginFacebook, loginTwitter } from '../../store/actions/auth'
import { Divider, Icon, Message, Form, Input, Button, Segment } from 'semantic-ui-react'
import ModalForgetEmail from '../modals/ModalForgetEmail'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errorForm: null,
    loading: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props, this.props.auth)
    this.setState(() => ({
      loading: !this.state.loading,
    }))
    const {
      email, password,
    } = this.state

    this.props.signIn({ email, password })// check in firebase authentification
    console.log(this.props)
    this.setState(() => ({
      loading: !this.state.loading,
    }))
    console.log(this.props, this.props.auth)
    // this.props.handleClose()
  }
  render() {
    const { authError, auth } = this.props
    const { errorFieldEmail } = this.state
    console.log(this.props, auth)
    if (auth.uid) return <Redirect to="/pseudo/likes" />
    return (
      <Fragment>
        <div className="centerButtons">
          <Button circular className="twitterButtons" color="twitter" onClick={() => this.props.loginTwitter()}>
            <Icon name="twitter" />
            Log in with Twitter
          </Button>
          <Button circular color="facebook" onClick={() => this.props.loginFacebook()}>
            <Icon name="facebook" /> Log in with Facebook
          </Button>
        </div>
        <Divider />
        <Form
          className="formWidth"
          onSubmit={this.handleSubmit}
          size="large"
          widths="equal"
        >
          { authError ?
            <Message
              content="You can only sign up for an account once with a given e-mail address."
              error
              header="Action Forbidden"
            />
          : null
        }
          <Form.Field
            control={Input}
            error={errorFieldEmail}
            icon="at"
            iconPosition="left"
            id="email"
            onChange={this.handleChange}
            placeholder={!errorFieldEmail ? 'E-mail address' : 'E-mail Required'}
            type="email"
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
          />
          <Segment basic className="d-flex center doubleButtons">
            <Button
              active={false}
              circular
              color="teal"
              content="Join"
              icon="sign language"
              labelPosition="left"
              loading={!authError && this.state.loading}
              size="large"
            />
            <ModalForgetEmail>
            Forget Your Password
            </ModalForgetEmail>
          </Segment>
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
    signIn: newUser => dispatch(signIn(newUser)),
    loginFacebook: () => dispatch(loginFacebook()),
    loginTwitter: () => dispatch(loginTwitter()),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
