// Contact form:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

// Libraries
import DatePicker from 'react-datepicker'
// import useForm from 'react-hook-form'

// Styles
import { Form } from './styles.scss'
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
  const [state, setState] = React.useState({})

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  return (
    <Form
      name="Venue Contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" onChange={handleChange} />
      <input type="hidden" name="form-name" value="Venue Contact" />

      <fieldset>
        <Box width={1} className="form-group">
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
            <label htmlFor="name">
              Name:{' '}
              <abbr title="required" aria-label="required">
                *
              </abbr>
            </label>

            <input
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
          <textarea
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

            <input
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

            <input
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
  )
}

export default ContactForm

//////////////////////////////////////////////////////////////////////
// End
