"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bitcoin, CandlestickChart } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
  {
    title: "Tính năng",
    href: "/docs",
    description: "Các tính năng mới sẽ được cập nhât liên tục và kịp thời",
  },
];

export function AppNavigationMenu() {
  return (
    <NavigationMenu className="py-2 px-5">
      <NavigationMenuList className="">
        <Link href="/" passHref legacyBehavior>
          <a className="text-primary font-bold flex flex-row justify-start gap-1 items-center">
            <Icons.logo className="h-6 w-6" /> Crypto Start
          </a>
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bắt đầu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Crypto Start
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Nơi bắt đầu cho sự nghiệp crypto của bạn
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Hướng dẫn">
                Hướng dẫn chi tiết nhất
              </ListItem>
              <ListItem href="/docs" title="Tin tức">
                Cập nhật nhanh chóng
              </ListItem>
              <ListItem href="/docs" title="Đầy đủ">
                Nơi tập hợp đầy đủ cho bạn
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Chức năng</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tổng quan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tài liệu
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
