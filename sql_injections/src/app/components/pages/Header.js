function Header() {
  return (
    <header className="text-2xl lg:text-7xl font-bold lg:text-center lg:flex lg:justify-center lg:flex-col lg:items-center ">
      <h1 className="text-green-400">
        Into the Shadows of Data Breaches:
        <span className="text-red-500"> Sql Injections Uncovered</span>
      </h1>
      <section className="text-cyan-100">
        <p className="text-xs lg:text-2xl py-3 ">
          " Join us as we delve into the dark world of SQL injection. Explore
          real-world examples, uncover how these attacks work, and learn robust
          defense strategies in this eye-opening presentation. "
        </p>
        <div className="text-green-400 ">
          <h3 className="text-lg lg:text-4xl">Presented by:</h3>
          <p className="text-sm lg:text-2xl">Michael Trevino</p>
          <p className="text-sm lg:text-2xl">Rolando Fuentes</p>
          <p className="text-sm lg:text-2xl">Matthew Navarro</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
