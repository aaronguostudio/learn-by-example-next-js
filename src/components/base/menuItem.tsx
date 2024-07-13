import { IMenuItem } from "@/types/base";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { clsx } from 'clsx'

export default function MenuItem({
  data,
  classes = '',
  activeClass = 'bg-gray-200 text-black',
  hoverClass = 'hover:bg-gray-300',
  exact = false
}: Readonly<{
  data: IMenuItem
  classes?: string
  activeClass?: string
  hoverClass?: string
  exact?: boolean
}>) {
  const pathname = usePathname()

  const isCurrentPath = exact ? pathname === `${data.path}` : pathname.includes(data.path)
  // const hoverClass = 'bg-gray-300'


  return (
    <Link
      key={data.name}
      href={data.path}
      className={
        clsx([
          classes,
          'flex px-4 py-2',
          isCurrentPath ? activeClass : `text-gray-500 ${hoverClass}`,
        ])
      }
    >
      {data.label}
    </Link>
  );
}