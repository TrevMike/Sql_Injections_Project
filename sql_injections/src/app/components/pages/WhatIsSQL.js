function WhatIsSQL() {
  return (
    <div className="text-cyan-100">
      <h3 className="text-green-400 py-2 text-2xl lg:text-7xl ">
        Unraveling the Threat: SQL Injection in Cybersecurity
      </h3>
      <p className="text-sm lg:text-2xl  tracking-widest py-2">
        A SQL injection is a malicious technique where attackers exploit
        vulnerabilities in an application's handling of user-supplied data to
        manipulate a database.
      </p>
      <p className="text-sm lg:text-2xl  tracking-widest py-2">
        By inserting malicious SQL code into input fields, they can gain
        unauthorized access, modify, or delete data. SQL injection is a critical
        concern in cybersecurity because it can lead to data breaches, loss of
        sensitive information, unauthorized access, and even system compromise.
      </p>
      <p className="text-sm lg:text-2xl  tracking-widest py-2">
        Understanding and guarding against SQL injection is vital to maintaining
        data security and protecting against cyber threats.
      </p>
    </div>
  );
}

export default WhatIsSQL;
