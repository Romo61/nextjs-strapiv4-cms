import Image from "next/image";
import Link from "next/link";

export default function Logo({
  src,
  children,
}: {
  src: string | null;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && (
        <Image
          src={src}
          alt="logo"
          width={45}
          height={45}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      )}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
