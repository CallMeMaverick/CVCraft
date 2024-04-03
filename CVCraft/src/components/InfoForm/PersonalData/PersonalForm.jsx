import "@styles/InfoForm/PersonalData/personal_data_style.css";
import { useState } from "react";
import InputField from "../shared/InputField.jsx";

function PersonalForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        number: ''
    });

    function handleInputChange (event) {
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
                        <InputField
                            fieldId={label.fieldName}
                            value={formData[label.fieldName]}
                            onChange={handleInputChange}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalForm