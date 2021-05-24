const Searchinput = ({ column }) => {
   const { filterValue, setFilter } = column;
   const filterHandler = (e) => {
      e.stopPropagation();
      setFilter(e.target.value);
   };
   return (
      <input
         className="form-control text-success my-2"
         type="text"
         value={filterValue || ""}
         onChange={filterHandler}
         onClick={(e) => e.stopPropagation()}
         placeholder="Search In This Column"
      />
   );
};

export default Searchinput;
