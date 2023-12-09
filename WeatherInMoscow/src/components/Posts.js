import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.open-meteo.com/v1/gem?latitude=55.7522&longitude=37.6156&daily=temperature_2m_max&timezone=Europe%2FMoscow&forecast_days=10";
let t2 = [];
const Posts = () => {
  const [posts, setPosts] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (!isLoading) {
    var days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    var d = new Date();
    console.log(d);
    var n = d.getDay();
    const t = [];
    for (let i = 0; i < posts.daily.time.length; i++) {
      t.push(
        `${posts.daily.time[i]}|${days[(n + i) % 7]}|${
          posts.daily.temperature_2m_max[i]
        }`
      );
    }
    t2 = t;
  }
  return (
    <>
      <h1>Погода на ближайшие 10 дней в Москве</h1>
      <hr />
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <h1>
          {t2.map((e) => (
            <p>{e}</p>
          ))}
        </h1>
      )}
      ;
    </>
  );
};
export default Posts;
