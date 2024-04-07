import HandleInputChange from "../shared/HandleInputChange.jsx";
import PropTypes from "prop-types";

function WorkExperience({ experienceData, setExperienceData, experienceEntries,  setExperienceEntries }) {
    const handleAddition = () => {
        setExperienceEntries(prevEntries => [...prevEntries, experienceData]);
        setExperienceData({
            company: "",
            position: "",
            description: ""
        })
    }

    const handleDeletion = (indexToRemove) => {
        setExperienceEntries(experienceEntries.filter((_, index) => index !== indexToRemove))
    }

    return (
        <>
            <form className="experience-info">
                <h3>Prior Experience</h3>
                <label htmlFor={"company"}>Company</label>
                <input
                    id={"company"}
                    type={"text"}
                    name="company"
                    value={experienceData.company}
                    onChange={event => HandleInputChange(event, setExperienceData)}
                />
                <label htmlFor={"position"}>Position</label>
                <input
                    id={"position"}
                    type={"text"}
                    name="position"
                    value={experienceData.position}
                    onChange={event => HandleInputChange(event, setExperienceData)}
                />
                <label htmlFor={"description"}>Description</label>
                <input
                    id={"description"}
                    type={"text"}
                    name="description"
                    value={experienceData.description}
                    onChange={event => HandleInputChange(event, setExperienceData)}
                />
                <button type="button" className={"add-experience"} onClick={handleAddition}>Add experience</button>
                {experienceEntries.map((entry, index) => (
                    <div key={index}>
                        <h3>{entry.company}</h3>
                        <p>{entry.position}</p>
                        <p>{entry.description}</p>
                        <button type="button" className={"delete-exp"} onClick={() => handleDeletion(index)}>Delete</button>
                    </div>
                ))}
            </form>
        </>
    )
}

WorkExperience.propTypes = {
    experienceData: PropTypes.object.isRequired,
    setExperienceData: PropTypes.func.isRequired,
    experienceEntries: PropTypes.array.isRequired,
    setExperienceEntries: PropTypes.func.isRequired
}

export default WorkExperience;