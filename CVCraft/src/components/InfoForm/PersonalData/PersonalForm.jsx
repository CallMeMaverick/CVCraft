import "@styles/InfoForm/PersonalData/personal_data_style.css";
import PropTypes from "prop-types";
import { useState } from "react";


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
    onChange: PropTypes.func.isRequired
};

function PersonalForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        number: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const personalInputLabels = [
        { label: "Full name: ", fieldName: "fullname" },
        { label: "Email: ", fieldName: "email" },
        { label: "Phone number: ", fieldName: "number" }
    ];

    return (
        <div className={"personal-info"}>
            <ul>
                {personalInputLabels.map((label, index) => (
                    <li key={index}>
                        <label htmlFor={label.fieldName}>{label.label}</label>
                        <input
                            type="text"
                            id={label.fieldName}
                            name={label.fieldName}
                            value={formData[label.fieldName]}
                            onChange={handleInputChange}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalForm;
