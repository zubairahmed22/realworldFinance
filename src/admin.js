import React,{useState} from 'react'

const Admin = () => {
  const [opendiv, setOpenDiv] = useState(2)
  return (
    <div className='AdminContainer'>
     <div className='adminMain'>
    <div className='adminHeader'>
        <p onClick={() => setOpenDiv(!opendiv)}>safe account</p>
        <p>safe account Created By</p>
        <p>success</p>
        </div>
       
        <div className={opendiv ? 'box_container active': "box_container inactive1"}>
          <div className='inputBox'>
            <input type='text' placeholder='enter'></input>
            <button>Add</button>
            </div>
        </div> 
        </div>  
         
        
    </div>
  )
}

export default Admin