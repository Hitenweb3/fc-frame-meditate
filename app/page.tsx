import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Begin to Meditate',
    }
  ],
  image: `${NEXT_PUBLIC_URL}/image1.jpeg`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'framesmeditate.xyz',
  description: 'Breathe',
  openGraph: {
    title: 'framesmeditate.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/image1.jpeg`],
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
