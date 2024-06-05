export default function AssignmentEditor() {
    return (
      <div className="container">
      <form>
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="form-label"><h1 className="mb-0">Assignment Name</h1></label>
          <input type="text" className="form-control" id="wd-name" defaultValue="A1" />
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea className="form-control" id="wd-description">
           The assignment is available online. Submit a link to the landing page of.
          </textarea>
        </div>
        <div className="mb-3 row">
        <div className="col-md-3">        
            <label htmlFor="wd-points" className="form-label">Points</label>
            <input type="number" className="form-control" id="wd-points" defaultValue={100} />
        </div>
        </div> 
          <div className="mb-3 row">  
          <div className="col-md-3">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
            </select>
          </div>
          </div>
        
        <div className="mb-3 row">
          <div className="col-md-3">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-select">
              <option value="PERCENTAGE" selected>Percentage</option>
            </select>
          </div>
          <div className="mb-3 row">
          <div className="col-md-3">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
            <select id="wd-submission-type" className="form-select">
              <option value="ONLINE" selected>Online</option>
            </select>
          </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Online Entry Options</label>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="website-url" />
              <label className="form-check-label" htmlFor="website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign Assign to</label>
          <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
        </div>
        <div className="mb-3 col-md-3">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" id="wd-due-date" defaultValue="2024-05-13" />
        </div>
        <div className="mb-3 row">
          <div className="col-md-6">
            <label className="form-label">Available from</label>
            <input type="date" className="form-control" id="wd-available-from" defaultValue="2024-05-06" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Until</label>
            <input type="date" className="form-control" id="wd-available-until" defaultValue="2024-05-20" />
          </div>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );}
  