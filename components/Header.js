import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="head-bar">
      <div className="flex flex-row justify-between items-center h-full">
        <div className="nav-d flex-grow">
            <Link href="/">
          <div className="mt-8 ml-4 cursor-pointer">
            <div style={{maxWidth:'250px'}}>
              <Image
                src={"/assets/images/logo.png"}
                alt={"bee space"}
                width="250"
                height="50"
              />
              <p className="uppercase font-pop text-right text-xs opacity-70">
                architects
              </p>
            </div>
          </div>
            </Link>
        </div>
        <div className="nav-d flex-grow">
          <div className="nav-dot">

          </div>
        </div>
      </div>
    </div>
  );
}
