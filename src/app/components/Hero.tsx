'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6 leading-tight">
          Compassionate Therapy for a Calmer, Happier You
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600 mb-8">
          Dr. Serena Blake, PsyD – Clinical Psychologist in Los Angeles
        </h2>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
