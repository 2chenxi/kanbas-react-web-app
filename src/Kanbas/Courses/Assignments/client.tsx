import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };
  

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios
      .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  };
  
export const createAssignment = async (courseNumber: string, assignment: any) => {
    const response = await axios.post( `${COURSES_API}/${courseNumber}/assignments`, assignment );
    return response.data;
  };
  
export const findAssignmentsForCourse = async (courseNumber: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseNumber}/assignments`);
    return response.data;
  };


