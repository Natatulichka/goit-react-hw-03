import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onAddContact({ ...this.state })

    this.setState({ name: '', number: '' })
  }
  render() {
    // let { isSubmitting } = this.props
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage type />
            <label className={styles.TaskEditor_label}>
              Name
              <input
                className={styles.TaskEditor_input}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </label>
            <label className={styles.TaskEditor_label}>
              Number
              <input
                className={styles.TaskEditor_input}
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </label>
            <button
              className={styles.TaskEditor_button}
              type="submit"
              disabled={isSubmitting}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    )
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}
