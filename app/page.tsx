const INSTAGRAM_AUTH_URL = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=872846345041013&redirect_uri=https://5622-103-21-76-246.ngrok-free.app/&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights`;

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1>Explore instgram message automations</h1>
      <a href={INSTAGRAM_AUTH_URL}>
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>
          Login with Instagram
        </button>
      </a>
    </div>
  );
}
