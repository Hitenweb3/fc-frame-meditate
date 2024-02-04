import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Lets to Meditate 🧘',
    }
  ],
  image: `https://cdn.dribbble.com/users/583436/screenshots/6934300/worm_dribbble.gif`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'framesmeditate.xyz',
  description: 'Breathe',
  openGraph: {
    title: 'framesmeditate.xyz',
    description: 'LFG',
    images: [`https://cdn.dribbble.com/users/583436/screenshots/6934300/worm_dribbble.gif`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>framesmeditate.xyz</h1>
    </>
  );
}
