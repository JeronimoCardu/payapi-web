'use client'
import { useStore } from '@/hooks/useStore'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { publicSans } from '@/lib/fonts'

export default function NavBarMobile() {
  const openDashboard = useStore((state) => state.openDashboard)
  const setOpenDashboard = useStore((state) => state.setOpenDashboard)
  return (
    <nav
      className={`${
        !openDashboard && 'hidden'
      } flex flex-col text-water-white p-8 bg-mirage-blue right-0 h-screen top-0 text-center absolute w-8/10 `}>
      <Image
        onClick={() => setOpenDashboard(false)}
        width={23}
        height={23}
        className='self-end'
        src={'/assets/shared/mobile/close.svg'}
        alt='close'
      />
      <hr className='bg-water-white my-6 opacity-75' />
      <div
        className={`${publicSans.className} mb-8 flex flex-col space-y-6 h4Small opacity-70`}>
        <Link href={''}>Pricing</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </div>
      <Button typeBtn='primary'>Schedule a Demo</Button>
    </nav>
  )
}
