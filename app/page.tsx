const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Header/Nav */}
      <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">Logo</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">Inicio</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">Servicios</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center gap-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Bienvenido a <span className="text-blue-600">Nuestra Web</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Creamos soluciones digitales innovadoras para impulsar tu negocio hacia el futuro.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Empezar
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Saber más
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovación</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilizamos las últimas tecnologías para crear soluciones modernas.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Calidad</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Garantizamos la mejor calidad en todos nuestros servicios.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Soporte</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ofrecemos soporte continuo para todos nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;