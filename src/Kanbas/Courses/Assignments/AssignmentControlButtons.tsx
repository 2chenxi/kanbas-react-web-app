import { FaTrash } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const handleDelete = () => {
    deleteAssignment(assignmentId);
  };

  return (
    <div className="d-flex align-items-center mt-1 me-2">
      <LessonControlButtons />

      <div
        className="modal fade"
        id={`wd-delete-asm-dialog-${assignmentId}`}
        tabIndex={-1}
        aria-labelledby={`deleteAssignmentModal-${assignmentId}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`deleteAssignmentModal-${assignmentId}`}>
                Confirm Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this assignment?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <FaTrash
        size={28}
        className="me-2 fs-1"
        data-bs-toggle="modal"
        data-bs-target={`#wd-delete-asm-dialog-${assignmentId}`}
      />
    </div>
  );
}
