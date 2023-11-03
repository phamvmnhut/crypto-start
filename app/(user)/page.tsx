import { NewsAppTab } from "@/types/constant";
import { redirect } from "next/navigation";

export default function NewsAppPage() {
  return redirect(NewsAppTab.BITCOIN);
}
