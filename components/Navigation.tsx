import Image from "next/image";
import Link from "next/link";
import GetPages from "../lib/navigation";
import { useState } from "react";
import joinClassNames from "../lib/joinClassNames";

const pages = GetPages();

export default function Navigation() {

 const [navState, setNavState] = useState(false);

  return (
    <nav className="w-screen space-x-5 h-16 bg-primary">
      {/* Mobile Navigation Bar */}
      <div className="flex flex-row w-full justify-between">
        {/* Branding */}
        <Link href={"/"}>
          <a>
            <div className="h-10 w-10 relative inline-block">
              <Image className="bg-white" src="/branding/logo.svg" alt="Logo" layout="fill" />
            </div>
            <span className="font-bold">limegorilla</span>
          </a>
        </Link>

        {/* Hamburger Menu */}
        <div className="">
          <button className="inline-block text-white" onClick={() => {setNavState(!navState)}}>
            menu
          </button>
        </div>
      </div>

      {/* Links */}
      <ul className={joinClassNames(navState === true ? 'block flex-grow w-screen' : 'hidden', 'md:inline-block md:my-auto')}>
        {pages.map((page) => (
          <li className="inline" key={page.href}>
            <Link href={page.href}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
