
const ContactForm = () => {
  return (
    <div>
      <form onSubmit={() => console.log('submitted')}>
        <div>
          <label htmlFor="name">Contact Name</label>
          {/* Add input component here */}
        </div>
      </form>
    </div>
  )
}

export default ContactForm