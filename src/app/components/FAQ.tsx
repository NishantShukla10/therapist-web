'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer:
      'No, but I provide a superbill that you can submit to your insurance provider for possible reimbursement.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes, all virtual sessions are held via Zoom for your convenience.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Please provide at least 24 hours notice for cancellations to avoid a late fee.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
