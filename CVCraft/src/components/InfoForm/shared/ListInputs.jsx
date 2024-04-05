import InputField from "./InputField.jsx";
import PropTypes from "prop-types";

function ListInputs({ value, dataKey, dataName, onchangeFunc }) {
    return (
        <>
            <li>
                <label htmlFor={dataKey}>{dataName}</label>
                <InputField
                    fieldId={dataKey}
                    value={value}
                    onChange={e => onchangeFunc(e)}
                    type={dataKey === "startDate" || dataKey === "endDate" ? "date" : "text"}
                />
            </li>
        </>
    )
}

ListInputs.propTypes = {
    value: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    dataName: PropTypes.string.isRequired,
    onchangeFunc: PropTypes.func.isRequired
}

export default ListInputs;