import { NextSeo } from 'next-seo';

import SEO  from '@/lib/seo.config';

export default async function Head() {
    return <NextSeo {...SEO} useAppDir={true} />;
}
