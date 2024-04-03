import PropTypes from "prop-types";

function InputField({ fieldId, value, onChange }) {
    return <input type={"text"}
                  id={fieldId}
                  name={fieldId}
                  value={value}
                  onChange={onChange} />;
}

InputField.propTypes = {
    fieldId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default InputField;