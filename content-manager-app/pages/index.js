
import React from "react";
function CompA() {
  return (
    <>
      <h1>CompA</h1>
      <p>Hello CompA</p>
      <CompB />
    </>
    
  )
}

function CompB() {
  return(
    <>
      <h1>CompB</h1>
      <p>Hello CompB</p>
    </>
    
  )
}
//JSX

class CompC extends React.Component {

  render() {
    return (
      <h1>CompC</h1>
    )

  }
}

const  HomePage = () => {
  return (
  <>
     <h1>Hello World!</h1>
     <CompA />
    <CompC></CompC>

  </>
    
   
  )
}

export default HomePage;
