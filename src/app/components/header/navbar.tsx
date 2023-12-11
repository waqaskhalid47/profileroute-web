import Image from "next/image";

function Navbar() {
  return (
    <nav className="container flex justify-between mx-auto h-[50px]">
      <div className="flex items-center">
        <Image
          alt="profile-route-image"
          src="/images/logo.png"
          width={100}
          height={100}
        ></Image>
      </div>
      <ul className="flex justify-between">
        <li className="ml-6 flex items-center cursor-pointer">
          {" "}
          <span>Home</span>
        </li>
        <li className="ml-6 flex items-center cursor-pointer">
          {" "}
          <span>Plans</span>
        </li>
        <li className="ml-6 flex items-center cursor-pointer">
          {" "}
          <span>Join/Login</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
