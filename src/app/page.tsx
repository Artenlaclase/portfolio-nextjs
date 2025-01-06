import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Raúl Rosales R.</h1>
          <p className="text-lg text-gray-600 mt-4">
            Desarrollo Landing Pages modernas y funcionales.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Startup TechGrow"
            description="Landing Page para una startup tecnológica."
            imgUrl="/techgrow.png"
          />
          <ProjectCard
            title="Restaurante Gourmet"
            description="Diseño para restaurante con reservas online."
            imgUrl="/restaurant.png"
          />
          <ProjectCard
            title="Evento JSConf 2024"
            description="Landing para registro de asistentes."
            imgUrl="/event.png"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}