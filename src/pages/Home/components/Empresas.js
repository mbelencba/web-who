import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const Empresas = () => {
  const t = useTranslations('HomePage');
  return (
    <div className='bg-white lg:py-5 rounded-lg'>
      <h5 className='text-title font-semibold text-center'>
        {t('ETitle1')}
        <span className='text-whoVV'> {t('ETitle2')}</span>
        {t('ETitle3')}
      </h5>
      <div className='slider' style={{'--width': '100px', '--height': '50px', '--quantity': 8 }}>
        <div className='list'>
          <div className='item' style={{'--position': 1}}><Image width={800} height={800} src='/empresas/river.jpg' alt='Empresas'/></div>
          <div className='item' style={{'--position': 2}}><Image width={800} height={800} src='/empresas/cloneUp.jpg' alt='Empresas'/></div>
          <div className='item' style={{'--position': 3}}><Image width={800} height={800} src='/empresas/hPampa.jpg' alt='Empresas'/></div>
          <div className='item' style={{'--position': 4}}><Image width={800} height={800} src='/empresas/diveria.jpg' alt='Empresas'/></div>
          <div className='item' style={{'--position': 5}}><Image width={800} height={800} src='/empresas/tebsa.jpg' alt='Empresas' /></div>
          <div className='item' style={{'--position': 6}}><Image width={800} height={800} src='/empresas/theColony.jpg' alt='Empresas' /></div>
          <div className='item' style={{'--position': 7}}><Image width={800} height={800} src='/empresas/themill.jpg' alt='Empresas' /></div>
          <div className='item' style={{'--position': 8}}><Image width={800} height={800} src='/empresas/trizap.jpg' alt='Empresas' /></div>
        </div>
      </div>
    </div>
  )
}

export default Empresas
