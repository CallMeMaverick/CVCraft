import { useState } from "react";
import ListInputs from "../shared/ListInputs.jsx";
import HandleInputChange from "../shared/HandleInputChange.jsx";

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
                {personalInputLabels.map((person, index) => (
                    <ListInputs key={index}
                                value={formData[person.fieldName]}
                                dataKey={person.fieldName}
                                dataName={person.label}
                                onchangeFunc={e => HandleInputChange(e, setFormData)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PersonalForm;