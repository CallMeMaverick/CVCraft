import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";


const PersonalForm = ({ formData, setFormData }) => {
    return (
        <>

            <form className="personal-info">
                <h3>Personal Data</h3>
                <label>Full name</label>
                <input
                    type={"text"}
                    name="fullname"
                    value={formData.fullname}
                    onChange={event => HandleInputChange(event, setFormData)}
                />
                <label>Email</label>
                <input
                    type={"text"}
                    name="email"
                    value={formData.email}
                    onChange={event => HandleInputChange(event, setFormData)}
                />
                <label>Number</label>
                <input
                    type={"text"}
                    name="number"
                    value={formData.number}
                    onChange={event => HandleInputChange(event, setFormData)}
                />
            </form>
        </>
    );
};

PersonalForm.propTypes = {
    formData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    setFormData: PropTypes.func.isRequired
}

export default PersonalForm;
