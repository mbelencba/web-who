'use client'
import { CButton } from '@/components/CButton/CButton';
import { scrollToServices } from '@/utils/scroll';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const Header = () => {
  const t = useTranslations('HomePage');

  return (
    <div className='flex flex-col justify-center gap-10 lg:flex-row lg:justify-between items-center lg:gap-5 lg:mx-auto p-4'>
      <div className='flex flex-col justify-center items-start gap-5 w-full'>
        <h2 className='text-title font-semibold text-center lg:text-start scaleEffect'>{t('title')}</h2>
        <p className='text-subtitle text-whoG'>{t('description')}</p>
        <CButton className='m-auto' tipo='primary' label={t('button')} onClick={scrollToServices}/>
      </div>
      <div className='w-full'>
        <Image width={800} height={800} src='/imgHeader.png' alt='imgHeader' className='w-full h-auto scaleEffect' />
      </div>
    </div>
  )
}

export default Header
