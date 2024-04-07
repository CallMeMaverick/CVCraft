import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from "./components/InfoForm/Form.jsx";
import './styles/index.css'
import "@styles/InfoForm/input_fields.css"
import "@styles/InputDocs/document.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Form />
      {/*<div className={"document"}>*/}

      {/*</div>*/}
  </React.StrictMode>,
)
