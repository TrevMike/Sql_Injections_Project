function SqlInjectionsExplained() {
  return (
    <div className="text-cyan-100 text-sm lg:text-2xl ">
      <h3 className="text-green-400 text-2xl lg:text-7xl  py-2">
        Unmasking SQL Injections: Understanding Techniques and Risks
      </h3>
      <p className="py-2 tracking-widest">
        The primary goal of SQL injection attacks is to manipulate a web
        application's interaction with its database, ultimately gaining
        unauthorized access to sensitive data or disrupting database operations.
      </p>
      <p className="py-2 tracking-widest">
        SQL injections come in various forms, including
        <span className="text-red-500"> Classic SQL </span> injection, which
        involves inserting malicious SQL statements into input fields, and
        <span className="text-red-500"> blind SQL injection</span>, where an
        attacker infers information by analyzing a web application's responses.
      </p>
      <p className="py-2 tracking-widest">
        <span className="text-red-500">Time-based blind injection </span>
        exploits delays in responses to infer database information indirectly.
        <span className="text-red-500"> Second-order injection</span>, on the
        other hand, involves placing malicious SQL code in one part of an
        application to execute it in another.
      </p>
      <p className="py-2 tracking-widest">
        These diverse tactics underscore the need for comprehensive security
        measures to guard against SQL injection attacks.
      </p>
    </div>
  );
}
export default SqlInjectionsExplained;
