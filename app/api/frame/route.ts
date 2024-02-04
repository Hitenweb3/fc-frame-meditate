import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  
  return new NextResponse(
    getFrameHtmlResponse({
      image: `https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3ZueXExcG90MXM0dHFyMGtpZ2s3bm05bzZvd28zMG5oMmQwaG92OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dDXZ3qU5nRBIe82Uit/giphy.gif`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
