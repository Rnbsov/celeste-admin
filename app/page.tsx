import { Users, Sprout, BookOpen, NotebookText } from 'lucide-react'
import { StatCard } from './stat-card'
import { PlantTable } from './plant-table'

// Plant mock data
const plants = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    species: 'Monstera deliciosa',
    image: 'https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/monstera_plant.jpg',
    status: 'Healthy',
    location: 'Living Room',
    lastWatered: '2 days ago',
    growthStage: 'Mature'
  },
  {
    id: '2',
    name: 'Peace Lily',
    species: 'Spathiphyllum wallisii',
    image: 'https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/peace_lily.jpg',
    status: 'Needs water',
    location: 'Bedroom',
    lastWatered: '7 days ago',
    growthStage: 'Flowering'
  },
  {
    id: '3',
    name: 'Snake Plant',
    species: 'Sansevieria trifasciata',
    image: 'https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/snake_plant.jpg',
    status: 'Healthy',
    location: 'Study',
    lastWatered: '14 days ago',
    growthStage: 'Mature'
  },
  {
    id: '4',
    name: 'Fiddle Leaf Fig',
    species: 'Ficus lyrata',
    image: 'https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/fiddle_leaf.jpg',
    status: 'Pest Issue',
    location: 'Dining Room',
    lastWatered: '3 days ago',
    growthStage: 'Young'
  },
  {
    id: '5',
    name: 'Boston Fern',
    species: 'Nephrolepis exaltata',
    image: 'https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/boston_fern.jpg',
    status: 'Healthy',
    location: 'Bathroom',
    lastWatered: '1 day ago',
    growthStage: 'Mature'
  }
]

export default function Main() {
  return (
    <div className='p-6 mx-auto'>
      <h1 className='text-2xl font-bold mb-6 text-white'>Plant Management Dashboard</h1>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <StatCard
          title='Total Users'
          value='1,245'
          icon={Users}
          trend={{
            value: '8%',
            isPositive: true,
            comparisonText: 'vs last month'
          }}
        />

        <StatCard
          title='Active Plants'
          value='3,842'
          icon={Sprout}
          trend={{
            value: '12.5%',
            isPositive: true,
            comparisonText: 'vs last month'
          }}
        />

        <StatCard
          title='Total Diary Entries'
          value='12,654'
          icon={BookOpen}
          trend={{
            value: '4.2%',
            isPositive: true,
            comparisonText: 'vs last month'
          }}
        />

        <StatCard
          title='Guides'
          value='576'
          icon={NotebookText}
          trend={{
            value: '2.1%',
            isPositive: false,
            comparisonText: 'vs last month'
          }}
        />
      </div>

      {/* Plants Table */}
      <PlantTable plants={plants} />
    </div>
  )
}
