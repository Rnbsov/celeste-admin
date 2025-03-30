import { BadgeHelp, BellDot, Calendar1, LayoutDashboard, Leaf, Settings } from 'lucide-react'

export const menuGroups = [
  {
    name: 'MENU',
    menuItems: [
      {
        icon: LayoutDashboard,
        label: 'Dashboard',
        route: '/'
      },
      {
        icon: Calendar1,
        label: 'Calendar',
        route: '/calendar'
      },
      {
        icon: Leaf,
        label: 'Plants',
        route: '/Plants'
      },
      {
        icon: BellDot,
        label: 'Notifications',
        route: '/notifications'
      }
    ]
  },
  {
    name: 'OTHERS',
    menuItems: [
      {
        icon: Settings,
        label: 'Settings',
        route: '/settings'
      },
      {
        icon: BadgeHelp,
        label: 'Support',
        route: '/support'
      }
    ]
  }
]
