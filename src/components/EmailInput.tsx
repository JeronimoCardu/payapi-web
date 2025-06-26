import Button from './Button'

export default function EmailInput() {
  return (
    <div className='space-y-4'>
      <div className='w-full shadow-[10px_10px_10px_rgba(54,93,107,.25)] rounded-[1.5rem] bg-white p-4'>
        <input
          className='w-full px-2 outline-0 text-sanJuan-blue'
          type='text'
          placeholder='Enter email address'
        />
      </div>
      <Button typeBtn={'primary'}>Schedule a Demo</Button>
    </div>
  )
}
