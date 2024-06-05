import { HiMagnifyingGlass } from "react-icons/hi2";
import GradesControl from "./GradesControl";
import { FiFilter } from "react-icons/fi";

export default function Grades() {
    return(
        <div className="container">
            <GradesControl />
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="student-search" className="form-label custom-label">Student Names</label>
          </div>
          <div className="search-bar">
          <HiMagnifyingGlass className="position-relative me-2 mb-1" style={{ bottom: "1px", fontSize: '24px'}} />
            <input type="text" id="student-search" className="form-control" placeholder="Search Students" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="assignment-search" className="form-label custom-label">Assignment Names</label>
          </div>
          <div className="search-bar">
          <HiMagnifyingGlass className="position-relative me-2 mb-2" style={{ bottom: "1px" , fontSize: '24px'}} />
            <input type="text" id="assignment-search" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <button id="wd-filter-btn" className="btn btn-lg btn-outline-secondary  me-1 mb-1">
            <FiFilter className="position-relative me-2" style={{ bottom: "1px" , fontSize: '24px', color:"black" }} />
            Apply filters
          </button>
        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
          <tr>
  <th scope="col">Student Name</th>
  <th scope="col">
        <div>
          A1 SETUP
        </div>
        <div style={{ fontSize: '12px' }}>
          Out of 100
        </div>
      </th>
      <th scope="col">
        <div>
        A2 HTML
        </div>
        <div style={{ fontSize: '12px' }}>
          Out of 100
        </div>
      </th>
      <th scope="col">
        <div>
        A3 CSS
        </div>
        <div style={{ fontSize: '12px' }}>
          Out of 100
        </div>
      </th>
      <th scope="col">
        <div>
        A4 BOOTSTRAP 
        </div>
        <div style={{ fontSize: '12px' }}>
          Out of 100
        </div>
      </th>

</tr>

          </thead>
          <tbody>
            <tr>
              <td className="student-name">Jane Adams</td>
              <td><input type="number" min="0" max="100" value="100" /></td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="student-name">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="student-name">Jack Adams</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="student-name">Jason Adams</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>  
    );
}