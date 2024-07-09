'use client'

import { examplesPageMenus } from '@/config/ui/menus'
import MenuItem from '@/components/base/menuItem'
import SidebarLayout from '@/components/layout/sidebar_layout'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const sidebar = examplesPageMenus.map((item) => {
    return (
      <MenuItem data={item} key={item.name} exact={item.exact} />
    )
  })

  return (
    <SidebarLayout sidebar={sidebar}>
      {children}
    </SidebarLayout>
  )
}