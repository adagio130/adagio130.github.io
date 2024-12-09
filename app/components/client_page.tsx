'use client'

import { useEffect, useState } from 'react'
import { BlogPosts } from 'app/components/posts'
import Photo from 'app/components/photo'
import Divider from './divider'
import ToggleTheme from './toggle_btn'

export default function ClientPage() {
  const [personalInfo, setPersonalInfo] = useState(null)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const response = await fetch(`/api/personal-info?lang=${lang}`)
        if (!response.ok) {
          throw new Error('Failed to fetch personal info')
        }
        const data = await response.json()
        setPersonalInfo(data)
      } catch (error) {
        console.error('Error fetching personal info:', error)
      }
    }

    fetchPersonalInfo()
  }, [lang])

  function switchLang() {
    setLang(prevLang => prevLang === 'en' ? 'zh' : 'en')
  }

  if (!personalInfo) {
    return <div>Loading...</div>
  }

  // ... rest of the component code ...
}