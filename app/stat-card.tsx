import { NumberTicker } from '@/components/animations/number-ticker'
import { LucideIcon } from 'lucide-react'
import React from 'react'

interface StatCardProps {
  title: string
  value: number
  icon: LucideIcon
  trend: {
    value: string
    isPositive: boolean
    comparisonText: string
  }
}

export const StatCard = ({ title, value, icon: Icon, trend }: StatCardProps) => {
  return (
    <div className='bg-[#111312] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='text-sm text-[#88908d] font-medium'>{title}</p>
          <NumberTicker value={value} className='text-3xl font-bold text-white' />
          <p className='text-sm flex items-center mt-2'>
            <span className={`${trend.isPositive ? 'text-[#b8ce95]' : 'text-[#ff5252]'} flex items-center`}>
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
                  d={trend.isPositive ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'}
                ></path>
              </svg>
              {trend.value}
            </span>
            <span className='text-[#88908d] ml-1'>{trend.comparisonText}</span>
          </p>
        </div>
        <div className='bg-[#282c2d] p-3 rounded-md'>
          <Icon className='text-[#b8ce95] text-xl' />
        </div>
      </div>
    </div>
  )
}
