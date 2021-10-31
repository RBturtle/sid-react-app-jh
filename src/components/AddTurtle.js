// import React, { useRef } from "react";

// const AddTurtle = (props) => {
//   const turtleNameInputRef = useRef(null);

//   const handleAddTurtle = () => {
//     console.log(turtleNameInputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={turtleNameInputRef} />
//       <button onClick={handleAddTurtle}>Add Turtle</button>
//     </div>
//   );
// };

// export default AddTurtle;

import React, { useState } from "react";

const AddTurtle = (props) => {
  const [turtleName, setTurtleName] = useState("");

  const handleChangeName = (event) => {
    setTurtleName(event.target.value);
  };

  const handleAddTurtle = () => {
    props.onAddTurtle(turtleName);
  };

  return (
    <div>
      <input type="text" value={turtleName} onChange={handleChangeName} />
      <button onClick={handleAddTurtle}>Add Turtle</button>
    </div>
  );
};

export default AddTurtle;
