import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

// form elements
import Input from "./form-elements/input";
import TextArea from "./form-elements/text-area";
import Select from "./form-elements/select";
import Radio from "./form-elements/radio";

// css
import "./create-page.style.css";
import Repeater from "./form-elements/repeater";

const CreatePage = () => {
   const URL = "http://localhost/api/get_form.php";

   const [formData, setFormData] = useState(null);
   const [submitData, setSubmitData] = useState({
      user_name: "",
      user_email: "",
      details: "",
      user_gender: "",
      work_place: "",
      designation: ""
   });
   console.log(submitData);

   const fields = formData ? formData.data.fields[0] : null;

   useEffect(() => {
      axios
         .get(URL)
         .then((res) => {
            setFormData(res.data);
         })
         .catch((err) => console.log(err));
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setSubmitData((prev) => {
         return {
            ...prev,
            [name]: value,
         };
      });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      axios({
         method: "post",
         url: "http://localhost/api/submit_form.php",
         data: JSON.stringify(submitData),
      }).then((res) => {
         if (res.data.status === "success") {
            swal(
               `${res.data.status}`,
               `${res.data.messages.join(" ")} and the id is ${
                  res.data.data.id
               }`,
               "success"
            );

            setSubmitData({
               user_name: "",
               user_email: "",
               details: "",
               user_gender: "",
            })
         } else {
            swal(
               `${res.data.status}`,
               `${res.data.messages.join(" ")} and the id is ${
                  res.data.data.id
               }`,
               "error"
            );
         }
      });
   };

   return (
      <div className="container form-container">
         <h2 className="form-title text-success">Get Form</h2>
         <form onSubmit={submitHandler}>
            {fields
               ? Object.entries(fields).map((field, i) => {
                    if (field[1].type === "text" || field[1].type === "email") {
                       return (
                          <Input
                             key={i}
                             fieldData={field}
                             chnageHandler={handleChange}
                             val={submitData[field[0]]}
                          />
                       );
                    } else if (field[1].type === "textarea") {
                       return (
                          <TextArea
                             key={i}
                             fieldData={field}
                             val={submitData[0]}
                             chnageHandler={handleChange}
                          />
                       );
                    } else if (field[1].type === "select") {
                       return (
                          <Select
                             key={i}
                             fieldData={field}
                             chnageHandler={handleChange}
                             val={submitData[0]}
                          />
                       );
                    } else if (field[1].type === "radio") {
                       return (
                          <Radio
                             key={i}
                             fieldData={field}
                             chnageHandler={handleChange}
                          />
                       );
                    } else if (field[1].type === "repeater") {
                       return (
                          <Repeater
                             key={i}
                             fieldData={field}
                             chnageHandler={handleChange}
                          />
                       );
                    } else {
                       return " ";
                    }
                 })
               : "Loading Fields.."}

            <button type="submit" className="btn btn-success btn-lg submit-btn">
               Submit
            </button>
         </form>
      </div>
   );
};

export default CreatePage;
