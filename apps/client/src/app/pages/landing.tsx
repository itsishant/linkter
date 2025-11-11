"use client";
import { LandingContent } from "../components/landingComponent/landing.content";
import { LandingFooter } from "../components/landingComponent/landing.footer";
import { LandingHeader } from "../components/landingComponent/landing.header";

export const Landing = () => {
  return (
    <div>
      <LandingHeader />
      <LandingContent />
      <LandingFooter />
    </div>
  );
};
