import { Link, useLocation } from "wouter";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Learning Plans", path: "/learning" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`transition-colors hover:text-foreground/80 ${
                  location === item.path ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
