import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Lets Meditate 🧘',
    }
  ],
  image: `https://cdn.dribbble.com/users/583436/screenshots/3564321/media/7895efbf728c25deaba884704283eba9.gif`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'framesmeditate.xyz',
  description: 'Breathe',
  openGraph: {
    title: 'framesmeditate.xyz',
    description: 'LFG',
    images: [`https://cdn.dribbble.com/users/583436/screenshots/3564321/media/7895efbf728c25deaba884704283eba9.gif`],
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
