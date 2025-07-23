import {useTranslations} from 'next-intl';
import Header from './components/Header';
import QuieneSomos from './components/QuieneSomos';
import Servicios from './components/Servicios';
import Industrias from './components/Industrias';
import Empresas from './components/Empresas';
import Nosotros from './components/Nosotros';
import Maps from './components/Maps';
import Contacto from './components/Contacto';
 
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className='lg:max-w-7xl m-auto flex flex-col gap-14 lg:gap-32 p'>
      <Header />
      <QuieneSomos />
      <Servicios />
      <Industrias />
      <Empresas />
      <Maps />
      <Nosotros />
      <Contacto />
    </div>
  );
}