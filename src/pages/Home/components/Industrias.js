import { faCartShopping, faChartLine, faHeartPulse, faIndustry, faMicrochip, faTree, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from 'next-intl'
import React from 'react'

const Industrias = () => {
  const t = useTranslations('HomePage')
  return (
    <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:mx-auto lg:w-full p-4'>
      <h4 className='text-title font-semibold text-center w-4/5'>
        {t('ITitulo1')}
        <span className='text-who'>{t('ITitulo2')}</span>
        {t('ITitulo3')}
      </h4>
      <div className='flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-center lg:items-stretch lg:gap-5 lg:w-full p-4'>
        <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <FontAwesomeIcon className='w-10 p-2 rounded-full bg-[#679ae132] text-who' icon={faMicrochip} />
          <p>{t('IIndustria1')}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#67e16f48] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#67E16F]" icon={faChartLine} />
          </div>
          <p>{t('IIndustria2')}</p>
        </div>
         <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#9747b73e] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#9847B7]" icon={faIndustry} />
          </div>
          <p>{t('IIndustria3')}</p>
        </div>
         <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#efeca94f] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#ede853]" icon={faCartShopping} />
          </div>
          <p>{t('IIndustria4')}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#ed300142] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#ED3001]" icon={faHeartPulse} />
          </div>
          <p>{t('IIndustria5')}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#007d1b3e] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#007D1B]" icon={faTree} />
          </div>
          <p>{t('IIndustria6')}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5 w-full lg:gap-2 p-4 bg-white rounded-lg shadow-md lg:w-72 font-semibold h-20'>
          <div className="w-10 h-10 p-2 rounded-full bg-[#ef994355] flex items-center justify-center">
            <FontAwesomeIcon className="w-6 h-6 text-[#EF9943]" icon={faTruck} />
          </div>
          <p>{t('IIndustria7')}</p>
        </div>
      </div>
    </div>
  )
}

export default Industrias
