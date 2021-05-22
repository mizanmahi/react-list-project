import React, { useState } from "react";

const Checkbox = ({ fieldData }) => {
   const { title, type, required, value, options } = fieldData;
   const [val, setVal] = useState(value);

   return (
      <div className="mb-3 form-check">
         <h3>{title}</h3>
         {options.map((option) => {
            return (
               <div >
                  <input
                     className="form-check-input"
                     type={type}
                     required={required}
                     value={val}
                     onChange={(e) => setVal(e.target.value)}
                     name={title}

                     // checked={fieldData.default === option.key}
                  />
                  <label className="form-check-label">{option.label}</label>
               </div>
            );
         })}
      </div>
   );
};

export default Checkbox;