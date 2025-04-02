"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Check } from "lucide-react";

const PRICING_TIERS = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500K", price: 24 },
  { pageviews: "1M", price: 36 },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [sliderValue, setSliderValue] = useState([2]);
  const [isYearly, setIsYearly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const currentTier = PRICING_TIERS[sliderValue[0]];
  const finalPrice = isYearly 
    ? (currentTier.price * 0.75).toFixed(2)
    : currentTier.price.toFixed(2);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-muted rounded"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-4 py-16 animate-fade-in">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 animate-slide-up">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="animate-bounce-hover"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-12 space-y-4 animate-slide-up">
        <h1 className="text-4xl font-bold tracking-tight">
          Simple, traffic-based pricing
        </h1>
        <p className="text-muted-foreground">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

      {/* Pricing Card */}
      <Card className="w-full max-w-2xl p-8 space-y-8 animate-scale-in">
        {/* Pageviews and Price */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg uppercase tracking-wider price-change">
            {currentTier.pageviews} Pageviews
          </p>
          <div className="flex items-center gap-2 price-change">
            <span className="text-4xl font-bold">${finalPrice}</span>
            <span className="text-muted-foreground">/ month</span>
          </div>
        </div>

        {/* Slider */}
        <div className="py-4">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={4}
            step={1}
            className="w-full"
          />
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 price-change">
          <span className="text-sm">Monthly Billing</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <div className="flex items-center gap-2">
            <span className="text-sm">Yearly Billing</span>
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full animate-bounce-hover">
              25% discount
            </span>
          </div>
        </div>

        <hr className="border-border" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {[
              "Unlimited websites",
              "100% data ownership",
              "Email reports"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 feature-item">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <Button 
              size="lg"
              className="animate-bounce-hover transition-transform hover:scale-105"
            >
              Start my trial
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}