import { HiMagnifyingGlass } from "react-icons/hi2";
import GradesControl from "./GradesControl";
import { FiFilter } from "react-icons/fi";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
  const { cid: courseID } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseID);
  const students = db.enrollments.filter((student) => student.course === courseID);
  const grades = db.grades;
  const users = db.users;

  console.log("Grades data:", grades);
  console.log("Assignments data:", assignments);
  console.log("Students data:", students);

  return (
    <div className="container">
      <GradesControl />
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="student-search" className="form-label custom-label">Student Names</label>
          </div>
          <div className="search-bar">
            <HiMagnifyingGlass className="position-relative me-2 mb-1" style={{ bottom: "1px", fontSize: '24px' }} />
            <input type="text" id="student-search" className="form-control" placeholder="Search Students" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-2">
            <label htmlFor="assignment-search" className="form-label custom-label">Assignment Names</label>
          </div>
          <div className="search-bar">
            <HiMagnifyingGlass className="position-relative me-2 mb-2" style={{ bottom: "1px", fontSize: '24px' }} />
            <input type="text" id="assignment-search" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <button id="wd-filter-btn" className="btn btn-lg btn-outline-secondary me-1 mb-1">
        <FiFilter className="position-relative me-2" style={{ bottom: "1px", fontSize: '24px', color: "black" }} />
        Apply filters
      </button>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student Name</th>
              {assignments.length === 0 ? (
                <th scope="col">No assignments found for this course.</th>
              ) : (
                assignments.map((assignment) => (
                  <th key={assignment._id} scope="col">
                    <div>
                      {assignment.title}
                    </div>
                    <div style={{ fontSize: '12px' }}>
                      Out of {assignment.points}
                    </div>
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
          {students.map((student) => (
  <tr key={student._id}>
    <td className="student-name">
      {(() => {
        const user = users.find((user) => user._id === student.user);
        return user ? `${user.firstName} ${user.lastName}` : 'Unknown Student';
      })()}
    </td>
    {assignments.map((assignment) => {
      const grade = grades.find((grade) => grade.student === student.user && grade.assignment === assignment._id);

      console.log(`Grade for student ${student.user} (${student._id}) and assignment ${assignment.title} (${assignment._id}):`, grade ? grade.grade : 'N/A');
      return (
        <td key={`${student._id}-${assignment._id}`}>
          {grade ? grade.grade : 'N/A'}
        </td>
      );
    })}
  </tr>
))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
