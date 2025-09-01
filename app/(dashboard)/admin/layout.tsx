import { Separator } from "@/components/ui/separator";
import SidebarComponents from "./Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h2>DashBoard</h2>
      <Separator className="mt-5" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <SidebarComponents />
        </div>
        <div className="lg:col-span-10">{children}</div>
      </section>
    </main>
  );
}
