import { Sprout } from 'lucide-react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface Plant {
  id: string
  name: string
  species: string
  image: string
  status: string
  location: string
  lastWatered: string
  growthStage: string
}

interface PlantTableProps {
  plants: Plant[]
}

export const PlantTable = ({ plants }: PlantTableProps) => {
  return (
    <div className='bg-[#162a2b] rounded-lg p-6 border-t-2 border-[#b8ce95]/20 mt-4'>
      <h2 className='text-xl font-bold mb-4 text-white'>Plant Inventory</h2>

      <div className='rounded-md overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-[#1d3638] bg-[#142325]'>
              <TableHead className='text-[#b8ce95]'>Plant</TableHead>
              <TableHead className='text-[#b8ce95]'>Species</TableHead>
              <TableHead className='text-[#b8ce95]'>Location</TableHead>
              <TableHead className='text-[#b8ce95]'>Status</TableHead>
              <TableHead className='text-[#b8ce95]'>Last Watered</TableHead>
              <TableHead className='text-[#b8ce95]'>Growth Stage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plants.map((plant) => (
              <TableRow key={plant.id} className='hover:bg-[#1d3638] border-t border-[#203e40]'>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#1d3638] overflow-hidden flex items-center justify-center'>
                      <Sprout className='text-[#b8ce95] text-xl' />
                    </div>
                    <div className='font-medium text-white'>{plant.name}</div>
                  </div>
                </TableCell>
                <TableCell className='text-[#88908d]'>
                  <em>{plant.species}</em>
                </TableCell>
                <TableCell className='text-[#88908d]'>{plant.location}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plant.status === 'Healthy'
                        ? 'bg-[#b8ce95]/20 text-[#b8ce95]'
                        : plant.status === 'Needs water'
                          ? 'bg-cyan-500/20 text-cyan-500'
                          : 'bg-red-400/20 text-red-400'
                    }`}
                  >
                    {plant.status}
                  </span>
                </TableCell>
                <TableCell className='text-[#88908d]'>{plant.lastWatered}</TableCell>
                <TableCell className='text-[#88908d]'>{plant.growthStage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
