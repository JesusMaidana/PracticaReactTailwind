import React from 'react';
import '@justinribeiro/lite-youtube';

const videos = [
  { id: 'DCFqroxAcV0', title: 'Hanine - Egypt مصر' },
  { id: 'dx5iKA87Wpk', title: 'Haifa Wehbe - Ma Badعafsh - Esmeralda' },
  { id: 'dtoKbrb7CT8', title: 'BOYD - Violet - Athena' },
  { id: 'GIXDSIq5hLI', title: 'Fakerne - Haifa Wahbe - Janet' },
  { id: 't0K-HMJoKyc', title: 'Ahmed Saad - El Youm El Helw Dah' },
  
];

const Video = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Producciones Audiovisuales</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {/* Mapeamos el array de videos para renderizarlos */}
        {videos.map((video) => (
          <div
            key={video.id}
            className="w-full transform transition-all duration-300 hover:opacity-50" // Efecto hover
          >
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <lite-youtube
              videoid={video.id}
              short
              style={{ width: '100%', height: 'auto' }}
            ></lite-youtube>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
