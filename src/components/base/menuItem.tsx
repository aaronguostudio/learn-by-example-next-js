import { IMenuItem } from "@/types/base";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { clsx } from 'clsx'

export default function MenuItem({
  data,
  exact = false
}: Readonly<{
  data: IMenuItem
  exact?: boolean
}>) {
  const pathname = usePathname()

  const isCurrentPath = exact ? pathname === data.path : pathname.includes(data.path)

  const x = 'bg-slate-200'

  return (
    <Link
      key={data.name}
      href={data.path}
      className={
        clsx([
          'flex px-4 py-2',
          isCurrentPath ? 'bg-gray-200 text-black' : `text-gray-500 hover:${x}`,
        ])
      }
    >
      {data.label}
    </Link>
  );
}