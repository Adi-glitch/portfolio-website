import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        <h1 className="my-20 text-center text-4xl">
          About 
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <Image className="rounded-2xl" src = "/images/Projects/IMG_0806.png" alt="about" width={500} height={500}/>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-xl py-6">I am a graduate student at the University of Southern California, specializing in Electrical and Computer Engineering with a focus on Machine Learning and Data Science. My academic journey has immersed me in the intricate concepts of statistics and data, empowering me to create machine learning algorithms for accurate predictions and informed business decisions. My passion for leveraging technology to address real-world challenges is evident in my recent projects. From exploring Wasserstein Generative Adversarial Networks to analyze Covid-19 X-ray images to delving into Super Resolution Generative Adversarial Networks, I am deeply invested in the potential of AI-driven solutions, particularly in image generation. Prior to pursuing my graduate studies, I honed my skills as a software engineer at TSS Consultancy, a fintech company, where I played a pivotal role in leveraging stock market data to develop transaction monitoring solutions. My contributions not only facilitated Anti-money laundering goals but also involved mentoring junior developers and conducting code reviews.</p>
                </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSection