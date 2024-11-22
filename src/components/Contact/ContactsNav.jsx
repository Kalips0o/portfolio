import {motion} from 'framer-motion';
import {
  LinkedInIcon,
  GitHubIcon,
  GitLabIcon,
  TelegramIcon
} from '../../assets/icons/contactIcons';
import { contactData } from '../../constants/contactData';

const ContactsNav = () => {
    const socialIcons = {
        LinkedIn: LinkedInIcon,
        GitHub: GitHubIcon,
        GitLab: GitLabIcon,
        Telegram: TelegramIcon
    };

    return (
        <motion.nav
            initial={{x: -130}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            className="contacts-nav"
        >
            <ul>
                {contactData.socialMedia.links.map((link, index) => {
                    const Icon = socialIcons[link.name];
                    return (
                        <li key={index}>
                            <a href={link.href}>
                                <span>{link.name}</span>
                                <div className="nav-icon">
                                    <Icon />
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </motion.nav>
    );
};

export default ContactsNav;
