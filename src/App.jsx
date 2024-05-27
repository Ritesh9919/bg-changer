import {useState} from 'react';

function App() {
   const [bgColor, setBgColor] = useState("black");

   document.body.style.backgroundColor = bgColor;

   const hadleBgChange = (bgc)=> {
    setBgColor(bgc);
   }
   
  return (
     <div>
      <h2 className="text-center font-bold text-lg mt-5">Bg Changer</h2>
      <div className="flex justify-center items-center mt-3 gap-5">
        <button className="py-1 px-5 rounded-lg bg-red-500" onClick={()=> hadleBgChange('red')}>Red</button>
        <button className="py-1 px-5 rounded-lg bg-green-500" onClick={()=> hadleBgChange('green')}>Green</button>
        <button className="py-1 px-5 rounded-lg bg-blue-500" onClick={()=> hadleBgChange('blue')}>Blue</button>
        <button className="py-1 px-5 rounded-lg bg-orange-500" onClick={()=> hadleBgChange('orange')}>Orange</button>
        <button className="py-1 px-5 rounded-lg bg-purple-500" onClick={()=> hadleBgChange('purple')}>Purple</button>
      </div>
     </div>
  )
}

export default App
