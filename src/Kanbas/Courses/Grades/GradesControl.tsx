import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
export default function GradesControl() {
    return(
        <div id="wd-assignments-controls" className="text-nowrap d-flex justify-content-end align-items-center py-2 px-3">
        <div className="d-flex">
            <button id="wd-import-btn" className="btn btn-lg btn-outline-secondary me-2">
            <FaFileImport className="position-relative me-2" style={{ bottom: "1px", fontSize: '24px', color:"black" }} />
            Import
            </button>
            <div className="dropdown me-2">
      <button className="btn btn-lg btn-outline-secondary dropdown-toggle" type="button" id="exportDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        <FaFileExport className="position-relative me-2" style={{ bottom: "1px", fontSize: '24px', color: "black" }} />
        Export
      </button>
      <ul className="dropdown-menu" aria-labelledby="exportDropdownButton">
        <li><a className="dropdown-item" href="#http://localhost:3000/#/Kanbas/Courses/1234/Grades">Action</a></li>
        <li><a className="dropdown-item" href="#http://localhost:3000/#/Kanbas/Courses/1234/Grades">Another action</a></li>
        <li><a className="dropdown-item" href="#http://localhost:3000/#/Kanbas/Courses/1234/Grades">Something else here</a></li>
      </ul>
    </div>
            </div>
            <button id="wd-setting-btn" className="btn btn-lg btn-outline-secondary">
            <FaGear className="position-relative me-2" style={{ bottom: "1px" , fontSize: '24px', color:"black" }} />
            </button>
        </div>
    
    );
}