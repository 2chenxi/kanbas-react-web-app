import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state:any) => state.assignmentsReducer.assignments);
  const isNew = aid === 'new';

  const [assignment, setAssignment] = useState({
    _id: '',
    title: '',
    description: '',
    points: 0,
    due_date: '',
    available_date: '',
    available_until: '',
    course: cid,
  });

  useEffect(() => {
    if (!isNew) {
      const existingAssignment = assignments.find((a:any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments, isNew]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e:any) => {
    e.preventDefault();
    if (isNew) {
      dispatch(addAssignment({ ...assignment, _id: new Date().toISOString() }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSave}>
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="form-label">
            <h1 className="mb-0">Assignment Name</h1>
          </label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            name="title"
            value={assignment.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="wd-description"
            name="description"
            value={assignment.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 row">
          <div className="col-md-3">
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input
              type="number"
              className="form-control"
              id="wd-points"
              name="points"
              value={assignment.points}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-md-3">
            <label className="form-label">Due</label>
            <input
              type="date"
              className="form-control"
              id="wd-due-date"
              name="due_date"
              value={assignment.due_date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 row">
          <div className="col-md-6">
            <label className="form-label">Available from</label>
            <input
              type="date"
              className="form-control"
              id="wd-available-from"
              name="available_date"
              value={assignment.available_date}
              onChange={handleChange}
            />
          </div>
          
          <div className="col-md-6">
            <label className="form-label">Available until</label>
            <input
              type="date"
              className="form-control"
              id="wd-available-until"
              name="available_until"
              value={assignment.available_until || assignment.due_date}
              onChange={handleChange}
            />
          </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
