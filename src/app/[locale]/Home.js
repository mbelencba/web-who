import {useTranslations} from 'next-intl';
import Header from './Header';
import QuieneSomos from './QuieneSomos';
import Servicios from './Servicios';
import Industrias from './Industrias';
import Empresas from './Empresas';
import Nosotros from './Nosotros';
import Maps from './Maps';
import Contacto from './Contacto';
 
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