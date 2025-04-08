import { SECTION_TITLES } from '@/common/constant'
import { ISectionTitle } from '@/common/typres';
import React from 'react'
import './index.css'

export default function SectionTitle({ section }: { section: string }) {

  const sectionTitle: Record<string, ISectionTitle> = SECTION_TITLES;

  return (
    <div>
      <h2 className="sectionHeading">{sectionTitle[section].title}</h2>
      <h2 className="sectionSubtitle">{sectionTitle[section].subtitle} </h2>
    </div>
  )
}
