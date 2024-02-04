import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Begin to Meditate',
    }
  ],
  image: `https://cdn.dribbble.com/users/32512/screenshots/3067513/media/a28f93b71bec20b3cf57a3e026a6032b.gif`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'framesmeditate.xyz',
  description: 'Breathe',
  openGraph: {
    title: 'framesmeditate.xyz',
    description: 'LFG',
    images: [`https://cdn.dribbble.com/users/32512/screenshots/3067513/media/a28f93b71bec20b3cf57a3e026a6032b.gif`],
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
