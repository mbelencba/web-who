import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const Nosotros = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
      <h4 className='text-title text-center font-semibold'>
        {t('NTitle1')}
        <span className='text-whoVV'> {t('NTitle2')}</span>
      </h4>
      <p className="text-subtitle text-whoG text-center">{t('NSubtitle')}</p>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 lg:mx-auto lg:w-full'>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/nadia.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className='flex flex-col justify-start items-start gap-2'>
            <p className='font-semibold px-4 text-xl'>Nadia Jurevicius Rodríguez</p>
            <p className='text-who font-semibold px-4'>{t('F')}</p>
            <p className='px-4 pb-2 font-medium text-whoG'>{t('NNadia')}</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-20 px-4 pb-4 w-full'>
            <FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/blanquita.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className='flex flex-col justify-start items-start gap-2'>
            <p className='font-semibold px-4 text-xl'>María Belén Córdoba</p>
            <p className='text-who font-semibold px-4'>{t('CFA')}</p>
            <p className='px-4 pb-2 font-medium text-whoG'>{t('NBelen')}</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-20 px-4 pb-4 w-full mt-auto'>
            <FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/juan.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className='flex flex-col justify-start items-start gap-2'>
            <p className='font-semibold px-4 text-xl'>Juan Manuel Román</p>
            <p className='text-who font-semibold px-4'>{t('CF')}</p>
            <p className='px-4 pb-2 font-medium text-whoG'>{t('NJuan')}</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-20 px-4 pb-4 w-full mt-auto'>
            <FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faEnvelope} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
            <FontAwesomeIcon icon={faLinkedin} className='text-4xl text-whoG hover:-translate-y-1 hover:text-who2 transition duration-300 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
