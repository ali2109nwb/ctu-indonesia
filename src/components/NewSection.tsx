'use client';
import Link from 'next/link';
export default function NewSection() {
  return (
    <section className="font-clash py-10 bg-[#0A325A] text-center text-white">
      <h2 className="text-3xl font-bold mb-4">READY TO TRANSFORM YOUR ROOM?</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Welcome to your one-stop destination for room transformation! Whether
        you're looking to create a cozy sanctuary, a modern workspace, or a
        vibrant living area, we’re here to help you turn your vision into reality.
      </p>
      <Link href="/contact">
              <button className="bg-blue-500 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition-all">
                Contact Sales
              </button>
      </Link>
    </section>
  );
}
