import "@styles/InfoForm/PersonalData/personal_data_style.css";
import { useState } from "react";
import InputField from "../shared/InputField.jsx";
import HandleInputChange from "@components/InfoForm/shared/HandleInputChange.jsx"

function PersonalForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        number: ''
    });

    const personalInputLabels = [
        { label: "Full name: ",    fieldName: "fullname" },
        { label: "Email: ",        fieldName: "email" },
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
                            onChange={e => HandleInputChange(e, setFormData)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalForm;