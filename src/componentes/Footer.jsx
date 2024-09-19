import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Redes Sociales */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/shukran.audiovisual/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Recursos */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Contacto</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://wa.me/5491136667335"
                className="text-gray-400 hover:text-white"
              >
                Habla con nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
