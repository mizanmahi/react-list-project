import react from "react";

const Searchinput = ({ column }) => {
   const { filterValue, setFilter } = column;
   const filterHandler = e => {
       e.stopPropagation();
       setFilter(e.target.value)
   }
   return (
      <input
         type="text"
         value={filterValue || ""}
         onChange={filterHandler}
         onClick={e => e.stopPropagation()}
         placeholder="Search In This Column"
      />
   );
};

export default Searchinput;
