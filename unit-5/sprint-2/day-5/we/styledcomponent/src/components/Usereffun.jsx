export const Usereffun=()=>{
const [count, setCount] = useState(0);
const ref=useRef(null);//useRef{current:"masai"}
console.log("name if:",ref.current);
useEffect(()=>{
  startTimer();
 
},[]);
const startTimer=()=>{
  ref.current=setInterval(()=>{
    setCount((p)=>p+1)
  },1000)

}


return (
  <div >
    <h4>styled components</h4>
    <hr/>
  <h3>counter:{count}</h3>
  <button onClick={()=>{
    clearInterval(ref.current)
  }}>stop</button>
   <button onClick={startTimer}>start</button>
   <button onClick={()=>{
    clearInterval(ref.current);
    setCount(0);
  }}>Reset</button>
   
  </div>
)}