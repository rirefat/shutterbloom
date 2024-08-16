import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[40px] md:max-w-[60px]"
        src="/logo.png"
        alt="Shutter Bloom"
        height={100}
        width={165}
      />
    </Link>
  )
}

export default Logo