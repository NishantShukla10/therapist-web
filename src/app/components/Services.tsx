'use client';

import Image from 'next/image';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn practical tools to manage overwhelming thoughts, calm your nervous system, and build inner resilience. Sessions blend mindfulness with CBT techniques.',
    image: '/services1.jpg',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Work through communication challenges, rebuild connection, and create deeper understanding in your relationships, whether romantic or familial.',
    image: '/services2.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past emotional wounds with a safe, compassionate approach that respects your pace and experiences. Evidence-based trauma therapies are used.',
    image: '/services3.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden transition hover:shadow-md"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
