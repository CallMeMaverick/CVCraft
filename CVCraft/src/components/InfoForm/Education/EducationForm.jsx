import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";
import {useState} from "react";

function EducationForm({ educationData, setEducationData, educationEntries, setEducationEntries }) {
    const handleAddition = () => {
        setEducationEntries(prevEntries => [...prevEntries, educationData]);
        setEducationData({
            startDate: "",
            endDate: "",
            eduInstitution: "",
            major: "",
            description: ""
        });
    };

    const handleDeletion = (indexToDelete) => {
        setEducationEntries(educationEntries.filter((_, index) => index !== indexToDelete));
    };

    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <>
            {!isFormVisible && (
                <div className={"hidden-div"}>
                    <h3>Education</h3>
                    <span>
                        <button onClick={toggleVisibility}>Show</button>
                    </span>
                </div>
            )}

            {isFormVisible && (
                <form className="education-info">
                    <div className={"header-button"}>
                        <h3>Education</h3>
                        <span>
                        <button onClick={toggleVisibility}>Hide</button>
                    </span>
                    </div>

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
                    <button type="button" className={"add-edu"} onClick={handleAddition}>Add education</button>
                    {educationEntries.map((entry, index) => (
                        <div key={index} className={"edu-institution"}>
                            <h3>{entry.eduInstitution}</h3>
                            <p>{entry.major}</p>
                            <span>{entry.startDate.slice(0, 4)} | {entry.endDate.slice(0, 4)}</span>
                            <button type="button" className={"delete-edu"} onClick={() => handleDeletion(index)}>Delete
                            </button>
                        </div>

                    ))}
                </form>
            )}

        </>
    )
}

EducationForm.propTypes = {
    educationData: PropTypes.shape({
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        eduInstitution: PropTypes.string,
        major: PropTypes.string,
    }).isRequired,
    setEducationData: PropTypes.func.isRequired,
    educationEntries: PropTypes.array.isRequired,
    setEducationEntries: PropTypes.func.isRequired
}

export default EducationForm;