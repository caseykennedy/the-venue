// Contact form:

// Imports
// ___________________________________________________________________

// Core
import React, { useState } from 'react'

// Libraries
import DatePicker from 'react-datepicker'

// Styles
import { Form } from './styles.scss'
import 'react-datepicker/dist/react-datepicker.css'

// Elements
import { Box } from '../../elements'
import Button from '../../elements/Button'

// Config
import theme from '../../../config/theme'

// Begin Component
// ___________________________________________________________________

const ContactForm: React.FC = () => {
  const [startDate, setStartDate] = useState(null)
  return (
    <Form
      name="Venue Contact Form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Venue Contact Form" />

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
              name="date"
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

// ___________________________________________________________________
// End
