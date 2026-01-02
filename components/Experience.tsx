export default function Experience() {
  const experiences = [
    {
      company: "3Pillar",
      role: "Software Engineer",
      period: "4 years",
      description: "Developed scalable web applications across multiple client projects. Built a full-stack AI-powered interview platform with React, Next.js, Python, and FastAPI, integrating speech-to-text/text-to-speech systems and LangGraph-based AI workflows. Contributed to an educational certification platform using React.js and Node.js. Designed and maintained enterprise solutions with Adobe AEM CMS. Collaborated with cross-functional teams in Agile/Scrum environments, performing debugging, optimization, and comprehensive testing to ensure application performance and stability.",
      technologies: ["React.js", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js", "Adobe AEM", "AI/ML", "AWS"],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: "While at 3Pillar",
      description: "Delivered custom web solutions for various clients while maintaining full-time position. Focused on frontend development with modern frameworks, creating responsive and user-friendly interfaces tailored to client needs.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
