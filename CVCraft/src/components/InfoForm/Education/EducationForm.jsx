import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";

function EducationForm({ educationData, setEducationData, onEducationSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onEducationSubmit();
    }

    return (
        <>
            <form className="education-info" onSubmit={handleSubmit}>
                <h3>Education</h3>
                <label htmlFor={"startDate"}>Start date</label>
                <input
                    id={"startDate"}
                    type={"date"}
                    name="startDate"
                    value={educationData.startDate}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label htmlFor={"endDate"}>End date</label>
                <input
                    id={"endDate"}
                    type={"date"}
                    name="endDate"
                    value={educationData.endDate}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label htmlFor={"eduInstitution"}>Education Institution</label>
                <input
                    id={"eduInstitution"}
                    type={"text"}
                    name="eduInstitution"
                    value={educationData.eduInstitution}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label htmlFor={"major"}>Major</label>
                <input
                    id={"major"}
                    type={"text"}
                    name="major"
                    value={educationData.major}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <button type={"submit"} className={"add-edu"}>Add education</button>
            </form>
        </>
    )
}

EducationForm.propTypes = {
    educationData: PropTypes.shape( {
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        eduInstitution: PropTypes.string,
        major: PropTypes.string,
    } ).isRequired,
    setEducationData: PropTypes.func.isRequired,
    onEducationSubmit: PropTypes.func.isRequired
}

export default EducationForm;