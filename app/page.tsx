import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Begin to Meditate',
    }
  ],
  image: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhvbmYycmw5a3F1cDJ3Mzh5c2cwdmttNjVxNXd0c2MyZWE4bXZ1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5yCQWXgTVzHWOQCiyI/giphy.gif`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'framesmeditate.xyz',
  description: 'Breathe',
  openGraph: {
    title: 'framesmeditate.xyz',
    description: 'LFG',
    images: [`https://media.giphy.com/media/dDXZ3qU5nRBIe82Uit/giphy.gif`],
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
