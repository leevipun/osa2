const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <table>
            <tbody>
              {course.parts.map((part) => (
                <tr key={part.id}>
                  <td>{part.name}</td>
                  <td>{part.exercises}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Total number of exercises:
            {course.parts.reduce((acc, part) => acc + part.exercises, 0)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Course;
