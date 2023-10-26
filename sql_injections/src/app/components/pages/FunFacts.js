function FunFacts() {
  return (
    <div className="text-cyan-100 text-sm lg:text-2xl ">
      <h3 className="text-green-400 text-2xl lg:text-7xl  py-2">
        The World of SQL Injections: Beyond the Basics
      </h3>
      <p className="py-2 tracking-widest">
        SQL injections, though a significant cybersecurity threat, have some
        intriguing aspects. They originated in the late '90s and were featured
        in various TV series like Mr. Robot, where a famous SQL injection scene
        showcased their use. Video games like Hacknet use them as a core
        gameplay element, adding to their allure in popular culture.
      </p>
      <h3 className="text-green-400 text-xl lg:text-4xl  py-2">
        Famous Attacks:
      </h3>
      <ul className="tracking-widest">
        <li className="py-2">
          <span className="text-red-500">
            Heartland Payment Systems {"(2008)"}:{" "}
          </span>
          In this infamous breach, hackers exploited SQL injection to compromise
          Heartland Payment Systems, a major credit card processing company.
          Over 130 million credit card numbers were stolen, making it one of the
          largest data breaches in history.
        </li>
        <li className="py-2">
          <span className="text-red-500">MySpace {"(2009)"}: </span>Once the
          largest social networking site, MySpace fell victim to a significant
          SQL injection attack. It allowed hackers to steal user data,
          highlighting the risks of not properly securing web applications.
        </li>
        <li className="py-2">
          <span className="text-red-500">LinkedIn {"(2012)"}: </span>In 2012,
          LinkedIn suffered a massive data breach due to a SQL injection attack.
          Around 6.5 million users' hashed passwords were exposed, revealing the
          vulnerability of even well-established tech companies.
        </li>
      </ul>
      <h3 className="text-green-400 text-xl lg:text-4xl  py-2">
        The Big Players:
      </h3>
      <ul className="tracking-widest">
        <li className="py-2">
          <span className="text-red-500">Yahoo: </span>One of the internet
          giants, Yahoo, experienced one of the most significant data breaches
          ever in 2013 and 2014. The attackers used SQL injection to access user
          accounts, compromising an astounding three billion accounts.
        </li>
        <li className="py-2">
          <span className="text-red-500">Sony Pictures {"(2014)"}:</span> Sony
          Pictures became a target when a group called the "Guardians of Peace"
          used SQL injection to infiltrate its database. This led to a massive
          leak of sensitive company data and unreleased movies.
        </li>
        <li className="py-2">
          <span className="text-red-500">Ashley Madison {"(2015)"}:</span> The
          Ashley Madison website, known for facilitating extramarital affairs,
          fell prey to an SQL injection attack. Hackers exposed users' personal
          data and had a profound impact on the company's reputation.
        </li>
      </ul>
      <h3 className="text-green-400 text-xl lg:text-4xl  py-2">Conclusion:</h3>
      <p className="py-2 tracking-widest">
        These examples will help illustrate the gravity of SQL injection attacks
        and their impact on organizations. They serve as powerful cautionary
        tales for the audience, emphasizing the importance of robust security
        measures.
      </p>
      <p className="py-2 tracking-widest">
        To put the financial cost in perspective, even a minor SQL injection can
        result in damages of up to $196,000 for a company.
      </p>
      <p className="py-2 tracking-widest">
        It's not just smaller organizations that are affected; even tech giants
        like Facebook allocate substantial budgets, often around $500,000, for
        maintaining robust security systems to prevent SQL attacks. Notably, the
        U.S. Military invests significant resources, potentially even more, in
        safeguarding against SQL injection attacks and a myriad of other
        cybersecurity threats.
      </p>
      <p className="py-2 tracking-widest">
        These figures highlight that the battle against SQL injections is
        ongoing and expensive, underscoring the critical need for comprehensive
        security strategies.
      </p>
    </div>
  );
}
export default FunFacts;
