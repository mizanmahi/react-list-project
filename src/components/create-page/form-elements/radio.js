import React, { useState } from "react";

const Radio = ({ fieldData, chnageHandler }) => {
   const name = fieldData[0];
   const {
      title,
      type,
      required,
      default: defaultValue,
      html_attr,
      options,
   } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;

   const [defaultVal, setDefaultVal] = useState(defaultValue);

   return (
      <>
         <h3 className="title">{title}</h3>
         {options.map((option, i) => {
            return (
               <div className="form-check" key={i}>
                  <input
                     className={`form-check-input ${classNames}`}
                     type={type}
                     name={name}
                     id={`radio ${i}`}
                     value={option.key}
                     onChange={chnageHandler}
                     required={required}
                     checked={defaultVal === option.key}
                     onClick={() => setDefaultVal(option.key)}
                     {...html_attri}
                  />
                  <label className="form-check-label" htmlFor={`radio ${i}`}>
                     {option.label}
                  </label>
               </div>
            );
         })}
      </>
   );
};

export default Radio;
