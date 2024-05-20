export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id ="wd-group" >
                    <option value="ASSIGNMENTS" selected>
                        ASSIGNMENTS
                    </option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id ="wd-display-grade-as" >
                    <option value="PERCENTAGE" selected>
                        Percentage
                    </option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id ="wd-submission-type" >
                    <option value="ONLINE" selected>
                        Online
                    </option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
         
          <label>Online Entry Options</label><br/>
        
            <input type="checkbox" name="entry-option" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="entry-option" id="website-url"/>
            <label htmlFor="website-url">Website URL</label><br/>

            <input type="checkbox" name="entry-option" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="entry-option" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="entry-option" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </tr><br/>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign Assign to</label> 
            </td>
            <td><br/>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <br />
          <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-due-date"> Due </label>
                <input type="date"
                    id="wd-due-date"
                    value="2024-05-13"/><br/>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-available-from"> Available from</label>
                <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"/>
            <label htmlFor="wd-available-until">Until </label>
                <input type="date"
                    id="wd-available-until"
                    value="2024-05-20"/><br/>
            </td>
          </tr>

          <br />
          <tr>
            <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
            </td>
          </tr>

          {/* Complete on your own */}
        </table>
      </div>
  );}
  