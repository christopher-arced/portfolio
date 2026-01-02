export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Christopher Arce
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer | Frontend Specialist
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Computer Science graduate with 4+ years of professional experience building modern web applications.
          Specialized in frontend development with React and Next.js, with a strong foundation in full-stack
          development. Experienced in delivering both enterprise solutions and freelance projects. Passionate
          about creating intuitive user experiences and writing clean, maintainable code.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
