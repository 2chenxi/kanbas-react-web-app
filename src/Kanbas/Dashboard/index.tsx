export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/example.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c2.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5001/Home">
                    CS5001 Foundation of Computer Science
                </a>
                <p className="wd-dashboard-course-title">
                    Foundational concepts of computer science
                </p>
                <a href="#/Kanbas/Courses/5001/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c3.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/5002/Home">
                    CS5002 Discrete Structure
                </a>
                <p className="wd-dashboard-course-title">
                    Discrete math for computer science
                </p>
                <a href="#/Kanbas/Courses/5002/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c4.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/101/Home">
                    DG101 Principles for Puppies
                </a>
                <p className="wd-dashboard-course-title">
                    How to be behave as a good puppy
                </p>
                <a href="#/Kanbas/Courses/101/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c5.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/111/Home">
                    PH111 Ancient Philosophy
                </a>
                <p className="wd-dashboard-course-title">
                    An introduction of Classical Philosophy
                </p>
                <a href="#/Kanbas/Courses/111/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c6.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/789/Home">
                    AC789 Architecture History
                </a>
                <p className="wd-dashboard-course-title">
                    An introduction of Architecture History
                </p>
                <a href="#/Kanbas/Courses/789/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c7.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/001/Home">
                    AH001 Art History
                </a>
                <p className="wd-dashboard-course-title">
                    An introduction of Art History
                </p>
                <a href="#/Kanbas/Courses/001/Home"> Go </a>
                </div>
            </div>
            <br></br>
            <div className="wd-dashboard-course"> 
            <img src="/images/c8.jpg" width={200} />
                <div>
                <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/444/Home">
                    PT444 Principles of Photography
                </a>
                <p className="wd-dashboard-course-title">
                    An introduction of Photography
                </p>
                <a href="#/Kanbas/Courses/444/Home"> Go </a>
                </div>
            </div>
        </div>
      </div>
  );}
  