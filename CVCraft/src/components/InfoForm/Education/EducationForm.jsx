import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";

function EducationForm({ educationData, setEducationData }) {
    return (
        <>
            <form className="education-info">
                <h3>Education</h3>
                <label>Start date</label>
                <input
                    type={"date"}
                    name="startDate"
                    value={educationData.startDate}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label>End date</label>
                <input
                    type={"date"}
                    name="endDate"
                    value={educationData.endDate}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label>Education Institution</label>
                <input
                    type={"text"}
                    name="eduInstitution"
                    value={educationData.eduInstitution}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label>Major</label>
                <input
                    type={"text"}
                    name="major"
                    value={educationData.major}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
                <label>Description</label>
                <input
                    type={"text"}
                    name="description"
                    value={educationData.description}
                    onChange={event => HandleInputChange(event, setEducationData)}
                />
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
        description: PropTypes.string
    } ).isRequired,
    setEducationData: PropTypes.func
}

export default EducationForm;