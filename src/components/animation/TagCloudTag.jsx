import PropTypes from 'prop-types';

const TagCloudTag = ({ index, href, text }) => (
    <li className="tagcloud-tag" style={{"--index": index}}>
        <div>
            <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
        </div>
    </li>
);

TagCloudTag.propTypes = {
    index: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TagCloudTag;
