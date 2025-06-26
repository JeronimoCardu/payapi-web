import Button from '@/components/Button'
import EmailInput from '@/components/EmailInput'
import InfoArticle from '@/components/InfoArticle'
import { publicSans } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const companiesWorkWithUs = [
    'tesla',
    'microsoft',
    'hewlett-packard',
    'oracle',
    'google',
    'nvidia',
  ]
  const articles = [
    {
      image: '/assets/home/desktop/illustration-easy-to-implement.svg',
      title: 'Easy to implement',
      text: 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
      shadow: true,
      widthParam: 350,
      heightParam: 20,
    },
    {
      image: '/assets/home/desktop/illustration-simple-ui.svg',
      title: 'Simple UI & UX',
      text: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.',
      shadow: true,
      widthParam: 350,
      heightParam: 250,
    },
    {
      image: '/assets/home/desktop/icon-personal-finances.svg',
      title: 'Personal Finances',
      text: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
      shadow: false,
      widthParam: 106,
      heightParam: 106,
    },
    {
      image: '/assets/home/desktop/icon-banking-and-coverage.svg',
      title: 'Banking & Coverage',
      text: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
      shadow: false,
      widthParam: 106,
      heightParam: 106,
    },
    {
      image: '/assets/home/desktop/icon-consumer-payments.svg',
      title: 'Consumer Payments',
      text: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
      shadow: false,
      widthParam: 106,
      heightParam: 106,
    },
  ]
  return (
    <>
      <Image
        alt=''
        width={500}
        height={100}
        src={'/assets/shared/desktop/bg-pattern-circle.svg'}
        className='absolute z-0 left-0 scale-150 -translate-y-[80%]'
      />
      <main>
        <div className='h-[400px]  w-[128px] mx-auto'>
          <Image
            fill
            alt=''
            className='object-contain !h-fit scale-70 ml-4 '
            src='/assets/home/desktop/illustration-phone-mockup.svg'
          />
        </div>
        <h3 className='h3Big px-[1.5rem] text-sanJuan-blue text-center'>
          Start building with our APIs for absolutely free.
        </h3>

        <section className='px-[1.5rem] my-6 space-y-4'>
          <EmailInput />
          <p
            className={`bodyCopy text-center text-light-sanJuan-blue ${publicSans.className}`}>
            Have any questions?{' '}
            <Link href={'/contact'}>
              <strong>Contact Us</strong>
            </Link>
          </p>
        </section>

        <section className='relative overflow-hidden space-y-6 text-center mb-20 p-[6rem_1.5rem] bg-mirage-blue'>
          <Image
            alt=''
            width={500}
            height={100}
            src={'/assets/shared/desktop/bg-pattern-circle.svg'}
            className='absolute z-0 left-0 scale-150 -translate-y-[100%]'
          />
          <div className='grid grid-cols-2 mb-10 gap-y-4 grid-rows-3'>
            {companiesWorkWithUs.map((company) => (
              <Image
                key={company}
                className='justify-self-center self-center'
                alt='tesla'
                width={107}
                height={15}
                src={`/assets/shared/desktop/${company}.svg`}
              />
            ))}
          </div>
          <h3 className='h3Big text-water-white'>Who we work with</h3>
          <p
            className={`${publicSans.className} text-water-white opacity-70 bodyCopy`}>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{' '}
          </p>
          <div className='w-1/3 mx-auto'>
            <Link href={'/about'}>
              <Button typeBtn={'secondary'} colorMode='light'>
                About Us
              </Button>
            </Link>
          </div>
        </section>

        <section>
          {articles.map((article) => (
            <InfoArticle
              key={article.title}
              image={article.image}
              title={article.title}
              text={article.text}
              shadow={article.shadow}
              widthParam={article.widthParam}
              heightParam={article.heightParam}
            />
          ))}
        </section>
      </main>
    </>
  )
}
