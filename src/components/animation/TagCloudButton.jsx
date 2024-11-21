import PropTypes from 'prop-types';

const TagCloudButton = ({ index, onChange }) => {
    return (
        <div className="tagcloud-control-button" style={{"--index": index}}>
            <input 
                type="radio" 
                name="tagcloud-control-input"
                onChange={onChange}
            />
        </div>
    );
};

TagCloudButton.propTypes = {
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TagCloudButton;
