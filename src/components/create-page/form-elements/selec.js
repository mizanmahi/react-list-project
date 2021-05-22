import React, { useState } from "react";

const Select = ({ fieldData }) => {
   const { title, required, value, options } = fieldData;

   const [selected, setSelected] = useState(value);

   console.log(selected);

   return (
      <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">
            {title}
         </label>
         <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={selected ? selected : fieldData.default}
            onChange={(e) => setSelected(e.target.value)}
            required={required}
         >
            {options.map((option, i) => (
               <option
                  key={i}
                  defaultValue={fieldData.default === option.key}
                  value={option.key}
               >
                  {option.label}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Select;
