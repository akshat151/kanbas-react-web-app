import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <div className="row">
        <ul className="list-group">
          {courseAssignments.map((assignment, index) => {
            const weekNumber = index; // Week number
            const weekDescription = `Week ${weekNumber} - ${assignment.description}`; // Dynamic description

            return (
              <li className="list-group-item container-fluid p-0 m-0 wd-green-border" key={assignment._id}>
                <div className="row p-0 m-0 align-items-center">
                  <div className="col-1 p-0 m-0 text-center">
                    <i className="fas fa-grip-vertical wd-custom-margin"></i>
                    <i className="fa-solid fa-book wd-color-green wd-custom-margin"></i>
                  </div>
                  <div className="col-10 p-0 m-0 pt-2 pb-2">
                    <div className="wd-assignment-custom-font">
                      <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        style={{ textDecoration: "None", color: "black" }}
                      >
                        <strong>{assignment.title}</strong>
                      </Link>
                      <p className="p-0 m-0">{weekDescription}</p>
                      <p className="p-0 m-0">
                        <strong>Due</strong> {assignment.dueDate} at {assignment.dueTime} | {assignment.points} pts
                      </p>
                    </div>
                  </div>
                  <div className="col-1 p-0 m-0 text-center">
                    <i className="fa-solid fa-check-circle wd-color-green wd-custom-margin"></i>
                    <i className="fa-solid fa-ellipsis-vertical black ma-050 wd-custom-margin"></i>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
