import {
    cssTech,
    figmaTech,
    gitTech,
    htmlTech,
    jsTech,
    nodeJsTech,
    reactTech,
    reduxTech,
    swaggerTech,
    tailwindTech,
    typescriptTech,
    webpackTech
} from '../../assets';
import styles from './Carousel.module.css';

const techs = [
    {src: jsTech, alt: 'JavaScript'},
    {src: htmlTech, alt: 'HTML5'},
    {src: reactTech, alt: 'React'},
    {src: typescriptTech, alt: 'TypeScript'},
    {src: gitTech, alt: 'Git'},
    {src: tailwindTech, alt: 'Tailwind'},
    {src: cssTech, alt: 'CSS3'},
    {src: nodeJsTech, alt: ' NodeJs'},
    {src: figmaTech, alt: 'Figma'},
    {src: reduxTech, alt: 'Redux'},
    {src: webpackTech, alt: ' Webpack'},
    {src: swaggerTech, alt: ' Swagger'},
];

export const Carousel = () => {
    const items = [...techs, ...techs, ...techs];

    return (
        <div className={styles.slider}>
            <div className={styles.slide_track}>
                {items.map((item, index) => (
                    <div className={styles.slide} key={index}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            title={item.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
