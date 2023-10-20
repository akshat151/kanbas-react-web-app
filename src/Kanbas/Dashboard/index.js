import React from "react";
import coursesData from "../Database/courses.json";

const Dashboard = () => {
  const courses = coursesData;

  return (
    <div className="container-fluid wd-paddingtop-20px wd-padding-left-3p wd-padding-right-3p wd-width-100p">
      <div className="wd-flex-col-container wd-width-100p">
        <div>
          <span className="wd-font-size-30px">Dashboard</span>
          <hr />
        </div>
        <div>
          <span className="wd-font-size-25px">Published Courses ({courses.length})</span>
          <hr />
        </div>
        <div className="row wd-course-container">
          {courses.map((course) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={course._id}>
              <div className="wd-course-card card">
                <img src={course.image} className="card-img-top" alt={course.name} />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={course.url}>{course.number} {course.name}</a>
                  </h5>
                  <p className="card-text">
                    {course.number} {course.name}<br />
                    Start Date: {course.startDate}<br />
                    End Date: {course.endDate}
                  </p>
                  <i className="fas fa-pencil-alt"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
