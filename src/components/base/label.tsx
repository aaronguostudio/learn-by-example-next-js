import { ESize } from "@/types/common"

const getSize = (size: ESize) => {
  switch (size) {
    case ESize.xs:
      return "text-xs"
    case ESize.sm:
      return "text-sm"
    case ESize.md:
      return "text-md"
    case ESize.lg:
      return "text-lg font-semibold"
    case ESize.xl:
      return "text-xl font-bold"
  }
}

export default function Label({
  children,
  size = ESize.md,
}: Readonly<{
  children: React.ReactNode
  size?: ESize
}>) {

  const className = getSize(size)

  return (
    <div className={className}>
      {children}
    </div>
  )
}