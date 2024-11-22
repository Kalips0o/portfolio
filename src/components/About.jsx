import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { photo } from '../assets';
import { Carousel } from './caroucel/Carousel';

const About = () => {
  return (
    <div className="mt-[1rem] relative">
      <div className="absolute inset-0 bg-[#F5F5F5] -z-10" />

      <div className="flex flex-col-reverse lg:flex-row gap-10 overflow-visible -mt-[9rem] mb-[8rem]">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="lg:w-1/2 flex items-center"
        >
          <img
            src={photo}
            alt="profile"
            className="w-[350px] h-[400px] object-cover rounded-2xl"
          />
        </motion.div>

        <div className="lg:w-1/2">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} text-gray-900`}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="mt-4 text-gray-800 text-[18px] max-w-3xl leading-[30px]">
              <p>I&#39;m Front End Developer who loves working on new and creative projects.</p>
              <p>When developing websites, I always adhere to the following principles: reliability, convenience
                  and availability.</p>
              <p>I am sure that the correct development of a website is not only writing code without bugs, but also
                  optimization, adaptability, loading speed.</p>
              <p>I am an open-minded and determined person, I learn quickly, I like to learn new things.</p>
              <p>I&#39;m a team player, and I always strive to help my team succeed.</p>
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="-mt-[6rem] w-full"
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
