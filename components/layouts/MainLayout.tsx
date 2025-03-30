'use client'

import { ReactNode } from 'react'

// import Header from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='relative flex flex-1 flex-col'>
          {/* <Header /> */}

          <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 flex-1'>{children}</main>
        </div>
      </div>
    </>
  )
}
