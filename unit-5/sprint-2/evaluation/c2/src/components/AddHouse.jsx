import { useState } from "react";

export const AddHouse = ({handleformdata}) => {
    const[formdata,setFormdata]=useState({name:"",ownerName:"",address:"",areaCode:"",rent:"",bachelor:false,married:false});
    const onchange=(e)=>{
        const{className,value,type,checked}=e.target;
    
        setFormdata({...formdata,[className]:type==='checkbox'?checked:value});

    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        handleformdata(formdata);

    }
    return (
      <div className="addHouseContainer">
        <form onSubmit={handlesubmit}>
          <label>name</label>
          <input type="text" className="name" value={formdata.name} required  onChange={onchange}/>
          <br />
          <label>ownerName</label>
          <input value={formdata.ownerName} type="text" className="ownerName" required  onChange={onchange} />
          <br />
          <label>address</label>
          <input value={formdata.address} type="text" className="address" required   onChange={onchange}/>
          <br />
          <label>areaCode</label>
          <input value={formdata.areaCode} type="text" className="areaCode" required  onChange={onchange} />
          <br />
          <label>rent</label>
          <input value={formdata.rent} type="text" className="rent" required  onChange={onchange} />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input checked={formdata.bachelor} type="checkbox" className="bachelor"   onChange={onchange}/>
          <br />
          <label>married</label>
          <input checked={formdata.married} type="checkbox" className="married"  onChange={onchange} />
          <br />
         
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };
  