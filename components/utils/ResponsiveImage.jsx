import { useTheme } from 'next-themes'
import Image from 'next/image'

const ResponsiveImage = props => {
  const { resolvedTheme, setTheme } = useTheme()
  const src = props.src + (resolvedTheme === 'dark' ? '-dark.png' : '.png')

  return (
    <span className="block my-12">
      <Image
        src={src}
        alt={props.alt}
        title={props.title}
        width={600}
        height={350}
        layout="responsive"
        objectFit="contain"
        objectPosition="center"
        className="rounded-md"
      />
    </span>
  )
}

export default ResponsiveImage
