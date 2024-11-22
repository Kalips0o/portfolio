import {useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import { menu} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <div className="text-eerieBlack font-arenq font-medium font-mova
                        uppercase tracking-[3px] hover:text-battleGray transition-colors
                        sm:text-[24px] text-[16px]">
                        <span className="sm:inline block">YAUHENIYA</span>
                        <span className="sm:inline block sm:ml-2">KAZHAMIAKA</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? 'text-french' : 'text-eerieBlack'
                            } hover:text-taupe text-[21px] font-medium font-mova 
                            uppercase tracking-[3px] cursor-pointer nav-links`}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'} 
                        p-6 bg-flashWhite absolute top-20 right-0 
                        mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex flex-col justify-end items-start gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.title ? 'text-french' : 'text-eerieBlack'
                                    } font-medium font-mova text-[16px] uppercase tracking-[1px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
