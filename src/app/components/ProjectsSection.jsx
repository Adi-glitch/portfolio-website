"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Infrared Thermography based Temperature Prediction",
    description: "The dataset was a regression problem, where ’aveOralM’, that is the average oral temperature measured in monitor mode was the target. Extensive preprocessing, feature selection, dimensionality reduction in the form of PCA, and model selection were conducted. The machine learning methods used were: A trivial and two baseline systems (Linear Regression and 1 Nearest Neighbor), Support Vector Regression, Polynomial Regression, Random Forest Regression and RBF Network Methods (RBF Sampler, KMeans Clustering for finding Basis Function centers and an ANN). Comparisons were made on Validation Root Mean Squared Error (RMSE) and Mean Squared Error (MSE) values over 5 fold (in most), 10 and 20 fold (in few) cross-validated data. The best results were obtained on the Support Vector Regressor with RBF Kernel, on normalized data along with PCA and Feature Selection.",
    image: "/images/Projects/MLFlowchart.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Adi-glitch/Infrared-Thermography-based-Temperature-Prediction",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Super-Resolution GAN (SRGAN)",
    description: "Image super-resolution refers to the process of enhancing the resolution and quality of a given image to produce a higher-resolution version. The goal of super-resolution is to generate a more detailed and clearer image from a low resolution input. To achieve this, we have used a perceptual loss function which consists of an adversarial loss, content loss, vgg loss and a pixel loss. The adversarial loss pushes our solution to the natural image manifold using a discriminator network that is trained to differentiate between the super-resolved images and original photo-realistic images and the content loss ensures that the generated high-resolution images are perceptually similar to the ground truth high-resolution images. The ultimate goal of our generator is the mapping of G : X → Y such that the distribution of generated HR images using LR images from G(X) is similar to the distribution of the HR original image (X).",
    image: "/images/Projects/SRGAN.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Adi-glitch/Super-Resolution-Generative-Adversarial-Networks",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Shopping Cart Web page",
    description: "A single page application with a component-based architecture in which components were created for the Navbar, CartList, and Footbar with the total amount. A shopping cart were you can increase, decrease, or delete the quantity of a specific product from the cart area. This app was built with React. JSX was used to make the code more readable for other programmers. Firestore, a document-oriented database that stores data, was used to store the product information and keep other devices using the app in sync.",
    image: "/images/Projects/shoppingcart.jpg",
    tag: ["All", "Software Development"],
    gitUrl: "https://github.com/Adi-glitch/Shopping-Cart",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Codeial – A social media application",
    description: "1. The front-end of the application was built using HTML, CSS, Javascript, and SASS. 2. To write the server side of the application, I used Node.js, Express.js, and Passport.js, as well as MVC framework and AJAX calls to update asynchronously to avoid refreshing the entire page for every single action. 3. MongoDB, Robo3T, and Mongoose were used as databases to store all design and cardinalities between entities related to user profiles, as well as OAuth for social authentication for Google login. 4. Socket.IO was used to create a chatting engine between two users.",
    image: "/images/Projects/Socialmedia.png",
    tag: ["All", "Software Development"],
    gitUrl: "https://github.com/Adi-glitch/Codeial",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Detection of COVID-19 through chest X-ray using WGAN-GP",
    description: "Generative Adversarial Networks (GAN) are powerful generative models but have many drawbacks related to convergence and mode collapse and suffer from instability. The proposed plan is to apply Wasserstein GAN (WGAN) with Gradient Penalty (GP) in order to expand the database of chest X-ray images and produce high quality plausible images, as WGAN has been proven to have better stability and efficiency in comparison to its predecessors. Comparison was made between different models like GAN, Deep Convolutional GAN, WGAN, WGAN-GP with our own architecture, and WGAN-GP generated images proved to be better than all its predecessors. These images would then be given to a CNN which would then classify the images and indicate the probable presence or absence of COVID-19 in the patient.",
    image: "/images/Projects/WGANGP.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Auto Billing Mall Shopping Cart (National Level Project)",
    description: "The idea was to reduce the wait time of the people standing in long queues for billing after their shopping is complete. So we installed a device right in the shopping cart itself. The system consist of of a RFID reader which was controlled by 8051 microcontroller coded with Keil Compiler. So whenever the shopper puts any product in trolley it is been detected by the RFID module and it is displayed on LCD along with the price of the product. As the shopper adds more things it is detected by the module and the price according to that increases. In case if customer changes his/her mind and doesn’t want any product added in the trolley he can remove it and the price added will be deducted automatically. At the end of shopping the shopper will press the button which when pressed adds all the product along with the price and gives the total bill to be paid. The total bill can be directly checked by the cashier and payment can be made. Hence this system is suitable for use in places such as supermarkets, where it can help in reducing man power and in creating a better shopping experience for its customers.",
    image: "/images/Projects/SmartTrolley.jpg",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Development"
          isSelected={tag === "Software Development"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
