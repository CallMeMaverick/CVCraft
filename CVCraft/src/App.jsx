import { useState } from 'react';
import PersonalForm from './components/InfoForm/PersonalData/PersonalForm.jsx';
import Skills from "./components/InfoForm/Skills/SkillsForm.jsx";
import EducationForm from "./components/InfoForm/Education/EducationForm.jsx";
import "@styles/InfoForm/input_fields.css"


function App() {
    const [personalFormData, setPersonalFormData] = useState({
        fullname: '',
        email: '',
        number: '',
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
        </>
    );

}

export default App;

