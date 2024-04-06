import PropTypes from "prop-types";

function Skills({ skills, handleAddition, handleDeletion, handleInputChange, value }) {
    return (
        <>
            <div className={"skills-info"}>
                <label htmlFor={"skill"}>Add skill</label>
                <br/>
                <div className={"skills-info-inner"}>
                    <input
                        id={"skill"}
                        name={"skill"}
                        value={value}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddition}>Add</button>
                </div>

                <div className={"skill-stack"}>
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <p>{skill}</p>
                            <button className="delete-skill" onClick={() => handleDeletion(skill)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    handleAddition: PropTypes.func.isRequired,
    handleDeletion: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Skills;