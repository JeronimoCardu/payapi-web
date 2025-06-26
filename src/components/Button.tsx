'use client'

import { publicSans } from '@/lib/fonts'

type Props = {
  typeBtn: string
  colorMode?: string
  children: string
}

export default function Button({ typeBtn, colorMode, children }: Props) {
  return (
    <button
      className={`${
        typeBtn == 'primary'
          ? 'bg-dark-pink hover:bg-charm-pink text-water-white'
          : `${
              colorMode == 'light'
                ? 'bg-mirage-blue text-water-white border-water-white hover:bg-water-white hover:text-mirage-blue'
                : 'bg-white text-sanJuan-blue border-sanJuan-blue hover:bg-sanJuan-blue hover:text-white'
            }`
      } ${
        publicSans.className
      } border-2 w-full bodyCopy  border-transparent py-3 cursor-pointer font-bold disabled:opacity-50 rounded-[1.5rem] `}>
      {children}
    </button>
  )
}
