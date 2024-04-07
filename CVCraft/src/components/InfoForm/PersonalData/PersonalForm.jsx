import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";
import {useState} from "react";


const PersonalForm = ({ formData, setFormData }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <>
                {!isFormVisible && (
                    <div className="hidden-div">
                        <h3>Personal Data</h3>
                        <span>
                            <button onClick={toggleFormVisibility}>Show</button>
                        </span>
                    </div>
                )}


            {isFormVisible && (
                <form className="personal-info">
                    <div className={"header-button"}>
                        <h3>Personal Data</h3>
                        <span>
                            <button onClick={toggleFormVisibility}>Hide</button>
                    </span>
                    </div>

                    <label htmlFor={"fullname"}>Full name</label>
                    <input
                        id={"fullname"}
                        type={"text"}
                        name="fullname"
                        value={formData.fullname}
                        onChange={event => HandleInputChange(event, setFormData)}
                    />
                    <label htmlFor={"position"}>Position</label>
                    <input
                        id={"position"}
                        type={"text"}
                        name="position"
                        value={formData.position}
                        onChange={event => HandleInputChange(event, setFormData)}
                    />
                    <label htmlFor={"email"}>Email</label>
                    <input
                        id={"email"}
                        type={"text"}
                        name="email"
                        value={formData.email}
                        onChange={event => HandleInputChange(event, setFormData)}
                    />
                    <label htmlFor={"number"}>Number</label>
                    <input
                        id={"number"}
                        type={"text"}
                        name="number"
                        value={formData.number}
                        onChange={event => HandleInputChange(event, setFormData)}
                    />
                </form>
            )}

        </>
    );
};

PersonalForm.propTypes = {
    formData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    setFormData: PropTypes.func.isRequired
}

export default PersonalForm;
