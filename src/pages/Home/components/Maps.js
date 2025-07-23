import { faDatabase, faMapPin, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const Maps = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='lg:w-full bg-[#F8F8F8] rounded-lg py-4'>
      <h4 className='text-title text-center font-semibold mb-5 lg:mb-auto'>
        {t('MTitle1')}
        <span className='text-whoVV'> {t('MTitle2')}</span>
      </h4>
      <div className='lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-5 lg:mx-auto py-4 w-full'>
        <div className='flex flex-row lg:flex-col px-2 lg:px-0 justify-center items-start lg:items-center gap-5 lg:gap-20 w-full'>
          <div className='flex flex-col justify-center items-center gap-1 lg:gap-2 w-full'>
            <p className='text-who text-5xl lg:text-7xl'>+20</p>
            <p className='text-2xl font-semibold'>{t('MText1')}</p>
            <p className='font-semibold text-whoG'>{t('MText2')}</p>
            <FontAwesomeIcon icon={faUsers} className='w-15 text-who' />
          </div>
          <div className='flex flex-col justify-center items-center gap-1 lg:gap-2 w-full'>
            <p className='text-whoV text-5xl lg:text-7xl'>+15,000</p>
            <p className='text-2xl font-semibold'>{t('MText3')}</p>
            <p className='font-semibold text-whoG'>{t('MText4')}</p>
            <FontAwesomeIcon icon={faDatabase} className='w-15 text-whoV' />
          </div>
        </div>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 w-full overflow-hidden relative'>
          <Image width={1000} height={1000} src='/map.png' alt='Mapa' className='w-full min-w-[630px] h-auto' />
          <div className='flex flex-col justify-center items-center gap-2 p-1 absolute right-10 sm:right-40 md:right-45 md:top-60 top-45 lg:right-40 lg:top-40'>
            <FontAwesomeIcon icon={faMapPin} className='w-5 text-who1 translate-y-5 translate-x-0.5 rotate-12'/>
            <span className='font-semibold italic bg-amber-50 rounded-lg p-2 pt-5 shadow-lg'>{t('MText5')}</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 p-1 absolute left-40 top-60 md:left-55 md:top-70 lg:left-40 lg:top-60'>
            <FontAwesomeIcon icon={faMapPin} className='w-5 text-who1 translate-y-5 -translate-x-0.5 -rotate-12'/>
            <span className='font-semibold italic bg-amber-50 rounded-lg p-2 pt-5 shadow-lg'>{t('MText6')}</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 p-1 absolute left-60 bottom-20 md:left-75 md:bottom-30 lg:left-60 lg:bottom-20'>
            <FontAwesomeIcon icon={faMapPin} className='w-5 text-who1 translate-y-5 -translate-x-0.5 -rotate-6'/>
            <span className='font-semibold italic bg-amber-50 rounded-lg p-2 pt-5 shadow-lg'>{t('MText7')}</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Maps
