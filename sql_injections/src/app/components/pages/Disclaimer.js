function Disclaimer() {
  return (
    <div className="w-full text-cyan-100">
      <h3 className="text-green-400 text-2xl lg:text-7xl">
        Disclaimer for Educational Presentation on SQL Injections
      </h3>
      <p className="text-sm lg:text-2xl  lg:text-2xl py-2 tracking-wider">
        Dear Cyber Security Summit Audience,
      </p>
      <p className="text-sm lg:text-2xl  py-2 tracking-wider">
        I am writing to provide a formal disclaimer for the upcoming
        presentation titled
        <span className="text-red-500">
          {" "}
          "Into the Shadows of Data Breaches: SQL Injection Uncovered."{" "}
        </span>
        This presentation is intended for educational purposes and aims to raise
        awareness about the potential vulnerabilities in software systems,
        specifically in the context of SQL injections.
      </p>
      <p className="text-sm lg:text-2xl  py-2 tracking-wider">
        During the presentation, we will be showcasing real-world examples and
        discussing how these attacks operate. It is important to note that these
        demonstrations are solely for educational purposes. We do not condone or
        endorse any illegal, unethical, or malicious use of the information
        presented.
      </p>
      <p className="text-sm lg:text-2xl  py-2 tracking-wider">
        By attending this presentation, you acknowledge and agree to the
        following:
      </p>
      <ul className="text-sm lg:text-2xl  py-2 tracking-wider">
        <li className="text-sm lg:text-2xl  py-2 tracking-wider">
          1. The content shared during the session is for educational purposes
          only and should not be used for any illegal, unauthorized, or
          unethical activities.
        </li>
        <li className="text-sm lg:text-2xl  py-2 tracking-wider">
          2. The presenters and organizers of the session are not responsible
          for any actions taken by individuals who may use this knowledge
          inappropriately.
        </li>
        <li className="text-sm lg:text-2xl  py-2 tracking-wider">
          3. It is the responsibility of the participants to adhere to all
          relevant laws and ethical standards when applying the information
          provided.
        </li>
      </ul>
      <p className="text-sm lg:text-2xl  py-2 tracking-wider">
        We encourage all attendees to use the knowledge gained from this
        presentation for legitimate, ethical, and security-enhancing purposes
        only. We do not accept any liability for actions taken by individuals
        who misuse this information.
      </p>
      <p className="text-sm lg:text-2xl  py-2 tracking-wider">
        Thank you for your understanding and cooperation. We look forward to an
        informative and responsible session.
      </p>
    </div>
  );
}
export default Disclaimer;
