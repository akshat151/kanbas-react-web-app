import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex h-100">
        <KanbasNavigation />
        <div className="w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
