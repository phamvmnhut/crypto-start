import { NewsAppTab } from "@/types/constant";
import { NewsAppSidebar } from "../components/sidebar";

export default async function NewsAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hidden md:block">
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <NewsAppSidebar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
