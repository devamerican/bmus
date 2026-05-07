import { Toaster } from "sonner";

export default function CounselingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster richColors />
      {children}
    </>
  );
}
