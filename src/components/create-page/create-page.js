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
   return (
      <div className="container form-container">
         <form>
         {formData ? <FormElements formData={formData} /> : null}
            <button type="submit" className="btn btn-primary">
               Submit
            </button>
         </form>
      </div>
   );
};

export default CreatePage;
