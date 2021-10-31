// import React, { useRef } from "react";

// const AddTurtle = (props) => {
//   const doctorNameInputRef = useRef(null);

//   const handleAddTurtle = () => {
//     console.log(doctorNameInputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={doctorNameInputRef} />
//       <button onClick={handleAddTurtle}>Add Turtle</button>
//     </div>
//   );
// };

// export default AddTurtle;

import React, { useState } from "react";

const AddTurtle = (props) => {
  const [doctorName, setTurtleName] = useState("");

  const handleChangeName = (event) => {
    setTurtleName(event.target.value);
  };

  const handleAddTurtle = () => {
    props.onAddTurtle(doctorName);
  };

  return (
    <div>
      <input type="text" value={doctorName} onChange={handleChangeName} />
      <button onClick={handleAddTurtle}>Add Turtle</button>
    </div>
  );
};

export default AddTurtle;
