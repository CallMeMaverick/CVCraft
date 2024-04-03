import "@styles/InfoForm/PersonalData/personal_data_style.css"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types";

function InputField( { fieldId } ) {
    return (
        <input type={"text"} id={fieldId} name={fieldId}/>
    )
}

InputField.propTypes = {
    fieldId: PropTypes.string.isRequired
}

function PersonalForm() {
    const personalInputLabels = [
        { id: uuidv4(), data: "Full name: ",    fieldName: "fullname" },
        { id: uuidv4(), data: "Email: ",        fieldName: "email" },
        { id: uuidv4(), data: "Phone number: ", fieldName: "number" }
    ]

    return (
        <div className={"personal-info"}>
            <ul>
                {personalInputLabels.map(label =>
                <li key={label.id}>
                    { <label htmlFor={label.fieldName}> {label.data} </label> }
                <InputField fieldId={label.fieldName}/>
                </li>)}
            </ul>
        </div>
    )
}

export default PersonalForm;