import { Users, Sprout, BookOpen, NotebookText } from 'lucide-react'

export default function Main() {
  return (
    <div className='p-6 mx-auto'>
      <h1 className='text-2xl font-bold mb-6 text-white'>Plant Management Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Total Users Card */}
        <div className='bg-[#1a1c1c] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-sm text-[#88908d] font-medium'>Total Users</p>
              <h2 className='text-3xl font-bold text-white'>1,245</h2>
              <p className='text-sm flex items-center mt-2'>
                <span className='text-[#b8ce95] flex items-center'>
                  <svg
                    className='w-3 h-3 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 10l7-7m0 0l7 7m-7-7v18'
                    ></path>
                  </svg>
                  8%
                </span>
                <span className='text-[#88908d] ml-1'>vs last month</span>
              </p>
            </div>
            <div className='bg-[#282c2c] p-3 rounded-md'>
              <Users className='text-[#b8ce95] text-xl' />
            </div>
          </div>
        </div>

        {/* Total Plants Card */}
        <div className='bg-[#1a1c1c] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-sm text-[#88908d] font-medium'>Active Plants</p>
              <h2 className='text-3xl font-bold text-white'>3,842</h2>
              <p className='text-sm flex items-center mt-2'>
                <span className='text-[#b8ce95] flex items-center'>
                  <svg
                    className='w-3 h-3 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 10l7-7m0 0l7 7m-7-7v18'
                    ></path>
                  </svg>
                  12.5%
                </span>
                <span className='text-[#88908d] ml-1'>vs last month</span>
              </p>
            </div>
            <div className='bg-[#282c2c] p-3 rounded-md'>
              <Sprout className='text-[#b8ce95] text-xl' />
            </div>
          </div>
        </div>

        {/* Diary Entries Card */}
        <div className='bg-[#1a1c1c] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-sm text-[#88908d] font-medium'>Total Diary Entries</p>
              <h2 className='text-3xl font-bold text-white'>12,654</h2>
              <p className='text-sm flex items-center mt-2'>
                <span className='text-[#b8ce95] flex items-center'>
                  <svg
                    className='w-3 h-3 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 10l7-7m0 0l7 7m-7-7v18'
                    ></path>
                  </svg>
                  4.2%
                </span>
                <span className='text-[#88908d] ml-1'>vs last month</span>
              </p>
            </div>
            <div className='bg-[#282c2c] p-3 rounded-md'>
              <BookOpen className='text-[#b8ce95] text-xl' />
            </div>
          </div>
        </div>

        {/* Watering Events Card */}
        <div className='bg-[#1a1c1c] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-sm text-[#88908d] font-medium'>Guides</p>
              <h2 className='text-3xl font-bold text-white'>576</h2>
              <p className='text-sm flex items-center mt-2'>
                <span className='text-[#ff5252] flex items-center'>
                  <svg
                    className='w-3 h-3 mr-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 14l-7 7m0 0l-7-7m7 7V3'
                    ></path>
                  </svg>
                  2.1%
                </span>
                <span className='text-[#88908d] ml-1'>vs last month</span>
              </p>
            </div>
            <div className='bg-[#282c2c] p-3 rounded-md'>
              <NotebookText className='text-[#b8ce95] text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
