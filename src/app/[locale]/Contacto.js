'use client'
import { CButton } from '@/components/CButton/CButton';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contacto = () => {
  const t = useTranslations('HomePage');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Este campo es requerido'),
    email: Yup.string()
      .email('Ingresa un email válido')
      .required('Este campo es requerido'),
    subject: Yup.string().required('Este campo es requerido'),
    message: Yup.string().required('Este campo es requerido'),
  });

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Error en el envío');

      setShowSuccessModal(true);
      resetForm();
    } catch (err) {
      console.log(err);
      setShowErrorModal(true);
    } finally {
      setSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div id="contact-section" className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-5 w-full bg-white rounded-lg p-4'>
      <h3 className='text-title font-semibold text-center text-who'>
        {t('CTitulo')}
      </h3>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col justify-center items-center gap-5 lg:gap-2 lg:w-full'>
            <div className='flex flex-col lg:flex-row gap-5 lg:justify-center lg:items-center lg:gap-2 w-full'>
              <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
                <label className=''>{t('CName')}</label>
                <Field
                  type='text'
                  name='name'
                  placeholder={t('CNamePlaceholder')}
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whoV'
                />
                <ErrorMessage name='name' component='div' className='text-red-500 text-sm mt-1' />
              </div>
              <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
                <label className=''>{t('CEmail')}</label>
                <Field
                  type='email'
                  name='email'
                  placeholder={t('CEmailPlaceholder')}
                  className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whoV'
                />
                <ErrorMessage name='email' component='div' className='text-red-500 text-sm mt-1' />
              </div>
            </div>
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
              <label className=''>{t('CSubject')}</label>
              <Field
                type='text'
                name='subject'
                placeholder={t('CSubjectPlaceholder')}
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whoV'
              />
              <ErrorMessage name='subject' component='div' className='text-red-500 text-sm mt-1' />
            </div>
            <div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-2 w-full'>
              <label className=''>{t('CMessage')}</label>
              <Field
                as='textarea'
                name='message'
                placeholder={t('CMessagePlaceholder')}
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whoV h-32'
              />
              <ErrorMessage name='message' component='div' className='text-red-500 text-sm mt-1' />
            </div>
            <CButton 
              tipo='primary' 
              label={isSubmitting ? 'Enviando...' : t('CButton')} 
              className='mt-4'
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <div className='fixed inset-0 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4'>
            <div className='text-center'>
              <div className='mb-4'>
                <svg className='mx-auto h-12 w-12 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                ¡Mensaje enviado correctamente!
              </h3>
              <p className='text-gray-600 mb-4'>
                Gracias por contactarnos. Te responderemos pronto.
              </p>
              <button
                onClick={closeSuccessModal}
                className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {showErrorModal && (
        <div className='fixed inset-0 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4'>
            <div className='text-center'>
              <div className='mb-4'>
                <svg className='mx-auto h-12 w-12 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                Error al enviar el mensaje
              </h3>
              <p className='text-gray-600 mb-4'>
                Hubo un problema al enviar tu mensaje. Por favor, inténtalo más tarde.
              </p>
              <button
                onClick={closeErrorModal}
                className='bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contacto