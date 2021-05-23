import React, { useState } from "react";

const Radio = ({ fieldData }) => {
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

   return (
      <>
         {options.map((option, i) => {
            return (
               <div className="form-check" key={i}>
                  <input
                     className={`form-check-input ${classNames}`}
                     type={type}
                     name={name}
                     id={`radio ${i}`}
                     value={option.key}
                     // checked
                  />
                  <label class="form-check-label" for={`radio ${i}`}>
                     { option.label }
                  </label>
               </div>
            );
         })}
      </>
   );
};

export default Radio;
