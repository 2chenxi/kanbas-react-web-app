import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import AssignmentsControl from "./AssignmentsControl";
import AssignmentIcon from "./AssignmentIcon";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state:any) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment:any) => assignment.course === cid);
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments">
      <AssignmentsControl /> <br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-green">
          <h3 className="p-3 ps-2 bg-third d-flex align-items-center justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-2" />
              <span className="assignment-title">ASSIGNMENTS</span>
            </span>
            <div className="assignment-controls d-flex align-items-center">
              <div className="rounded-frame me-2">40% of Total</div>
              <Link to={`/Kanbas/Courses/${cid}/Assignments/new`} className="me-2 fs-2">
                <BsPlus />
              </Link>
              <IoEllipsisVertical className="fs-4" />
            </div>
          </h3>
          <ul className="wd-assignment-list list-group rounded-0">
            {courseAssignments.length === 0 ? (
              <div>No assignments found for this course.</div>
            ) : (
              courseAssignments.map((assignment:any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between me-3"
                >
                  <div className="d-flex align-items-center">
                    <AssignmentIcon />
                    <div className="ms-3">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link ast-title"
                      >
                        {assignment.title}
                      </Link>
                      <p>
                        <span style={{ color: 'red' }}>{assignment.description}</span> | <b>Not available until</b> {assignment.available_date} |<br />
                        <b>Due</b> {assignment.due_date} | {assignment.points} pts
                      </p>
                    </div>
                  </div>
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => { dispatch(deleteAssignment(assignmentId)); }}
                  />
                </li>
              ))
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
