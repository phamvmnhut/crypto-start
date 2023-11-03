"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bitcoin, Box, Coins, Container, PiggyBank } from "lucide-react";
import { NewsAppTab } from "@/types/constant";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NewsAppSidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Khám phá
          </h2>
          <div className="space-y-1">
            <Link href={NewsAppTab.BITCOIN} className="block">
              <Button
                variant={
                  pathname.includes(NewsAppTab.BITCOIN) ? "secondary" : "ghost"
                }
                className="w-full justify-start gap-2"
              >
                <Bitcoin className="w-4 h-4" />
                Bitcoin
              </Button>
            </Link>
            <Link href={NewsAppTab.CRYPTO} className="block">
              <Button
                variant={
                  pathname.includes(NewsAppTab.CRYPTO) ? "secondary" : "ghost"
                }
                className="w-full justify-start gap-2"
              >
                <Coins className="w-4 h-4" />
                Crypto
              </Button>
            </Link>
            <Link href={NewsAppTab.BLOCKCHAIN} className="block">
              <Button
                variant={
                  pathname.includes(NewsAppTab.BLOCKCHAIN)
                    ? "secondary"
                    : "ghost"
                }
                className="w-full justify-start gap-2"
              >
                <Box className="w-4 h-4" />
                Blockchain
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Mới nhất
          </h2>
          <div className="space-y-1">
            <Link href={NewsAppTab.AIRDROP} className="block">
              <Button
                variant={
                  pathname.includes(NewsAppTab.AIRDROP) ? "secondary" : "ghost"
                }
                className="w-full justify-start gap-2"
              >
                <PiggyBank className="w-4 h-4" />
                Airdrop
              </Button>
            </Link>
            <Link href={NewsAppTab.ALTCOIN} className="block">
              <Button
                variant={
                  pathname.includes(NewsAppTab.ALTCOIN) ? "secondary" : "ghost"
                }
                className="w-full justify-start gap-2"
              >
                <Container className="w-4 h-4" />
                Altcoin
              </Button>
            </Link>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Khám phá thêm
          </h2>
          <ScrollArea className="h-[300px] px-1">
            {/* <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div> */}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
