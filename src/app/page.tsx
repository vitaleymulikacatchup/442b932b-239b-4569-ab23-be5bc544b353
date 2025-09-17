"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="BlackSpaceship Coin"
          navItems={[{ name: '#hero', id: 'hero' }, { name: '#about', id: 'about' }, { name: '#how-to-buy', id: 'how-to-buy' }, { name: '#tokenomics', id: 'tokenomics' }, { name: '#footer', id: 'footer' }]}
          buttonText="Buy Now"
          className="bg-transparent"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Launch BlackSpaceship Coin"
          subtitle="Join the cosmic movement"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About BlackSpaceship Coin"
          descriptions={["Innovative crypto for the adventurous spirit.", "Join a community of forward-thinkers."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Understanding the key stats of BlackSpaceship Coin"
          kpiItems={[{ value: "100M", description: "Total Supply", longDescription: "Total amount of coins to be released.", icon: LucideIcon }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[{ title: "Company", items: [{ label: "About Us", onClick: () => {} }, { label: "Contact", onClick: () => {} }] }, { title: "Products", items: [{ label: "Features", onClick: () => {} }, { label: "Pricing", onClick: () => {} }] }, { title: "Support", items: [{ label: "Help Center", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} }] }]}
          copyrightText="© 2023 BlackSpaceship Coin. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}