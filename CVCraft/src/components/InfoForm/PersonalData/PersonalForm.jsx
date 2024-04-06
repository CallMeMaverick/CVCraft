import ListInputs from "../shared/ListInputs.jsx";
import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";

function PersonalForm({ formData, setFormData }) {
    const personalInputLabels = [
        { label: "Full name: ",    fieldName: "fullname" },
        { label: "Email: ",        fieldName: "email" },
        { label: "Phone number: ", fieldName: "number" }
    ];

    console.log(`----> ${formData[personalInputLabels[0].fieldName]}`)

    return (
        <div className={"personal-info"}>
            <ul>
                {personalInputLabels.map((person, index) => (
                    <ListInputs key={index}
                                value={formData[person.fieldName] || ''}
                                dataKey={person.fieldName}
                                dataName={person.label}
                                onchangeFunc={e => HandleInputChange(e, setFormData)}
                    />
                ))}
            </ul>
        </div>
    );
}

PersonalForm.propTypes = {
    formData: PropTypes.shape({
        fullname: '',
        email: '',
        number: ''
    }).isRequired,
    setFormData: PropTypes.func.isRequired
}

export default PersonalForm;