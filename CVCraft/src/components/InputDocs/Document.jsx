import PropTypes from "prop-types";
import MailIcon from "../assets/MailIcon.jsx";
import PhoneIcon from "../assets/PhoneIcon.jsx";


function Document({ personalData }) {
    return (
        <div className={"document"}>

            <div className={"header"}>
                <h1>{personalData.fullname}</h1>
                <h3>{personalData.position}</h3>
            </div>

            <aside>
                <address>
                    <div className={"email-wrapper"}>
                        <MailIcon size={24}/>
                        <p><a href={"mailto:" + personalData.email}>{personalData.email}</a></p>
                    </div>

                    <div className={"phone-wrapper"}>
                        <PhoneIcon size={24} />
                        <p><a href={"tel:" + personalData.number}>{personalData.number}</a></p>
                    </div>

                </address>
            </aside>

        </div>
    )
}

Document.propTypes = {
    personalData: PropTypes.object.isRequired
}

export default Document;