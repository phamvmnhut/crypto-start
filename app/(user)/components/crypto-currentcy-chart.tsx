"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const SymbolOverviewNoSSR = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.CryptoCurrencyMarket),
  {
    ssr: false,
  }
);

export function CryptoCurrencyMarket() {
  const { theme } = useTheme();

  return (
    <SymbolOverviewNoSSR
      width="100%"
      colorTheme={theme == "dark" ? "dark" : "light"}
    />
  );
}
