import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Samuel Oladimeji Shopeyin</h1>
        <p className="text-2xl font-light mb-6">Frontend Developer</p>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Software Developer with over a year of experience in building dynamic and responsive web applications. Proficient in JavaScript, Next.js, React.js, Node.js, and Redux. Committed to continuous learning and adapting to new technologies.
        </p>
        <div className="mt-4">
          <a href="https://github.com/shopeyin" className="text-blue-600 dark:text-blue-400 hover:underline text-lg" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="text-lg mt-2">
          Stirling, Scotland, UK | 07851380528 | <a href="mailto:oladimejicoder@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">oladimejicoder@gmail.com</a>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="w-full max-w-4xl mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-6">Professional Summary</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Over a year of experience in building dynamic and responsive web applications, with expertise in JavaScript, Next.js, React.js, Node.js, and Redux. Demonstrated skills in developing high-quality web solutions, enhancing user experiences, and optimizing application performance. Strong problem-solving and analytical skills, experienced in Agile environments.
        </p>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-4xl font-semibold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "JavaScript", "Next.js", "Gatsby.js", "React.js", "WordPress",
            "AWS Amplify", "Firebase/Firestore", "HTML5", "Redux", "CSS3/SCSS",
            "Git version control", "Node.js", "React Testing Library"
          ].map((skill) => (
            <div key={skill} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-4xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Cards */}
          {[
            {
              title: "Global Voices Multilingual Website",
              description: "Created with Next.js and WordPress to provide company information, request quotes, view news, and showcase previous works.",
              link: "https://globalvoices.com"
            },
            {
              title: "Cabin Reservation Website",
              description: "A cabin reservation webapp where users can make reservations for a cabin and login to their profile to view their reservations.",
              link: "https://reservation-app-six.vercel.app/"
            },
            {
              title: "Global Voices Media Website",
              description: "A media-focused website developed using Gatsby.js and WordPress.",
              link: "https://globalvoicesmedia.com"
            },
            {
              title: "Crw-store App",
              description: "An e-commerce fashion store where users can buy clothes online. Built with React on the frontend and Firebase Firestore for the backend.",
              link: "https://crw-store.web.app/"
            },
            {
              title: "TravLog App",
              description: "A travel agency landing page developed with HTML, SASS, and JavaScript.",
              link: "https://travlog-web.netlify.app"
            },
            {
              title: "Artiste Ticketing Page",
              description: "A ticket booking landing page developed with HTML, SASS, and JavaScript.",
              link: "https://velvet-cloud.netlify.app/"
            }
          ].map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="w-full max-w-4xl mb-16 text-center">
        <h2 className="text-4xl font-semibold mb-6">Work Experience</h2>
        <div className="text-left">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Frontend Developer - Global Voices, Stirling, Scotland, UK</h3>
            <p className="text-lg font-light">November 2023 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Redeveloped the existing website using GatsbyJS, enhancing site performance and user engagement.</li>
              <li>Implemented a URL tracking feature, optimizing targeted marketing strategies by identifying potential traffic sources.</li>
              <li>Led the development of the main website using NextJS, significantly improving efficiency and user experience.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Frontend Developer - Retailloop, Lagos, Nigeria</h3>
            <p className="text-lg font-light">July 2023 - November 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Resolved a critical address input issue in the merchant portal, streamlining customer addition.</li>
              <li>Fixed a subscription notification bug, ensuring accurate alerts for merchants, enhancing user experience.</li>
              <li>Collaboratively redesigned the order section, refining the process from customer creation to order placement, payment method selection, and delivery.</li>
              <li>Led the creation of the tax section's landing page within the merchant portal.</li>
            </ul>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center border-t pt-8 mt-16">
        <p className="text-sm">
          © {new Date().getFullYear()} Samuel Oladimeji Shopeyin. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
