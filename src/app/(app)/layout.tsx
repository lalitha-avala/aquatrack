import { AppLayout } from "@/components/layout/AppLayout";

export default function ApplicationLayout({ children }: LayoutProps<"/">) {
  return <AppLayout>{children}</AppLayout>;
}
