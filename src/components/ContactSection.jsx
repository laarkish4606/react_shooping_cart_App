const ContactSection=()=>{
const handleSubmit = async (e) => {
  e.preventDefault();
}
    return(
        <section class="contact-section">
  <div class="contact-container">
    <div class="contact-header">
      <h2>Get in Touch</h2>
      <p>Have any questions or feedback? Fill out the form below and we’ll get back to you soon.</p>
    </div>

    <form class="contact-form" action="#" method="post">
      <div class="form-group">
        <input type="text" id="name" name="name" placeholder=" " required />
        <label for="name">Full Name</label>
      </div>

      <div class="form-group">
        <input type="email" id="email" name="email" placeholder=" " required />
        <label for="email">Email Address</label>
      </div>

      <div class="form-group">
        <textarea id="message" name="message" placeholder=" " required></textarea>
        <label for="message">Your Message</label>
      </div>

      <button onClick={handleSubmit } type="submit" class="btn">Send Message</button>
    </form>
  </div>
</section>

    )
}
export default ContactSection;