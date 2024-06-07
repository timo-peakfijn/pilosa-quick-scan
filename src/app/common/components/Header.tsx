import { Logo } from "@/app/common/components/Logo";

export const Header = () => (
  <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm">
    <nav className="max-w-[85rem] w-full mx-auto py-4" aria-label="Global">
      <div className="relative md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="text-xl text-green-600 dark:text-green-500 flex"
            href="/"
            aria-label="pilosa"
          >
            <Logo />
            <span className="font-semibold pr-2">Pilosa</span>
            <span className="text-green-500 dark:text-green-600">
              quick scan
            </span>
          </a>
        </div>
      </div>
    </nav>
  </header>
);
