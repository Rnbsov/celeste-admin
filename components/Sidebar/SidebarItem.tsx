import { ChevronRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'

export interface MenuItem {
  icon: LucideIcon
  label: string
  route: string
}

const SidebarItem = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname()

  const isActive = pathname === item.route

  return (
    <>
      <li>
        <Link
          href={item.route}
          className={cn(
            'group relative flex justify-between items-center rounded-lg px-4 py-2 font-medium text-[#88908d] duration-300 ease-in-out cursor-pointer hover:text-[#111313]',
            isActive && 'bg-emerald-400 text-[#111313]',
            !isActive && 'hover:bg-emerald-400/80'
          )}
        >
          <div className='flex gap-2.5'>
            <item.icon size={22} />
            {item.label}
          </div>

          {isActive && <ChevronRight />}
        </Link>
      </li>
    </>
  )
}

export { SidebarItem }
