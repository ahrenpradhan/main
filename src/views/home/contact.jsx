import { Divider } from '@/Components/common/index';
import { ContactForm } from '@/Components/index';

// section 6 - contact form

const Contact = () => (
  <section
    className="container m-auto flex min-h-screen flex-col justify-center p-4 pb-32"
    id="contact"
  >
    <div>
      <Divider />
      <div className="min-w-full pb-8 text-center text-3xl font-bold tracking-wide">
        Have something on your plate!!
      </div>
      <div className="m-auto pb-4 text-center" style={{ maxWidth: '28em' }}>
        Need to jump start your project, want some guidance, or just wanna hire
        me.
      </div>
      <div className="m-auto flex flex-col md:justify-around">
        <ContactForm />
        <div className="m-auto pt-10 text-center" style={{ maxWidth: '24em' }}>
          I will try my best, to get back as soon as possible, but it could take
          around of 1-3 business days if things are not ideal from my side.
          <br />
          <br />
          Looking forwards to hear from you.
          <br />
          <br />
          Regards.
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
