// Contact form:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import { Formik, Form, Field } from 'formik'

// Libraries
import DatePicker from 'react-datepicker'
// import useForm from 'react-hook-form'

// Styles
import * as S from './styles.scss'
import 'react-datepicker/dist/react-datepicker.css'

// Elements
import { Box } from '../../elements'
import Button from '../../elements/Button'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

function encode(data: any) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`)
    .join('&')
}

const ContactForm: React.FC = () => {
  const [startDate, setStartDate] = useState(null)
  return (
    <S.ContactForm>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          date: '',
          details: ''
        }}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': 'Contact Form',
              ...values
            })
          })
            .then(response => {
              console.log('====================================')
              console.log(`${JSON.stringify(response, null, 2)}`)
              console.log('====================================')
            })
            .then(() => {
              navigate('/')
              setSubmitting(false)
            })
            // .then(() => alert('success'))
            .catch(error => {
              console.log('====================================')
              console.log(`error in submiting the form data:${error}`)
              console.log('====================================')
            })
            .catch(error => {
              console.log(error)
              alert('Error: Please Try Again!')
              setSubmitting(false)
            })
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 1000)
        }}
      >
        {({ errors, touched, isSubmitting, handleSubmit, handleReset }) => (
          <Form
            name="Contact Form"
            onSubmit={handleSubmit}
            onReset={handleReset}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Contact Form" />

            <fieldset>
              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="name">
                    Name:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="date">
                    Date:{' '}
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <DatePicker
                    showPopperArrow={false}
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    placeholderText="Event date"
                  />
                </Box>
              </Box>

              <Box width={1} className="form-group">
                <label htmlFor="comments">Tell us about your event: </label>
                <Field
                  as="textarea"
                  name="details"
                  id="details"
                  rows={4}
                  placeholder="Tell us about your event"
                />
              </Box>

              <Box width={1} className="form-group">
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="email">
                    Email:
                    <abbr title="required" aria-label="required">
                      *
                    </abbr>
                  </label>

                  <Field
                    name="email"
                    placeholder="Your email"
                    type="email"
                    required={true}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} className="form-group__box">
                  <label htmlFor="phone">Phone:</label>

                  {/* <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(___) ___-____"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                ref={register({
                  maxLength: 12,
                  pattern: {
                    value: /[0-9]{3} [0-9]{3} [0-9]{4}/i,
                    message: 'Invalid phone number'
                  }
                })}
              /> */}

                  <Field
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="___ ___-____"
                  />
                </Box>
              </Box>

              <Button type="submit" value="Submit Request">
                Submit Request
              </Button>
            </fieldset>
          </Form>
        )}
      </Formik>
    </S.ContactForm>
  )
}

export default ContactForm

//////////////////////////////////////////////////////////////////////
// End
