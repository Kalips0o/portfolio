import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { send, sendHover } from '../../assets';
import {
  PhoneIcon,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  GitLabIcon,
  TelegramIcon,
  LocationIcon
} from '../../assets/icons/contactIcons';
import { contactData } from '../../constants/contactData';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isFormEmpty = () => {
    return form.name.trim() === '' &&
           form.email.trim() === '' &&
           form.message.trim() === '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_3stqmma',
        'template_s1jdz7s',
        {
          from_name: form.name,
          to_name: 'Portfolio',
          from_email: form.email,
          to_email: 'develop.evg@gmail.com',
          message: form.message,
        },
        'laKAqftLXwLT5XE6N'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  const renderContactInfo = () => (
    <div className="flex flex-col gap-6 text-timberWolf">
      <div>
        <h4 className="font-medium text-[20px] mb-2">{contactData.phone.title}</h4>
        <a href={contactData.phone.href}
           className="hover:text-battleGray transition-colors flex items-center gap-2">
          <PhoneIcon />
          {contactData.phone.value}
        </a>
      </div>

      <div>
        <h4 className="font-medium text-[20px] mb-2">{contactData.email.title}</h4>
        <a href={contactData.email.href}
           className="hover:text-battleGray transition-colors flex items-center gap-2">
          <EmailIcon />
          {contactData.email.value}
        </a>
      </div>

      <div>
        <h4 className="font-medium text-[20px] mb-2">{contactData.socialMedia.title}</h4>
        <div className="flex flex-col gap-2">
          {contactData.socialMedia.links.map((link, index) => {
            const Icon = {
              LinkedIn: LinkedInIcon,
              GitHub: GitHubIcon,
              GitLab: GitLabIcon,
              Telegram: TelegramIcon
            }[link.name];

            return (
              <a key={index}
                 href={link.href}
                 className="hover:text-battleGray transition-colors flex items-center gap-2">
                <Icon />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="font-medium text-[20px] mb-2">{contactData.location.title}</h4>
        <p className="flex items-center gap-2">
          <LocationIcon />
          {contactData.location.value}
        </p>
      </div>
    </div>
  );

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Write to me</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={isFormEmpty()}
            className={`live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px]
            w-[100px] h-[45px] rounded-[10px] 
            transition duration-[0.2s] ease-in-out
            ${!isFormEmpty() 
              ? 'bg-night hover:bg-battleGray hover:text-eerieBlack' 
              : 'bg-gray-500 cursor-not-allowed opacity-50'
            }`}
            onMouseOver={() => {
              if (!isFormEmpty()) {
                document.querySelector('.contact-btn').setAttribute('src', sendHover);
              }
            }}
            onMouseOut={() => {
              if (!isFormEmpty()) {
                document.querySelector('.contact-btn').setAttribute('src', send);
              }
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px]
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadTextLight} mb-8`}>Contact Info.</h3>
        {renderContactInfo()}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
