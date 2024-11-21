
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

      <div className="flex flex-col-reverse lg:flex-row gap-10 overflow-hidden -mt-[8rem] mb-[8rem]">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="lg:w-1/2 flex items-center"
        >
          <img
            src={photo}
            alt="profile"
            className="w-[350px] h-[350px] object-cover rounded-2xl"
          />
        </motion.div>

        <div className="lg:w-1/2">
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} text-gray-900`}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="mt-4 text-gray-800 text-[18px] max-w-3xl leading-[30px]">
              I am a person who has a strong passion for programming that inspires
              me everyday. I have experience in creating SPA with React/Redux/ TypeScript
              in team. Now I improve my skills in this direction and expanding them with
              new technologies. I spend my leisure time on Codewars or by improving
              english skills. Open to your suggestions.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="-mt-[4rem] w-full"
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
