import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function AssignmentsControl() {
  const navigate = useNavigate();
  const { cid } = useParams();

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor`);
  };

  return (
    <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-between align-items-center py-2 px-3">
      <div className="search-bar">
        <div className="assignments-search d-flex align-items-center">
          <HiMagnifyingGlass className="position-relative me-2" style={{ bottom: "1px" }} />
          <input
            id="wd-search-assignment"
            type="text"
            placeholder="Search for Assignments"
            className="form-control border-0"
          />
        </div>
      </div>
      <div className="d-flex">
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="me-2 fs-2">                            
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
          onClick={handleAddAssignment}>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
        </Link>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <IoEllipsisVertical className="position-relative me-2" style={{ bottom: "1px" }} />
        </button>
      </div>
    </div>
  );
}
