import React, { useState } from "react";

const Input = ({ fieldData }) => {

    
   const { title, type, required, value, validate, html_attr} = fieldData;
    const [val, setVal] = useState(value);
    const { class: classNames, ...html_attri } = html_attr;

   return (
      <div className="mb-3">
         <label className="form-label">
            { title }
         </label>
         <input
            title={title}
            type={type}
            required={required}
            value={val}
            validate={validate}
            {...html_attri}
            className={`form-control ${classNames}`}
            onChange={(e) => setVal(e.target.value)}
         />
      </div>
   );
};

export default Input;
