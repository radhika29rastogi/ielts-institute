const testimonials = [
  {
    name: "Anjali Sharma",
    text: "I scored Band 8 with their practice tests. Highly recommended!",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rahul Mehta",
    text: "The AI feedback helped me improve quickly. Amazing experience!",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sara Khan",
    text: "The trainers were supportive and guided me step by step.",
    img: "https://i.pravatar.cc/100?img=3",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        What Our Students Say
      </h2>
      <p className="text-lg text-gray-500 mb-14 max-w-2xl mx-auto">
        Real stories from real students who achieved their IELTS dreams with us.
      </p>
      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative group bg-white p-8 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-lg group-hover:scale-110 transition-transform"
                />
                <span className="absolute -bottom-2 -right-2 bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-semibold shadow">
                  ★
                </span>
              </div>
              <svg
                className="mx-auto mb-4"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="18"
                  fill="#3B82F6"
                  fillOpacity="0.08"
                />
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="#3B82F6"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="Arial"
                  dy=".3em"
                >
                  “
                </text>
              </svg>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                {t.text}
              </p>
              <h4 className="mt-2 font-bold text-blue-700 text-lg">
                {t.name}
              </h4>
            </div>
            <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="32" height="32" fill="none">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#3B82F6"
                  fillOpacity="0.15"
                />
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="32" height="32" fill="none">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#3B82F6"
                  fillOpacity="0.10"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
