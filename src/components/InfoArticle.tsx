import { publicSans } from '@/lib/fonts'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  text: string
  shadow: boolean
  widthParam: number
  heightParam: number
}
export default function InfoArticle({
  image,
  title,
  text,
  shadow,
  widthParam,
  heightParam,
}: Props) {
  return (
    <article className='space-y-4 my-15 text-center p-[1.5rem]'>
      <Image
        src={image}
        alt='illustration'
        width={widthParam}
        height={heightParam}
        className={`${
          shadow &&
          'drop-shado w-[10px_10px_10px_rgba(54,93,107,.25)] ml-8 scale-130'
        } justify-self-center mb-2 `}
      />
      <h3 className='text-sanJuan-blue text-[2.2rem]'>{title}</h3>
      <p className={`${publicSans.className} text-light-sanJuan-blue bodyCopy`}>
        {text}
      </p>
    </article>
  )
}
