import React, { useState, useEffect } from "react";
import axios from "axios";
import FormElements from "./form-elements/form-elements";

import "./create-page.style.css";

const CreatePage = () => {
   const URL = "http://localhost/api/get_form.php";

   const [formData, setFormData] = useState(null);

   useEffect(() => {
      axios
         .get(URL)
         .then((res) => {
            setFormData(res.data);
            console.log(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   const submitHandler = (e) => {
      e.preventDefault()
   }

   return (
      <div className="container form-container">
         <h2 className="form-title">Get Form</h2>
         <form onSubmit={submitHandler}>
         {formData ? <FormElements formData={formData} /> : null}
            <button type="submit" className="btn btn-primary btn-lg">
               Submit
            </button>
         </form>
      </div>
   );
};

export default CreatePage;
