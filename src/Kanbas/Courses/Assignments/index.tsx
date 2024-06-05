import { IoEllipsisVertical} from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import AssignmentsControl from "./AssignmentsControl";
import AssignmentIcon from "./AssignmentIcon";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentsControl /> <br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-green">
    <h3 className="p-3 ps-2 bg-third d-flex align-items-center justify-content-between">   <span>
                    <BsGripVertical className="me-2 fs-3" />
                    <FaCaretDown className="me-2" />
                    <span className="assignment-title">ASSIGNMENTS</span>
                </span>
                <div className="assignment-controls d-flex align-items-center">
                    <div className="rounded-frame me-2">40% of Total</div>
                    <BsPlus className="me-2 fs-2" />
                    <IoEllipsisVertical className="fs-4" />
                </div>
</h3>

      
<ul className="wd-assignment-list list-group rounded-0">
<li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between me-3">
        <div className="d-flex align-items-center">
            <AssignmentIcon />
            <div className="ms-3">
            <a className="wd-assignment-link ast-title"
              href="#/Kanbas/Courses/1234/Assignments/123">
               A1</a>
                <p>
                <span style={{ color: 'red' }}>Multiple Modules</span>  | <b>Not available until</b> May 6 at 12:00am |<br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                </p>
            </div>
        </div>
        <LessonControlButtons />
    </li>

    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between me-3">
        <div className="d-flex align-items-center">
            <AssignmentIcon />
            <div className="ms-3">
            <a className="wd-assignment-link ast-title"
              href="#/Kanbas/Courses/1234/Assignments/123">
               A2</a>
                <p>
                <span style={{ color: 'red' }}>Multiple Modules</span>  | <b>Not available until</b> May 13 at 12:00am |<br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
                </p>
            </div>
        </div>
        <LessonControlButtons />
    </li>

    <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between me-3">
        <div className="d-flex align-items-center">
            <AssignmentIcon />
            <div className="ms-3">
            <a className="wd-assignment-link ast-title"
              href="#/Kanbas/Courses/1234/Assignments/123">
               A2</a>
                <p>
                <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
                <b>Due</b> May 27 at 11:59pm | 100 pts

                </p>
            </div>
        </div>
        <LessonControlButtons />
    </li>

      </ul>
    </li>
       
      </ul>
    </div>
);}

  