/* eslint-disable react/button-has-type */
import { useState } from 'react';

import { validateEmail } from '@/Utils/helper';

const ContactForm = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    note: '',
    company: ''
  });
  const enabled =
    state.firstname.length &&
    state.lastname.length &&
    validateEmail(state.email) &&
    state.note.length;
  const handleChange = (key, value) =>
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  const handleSend = () => {
    const { firstname, lastname, email, note, company } = state;
    if (enabled) {
      const emailTo = 'ahrenpradhan+query@gmail.com';
      const subject = encodeURIComponent(
        `Query - ${firstname} ${lastname} ${company ? `- ${company}` : ''}`
      );
      const body = encodeURIComponent(note);
      window.open(
        `mailto:${emailTo}?bcc=${email}&subject=${subject}&body=${body}`
      );
    }
  };
  return (
    <form action="#" className="m-auto mt-8 w-3/4 space-y-6 md:w-96">
      <div className="-space-y-px rounded-md shadow-sm">
        <input
          id="first-name"
          name="firstname"
          type="text"
          onChange={e => handleChange('firstname', e.target.value)}
          required
          className="block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="First Name *"
        />
        <input
          id="last-name"
          name="lastname"
          onChange={e => handleChange('lastname', e.target.value)}
          type="text"
          required
          className="block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Last Name *"
        />
        <input
          id="email-address"
          name="email"
          onChange={e => handleChange('email', e.target.value)}
          type="email"
          autoComplete="email"
          required
          className="block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address *"
        />
        <input
          id="company"
          name="company"
          onChange={e => handleChange('company', e.target.value)}
          type="text"
          className="block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Company"
        />
        <textarea
          rows={5}
          id="note"
          name="note"
          onChange={e => handleChange('note', e.target.value)}
          type="text"
          required
          className="block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Note *"
        />
      </div>
      <button
        disabled={!enabled}
        type="reset"
        onClick={handleSend}
        className="group flex w-full justify-center rounded-md border border-transparent bg-zinc-700 py-2 px-4 text-sm font-medium text-white hover:bg-zinc-900 focus:outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Send
      </button>
    </form>
  );
};
export default ContactForm;
