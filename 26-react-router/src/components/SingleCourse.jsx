import { Link, useNavigate, useParams } from "react-router-dom";
import allCourses from "../data/allCourses";
import { useEffect } from "react";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const course = allCourses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h3>{course?.slug}</h3>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
