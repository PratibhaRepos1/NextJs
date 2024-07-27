
import React, { useState, useEffect } from "react";
function CompA(allProps) {
  return (
    <>
      <h1>CompA</h1>
      {/* <p>Hello CompA</p> */}
      {/* <CompB /> */}
      <div>My Prop1: {allProps.myProp1} </div>
      <div>My Prop2: {allProps.myProp2} </div>
      <div>My Prop3: {allProps.myProp3.toString()} </div>
      <div>My Prop4: {<allProps.myProp4 />} </div>
    </>
    
  )
}

function CompB() {
  return(
    <>
      <h1>CompB</h1>
      {/* <p>Hello CompB</p> */}
    </>
    
  )
}
//JSX

class CompC extends React.Component {
  constructor() {
    super();
    this.state = {
      myValue: 10
    }

  }
  // state = {
  //   myValue: 10
  // }
  changeState(incrementor) {
    //console.log(incrementor);
    this.setState({
      myValue: incrementor
    })
  }

  render() {
    const { myValue } = this.state;

    return (
      <>
      <h1>CompC</h1>

      Current Value: <h1> { myValue } </h1>
    <button onClick={() => this.changeState(myValue +1)}>+</button>&nbsp;&nbsp;
    <button onClick={() => this.changeState(myValue -1)}>-</button>
      </>
    )

  }
}

const  HomePage = () => {
    const [myValue, setValue] = useState(10);
    useEffect(() => {
      console.log("Use Effect Callled");
    }, [])
  


  return (
  <>
 
    Current Value: <h1> { myValue } </h1>
    <br></br>
    <button onClick={() => setValue(myValue +1)}>+</button>&nbsp;&nbsp;
    <button onClick={() => setValue(myValue -1)}>-</button>
     {/* <h1>Hello World!</h1> */}
     {/* <CompC /> */}
    <CompA 
    myProp1={myValue}
    myProp2 = "My Custom Value"
    myProp3 = {true}
    myProp4 = {() => <div>My New JSX!</div>}
    />

  </>
    
   
  )
}

export default HomePage;
