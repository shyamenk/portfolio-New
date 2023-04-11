import Image from 'next/image'

const Avatar = ({ alt, src }) => {
  return (
    <Image
      src={src}
      className="w-10 h-10 mr-4 rounded-full sm:h-8 sm:w-8"
      alt={alt}
      width={40}
      height={40}
    />
  )
}

export default Avatar
