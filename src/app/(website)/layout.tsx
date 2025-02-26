import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>

        <Navbar />
        {children}
        <Footer />
    </div>
  );
}
