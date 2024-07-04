import { BsGripVertical } from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";
export default function AssignmentIcon () {
    return(
        <div className="d-flex align-items-center  mt-1 me-2"> 
        <BsGripVertical className="me-2 fs-1" />
        <MdAssignmentAdd className="fs-1"  style={{ color: "green"}} />
       
      </div>

    );
}