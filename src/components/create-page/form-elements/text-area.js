import React, { useState } from "react";

const TextArea = ({ fieldData }) => {
   const { html_attr, title, required, value, validate } = fieldData;
   const [val, setVal] = useState(value);
   const { class: classNames, ...html_attri } = html_attr;

   return (
      <div className="mb-3">
         <label className="form-label">{title}</label>
         <textarea
            className={`form-control ${classNames}`}
            rows="3"
            {...html_attri}
            required={required}
            value={val}
            validate={validate}
            onChange={(e) => setVal(e.target.value)}
         />
      </div>
   );
};

export default TextArea;
