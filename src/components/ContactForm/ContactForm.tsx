// Contact form:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState } from 'react'

// Libraries
import useForm from 'react-hook-form'
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
//////////////////////////////////////////////////////////////////////

type Props = {}

const ContactForm: React.SFC<Props> = () => {
  const [startDate, setStartDate] = useState(null)
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange'
  })
  const onSubmit = ({ data }: any) => console.log(data)
  return (
    <Form
      name="the-venue-contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input
        type="hidden"
        name="the-venue-contact-form"
        value="the-venue-contact-form"
      />

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
              ref={register({
                required: 'Name is required'
              })}
            />

            {errors.name && (
              <div className="errors">
                <span>{errors.name.message}</span>
              </div>
            )}
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
            ref={register}
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
              type="text"
              ref={register({
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid email address'
                }
              })}
            />

            {errors.email && (
              <div className="errors">
                <span>{errors.email.message}</span>
              </div>
            )}
          </Box>
          <Box width={[1, 1, 1 / 2]} className="form-group__box">
            <label htmlFor="phone">Phone:</label>

            <input
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
            />

            {errors.phone && (
              <div className="errors">
                <span>{errors.phone.message}</span>
              </div>
            )}
          </Box>
        </Box>

        <button className="btn btn-submit" type="submit" value="Submit Request">
          <Button>Submit</Button>
        </button>
      </fieldset>
    </Form>
  )
}

export default ContactForm

//////////////////////////////////////////////////////////////////////
// End
