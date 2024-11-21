import {styles} from '../styles';
import Typewriter from 'typewriter-effect';
import SkillsAnimation from "./animation/Skills";
import { motion } from 'framer-motion';
import { photoMobile } from '../assets';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden bg-#141414">
            <div className={`w-full h-full flex flex-col max-w-7xl mx-auto`}>
                {/* Responsive layout container */}
                <div className="flex flex-col md:flex-row h-full">
                    {/* Mobile layout - name and photo */}
                    <div className="w-full h-full flex flex-col md:hidden">
                        {/* Name block */}
                        <div className="flex-1 flex flex-col items-start justify-start  -mt-[10rem] ml-[2rem] px-4 pt-[35vh]">
                            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase text-left`}>
                                Hi, I&#39;m{' '}
                                <span className="sm:text-battleGray sm:text-[90px] text-[50px] font-mova font-extrabold uppercase">
                                    <Typewriter
                                        options={{
                                            pauseFor: 10000,
                                            strings: ['Yauheniya'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                            <p className={`${styles.heroSubText}  text-white  text-left`}>
                                -Frontend developer-
                            </p>
                        </div>

                        {/* Photo in bottom-right corner */}
                        <div className="absolute bottom-0 right-0">
                            <div className="relative w-[400px] h-[600px]">
                                <img
                                    src={photoMobile}
                                    alt="profile"
                                    className="absolute bottom-0 right-0 w-full h-full object-cover clip-triangle"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop layout - side by side */}
                    <div className="hidden md:flex md:flex-row w-full">
                        <div className="w-[50%] flex items-center justify-start px-4">
                            <div>
                                <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase text-left`}>
                                    Hi, I&#39;m{' '}
                                    <span className="sm:text-battleGray sm:text-[90px] text-[50px] font-mova font-extrabold uppercase">
                                        <Typewriter
                                            options={{
                                                pauseFor: 10000,
                                                strings: ['Yauheniya'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </h1>
                                <p className={`${styles.heroSubText} mt-2 text-white text-left`}>
                                    -Frontend developer-
                                </p>
                            </div>
                        </div>

                        <div className="w-[50%] flex items-center justify-center mt-[80px]">
                            <SkillsAnimation />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll button - visible only on desktop */}
            <div className="absolute left-1/4 bottom-20 transform -translate-x-1/2 z-50 hidden md:block">
                <a href="#about" className="inline-block">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4
                        border-french border-dim flex justify-center items-start p-2 hover:border-white transition-colors">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-taupe mb-1"
                        />
                    </div>
                </a>
            </div>

            <style >{`
                .clip-triangle {
                    clip-path: polygon(100% 0, 100% 100%, 0 100%);
                }
            `}</style>
        </section>
    );
};

export default Hero;
