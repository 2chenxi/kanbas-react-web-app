import "./index.css";
import { Link, useParams,  useLocation } from "react-router-dom";


export default function CoursesNavigation() {
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
   const { courseId } = useParams();
   const { pathname } = useLocation();
  return (
   
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {
         links.map((link) => (
           <Link
           key={`/Kanbas/Courses/${courseId}/${link}`}
           to={`/Kanbas/Courses/${courseId}/${link}`}
           className={`list-group-item border-0 ${
            pathname.includes(link) ? "active": "text-danger"
           }`}
           >
            {link}
           </Link>
         ))
      }

    
    </div>
 
  );
}
