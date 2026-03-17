'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRightCircle, Star, Shield, Zap, TrendingUp,
  Globe, Award, ChevronRight, Smartphone, Monitor,
  BarChart2, Lock, Clock, Users, CheckCircle2, Download
} from 'lucide-react';

// ── Floating animated orbs ────────────────────────────────────────
const Orb = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full blur-[80px] opacity-20 pointer-events-none ${className}`} />
);

// ── Stat Card ─────────────────────────────────────────────────────
const StatCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => (
  <div className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <p className="text-3xl font-black text-foreground">{value}</p>
    <p className="text-sm text-foreground/50 text-center font-medium">{label}</p>
  </div>
);

// ── Feature Card ──────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
    <div className="flex-shrink-0 bg-gradient-to-br from-primary to-accent p-3 rounded-xl h-fit group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5 text-background" strokeWidth={2} />
    </div>
    <div>
      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// ── CTA Button ────────────────────────────────────────────────────
const CTAButton = ({
  href, children, variant = 'primary', className = ''
}: {
  href: string; children: React.ReactNode; variant?: 'primary' | 'outline'; className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95
      ${variant === 'primary'
        ? 'bg-gradient-to-r from-primary to-accent text-background py-4 px-8 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] text-base'
        : 'border-2 border-primary/50 text-primary py-4 px-8 hover:border-primary hover:bg-primary/10 text-base'
      } ${className}`}
  >
    {children}
  </a>
);

// ══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════

export default function NalmifxPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const features = [
    { icon: Shield,    title: 'Regulated & Secure',        desc: 'Fully regulated broker with top-tier security protocols protecting your funds 24/7.' },
    { icon: Zap,       title: 'Lightning Fast Execution',  desc: 'Ultra-low latency trade execution with institutional-grade infrastructure.' },
    { icon: BarChart2, title: 'Advanced Trading Tools',    desc: 'Professional charting, real-time analytics, and AI-driven market insights.' },
    { icon: Globe,     title: 'Global Market Access',      desc: 'Trade Forex, Indices, Commodities, and Crypto across all major markets.' },
    { icon: Lock,      title: 'Secure Fund Management',    desc: 'Segregated client accounts with bank-level encryption and fund protection.' },
    { icon: Clock,     title: '24/5 Market Support',       desc: 'Expert support team available around the clock to assist your trading journey.' },
  ];

  const benefits = [
    'Zero commission on major currency pairs',
    'Spreads starting from 0.0 pips',
    'Leverage up to 1:500',
    'Instant deposits & withdrawals',
    'Free demo account with virtual funds',
    'MetaTrader 4 & 5 compatible',
    'Copy trading & social trading features',
    'Dedicated account manager',
  ];

  return (
    <div suppressHydrationWarning className="min-h-screen bg-background overflow-hidden">

      {/* ── Background Orbs ─────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Orb className="w-[600px] h-[600px] bg-primary top-[-200px] left-[-200px]" />
        <Orb className="w-[500px] h-[500px] bg-accent top-[30%] right-[-200px]" />
        <Orb className="w-[400px] h-[400px] bg-primary bottom-[10%] left-[30%]" />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Asia's #1 Recommended Broker
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-pulse">
              BEST ASIAN
            </span>
            <br />
            <span className="text-foreground">TRADER</span>
          </h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xl md:text-2xl font-bold text-primary uppercase tracking-[0.3em]">
              Try For Free
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Join millions of traders worldwide on <span className="text-primary font-bold">NALMI-FX</span> —
            the most trusted trading platform in Asia. Start with a free account today.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CTAButton href="https://play.google.com/store/apps/details?id=com.nalmifx.app">
              <Download className="w-5 h-5" />
              Download App — Free
            </CTAButton>
            <CTAButton href="https://Nalmifx.com" variant="outline">
              <Monitor className="w-5 h-5" />
              Login / PropFirm Portal
            </CTAButton>
          </div>

          {/* Star Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-foreground/60 text-sm ml-1">4.8/5 on Play Store</span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 text-primary rotate-90" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            APP DOWNLOAD SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 md:p-12 relative overflow-hidden">

              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1 mb-4">
                    <Smartphone className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Available on Android</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                    Trade Anywhere,
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Anytime</span>
                  </h2>

                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    Download the NALMI-FX mobile app and access global markets from your pocket.
                    Real-time charts, instant execution, and seamless fund management — all in one app.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <CTAButton href="https://play.google.com/store/apps/details?id=com.nalmifx.app">
                      <Download className="w-5 h-5" />
                      Get it on Play Store
                    </CTAButton>
                  </div>
                </div>

                {/* Right: App Mockup Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-80 rounded-[2.5rem] border-4 border-primary/30 bg-gradient-to-b from-primary/20 to-accent/20 flex items-center justify-center relative shadow-[0_0_60px_rgba(0,212,255,0.2)]">
                    <div className="absolute top-4 w-16 h-2 bg-primary/30 rounded-full" />
                    <div className="text-center px-4">
                      <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-primary font-black text-lg">NALMI-FX</p>
                      <p className="text-foreground/50 text-xs">Trading App</p>
                    </div>
                    <div className="absolute bottom-4 w-20 h-1 bg-primary/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FEATURES SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Why Trade with
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> NALMI-FX?</span>
              </h2>
              <p className="text-foreground/50 text-lg max-w-xl mx-auto">
                Everything you need to trade smarter, faster, and more profitably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            BENEFITS / PROPFIRM SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: Benefits List */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">PropFirm Account</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Everything Included
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                    — For Free
                  </span>
                </h2>

                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: PropFirm CTA Card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-primary/5 p-8 text-center">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Monitor className="w-10 h-10 text-background" />
                </div>

                <h3 className="text-2xl font-black text-foreground mb-2">PropFirm Portal</h3>
                <p className="text-foreground/50 mb-6 text-sm leading-relaxed">
                  Access your funded account, track performance, request payouts, and manage your portfolio — all in one professional dashboard.
                </p>

                <div className="space-y-3">
                  <CTAButton href="https://Nalmifx.com" className="w-full">
                    <ArrowRightCircle className="w-5 h-5" />
                    Login to PropFirm Portal
                  </CTAButton>
                  <CTAButton href="https://play.google.com/store/apps/details?id=com.nalmifx.app" variant="outline" className="w-full">
                    <Download className="w-5 h-5" />
                    Download Mobile App
                  </CTAButton>
                </div>

                <p className="text-foreground/30 text-xs mt-4">No credit card required · Free to start</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FINAL CTA BANNER
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Start Trading Today
                  </span>
                </h2>
                <p className="text-foreground/60 text-lg mb-8 max-w-lg mx-auto">
                  Join Asia's fastest growing trading community. Get your free account in under 2 minutes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="https://play.google.com/store/apps/details?id=com.nalmifx.app">
                    <Download className="w-5 h-5" />
                    Download Free App
                  </CTAButton>
                  <CTAButton href="https://Nalmifx.com" variant="outline">
                    <Globe className="w-5 h-5" />
                    Open Web Platform
                  </CTAButton>
                </div>

                <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
                  {['Free Account', 'Instant Setup', 'No Hidden Fees', 'Regulated Broker'].map((tag) => (
                    <div key={tag} className="flex items-center gap-1.5 text-foreground/40 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="text-center pb-10 px-4">
          <p className="text-foreground/25 text-xs max-w-2xl mx-auto">
            Trading involves significant risk and is not suitable for all investors. Past performance is not indicative of future results.
            Please trade responsibly. NALMI-FX is a third-party platform — Finvision provides this information for educational purposes only.
          </p>
        </div>

      </div>
    </div>
  );
}
