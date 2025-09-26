const features = [
  {
    title: "Speaking Practice",
    desc: "Daily speaking sessions to boost confidence.",
    icon: "🗣️",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Mock Tests",
    desc: "Real exam-like practice with instant feedback.",
    icon: "📄",
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "AI Band Score",
    desc: "Get instant evaluation with AI tools.",
    icon: "🤖",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Expert Trainers",
    desc: "Learn from certified IELTS professionals.",
    icon: "🎓",
    color: "from-yellow-400 to-yellow-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 px-6 md:px-16 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Our Features
      </h2>
      <p className="text-lg text-gray-500 mb-14 max-w-2xl mx-auto">
        Unlock your IELTS potential with our comprehensive, modern, and student-focused features.
      </p>
      <div className="grid gap-10 md:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2"
          >
            <div
              className={`mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${f.color} shadow-lg mb-6 group-hover:scale-110 transition-transform text-5xl`}
            >
              <span className="">{f.icon}</span>
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-500 text-base">{f.desc}</p>
            <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="32" height="32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#3B82F6" fillOpacity="0.15" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
