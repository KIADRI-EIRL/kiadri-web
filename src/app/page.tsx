// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Salud femenina con{" "}
            <span className="text-brand-600">confianza</span> y evidencia.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Educación digital y acompañamiento en salud ginecológica y
            obstétrica.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/servicios"
              className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition"
            >
              Ver servicios
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 border border-brand-600 text-brand-600 font-semibold rounded-lg hover:bg-brand-50 transition"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Imagen representativa */}
        <div className="flex justify-center">
          <img
            src="/hero-image.png"
            alt="Confianza en la salud femenina"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Secciones clave (ejemplo inicial) */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ¿Por qué elegir Kiadri?
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          <li className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-brand-600">
              Educación confiable
            </h3>
            <p className="mt-2 text-gray-600">
              Contenido basado en guías internacionales de salud femenina.
            </p>
          </li>
          <li className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-brand-600">
              Profesionales expertos
            </h3>
            <p className="mt-2 text-gray-600">
              Ginecólogos y especialistas acompañándote paso a paso.
            </p>
          </li>
          <li className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-brand-600">
              Comunidad segura
            </h3>
            <p className="mt-2 text-gray-600">
              Un espacio digital para mujeres que buscan confianza y respaldo.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
