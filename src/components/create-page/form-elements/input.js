
const Input = ({ fieldData }) => {
   console.log(fieldData);
   const name = fieldData[0];
   const { title, type, required, value, validate, html_attr } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;

   return (
      <div className="mb-3">
         <label className="form-label">{title}</label>
         <input
            type={type}
            name={name}
            {...html_attri}
            className={`form-control ${classNames}`}
            required={required}
            validate={validate}
         />
      </div>
   );
};

export default Input;
