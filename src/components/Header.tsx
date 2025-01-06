const Header: React.FC = () => {
    return (
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Mi Portafolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#projects" className="hover:underline">Proyectos</a></li>
              <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  