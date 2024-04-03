/**
 * PersonalDataStyle.css includes styles for the form components.
 */
import "@styles/InfoForm/PersonalData/personal_data_style.css";
/**
 * UUID for generating unique keys.
 */
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

/**
 * Represents a single input field within a form.
 *
 * @param {string} fieldId - The unique identifier for the input field, used for both 'id' and 'name' attributes.
 * @returns {JSX.Element} An input element with associated labels.
 */
function InputField({ fieldId }) {
    return <input type={"text"} id={fieldId} name={fieldId} />;
}

InputField.propTypes = {
    fieldId: PropTypes.string.isRequired,
};

/**
 * A form component containing inputs for personal information such as full name, email, and phone number.
 * It maps through an array of field data to render InputField components with labels.
 *
 * @returns {JSX.Element} A div containing a list of labeled input fields.
 */
function PersonalForm() {
    const personalInputLabels = [
        { id: uuidv4(), data: "Full name: ", fieldName: "fullname" },
        { id: uuidv4(), data: "Email: ", fieldName: "email" },
        { id: uuidv4(), data: "Phone number: ", fieldName: "number" },
    ];

    return (
        <div className={"personal-info"}>
            <ul>
                {personalInputLabels.map((label) => (
                    <li key={label.id}>
                        <label htmlFor={label.fieldName}>{label.data}</label>
                        <InputField fieldId={label.fieldName} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalForm;
