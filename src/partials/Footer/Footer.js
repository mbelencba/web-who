'use client'
import { CButton } from '@/components/CButton/CButton';
import { scrollToContact, scrollToServices, scrollToTop } from '@/utils/scroll';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='w-full bg-[#1E232A] py-10 mt-10'>
      <div className='lg:max-w-7xl m-auto flex flex-row justify-between items-start flex-wrap lg:flex-nowrap gap-5 p-4 text-white'>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-5/12 lg:w-full'>
          <p className='text-lg text-who1 font-semibold'>{t('FTitle1')}</p>
          <div>
            <p >{t('FText1')}</p>
          </div>
        </div>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 w-5/12 lg:w-full'>
          <p className='text-lg text-who1 font-semibold'>{t('FTitle2')}</p>
          <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2'>
            <CButton className='hover:scale-110 duration-150 cursor-pointer' tipo='textLink' onClick={scrollToTop}>{t('Fitem1')}</CButton>
            <CButton className='hover:scale-110 duration-150 cursor-pointer' tipo='textLink' onClick={scrollToContact}>{t('Fitem3')}</CButton>
            <CButton className='hover:scale-110 duration-150 cursor-pointer' tipo='textLink' onClick={scrollToServices}>{t('Fitem4')}</CButton>
          </div>
        </div>
        <Image width={1000} height={1000} src='/logo-who.png' alt='Logo' className='w-40 h-auto hidden lg:block rounded-lg mx-10' />
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2 w-2/5 lg:w-full'>
          <p className='text-lg text-who1 font-semibold'>{t('FTitle3')}</p>
          <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2'>
            <p>{t('FContacto1')}</p>
            <p>{t('FContacto2')}</p>
            <p>info@globaltalent.com</p>
          </div>
        </div>
         <div className='lg:flex lg:flex-col lg:justify-center lg:items-end lg:gap-2 w-2/5 lg:w-full'>
          <p className='text-lg text-who1 font-semibold'>{t('FTitle4')}</p>
          <div className='flex flex-row lg:justify-center lg:items-start gap-5'>
            <a href='https://www.instagram.com/whoconsultoraintegral/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='text-3xl hover:scale-125 duration-150 cursor-pointer'/>
            </a>
            <a href='https://www.linkedin.com/company/who-consultora-integral/posts/?feedView=all' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedinIn} className='text-3xl hover:scale-125 duration-150 cursor-pointer'/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100063522880814' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebookF} className='text-3xl hover:scale-125 duration-150 cursor-pointer'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
