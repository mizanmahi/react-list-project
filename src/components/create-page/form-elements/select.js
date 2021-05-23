import React from "react";

const Select = ({ fieldData }) => {
   const name = fieldData[0];
   const {
      title,
      required,
      default: defaultValue,
      html_attr,
      options,
   } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;
   console.log(options, defaultValue);
   return (
      <div className="form-group">
         <label>{title}</label>
         <select
            className={`form-control ${classNames}`}
            value={defaultValue}
            required={required}
            {...html_attri}
            name={name}
         >
            {options.map((option) => (
               <option key={option.key} value={option.key}>{option.label}</option>
            ))}
         </select>
      </div>
   );
};

export default Select;
