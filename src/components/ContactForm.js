'use client';

import { useState } from 'react';
import Icon from './Icon';
import { site } from '@/lib/site';

const field =
  'w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-[0.95rem] text-steel-900 placeholder:text-steel-400 transition-colors focus:border-navy-700 focus:outline-none focus:ring-4 focus:ring-navy-100';

export default function ContactForm({ serviceOptions = [], defaultService = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', company: '', service: defaultService, quantity: '', message: '' });
  const [touched, setTouched] = useState(false);

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const valid = form.name.trim() && form.phone.trim() && form.message.trim();

  const compose = () =>
    [
      `Enquiry for ${site.name}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.company ? `Company: ${form.company}` : undefined,
      form.service ? `Service: ${form.service}` : undefined,
      form.quantity ? `Quantity: ${form.quantity}` : undefined,
      '',
      form.message,
    ]
      .filter((line) => line !== false && line !== undefined)
      .join('\n');

  const send = (channel) => (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    const text = compose();
    const url =
      channel === 'whatsapp'
        ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, channel === 'whatsapp' ? '_blank' : '_self', 'noopener');
  };

  const error = (name) => touched && !form[name].trim();

  return (
    <form onSubmit={send('whatsapp')} noValidate className="card p-6 sm:p-8">
      <h2 className="h-md">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-steel-600">
        Fill in the details and send them straight to our team on WhatsApp or by email. Attach your drawing or photos
        in the chat or mail that opens.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Your name *</span>
          <input name="name" value={form.name} onChange={set} autoComplete="name" className={field} aria-invalid={error('name')} />
          {error('name') && <span className="mt-1 block text-xs text-red-600">Please enter your name.</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Phone number *</span>
          <input name="phone" type="tel" inputMode="tel" value={form.phone} onChange={set} autoComplete="tel" className={field} aria-invalid={error('phone')} />
          {error('phone') && <span className="mt-1 block text-xs text-red-600">Please enter a phone number.</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Company</span>
          <input name="company" value={form.company} onChange={set} autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Service required</span>
          <select name="service" value={form.service} onChange={set} className={field}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Quantity</span>
          <input name="quantity" value={form.quantity} onChange={set} placeholder="e.g. 2 pieces" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">What do you need made or repaired? *</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={set}
            placeholder="Part name, material, main dimensions, required date…"
            className={field}
            aria-invalid={error('message')}
          />
          {error('message') && <span className="mt-1 block text-xs text-red-600">Please describe your requirement.</span>}
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary flex-1">
          <Icon name="whatsapp" size={18} />
          Send on WhatsApp
        </button>
        <button type="button" onClick={send('email')} className="btn btn-outline flex-1">
          <Icon name="mail" size={17} />
          Send by email
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-steel-400">
        Your details are sent directly to Alhamd Technologies through your own WhatsApp or email app. Nothing is stored
        on this website.
      </p>
    </form>
  );
}
