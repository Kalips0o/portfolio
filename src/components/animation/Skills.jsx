import './Skills.css'
import { TAGS_DATA } from './tagsData'
import TagCloudTag from './TagCloudTag'
import TagCloudButton from './TagCloudButton'

const SkillsAnimation = () => {
    const numElements = TAGS_DATA.length;
    const numControls = 20; // Количество кнопок управления

    return (
        <div className="tagcloud-wrapper">
            <div className="tagcloud-controls" style={{"--num-elements": numControls}}>
                {[...Array(numControls)].map((_, index) => (
                    <TagCloudButton
                        key={index}
                        index={index}
                        onChange={() => {}}
                    />
                ))}
                <div className="tagcloud-rotation">
                    <ul className="tagcloud-tags" style={{"--num-elements": numElements}}>
                        {TAGS_DATA.map((tag, index) => (
                            <TagCloudTag
                                key={index}
                                index={index}
                                href={tag.href}
                                text={tag.text}
                                style={{"--index": index + 1}}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsAnimation;
