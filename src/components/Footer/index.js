import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 text-center w-full text-2xl bg-[#feac32] select-none cursor-pointer">
      <Link href="/sign-up" className="block">
        Sign Up For Future Release Notification
      </Link>
    </div>
  );
}
