import Link from "next/link";

const Navigation = () => {
  return (
    <header className="grid grid-cols-2 font-work">
      <div className="">MAS Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/clientcomp">ClientComp</Link>
          </li>

          <li>
            <Link href="/servercomp">ServerComp</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
