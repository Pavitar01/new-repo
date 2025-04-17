
'use client'
import HeroSection from '@/modules/home/components/hero-section'
import { useTranslation } from 'react-i18next'

const Page = () => {
  const { t } = useTranslation()
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Page


