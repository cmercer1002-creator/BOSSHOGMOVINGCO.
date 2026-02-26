interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
}: FAQSectionProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none select-none">
                <span className="pr-4">{faq.question}</span>
                <span className="text-red-600 font-bold flex-shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">
                <p className="pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
