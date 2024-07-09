'use client'

import { UI } from '@/config/ui'
// import { Metadata } from 'next'
import { basicPageMenus } from '@/config/ui/menus'
import MenuItem from '@/components/base/menuItem'
import SidebarLayout from '@/components/layout/sidebar_layout'

// export const metadata: Metadata = {
//   title: 'Learn Next.js | Basic',
// }


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sidebar = basicPageMenus.map((item) => {
    return (
      <MenuItem data={item} key={item.name} />
    )
  })

  return (
    <SidebarLayout sidebar={sidebar}>
      {children}
    </SidebarLayout>
  )
}