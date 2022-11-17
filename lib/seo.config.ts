import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
    title: `EPITA's macs fleet management`,
    description: "A tool to manage macs at EPITA",
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://fleet.epimac.org',
        siteName: 'Fleet by Epimac',
    }
}

export default SEO;
