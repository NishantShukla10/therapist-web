// app/page.tsx
'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/FAQ';
import ContactForm from './components/ContactForm';
import Fees from './components/Fees';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <Fees />
        <section id="faq"><Faq /></section>
        <section id="contact"><ContactForm /></section>
      </main>
    </>
  );
}
