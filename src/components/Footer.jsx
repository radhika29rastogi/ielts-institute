export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-t from-blue-900 via-gray-900 to-gray-800 text-white py-12 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-700 rounded-full opacity-20 blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl z-0"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-blue-400 drop-shadow">🎓</span>
              <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                IELTS Pro
              </h2>
            </div>
            <span className="text-sm text-gray-400 mt-2 italic">
              Your Band 8+ Journey Starts Here
            </span>
          </div>
          {/* Navigation */}
          <ul className="flex gap-8 mt-8 md:mt-0 text-lg font-medium">
            <li>
              <a
                href="#hero"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Testimonials
              </a>
            </li>
          </ul>
          {/* Contact */}
          <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
            <a
              href="mailto:info@ieltspro.com"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-400 transition-colors duration-200 font-semibold"
            >
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
                />
              </svg>
              info@ieltspro.com
            </a>
            <div className="flex gap-4 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.905a4.48 4.48 0 00-.61 2.26c0 1.56.795 2.94 2.005 3.75a4.48 4.48 0 01-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42a4.48 4.48 0 01-2.03.077c.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 012 19.54a12.7 12.7 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.54.698z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 <span className="font-semibold text-blue-300">IELTS Pro</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}