const TextArea = ({ fieldData, chnageHandler, val}) => {
   const name = fieldData[0];
   const { html_attr, title, required, validate } = fieldData[1];
   const { class: classNames, ...html_attri } = html_attr;
   return (
      <div className="mb-3">
         <label className="form-label">{title}</label>
         <textarea
            className={`form-control ${classNames}`}
            rows="3"
            {...html_attri}
            required={required}
            value={val}
            validate={validate}
            name={name}
            onChange={chnageHandler}
         />
      </div>
   );
};

export default TextArea;
