import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h2>@header/default.tsx</h2>
      <Link href="/hello">to Hello</Link>
    </div>
  );
}
