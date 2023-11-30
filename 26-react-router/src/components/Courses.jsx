import React, { useState, useEffect } from "react";
import allCourses from "../data/allCourses.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const SORT_KEYS = ["title", "id", "slug"];

const sortCourse = (allCourses, key) => {
  const sortedCourses = [...allCourses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
};

const Courses = () => {
  const location = useLocation();
  const parsedSearch = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(parsedSearch.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourse(allCourses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCourses([...allCourses])
    }
  }, [sortKey, navigate]);

  return (
    <div>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
      {sortedCourses.map((c) => (
        <div key={c.id}>
          <Link to={c.slug} className="courseLink">
            {c.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
