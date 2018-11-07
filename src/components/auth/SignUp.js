/*
 * Copyright (C) 2018 xav <xav@xavs-Mac-mini>
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Form, Input, Button } from 'semantic-ui-react'
// import ImageUploader from 'react-images-upload'
import { handleAddProduct } from '../../store/actions/shared'
import { withRouter, Redirect } from 'react-router-dom'

class Login extends Component {
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
    this.setState(() => ({
      submitActive: true,
    }))
    console.log(this.state.submitActive)

    this.props.history.push('/')
    setTimeout(() => this.closePopup(), 2000)

    this.props.dispatch(handleAddProduct(this.state))
  }

 closePopup = (event) => {
   console.log('yeag')
   this.props.onClosePopup()
 }
  // onDrop(picture) {
  // console.log(picture)
  // this.setState({
  // pictures: this.state.pictures.concat(picture),
  // })
  // }
 render() {
   const { handleChange } = this.props
   return (
     <Form
       className="formWidth"
       error={false}
       loading={false}
       onSubmit={this.handleSubmit}
       size="big"
       success={false}
     >
       <Message
         content="xxxxxxxx"
         header="Form Completed"
         success={false}
       />
       <Message
         content="You can only sign up for an account once with a given e-mail address."
         error
         header="Action Forbidden"
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
       <div className="ui error message" />

     </Form>
   )
 }
}
export default withRouter(connect()(Login))
