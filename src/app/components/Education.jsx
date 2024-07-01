import React from "react";

const EDUCATION = [
    {
      year: "Aug 2023 - Present",
      role: "MS in Electrical and Computer Engineering (GPA:3.77)",
      company: "University of Southern California",
      description: `Relevant Courses: Probability, Linear Algebra, Deep Learning, Machine Learning, Digital Image Processing`,
      technologies: ["Python", "C++", "MATLAB", "Pytorch", "SPSS", "Numpy", "Pandas", "Seaborn", "Diffusion Models", "GANs", "LLMs"],
    },
    {
      year: "Aug 2017 - June 2021",
      role: "Bachelor of Engineering in Electronics and Telecommunications",
      company: "University of Mumbai",
      description: `Relevant Courses: Database Management Systems, Digital Signal Processing, C++, Java, Information Systems, Data Structures and Algorithms, Networking`,
      technologies: ["SQL", "C++", "Python", "Arduino", "MATLAB", "Tensorflow", "Cisco Packet Tracer"],
    },
  ];

const Education = () => {
    return (
        <section id="education">
                <div className="border-b border-neutral-900 pb-4">
                    <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"> Education </h1>
                    <div>
                        {EDUCATION.map((education, index) => (
                            <div
                                key={index}
                                className="mb-8 flex flex-wrap lg:justify-center">
                                
                                <div className="w-full lg:w-1/4">
                                    <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                                </div>
                                <div className="w-full max-w-l lg:w-3/4">
                                    <h6 className="mb-2 font-semibold">
                                        {education.role} - {" "}
                                        <span className="text-sm text-purple-100"> {education.company}</span>
                                    </h6>
                                    <p className="mb-4 text-neutral-400">{education.description}</p>
                                    <div className="flex flex-wrap">
                                        {education.technologies.map((tech, index) => (
                                            <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
        </section>
    )
}

export default Education;