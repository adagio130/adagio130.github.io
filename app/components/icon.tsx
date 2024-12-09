import React from 'react'
import Image from 'next/image'

interface IconProps {
  src: string
  alt: string
  href?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, alt, href, className = 'w-5 h-5 mr-4' }) => {
  const iconElement = (
    <Image
      src={src}
      alt={alt}
      width={20}
      height={20}
      className={className}
    />
  )

  return href ? (
    <a href={href} className={className}>
      {iconElement}
    </a>
  ) : (
    iconElement
  )
}

export default Icon