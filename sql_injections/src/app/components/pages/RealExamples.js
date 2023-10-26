function RealExamples() {
  return (
    <div className="text-cyan-100">
      <h3 className="text-green-400 text-2xl lg:text-7xl  py-2">
        Essential Security Techniques: Input Validation, Sanitization, and
        Parameterization
      </h3>
      <p className="py-2 text-sm lg:text-2xl  tracking-widest">
        Several vulnerabilities in this code pave the way for potential SQL
        injection attacks. Notably, it lacks input validation and sanitization,
        and queries are executed without proper parameterization. By
        acknowledging these weaknesses, we can take proactive steps to fortify
        our defenses against SQL injection threats. Let us talk about what input
        validation, sanitization and parameterization is.
      </p>
      <div className="text-sm lg:text-2xl  tracking-widest">
        <p className="py-2 text-sm lg:text-2xl  tracking-widest">
          <span className="text-red-500">Input Validation: </span>
          ensures that data input meets specific criteria, such as type, length,
          and format. It prevents malicious or malformed data from entering your
          application, reducing the risk of attacks.
        </p>
        <p className="py-2 text-sm lg:text-2xl  tracking-widest">
          <span className="text-red-500">Sanitization: </span> involves cleaning
          or filtering input data to remove any potentially harmful or
          unnecessary characters. This process helps eliminate the risk of code
          injection and other security vulnerabilities.
        </p>
        <p className="py-2 text-sm lg:text-2xl  tracking-widest">
          <span className="text-red-500">Parameterization: </span>is a way to
          create SQL queries that keep data separate from the actual query. By
          doing this, it makes it much safer because it treats user inputs as
          data, not as code that can be executed. This is important for
          protecting your database from attacks.
        </p>
      </div>
      <p className="py-2 text-sm lg:text-2xl  tracking-widest">
        We employ these techniques to enhance security and protect our
        applications from common threats like SQL injection, ensuring that user
        input doesn't compromise the integrity of our databases or systems.
      </p>
    </div>
  );
}
export default RealExamples;
