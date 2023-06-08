import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'

interface ContactFormProps {
  id?: string,
  data?: {}
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})

  const onSubmit = () => {
    console.log('pass')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name='address' placeholder="Address" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm