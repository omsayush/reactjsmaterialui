import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = ()=>{

    const [num, setNum] = useState(0);

    const incNum = () =>{
        setNum(num + 1);
    }
    const decNum = () =>{
        if(num > 0){
        setNum(num - 1);
        }else{
            alert("Number Reached")
            setNum(0);
        }
    }
  return(
    <>
     <div className="main_div">
       <div className="center_div">
        <h1>  {num}  </h1>
         <div className="btn_div">
         <Tooltip title="Add">
           <Button onClick={incNum} 
           className="btn_green"> <AddIcon/> </Button>
           </Tooltip>
           <Tooltip title="Delete">
           <Button onClick={decNum} className="btn_red"> <DeleteIcon/> </Button>
           </Tooltip>
         </div>
       </div>
     </div>
    </>
  )
}

export default ToDoList;