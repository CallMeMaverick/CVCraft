import PropTypes from "prop-types";
import {useState} from "react";

function Skills({ skills, setSkills, inputSkill, setInputSkill }) {
    const handleAddition = () => {
        if (inputSkill) {
            setSkills(prevSkills => [...prevSkills, inputSkill]);
            setInputSkill('');
        }
    };

    const handleInputChange = (event) => {
        setInputSkill(event.target.value);
    };

    const handleDeletion = (skillToDelete) => {
        setSkills(skills.filter(skill => skill !== skillToDelete));
    };

    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    return (
        <>
            {!isFormVisible && (
                <div className={"hidden-div"}>
                    <h3>Skills</h3>
                    <span>
                        <button onClick={toggleVisibility}>Show</button>
                    </span>
                </div>
            )}

            {isFormVisible && (
                <div className={"skills-info"}>
                    <div className={"header-button"}>
                        <h3>Skills</h3>
                        <span>
                        <button onClick={toggleVisibility}>Show</button>
                    </span>
                    </div>
                    <label htmlFor={"skill"}>Add skill</label>
                    <div className={"skills-info-inner"}>
                        <input
                            id={"skill"}
                            name={"skill"}
                            value={inputSkill}
                            onChange={handleInputChange}
                        />
                        <button type="button" onClick={handleAddition}>Add</button>
                    </div>

                    <div className={"skill-stack"}>
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <p>{skill}</p>
                                <button type="button" className="delete-skill"
                                        onClick={() => handleDeletion(skill)}>Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    setSkills: PropTypes.func.isRequired,
    inputSkill: PropTypes.string.isRequired,
    setInputSkill: PropTypes.func.isRequired
};

export default Skills;
