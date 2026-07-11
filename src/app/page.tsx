import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { QuickActions } from "@/components/site/quick-actions";
import { CommunityAlert } from "@/components/site/community-alert";
import { UpcomingMeeting } from "@/components/site/upcoming-meeting";
import { NewsEvents } from "@/components/site/news-events";
import { DocumentsSection } from "@/components/site/documents-section";
import { EngagementSection } from "@/components/site/engagement-section";
import { SiteFooter } from "@/components/site/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <QuickActions />
        <CommunityAlert />
        <UpcomingMeeting />
        <NewsEvents />
        <DocumentsSection />
        <EngagementSection />
      </main>
      <SiteFooter />
    </>
  );
}
