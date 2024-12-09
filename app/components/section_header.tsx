import React from 'react'

type SectionHeaderProps = {
    title?: string
};


const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
  )
}

export default SectionHeader