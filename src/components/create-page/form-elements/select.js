import React, { useState } from "react";

const Select = ({ fieldData, chnageHandler, val }) => {
   const name = fieldData[0];
   const {
      title,
      required,
      default: defaultValue,
      html_attr,
      options,
   } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;

   const [defaultVal, setDefaultVal] = useState(defaultValue);

   return (
      <div className="form-group">
         <label>{title}</label>
         <select
            className={`form-control ${classNames}`}
            required={required}
            {...html_attri}
            name={name}
            value={defaultVal}
            onChange={(e) => {
               chnageHandler(e);
               setDefaultVal(val);
            }}
         >
            {options.map((option) => (
               <option key={option.key} value={option.key}>
                  {option.label}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Select;
