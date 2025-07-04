'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        {/* Text on the right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Dr. Serena Blake</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight
            years of experience and over 500 client sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you
            overcome anxiety, strengthen relationships, and heal from trauma.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/dr-SB.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
