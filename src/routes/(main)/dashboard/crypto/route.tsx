import { createFileRoute } from "@tanstack/react-router";

import { Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { AccountActivityTable } from "./-components/account-activity";
import { displayCurrencies } from "./-components/data";
import { ExchangeAllocation } from "./-components/exchange-allocation";
import { ExchangeCard } from "./-components/exchange-card";
import { MonthlyPnl } from "./-components/monthly-pnl";
import { PortfolioHoldings } from "./-components/portfolio-holdings";
import { PriceChart } from "./-components/price-chart";

export const Route = createFileRoute("/(main)/dashboard/crypto")({
  component: Page,
});

function Page() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl tracking-tight">Crypto overview</h1>
          <p className="text-muted-foreground text-sm">Your portfolio, market prices, and recent activity.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select
            defaultValue="USD"
            items={displayCurrencies.map((currency) => ({ value: currency, label: currency }))}
          >
            <SelectTrigger size="sm" aria-label="Display currency">
              <SelectValue />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false} align="end">
              <SelectGroup>
                {displayCurrencies.map((currency) => (
                  <SelectItem key={currency} value={currency} disabled={currency !== "USD"}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button size="sm" type="button">
            <Wallet data-icon="inline-start" />
            Connect wallet
          </Button>
        </div>
      </div>
      <PortfolioHoldings />
      <PriceChart />
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ExchangeAllocation />
        <ExchangeCard />
        <MonthlyPnl />
      </div>
      <AccountActivityTable />
    </div>
  );
}
