import { Divider } from '@/Components/common/index';
import { ContactForm } from '@/Components/index';
import content from '@/Assets/ishu/content.json';

// section 6 - contact form

const Contact = () => (
  <section className="container m-auto px-4 py-16" id="contact">
    <Divider />

    <div className="mx-auto max-w-3xl text-center pb-10">
      <h2 className="text-3xl font-bold tracking-wide text-slate-900">Get in Touch</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
        Reach out to us for enquiries, orders, or any project support. Our team is available to respond quickly and help you find the right solution.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg">
        <h3 className="mb-6 text-xl font-semibold text-slate-900">Contact Details</h3>
        <dl className="space-y-6 text-sm leading-7 text-slate-700 sm:text-base">
          <div className="grid gap-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-slate-900">Address</dt>
            <dd className="text-slate-600">
              {content.contact_details.address.map((line, index) => (
                <span key={index}>
                  {line}{index !== content.contact_details.address.length - 1 && <>,<br /></>}
                </span>
              ))}
            </dd>
          </div>

          <div className="grid gap-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-slate-900">Phone</dt>
            <dd className="text-slate-600">
             {content.contact_details.phone.map((num, index) => (
                <span key={index}>
                  {num} {index !== content.contact_details.phone.length - 1 && <>,<br /></>}
                </span>
              ))}
            </dd>
          </div>

          <div className="grid gap-2 sm:grid-cols-[auto_1fr]">
            <dt className="font-semibold text-slate-900">Email</dt>
            <dd className="text-slate-600">
              {content.contact_details.email.map((email, index) => (
                <span key={index}>
                  {email} {index !== content.contact_details.email.length - 1 && <>,<br /></>}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg">
        <h3 className="mb-6 text-xl font-semibold text-slate-900">Send Us a Message</h3>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
