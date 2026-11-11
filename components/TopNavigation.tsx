import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function TopNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Haseeb Javed home"
          className="shrink-0 text-sm font-bold tracking-tight text-zinc-100 sm:text-base"
        >
          <span className="sm:hidden">HJ.</span>
          <span className="hidden sm:inline">Haseeb Javed</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 items-center justify-end gap-1 overflow-x-auto sm:gap-2"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 rounded-lg px-2 py-2 text-xs text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white sm:px-3 sm:text-sm"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
