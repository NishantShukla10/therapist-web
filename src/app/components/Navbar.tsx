'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'fees', label: 'Fees' },
  { id: 'faq', label: 'Faq' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-indigo-600">Dr. Serena Blake</div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white border-t">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
