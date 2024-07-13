'use client'

import Link from 'next/link'
import { UI } from "@/config/ui"
import MenuItem from '@/components/base/menuItem'
import { appPageMenus } from '@/config/ui/menus'

export default function BaseLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <nav className="bg-black flex items-center px-4 space-x-8" style={{
        height: UI.header.height + 'px',
      }}>
        <Link href="/">
          <div className="text-white text-lg font-bold">Learning Next.js</div>
        </Link>
        <div className="flex items-center space-x-1">

          {
            appPageMenus.map((item) => {
              return (
                <MenuItem
                  data={item}
                  key={item.name}
                  exact={item.exact}
                  activeClass="text-white"
                  hoverClass="hover:text-gray-400"
                />
              )
            })
          }
        </div>
      </nav>
      <main
        style={{
        height: `calc(100vh - ${UI.header.height}px)`,
        minHeight: `calc(100vh - ${UI.header.height}px)`
      }}>
        {children}
      </main>
    </div>
  )
}