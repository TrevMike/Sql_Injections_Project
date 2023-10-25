function Header() {
  return (
    <header className="text-2xl font-bold">
      <h1 className="text-green-400">
        Into the Shadows of Data Breaches:
        <span className="text-red-500"> Sql Injections Uncovered</span>
      </h1>
      <section className="text-cyan-100">
        <p className="text-xs py-3 ">
          " Join us as we delve into the dark world of SQL injection. Explore
          real-world examples, uncover how these attacks work, and learn robust
          defense strategies in this eye-opening presentation. "
        </p>
        <div className="text-green-400">
          <h3 className="text-lg ">Presented by:</h3>
          <p className="text-sm ">- Michael Trevino</p>
          <p className="text-sm ">- Rolando Fuentes</p>
          <p className="text-sm ">- Matthew Navarro</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
