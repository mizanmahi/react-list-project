import React from "react";
import Checkbox from "./checkbox";
import Input from "./input";
import Select from "./selec";
import TextArea from "./text-area";

const FormElements = ({ formData }) => {
   const { data, status } = formData;

   const fieldsArr = Object.keys(data.fields[0]).map(
      (key) => data.fields[0][key]
   );

   return (
      <>
         {fieldsArr.map((field, i) => {
            if (field.type === "text" || field.type === "email") {
               return <Input key={i} fieldData={field} />;
            } else if (field.type === "radio") {
               return <Checkbox key={i} fieldData={field} />;
            } else if (field.type === "select") {
               return <Select key={i} fieldData={field} />;
            } else if (field.type === "textarea") {
               return <TextArea key={i} fieldData={field} />;
            } else {
               return "";
            }
         })}
      </>
   );
};

export default FormElements;
