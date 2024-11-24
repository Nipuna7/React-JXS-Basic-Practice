

import './App.css'

function App() {
// variables
const a=40;  
const arr=["apple","orange","graps"];
const obj={name:"samith",age:"55"};
const lang=<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>

  return (
    <>
    <div className='cont'>
      <h1>Employee Details</h1>
      <p>First Name : Nipuna</p>
      <p>Age : 30</p>
      <p>Country ia Sri lanka</p>
      
      <p>kamal like { arr[0]}</p>
      <p>Front end language</p>
      {lang}
      <p>My name is {obj.name}</p>
    </div>
    </>
  )
}

export default App;
