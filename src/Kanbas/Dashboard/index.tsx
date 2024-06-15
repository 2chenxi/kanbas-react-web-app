export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title" style={{ color: "gray" }}>Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses"  className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{width:"340px"}}>
          <div className="card">
            <img src="/images/example.jpg" alt="" height="300px" width="300px"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>
          <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c2.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5001/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    CS5001 Foundation of Computer Science
                </a>
                <p className="wd-dashboard-course-title card-text">
                    Foundational concepts of computer science
                </p>
                <a href="#/Kanbas/Courses/5001/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c3.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5002/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    CS5002 Discrete Structure
                </a>
                <p className="wd-dashboard-course-title card-text">
                    Discrete math for computer science
                </p>
                <a href="#/Kanbas/Courses/5002/Home" className="btn btn-primary"> Go </a>
                </div>
            </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c4.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/101/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    DG101 Principles for Puppies
                </a>
                <p className="wd-dashboard-course-title card-text">
                    How to be behave as a good puppy
                </p>
                <a href="#/Kanbas/Courses/101/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c5.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/111/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    PH111 Ancient Philosophy
                </a>
                <p className="wd-dashboard-course-title card-text">
                    An introduction of Classical Philosophy
                </p>
                <a href="#/Kanbas/Courses/111/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c6.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/789/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    AC789 Architecture History
                </a>
                <p className="wd-dashboard-course-title card-text">
                    An introduction of Architecture History
                </p>
                <a href="#/Kanbas/Courses/789/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c7.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/001/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    AH001 Art History
                </a>
                <p className="wd-dashboard-course-title card-text">
                    An introduction of Art History
                </p>
                <a href="#/Kanbas/Courses/001/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course col" style={{width:"340px"}}> 
            <div className="card">
            <img src="/images/c8.jpg" alt="" height="300px" width="300px"/>
                <div className="card-body">
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/444/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    PT444 Principles of Photography
                </a>
                <p className="wd-dashboard-course-title card-text">
                    An introduction of Photography
                </p>
                <a href="#/Kanbas/Courses/444/Home" className="btn btn-primary"> Go </a>
                </div>
                </div>
            </div>
        </div>
      </div>
      </div>
  );}
  