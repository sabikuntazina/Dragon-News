'use client'
import { authClient } from '@/lib/auth-client';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialSideBar = () => {
  const handleGoogleSignIn=async()=>{
      const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  const handleGithubSignIn=async()=>{
         const data = await authClient.signIn.social({
        provider: "github"
    })
  }
  return (
    <div className='space-y-4'>
      <div><button  onClick={handleGoogleSignIn} className='btn w-full border-2 border-blue-500 text-blue-500'><FaGoogle />Login with Google</button></div>
      <div><button onClick={handleGithubSignIn} className='btn w-full border-2 border-black text-black'><FaGithub />Login with Github</button></div>

      <div>
        <h2 className='font-bold text-xl mb-3'>Find Us on</h2>
          <ul className='space-y-2'>
            <li className='flex rounder-lg justify-center items-center gap-2 btn w-full'><FaFacebookF />Facebook</li>
            <li className='flex rounder-lg justify-center items-center gap-2 btn w-full'><FaTwitter />Twitter</li>
            <li className='flex rounder-lg justify-center items-center gap-2 btn w-full'><FaInstagram />Instagram</li>
          </ul>
      </div>
    </div>
  );
};

export default SocialSideBar;