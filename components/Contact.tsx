export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-800/50 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and
            projects. Feel free to reach out if you'd like to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:cryszarce2@gmail.com"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/christopher-arce-0b51371b3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/christopher-arced"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
