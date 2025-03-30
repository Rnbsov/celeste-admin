'use client'

import Image from 'next/image'
import Link from 'next/link'

import { SidebarItem } from '@/components/Sidebar/SidebarItem'

import { menuGroups } from '@/lib/constants'

const Sidebar = () => {
  return (
    <aside
      className={`z-50 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#111313] duration-300 ease-linear lg:translate-x-0 border-r border-white/10`}
    >
      <div className='flex items-center justify-between gap-3 px-6 py-5 border-b border-white/10'>
        <Link href='/'>
          <Image width={39} height={39} src={'/Logo.svg'} alt='Logo' priority />
        </Link>
        <div>
          <h1 className='text-white text-xl font-bold'>Celeste</h1>
          <p className='text-grayPrimary text-sm'>Making Gardening Memorable</p>
        </div>
      </div>

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        <nav className='mt-5 px-4 py-4 lg:mt-9 lg:px-6'>
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className='mb-4 ml-4 text-sm text-white/30'>{group.name}</h3>

              <ul className='mb-6 flex flex-col gap-1.5'>
                {group.menuItems.map((menuItem, menuIndex) => (
                  <SidebarItem key={menuIndex} item={menuItem} />
                ))}
              </ul>

              {groupIndex < menuGroups.length - 1 && <div className='mb-6 h-px w-full bg-white/10' />}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export { Sidebar }
