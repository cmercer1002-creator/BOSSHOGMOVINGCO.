'use client'

import { useState } from 'react'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  email: string
  housingType: string
  moveDate: string
  roommates: string
  sharedFurniture: string
  notes: string
}

const initialState: FormData = {
  name: '',
  phone: '',
  email: '',
  housingType: '',
  moveDate: '',
  roommates: '',
  sharedFurniture: '',
  notes: '',
}

export default function SummerHoldForm() {
  const [form, setForm] = useState<FormData>(initialState)
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

    const notesComposed = [
      `Housing: ${form.housingType}`,
      `Roommates: ${form.roommates || 'Just me'}`,
      `Shared furniture add-ons: ${form.sharedFurniture}`,
      form.notes ? `Additional notes: ${form.notes}` : '',
    ]
      .filter(Boolean)
      .join(' | ')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          moveDate: form.moveDate,
          moveType: 'Summer Hold',
          fromAddress: form.housingType,
          toAddress: 'Storage → Move-In Delivery',
          notes: notesComposed,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setMessage(data.message)
        setForm(initialState)
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
    <section className="py-16 px-4 bg-gray-50" id="reserve">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              Reserve Your Spot
            </h2>
            <p className="text-gray-500 text-sm">
              Summer Hold spots fill fast — lock in your date now. No payment due today.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-green-800 text-xl mb-2">You&apos;re on the list!</p>
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
                    Housing Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="housingType"
                    required
                    value={form.housingType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    <option value="Standard Dorm">Standard Dorm</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Move-Out Date <span className="text-red-500">*</span>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Roommates Booking Together
                  </label>
                  <select
                    name="roommates"
                    value={form.roommates}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Just me</option>
                    <option value="2">2 roommates</option>
                    <option value="3">3 roommates</option>
                    <option value="4+">4+ roommates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Shared Furniture Add-Ons?
                  </label>
                  <select
                    name="sharedFurniture"
                    value={form.sharedFurniture}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes — I&apos;ll discuss details</option>
                  </select>
                </div>
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
                  placeholder="Dorm building, apartment complex, special items, anything we should know…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                  <p className="text-red-700 text-sm">
                    {message}{' '}
                    <a href={PHONE_HREF} className="font-semibold underline">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-red-600 text-white font-bold text-base py-4 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
              >
                {status === 'loading' ? 'Sending…' : 'Reserve My Spot →'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                No payment due today. We&apos;ll reach out within 1 hour to confirm details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
