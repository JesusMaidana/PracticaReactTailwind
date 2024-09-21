import React from 'react';

export const Formulario = () => {
  return (
    <div className="bg-SoftRed text-OffWhite text-center py-4 rounded-2xl">
      <h2 className="text-2xl font-bold">SOUTH AMERICA BELLYDANCE  </h2>
      <h3 className='text-2xl'>Valor exclusivo</h3>
      <p className="mt-2 mb-4">
        
      • Reservá tu registro profesional de fotos y videos del festival. <br />
      • Si sos solista o coordinadora de un grupo y querés asegurar tu compra de fotos y videos, hacé clic en el siguiente enlace y completa el formulario.
     
      </p>
      {/* Recordá que, además de preinscribirte, deberás abonar y enviar el comprobante de pago. */}
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
