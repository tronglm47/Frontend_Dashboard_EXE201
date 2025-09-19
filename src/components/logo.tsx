import darkLogo from "@/assets/logos/Dark.png";
import logo from "@/assets/logos/Light.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-15 max-w-[18rem]">
      <Image
        src={logo}
        fill
        className="dark:hidden"
        alt="V-Living logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
