import { Users, Sprout, BookOpen, NotebookText, Droplets } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Plant mock data
const plants = [
  {
    id: "1",
    name: "Monstera Deliciosa",
    species: "Monstera deliciosa",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/monstera_plant.jpg",
    status: "Healthy",
    location: "Living Room",
    lastWatered: "2 days ago",
    growthStage: "Mature"
  },
  {
    id: "2",
    name: "Peace Lily",
    species: "Spathiphyllum wallisii",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/peace_lily.jpg",
    status: "Needs water",
    location: "Bedroom",
    lastWatered: "7 days ago",
    growthStage: "Flowering"
  },
  {
    id: "3",
    name: "Snake Plant",
    species: "Sansevieria trifasciata",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/snake_plant.jpg",
    status: "Healthy",
    location: "Study",
    lastWatered: "14 days ago",
    growthStage: "Mature"
  },
  {
    id: "4",
    name: "Fiddle Leaf Fig",
    species: "Ficus lyrata",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/fiddle_leaf.jpg",
    status: "Pest Issue",
    location: "Dining Room",
    lastWatered: "3 days ago",
    growthStage: "Young"
  },
  {
    id: "5",
    name: "Boston Fern",
    species: "Nephrolepis exaltata",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/boston_fern.jpg",
    status: "Healthy",
    location: "Bathroom",
    lastWatered: "1 day ago",
    growthStage: "Mature"
  },
];

export default function Main() {
  return (
    <div className='p-6 mx-auto'>
      <h1 className='text-2xl font-bold mb-6 text-white'>Plant Management Dashboard</h1>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {/* Total Users Card */}
        <div className='bg-[#111313] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
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
        <div className='bg-[#111313] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
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
        <div className='bg-[#111313] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
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
        <div className='bg-[#111313] rounded-lg p-6 border-l-4 border-[#b8ce95]'>
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

      {/* Plants Table */}
      <div className='bg-[#111313] rounded-lg p-6 border-t-2 border-[#b8ce95]/20 mt-4'>
        <h2 className='text-xl font-bold mb-4 text-white'>Plant Inventory</h2>
        
        <div className='rounded-md overflow-hidden'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-[#282c2c] bg-[#242626]'>
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
                <TableRow key={plant.id} className='hover:bg-[#282c2c] border-t border-[#3a3a3a]'>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-[#282c2c] overflow-hidden flex items-center justify-center'>
                        <Sprout className='text-[#b8ce95] text-xl' />
                      </div>
                      <div className='font-medium text-white'>{plant.name}</div>
                    </div>
                  </TableCell>
                  <TableCell className='text-[#88908d]'><em>{plant.species}</em></TableCell>
                  <TableCell className='text-[#88908d]'>{plant.location}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      plant.status === 'Healthy' ? 'bg-[#b8ce95]/20 text-[#b8ce95]' : 
                      plant.status === 'Needs water' ? 'bg-cyan-500/20 text-ingobg-cyan-500' :
                      'bg-red-400/20 text-redbg-red-400'
                    }`}>
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
    </div>
  );
}