'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  email: string
  moveDate: string
  fromAddress: string
  toAddress: string
  moveType: string
  notes: string
}

const initialState: FormData = {
  name: '',
  phone: '',
  email: '',
  moveDate: '',
  fromAddress: '',
  toAddress: '',
  moveType: '',
  notes: '',
}

interface QuoteFormProps {
  defaultMoveType?: string
  title?: string
  subtitle?: string
}

export default function QuoteForm({
  defaultMoveType = '',
  title = 'Get Your Free Quote',
  subtitle = 'Fast response. No obligation. 100% free.',
}: QuoteFormProps) {
  const [form, setForm] = useState<FormData>({ ...initialState, moveType: defaultMoveType })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setMessage(data.message)
        setForm({ ...initialState, moveType: defaultMoveType })
      } else {
        throw new Error('Request failed')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please call us directly.')
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-400 transition-shadow'

  return (
    <section className="py-16 px-4 bg-gray-50" id="quote">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-green-800 text-xl mb-2">Quote Request Received!</p>
              <p className="text-green-700 text-sm mb-4">{message}</p>
              <a
                href={PHONE_HREF}
                className="inline-block text-sm font-semibold text-green-700 underline"
              >
                Or call us now: {PHONE_DISPLAY}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(479) 555-0100"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Move Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="moveDate"
                    required
                    value={form.moveDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Move Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="moveType"
                    required
                    value={form.moveType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select type…</option>
                    <option value="Student">Student / UARK Move</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Storage">Storage</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Moving From <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fromAddress"
                  required
                  value={form.fromAddress}
                  onChange={handleChange}
                  placeholder="123 Main St, Fayetteville, AR 72701"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Moving To <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="toAddress"
                  required
                  value={form.toAddress}
                  onChange={handleChange}
                  placeholder="456 Oak Ave, Springdale, AR 72762"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Number of bedrooms, special items, stairs, storage needs, etc."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                  <p className="text-red-700 text-sm">
                    {message}{' '}
                    <Link href={PHONE_HREF} className="font-semibold underline">
                      {PHONE_DISPLAY}
                    </Link>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-red-600 text-white font-bold text-base py-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              >
                {status === 'loading' ? 'Sending Your Request…' : 'Get My Free Quote →'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respond within 1 business hour. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
