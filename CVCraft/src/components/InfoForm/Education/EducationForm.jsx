import { useState } from "react";
import InputField from "@components/InfoForm/shared/InputField.jsx";

function EducationForm() {
    const [institutionData, setInstitutionData] = useState({
        startDate: "",
        endDate: "",
        eduInstitution: "",
        major: "",
        description: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setInstitutionData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const attributes = [
        { forAttr: "startDate", labelText: "Start date" },
        { forAttr: "endDate", labelText: "End date" },
        { forAttr: "eduInstitution", labelText: "Institution name" },
        { forAttr: "major", labelText: "Major" },
        { forAttr: "description", labelText: "Description" },
    ]

    return (
        <div className={"education-info"}>
            {attributes.map((attribute, index) => (
                <li key={index}>
                    <label htmlFor={attribute.forAttr}>{attribute.labelText}</label>
                    <InputField
                        fieldId={attribute.forAttr}
                        value={institutionData[attribute.forAttr]}
                        onChange={handleInputChange}
                        type={attribute.forAttr === "startDate" || attribute.forAttr === "endDate" ? "date" : "text"}
                    />
                </li>
            ))}
        </div>
    )
}

export default EducationForm;