export default function Footer() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-2 px-6 sm:px-10 py-4 text-sm text-muted-foreground'>
      <h1 className='text-center sm:text-left'>
        &copy; 2026 Sakol Life. MIS Final Year Project
      </h1>
      <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-10'>
        <p>sereitepy13@gmail.com</p>
        <p>Phnom Penh, Cambodia</p>
      </div>
      <p className='text-center sm:text-right'>Website Coming Soon...</p>
    </div>
  )
}
