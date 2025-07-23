'use client'
import { CButton } from '@/components/CButton/CButton'
import { scrollToContact } from '@/utils/scroll'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import React from 'react'

const Servicios = () => {
  const t = useTranslations('HomePage')
  return (
    <div id="services-section" className='flex flex-col justify-center items-center gap-5 lg:mx-auto lg:w-full p-4'>
      <h3 className='text-title font-semibold'>{t('NSTitle')}<span className='text-who'>{t('NSTitle2')}</span></h3>
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-5 w-full p-4 bg-white rounded-lg shadow-md'>
        <div className='flex flex-col lg:justify-center lg:items-start gap-5 lg:gap-2 w-full'>
          <p className='w-full text-7xl lg:text-2xl text-who2'>01.</p>
          <h4 className='text-2xl font-semibold text-who'>{t('NSTitle01')}</h4>
        </div>
        <div className='flex flex-col gap-5 justify-center items-start lg:justify-center lg:items-start lg:gap-2 w-full'>
          <p className='w-full text-whoG'>{t('NSText1')}</p>
          <CButton tipo='text' onClick={scrollToContact}>
            <div className='flex flex-row justify-center items-center gap-2'>
              {t('NSButton')}
              <FontAwesomeIcon className='w-5 ' icon={faArrowRightLong} />
            </div>
          </CButton>
        </div>
      </div>
      <div className='lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-5 w-full p-4 bg-white rounded-lg shadow-md'>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
          <p className='w-full text-6xl lg:text-2xl text-who2'>02.</p>
          <h4 className='text-2xl font-semibold text-who'>{t('NSTitle02')}</h4>
        </div>
        <div className='flex flex-col justify-center items-start gap-5 lg:justify-center lg:items-start lg:gap-2 w-full'>
          <p className='w-full text-whoG'>{t('NSText2')}</p>
          <CButton tipo='text' onClick={scrollToContact}>
            <div className='flex flex-row justify-center items-center gap-2'>
              {t('NSButton')}
              <FontAwesomeIcon className='w-5 ' icon={faArrowRightLong} />
            </div>
          </CButton>
        </div>
      </div>
      <div className='lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-5 w-full p-4 bg-white rounded-lg shadow-md'>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
          <p className='w-full text-5xl lg:text-2xl text-who2'>03.</p>
          <h4 className='text-2xl font-semibold text-who'>{t('NSTitle03')}</h4>
        </div>
        <div className='flex flex-col justify-center items-start gap-5 lg:justify-center lg:items-start lg:gap-2 w-full'>
          <p className='w-full text-whoG'>{t('NSText3')}</p>
          <CButton tipo='text' onClick={scrollToContact}>
            <div className='flex flex-row justify-center items-center gap-2'>
              {t('NSButton')}
              <FontAwesomeIcon className='w-5 ' icon={faArrowRightLong} />
            </div>
          </CButton>
        </div>
      </div>
    </div>
  )
}

export default Servicios
