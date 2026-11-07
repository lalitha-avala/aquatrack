import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";

export default function ApplicationNotFound() {
  return (
    <PageContainer>
      <article className="surface-card module-placeholder">
        <p className="module-placeholder__eyebrow">AquaTrack</p>
        <h1 className="module-placeholder__title">Page not found</h1>
        <p className="module-placeholder__summary">
          This address is not part of the farmer workspace.
        </p>
        <Link href="/" className="aq-button aq-button--primary module-placeholder__action">
          Go to Dashboard
        </Link>
      </article>
    </PageContainer>
  );
}
