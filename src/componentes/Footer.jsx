import React from "react";

export const Footer = () => {
  // src/socialLinks.js
  const socialLinks = {
    facebook: "https://www.facebook.com/yourpage",
    twitter: "https://www.twitter.com/yourprofile",
    instagram: "https://www.instagram.com/shukran.audiovisual/",
    // Añade más enlaces aquí si es necesario
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Redes Sociales */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Explora</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                UI Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                UX Design
              </a>
            </li>
            {/* Añade más enlaces aquí */}
          </ul>
        </div>

        {/* Recursos */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Recursos</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Support
              </a>
            </li>
            {/* Añade más recursos aquí */}
          </ul>
        </div>
      </div>
    </footer>
  );
};
