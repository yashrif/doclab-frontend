import React from "react";

const Infos=({doctorInfo})=>{

  return (
    <div style={{ height: "100%", overflowY: "scroll", margin: "3rem 2.4rem" ,
    fontSize: "1.7rem", color: "gray" }} >
      {doctorInfo}
    </div>
  );
};

export default Infos;
