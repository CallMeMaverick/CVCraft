import {useState} from "react";
import PersonalForm from "./PersonalData/PersonalForm.jsx";
import Skills from "./Skills/SkillsForm.jsx";
import EducationForm from "./Education/EducationForm.jsx";

function Form() {
    const [personalFormData, setPersonalFormData] = useState({
        fullname: '',
        position: '',
        email: '',
        number: ''
    });

    const [educationData, setEducationData] = useState({
        startDate: "",
        endDate: "",
        eduInstitution: "",
        major: "",
        description: ""
    });

    const [skills, setSkills] = useState([]);
    const [inputSkill, setInputSkill] = useState('')

    return (
        <>
        <div className={"wrapper"}>
            <div>
                <PersonalForm
                    formData={personalFormData}
                    setFormData={setPersonalFormData}
                />
            </div>

            <div>
                <Skills skills={skills}
                        setInputSkill={setInputSkill}
                        setSkills={setSkills}
                        inputSkill={inputSkill}
                />
            </div>

            <div>
                <EducationForm
                    educationData={educationData}
                    setEducationData={setEducationData}
                />
            </div>
        </div>
        </>
    );
}

export default Form;