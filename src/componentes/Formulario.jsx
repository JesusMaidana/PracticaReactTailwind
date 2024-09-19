import React from 'react';

export const Formulario = () => {
  return (
    <div className="bg-SoftRed text-OffWhite text-center py-4">
      <h2 className="text-2xl font-bold">Inscripción para Fotos y Videos del Festival SOUTH AMERICA BELLYDANCE</h2>
      <p className="mt-2 mb-4">
        Preinscribite para asegurar tu compra de fotos y videos profesionales del festival. Recordá que, además de preinscribirte, deberás abonar y enviar el comprobante de pago.
      </p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSeddSSmxAFEm4B1wSAi_szBh49ePxJYfljmbexnBbHcHh_mdQ/viewform" 
        
        rel="noopener noreferrer"
      >
        <button className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          Asegurá tus fotos y videos
        </button>
      </a>
    </div>
  );
};
