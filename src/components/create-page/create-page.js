import React, { useState, useEffect } from "react";
import axios from "axios";

// form elements
import Input from "./form-elements/input";
import TextArea from "./form-elements/text-area";
import Select from "./form-elements/select";
import Radio from "./form-elements/radio";

// css
import "./create-page.style.css";

const CreatePage = () => {
   const URL = "http://localhost/api/get_form.php";

   const [formData, setFormData] = useState(null);
   const fields = formData ? formData.data.fields[0] : null;
   console.log(fields ? Object.entries(fields) : {});
   

   useEffect(() => {
      axios
         .get(URL)
         .then((res) => {
            setFormData(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="container form-container">
         <h2 className="form-title text-success">Get Form</h2>
         <form>

            {
               fields ? Object.entries(fields).map((field, i) => {
                     if(field[1].type === "text" || field[1].type === "email"){
                        return <Input key={i} fieldData={field} />
                     }else if(field[1].type === "textarea"){
                        return <TextArea key={i} fieldData={field} />
                     }else if(field[1].type === "select"){
                        return <Select key={i} fieldData={field}/>
                     }else if(field[1].type === "radio"){
                        return <Radio key={i} fieldData={field}/>
                     }
               }): "Loading Fields.."
            }


            <button type="submit" className="btn btn-success btn-lg submit-btn">
               Submit
            </button>
         </form>
      </div>
   );
};

export default CreatePage;
