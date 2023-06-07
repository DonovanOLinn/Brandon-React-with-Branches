import Button from "./Button"
import Input from "./Input"

const ContactForm = () => {
  return (
    <div>
      <form onSubmit={() => console.log('submitted')}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input name='address' placeholder="Address" />
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