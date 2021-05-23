import React, { useState } from "react";
import "./repeater.style.css";

const Repeater = ({ fieldData, chnageHandler, val }) => {
   const name = fieldData[0];
   const { html_attr, required, title, validate, repeater_fields } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;
   const fieldsArr = Object.entries(repeater_fields);
   const [fields, setFields] = useState(fieldsArr);

   const handleAdd = () => {
      setFields((prev) => {
         return [...prev, ...fieldsArr];
      });
   };
   const handleRemove = () => {
      const field = fields.splice(-2);
      const newFields = [...fields];
      setFields(newFields);
   };
   return (
      <>
         <div className="repeater">
            <h3>{title}</h3>
            {fields.map((field, i) => {
               let [name, fieldDeatails] = field;
               return (
                  <div className="mb-3 mt-3" key={i}>
                     <label className="form-label">{fieldDeatails.title}</label>
                     <input
                        type="text"
                        name={name}
                        className={`form-control ${classNames}`}
                        onChange={chnageHandler}
                        value={val[i]}
                     />
                  </div>
               );
            })}
         </div>

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
