
import './App.css'
import Gradnpa from './components/family form/Gradnpa'
// import RefForm from './components/RefForm'
// import ReuseableForm from './components/ReuseableForm'
// import StateForm from './components/StateForm'
// import SingelForm from './components/SingelForm'

function App() {
//   const handelSignUpSubmit = data =>{
//    console.log('sign up data',data);
// }
//   const handelUpdateSubmit = data =>{
//    console.log('Update profile',data);
// }
   

  return (
    <>
   
      <h1>Vite + React</h1>
      {/* <SingelForm></SingelForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReuseableForm formtitle={'Sign Up'} handelSubmit={handelSignUpSubmit} >
        <div>
          <h2>Sign Up</h2>
          <p>Please sign Up</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formtitle={'Profile Update'} handelSubmit={handelUpdateSubmit} submitBtnText='update'>
        <div>
          <h2>Profile Update</h2>
          <p>Always Keep Update</p>
        </div>
      </ReuseableForm> */}
      <Gradnpa></Gradnpa>
     
    </>
  )
}

export default App
