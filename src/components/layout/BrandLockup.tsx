import Link from "next/link";

interface BrandLockupProps {
  isCompact?: boolean;
}

export function BrandLockup({ isCompact = false }: BrandLockupProps) {
  return (
    <Link href="/" className="brand-lockup" aria-label="AquaTrack home">
      <span className="brand-lockup__mark" aria-hidden="true">
        A
      </span>
      {isCompact ? null : <span className="brand-lockup__text">AquaTrack</span>}
    </Link>
  );
}
