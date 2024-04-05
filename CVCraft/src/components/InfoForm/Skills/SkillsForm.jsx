import { useState } from "react";

function Skills() {
    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState('');

    function handleAddition() {
        if (inputSkill) {
            setSkills(prevState => [...prevState, inputSkill]);
            setInputSkill('');
        }
    }

    function handleInputChange(event) {
        setInputSkill(event.target.value)
    }

    function handleDeletion(skillToDelete) {
        setSkills(skills.filter(skill => skill !== skillToDelete));
    }

    return (
        <>
            <div className={"skills-info"}>
                <label htmlFor={"skill"}>Add skill</label>
                <br/>
                <div className={"skills-info-inner"}>
                    <input
                        id={"skill"}
                        name={"skill"}
                        value={inputSkill}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddition}>Add</button>
                </div>
            </div>

            <div className={"skill-stack"}>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <p>{skill}</p>
                        <button className="delete-skill" onClick={() => handleDeletion(skill)}>Delete</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Skills;