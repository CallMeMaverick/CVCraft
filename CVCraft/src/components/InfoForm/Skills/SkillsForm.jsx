import { useState } from "react";
import "@styles/InfoForm/Skills/skills_style.css"

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
                <input
                    id={"skill"}
                    name={"skill"}
                    value={inputSkill}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddition}>Add</button>
            </div>

            <div>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                        {skill}
                        <button className={"delete-skill"} onClick={() => handleDeletion(skill)}>Delete</button>
                    </li>)
                    )}
                </ul>
            </div>
        </>
    )
}

export default Skills;