import React from "react";
import { Link } from "react-router-dom";
import "./dashboardIndex.css";
import CourseForm from "./CourseForm";
import CourseItem from "./CourseItem";

const Dashboard = ({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse
}) => {
  const colors = ["darkblue", "cyan", "red"];
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row flex-wrap pb-0">
        <div className="col col-sm-12 col-xl-8 col-md-10 wd-dashboard-header-text">Dashboard</div>
      </div>
      <div className="row d-flex flex-row flex-wrap pb-0">
        <div className="col col-sm-11 col-xl-11 col-md-11">
          <hr className="m-2 font-weight" />
        </div>
      </div>
      <div className="row d-flex flex-row flex-wrap mt-2">
        <div className="wd-dashboard-sub-header-text col-sm-11 col-md-11 col-xl-11">
          Published Courses({courses.length})
        </div>
        <div className="wd-dashboard-sub-header-text col col-sm-10 col-xl-10 col-md-10">
          <hr className="m-1 font-weight" />
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="d-flex flex-row flex-wrap row"
          style={{ margin: "1rem" }}
        >
          <CourseForm
            course={course}
            setCourse={setCourse}
            addCourse={addCourse}
            updateCourse={updateCourse}
          />
          {courses.map((course, index) => {
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];
            return (
              <div className="card wd-course-card m-5 p-0">
                <div
                  className="wd-card-image-container"
                  style={{ background: `${color}` }}
                >
                  <div className="float-end">
                    <div className="wd-course-card-ellipses p-1">
                      <i className="fa-solid fa-ellipsis-vertical wd-color-white p-2"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item wd-card-header"
                  >
                    {course.number} {course.name}{" "}
                    <span className="wd-col-red">...</span>
                  </Link>
                  <p className="card-subtitle text-body-secondary">
                    {course.number}.12631.{course.endDate}
                  </p>
                  <p className="card-text wd-card-text">
                    202410_1 Fall 2023 Semester
                  </p>
                  <CourseItem
                    course={course}
                    deleteCourse={deleteCourse}
                    setCourse={setCourse}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
