import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-16 py-3"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.85) 60%, rgba(230,242,255,0.7) 100%)",
        boxShadow: "0 4px 24px 0 rgba(30, 64, 175, 0.08)",
        borderBottom: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-3xl drop-shadow text-blue-400">🎓</span>
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent tracking-tight">
            IELTS Pro
          </h1>
        </div>
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold text-lg">
          <li>
            <a
              href="#hero"
              className="px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-blue-600 text-3xl p-2 rounded-lg hover:bg-blue-50 transition"
          onClick={handleToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 8h16M4 16h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul
          className="md:hidden absolute left-0 right-0 top-full w-full bg-white/80 backdrop-blur-lg shadow-xl flex flex-col gap-2 py-6 px-8 text-gray-700 font-semibold text-lg rounded-b-2xl border-b border-blue-100 animate-fade-in z-50"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.95) 60%, rgba(230,242,255,0.85) 100%)",
            boxShadow: "0 8px 32px 0 rgba(30, 64, 175, 0.10)",
          }}
        >
          <li>
            <a
              href="#hero"
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
