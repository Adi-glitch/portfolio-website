import React from "react";

const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Research Assistant",
    company: " USC Signal Analysis and Interpretation Laboratory",
    description: [
      "Developing a latent diffusion generative model for super-resolution of reconstructed 2D real-time MRI speech articulator DICOM datasets to enhance imaging clarity and precision for various speech segmentation tasks.",
      "Analyzing research papers, identifying key strengths and weaknesses to inform and improve model development."
    ],
    technologies: ["Pytorch", "Python", "HPC Clusters", "Research Papers"],
  },
  {
    year: "June 2021 - May 2023",
    role: "Associate Software Engineer",
    company: "TSS Consultancy Private Limited",
    description: [
      "Developed and implemented REST APIs for KYC compliance, Transaction monitoring, and Screening, and deployed it to Azure, which reduced fraud cases by 27% and improved processing efficiency by 20%, ensuring adherence to regulations and streamlining workflow.",
      "Created screening and closure utilities with ASP.NET, AngularJS, and SQL Server, to bolster compliance and fight financial crime.",
      "Created a custom report to visualize the number of alerts generated in 74 different scenarios of the transaction monitoring using SQL server and front end frameworks like HTML, CSS and JavaScript for clients to get a quick review.",
      "Optimized SQL queries using MS SQL Server, leading to a 70% reduction in data extraction time from relational databases, resulting in significant cost savings and improved system performance.",
      "Introduced and maintained a weekly code review process, evaluating 6+ development submissions per week. This initiative identified and resolved critical bugs before deployment, enhancing code quality and reducing post-release issues by 30%.",
      "Debugged high-priority bugs and integrated Continuous Integration/Continuous Development (CI/CD) practices, resolving critical issues within a 4-hour timeframe, improving deployment frequency, and reducing the lead time for changes, leading to faster delivery of features and bug fixes.",
      "Collaborated with 4 diverse teams, utilizing Scrum and Kanban methodologies, to deliver over 5 projects on time, fostering a collaborative and efficient development environment."
    ],
    technologies: ["ASP .NET", "C#", "Microsoft SQL Server", "HTML", "CSS", "Javascript", "AngularJS", "Microsoft Azure", "Git"],
  },
  {
    year: "Dec 2019 - Jan 2020",
    role: "Android and Web Developer Intern",
    company: "Alliance Innovations and Technologies Llp",
    description: [
      "To optimally address the challenge of achieving precise user location tracking, I strategically integrated Google Play services and the Google Maps API within Android Studio using Java, resulting in an impressive 16% increase in location accuracy.",
      "Engineered Android apps utilizing Firebase as a backend, resulting in a 20% improvement in data retrieval speed and a 27% increase in user engagement due to streamlined interactions and responsive interfaces.",
      "Established a stable connection for data exchange between an Arduino device and a Java application, thereby enhancing data transfer reliability. I also integrated an MFRC522 RFID Reader to enable secure user authentication via RFID tags."
    ],
    technologies: ["Android Studio", "Java", "Google Firestore", "C++", "Arduino", "RFID", "3D Printing"],
  },
];

const Experience = () => {
  return (
    <section id="experience">
        <div className="border-b border-neutral-900 pb-4">
          <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"> Work Experience </h1>
          <div>
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                </div>
                <div className="w-full max-w-l lg:w-3/4">
                  <h6 className="mb-2 font-semibold">
                    {experience.role} - {" "}
                    <span className="text-sm text-purple-100"> {experience.company}</span>
                  </h6>
                  <div>
                    <ul className="text-neutral-300 list-disc list-inside mb-4 ml-4">
                      {experience.description.map((point, i) => (
                        <li style={{ textIndent: '-1.5rem', paddingLeft: '1.5rem' }} key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap">
                      {experience.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Experience;
