import React from "react";

function Loading() {

    const animate={
        color:'blue',
        padding:'2cm'
    }

  return (
    <center>
      <div style={animate}> <h4>Loading please wait...</h4> </div>
    </center>
  );
}

export default Loading;
