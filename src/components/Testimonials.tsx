import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Jose Mendez',
    title: 'Operations Management',
    rating: 5,
    text: 'Geek Services exceeded my expectations with their TV mounting service. They were meticulous in their work, ensuring the TV was securely mounted and all cables were neatly organized. My living room looks fantastic now!'
  },
  {
    name: 'Danielle Williams',
    title: 'Business Analyst',
    rating: 5,
    text: 'I had a complicated issue with my home security system, but Geek Services tackled it with ease. Their knowledgeable technician identified the problem quickly and implemented a solution that restored my peace of mind. I highly recommend their services!'
  },
  {
    name: 'David Miller',
    title: 'Sr. Manager',
    rating: 4,
    text: 'Geek Services saved the day when my refrigerator suddenly stopped cooling. Their technician arrived promptly, diagnosed a faulty compressor, and had it replaced in no time. Thanks to them, I didn\'t have to worry about spoiled groceries!'
  },
  {
    name: 'Jeffrey York',
    title: 'Real Estate',
    rating: 5,
    text: 'I\'ve relied on Geek Services for all my tech needs, from computer repairs to smart home installations, and they\'ve never disappointed. Their team is reliable, knowledgeable, and always goes the extra mile to ensure customer satisfaction. I wouldn\'t trust anyone else with my devices!'
  },
  {
    name: 'Veronica Hannon',
    title: 'Store Manager',
    rating: 4,
    text: 'When my WiFi signal was constantly dropping, I called Geek Services for help. Their team optimized my network setup, and now I enjoy seamless connectivity throughout my home. Thanks to them, streaming and gaming have never been smoother!'
  }
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollStep;
      }
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="w-full bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-bold text-center mb-10">Testimonials</h4>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
          <div
            ref={carouselRef}
            className="flex space-x-8 transition-all duration-300"
            style={{ scrollBehavior: 'smooth', minWidth: '100%' }}
          >
            {testimonials.concat(testimonials).map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center px-8 py-8 min-w-[320px] max-w-xs mx-2"
                style={{ flex: '0 0 350px' }}
              >
                <svg className="w-14 h-14 mb-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{display:'inline', paddingBottom:'16px'}}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                </svg>
                <span className="text-lg font-semibold text-center mb-1">{t.name}</span>
                <p className="text-sm text-center font-bold mb-2">{t.title}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill={i < t.rating ? '#ffcc00' : 'none'} stroke="#ffcc00" strokeWidth="2" viewBox="0 0 24 24">
                      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-700 text-center">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 