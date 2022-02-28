// import React from "react"

function InputForm()
{
    // alert('clicked!')
    return(
      <div style={{height: 100, width: 500, display: 'block' }}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"></input>
      </div>
    );
}

export default InputForm