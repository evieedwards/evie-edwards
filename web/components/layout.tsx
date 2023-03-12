import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NAV_OPTIONS = [
  { value: "/", label: "Images" },
  { value: "/titles", label: "Titles" },
  { value: "/about", label: "About" },
];

export default function Layout({ children }: Props) {
  const router = useRouter();
  const path = router.pathname;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <div>
      <header className="relative">
        <select
          name="nav"
          id="nav"
          className="w-full text-lg appearance-none cursor-pointer border rounded-none px-2"
          onChange={handleChange}
          value={path}
        >
          {NAV_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-1 top-0 bottom-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </header>

      <main className="mt-8">{children}</main>
    </div>
  );
}
