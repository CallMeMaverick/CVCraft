import PropTypes from "prop-types";

function InputField({ fieldId, value, onChange, type="text" }) {
    return <input type={type.toString()}
                  id={fieldId}
                  name={fieldId}
                  value={value}
                  onChange={onChange} />;
}

InputField.propTypes = {
    fieldId: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default InputField;