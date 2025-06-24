'use client'
import Image from 'next/image'
import NavBarMobile from './NavBarMobile'
import { useStore } from '@/hooks/useStore'

export default function Header() {
  const setOpenDashboard = useStore((state) => state.setOpenDashboard)

  return (
    <header className='flex items-center justify-between'>
      <Image
        width={135}
        height={38}
        alt='payapi'
        src={'/assets/shared/desktop/logo.svg'}
      />

      <Image
        onClick={() => {
          setOpenDashboard(true)
        }}
        width={28}
        height={17}
        alt='payapi'
        src={'/assets/shared/mobile/menu.svg'}
      />
      <NavBarMobile />
    </header>
  )
}
