import { useState } from "react";
import ListInputs from "../shared/ListInputs.jsx";
import HandleInputChange from "../shared/HandleInputChange.jsx";

function EducationForm() {
    const [institutionData, setInstitutionData] = useState({
        startDate: "",
        endDate: "",
        eduInstitution: "",
        major: "",
        description: ""
    })

    const attributes = [
        { forAttr: "startDate", labelText: "Start date" },
        { forAttr: "endDate", labelText: "End date" },
        { forAttr: "eduInstitution", labelText: "Institution name" },
        { forAttr: "major", labelText: "Major" },
        { forAttr: "description", labelText: "Description" },
    ]

    return (
        <div className={"education-info"}>
            <ul>
                {attributes.map((atr, index) => (
                    <ListInputs key={index}
                                value={institutionData[atr.forAttr]}
                                dataKey={atr.forAttr}
                                dataName={atr.labelText}
                                onchangeFunc={e => HandleInputChange(e, setInstitutionData)}
                    />
                ))}
            </ul>
        </div>
    )

}

export default EducationForm;