function ClassicSQL() {
  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Example of Classic SQL Injection</h1>
      <form onSubmit={(e) => formHandler(e)}>
        <input type="text" placeholder="Employee Name..." onChange={""} />
      </form>
    </div>
  );
}
export default ClassicSQL;
