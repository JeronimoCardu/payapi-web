import Link from 'next/link'
import EmailInput from './EmailInput'
import Image from 'next/image'
import { publicSans } from '@/lib/fonts'

export default function Footer() {
  return (
    <footer className=' space-y-16'>
      <div className='space-y-6 px-[1.5rem]'>
        <h3 className='h3Big text-center text-sanJuan-blue'>Ready to Start?</h3>
        <EmailInput />
      </div>
      <div
        className={`${publicSans.className} relative overflow-hidden text-water-white  py-[2rem] flex flex-col gap-6 items-center bg-mirage-blue`}>
        <Image
          alt=''
          width={500}
          height={100}
          src={'/assets/shared/desktop/bg-pattern-circle.svg'}
          className='absolute z-0 left-0 scale-150 -translate-y-[80%]'
        />
        <Image
          width={135}
          height={38}
          alt='payapi'
          src={'/assets/shared/desktop/logo.svg'}
        />
        <Link className='bodyCopy font-bold opacity-70' href={'/pricing'}>
          Pricing
        </Link>
        <Link className='bodyCopy font-bold opacity-70' href={'/about'}>
          About
        </Link>
        <Link className='bodyCopy font-bold opacity-70' href={'/contact'}>
          Contact
        </Link>
        <div className='flex items-center gap-6'>
          <Link href={'#'}>
            <Image
              width={24}
              height={24}
              src={'/assets/shared/desktop/facebook.svg'}
              alt={'facebook'}
            />
          </Link>
          <Link href={'#'}>
            <Image
              width={24}
              height={24}
              src={'/assets/shared/desktop/twitter.svg'}
              alt={'twitter'}
            />
          </Link>
          <Link href={'#'}>
            <Image
              width={24}
              height={24}
              src={'/assets/shared/desktop/linkedin.svg'}
              alt={'linkedin'}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
