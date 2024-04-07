import PropTypes from "prop-types";

function Document({ personalData }) {
    return (
        <div className={"document"}>

            <div className={"header"}>
                <h1>{personalData.fullname}</h1>
                <h3>{personalData.position}</h3>
            </div>

            <aside>
                <address>
                    <p><a href={"mailto:"+personalData.email}>{personalData.email}</a></p>
                </address>
            </aside>

        </div>
    )
}

Document.propTypes = {
    personalData: PropTypes.object.isRequired
}

export default Document;