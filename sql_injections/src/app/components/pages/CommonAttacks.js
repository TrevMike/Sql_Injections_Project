import { useState } from "react";
import Image from "next/image";
import badCode from "../../../../public/BadCodeExample.PNG";
function CommonAttacks() {
  const [input, setInput] = useState("");
  return (
    <div className="text-cyan-100 text-sm lg:text-2xl ">
      <h3 className="text-green-400 text-2xl lg:text-7xl  py-2">
        SQL Manipulation: From Innocuous Command to Data Breach Gateway
      </h3>
      <p className="py-2 tracking-widest">
        At first glance, it may seem innocuous, but as we delve into the
        command, you'll witness how it can be subtly manipulated. This
        transformation turns a command that should retrieve a single user into a
        gateway for extracting data from all users.
      </p>
      <Image
        src={badCode}
        alt="bad code example"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <div className="">
        <h4 className="text-green-400 py-2">
          Example of SQL command query in NodeJS Backend Server
        </h4>
        <p className="text-xs lg:text-xl ">
          `SELECT * FROM dbo.users WHERE name = '{"${data}"}'`
        </p>
      </div>
      <div>
        <h4 className="text-green-400 py-2">Input Example</h4>
      </div>
      <input
        className="px-2 text-gray-950 text-base"
        type="text"
        placeholder="Employee Name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <h4 className="text-green-400 py-2">The Command being changed</h4>
        <p className="text-xs lg:text-xl  pb-4">
          SELECT * FROM dbo.users WHERE name = '{input} '
        </p>
      </div>
      <p className="py-2  tracking-widest border-t-2">
        These are the very techniques that attackers exploit to access deeper
        insights into your database's secrets.
      </p>
    </div>
  );
}
export default CommonAttacks;
