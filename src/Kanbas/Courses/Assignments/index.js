import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {
  findAssignmentsForCourse,
  addCourseAssignment,
  deleteCourseAssignment,
  updateCourseAssignment,
} from "./client";

import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
  // eslint-disable-next-line
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignments.assignments);
  const assignment = useSelector((state) => state.assignments.assignment);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const handleAddAssignment = async () => {
    try {
      const newAssignment = await addCourseAssignment(courseId, assignment);
      dispatch(addAssignment(newAssignment));
    } catch (error) {
      console.error("Error adding assignment:", error);
    }
  };

  const handleDeleteAssignment = async (assignmentId) => {
    try {
      await deleteCourseAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  // eslint-disable-next-line
  const handleUpdateAssignment = async () => {
    try {
      await updateCourseAssignment(assignment);
      dispatch(updateAssignment(assignment));
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const assignmentsData = await findAssignmentsForCourse(courseId);
        dispatch(setAssignments(assignmentsData));
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, [courseId, dispatch]);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );



  return (
    <div>
      <div className="row">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">
            <i className="fas fa-grip-vertical p-2 m-1"></i>
            <i className="fa-solid fa-caret-down p-2"></i>{" "}
            <strong>Assignments</strong>
            <i className="fa-solid fa-ellipsis-vertical black float-end p-2 m-1"></i>
            <i className="fa-solid fa-plus grey float-end p-2 m-1"></i>
            <button
              type="button"
              className="btn btn-outline-secondary float-end"
            >
              40% of total
            </button>
          </li>
          {courseAssignments.map((assignment, index) => {
            const weekNumber = index;
            const weekDescription = `Week ${weekNumber} - ${assignment.description}`;

            return (
              <li className="list-group-item container-fluid p-0 m-0 wd-green-border" key={assignment._id}>
                <div className="row p-0 m-0 align-items-center">
                  <div className="col-1 p-0 m-0 text-center">
                    <i className="fas fa-grip-vertical wd-custom-margin"></i>
                    <i className="fa-solid fa-book wd-color-green wd-custom-margin"></i>
                  </div>
                  <div className="col-9 p-0 m-0 pt-2 pb-2">
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
                  <div className="d-flex flex-row col-1">
                    <i className="fa-solid mt-2 fa-check-circle wd-color-green wd-custom-margin"></i>
                    <i className="fa-solid mt-2 fa-ellipsis-vertical black ma-050 wd-custom-margin"></i>
                    <button className="btn btn-danger"  onClick={() => handleDeleteAssignment(assignment._id)} >Delete</button>
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
