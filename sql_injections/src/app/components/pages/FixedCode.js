import Image from "next/image";
import goodCode from "../../../../public/GoodCodeExample.PNG";
function FixedCode() {
  return (
    <div className="text-cyan-100 text-sm">
      <h3 className="text-green-400 text-2xl py-2">
        Building Secure Foundations: The Power of Validation, Sanitization, and
        Parameterization
      </h3>
      <p className="py-2 tracking-widest">
        In this screenshot, we present a well-crafted code example. We've
        incorporated input validation, sanitization, and parameterization. While
        this may require a bit more code, this investment in writing robust
        applications can ultimately lead to substantial cost savings for your
        company or organization.
      </p>
      <Image
        src={goodCode}
        alt="good code example"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p className="py-2 tracking-widest">
        it's essential to recognize that this example serves as a fundamental
        template for writing secure code. While no system is entirely impervious
        to attack, our aim is to create robust defenses that act as strong
        deterrents against malicious actions. I challenge each of you to go
        beyond this example and strive for even more resilient and secure coding
        practices.
      </p>
    </div>
  );
}

export default FixedCode;
