import PropTypes from "prop-types";
import MailIcon from "../assets/MailIcon.jsx";
import PhoneIcon from "../assets/PhoneIcon.jsx";


function Document({ personalData, skills, education, experience }) {
    return (
        <>
            <style>
                {`
                    .skills-wrapper ul {
                      columns: 2;
                      -webkit-columns: 2;
                      -moz-columns: 2;
                    }
                    .skills-wrapper li {
                      break-inside: avoid-column;
                    }
                  `}
            </style>

            <div className={"document"}>

                <div className={"header"}>
                    <h1>{personalData.fullname}</h1>
                    <h3>{personalData.position}</h3>
                </div>

                <aside>
                    <h2>Contact Information</h2>
                    <address>
                        <div className={"email-wrapper"}>
                            <MailIcon size={24}/>
                            <p><a href={"mailto:" + personalData.email}>{personalData.email}</a></p>
                        </div>

                        <div className={"phone-wrapper"}>
                            <PhoneIcon size={24}/>
                            <p><a href={"tel:" + personalData.number}>{personalData.number}</a></p>
                        </div>

                        <div className={"skills-wrapper"}>
                            <h2>Skills</h2>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </address>

                    <h2>Education</h2>
                    <div className={"edu-wrapper"}>
                        {education.map((entry, index) => (
                            <div key={index} className={"institution"}>
                                <h3>{entry.eduInstitution}</h3>
                                <p>{entry.major}</p>
                                <span>{entry.startDate.slice(0, 4)} | {entry.endDate.slice(0, 4)}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                <div className={"prior-work"}>
                    {experience.map((exp, index) => (
                        <div key={index}>
                            <h3>{exp.company}</h3>
                            <p>{exp.position}</p>
                            <span>{exp.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

Document.propTypes = {
    personalData: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    education: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired
}

export default Document;