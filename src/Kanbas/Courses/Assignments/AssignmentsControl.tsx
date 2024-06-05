import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentsControl() {
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
          <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
          
        </div>
      </div>
    );
  }
  