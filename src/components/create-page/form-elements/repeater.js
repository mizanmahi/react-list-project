import React, { useState } from "react";
import "./repeater.style.css";

const Repeater = ({ fieldData }) => {
   const { html_attr, required, title, validate, repeater_fields } =
      fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;
   const fieldsArr = Object.entries(repeater_fields);
   const [fields, setFields] = useState([fieldsArr]);

   const handleAdd = () => {
      setFields((prev) => {
         return [...prev, fieldsArr];
      });
   };
   const handleRemove = () => {
      fields.splice(-1);
      const newFields = [...fields];
      setFields(newFields);
   };
   return (
      <>
         {fields.map((field, i) => {
            return (
               <div className="repeater" key={i}>
                  <h3 className="text-success">{title}</h3>
                  {field.map((singleField, i) => {
                     let [name, fieldDeatails] = singleField;
                     return (
                        <div className="mb-3 mt-3" key={i}>
                           <label className="form-label">
                              {fieldDeatails.title}
                           </label>
                           <input
                              type="text"
                              name={name}
                              className={`form-control ${classNames}`}
                              required={required}
                              validate={validate}
                              {...html_attri}
                           />
                        </div>
                     );
                  })}
               </div>
            );
         })}

         <button
            type="button"
            className="btn btn-dark d-block mb-2"
            onClick={handleAdd}
         >
            ADD
         </button>
         <button
            type="button"
            className="btn btn-danger d-block"
            onClick={handleRemove}
         >
            Remove
         </button>
      </>
   );
};

export default Repeater;
