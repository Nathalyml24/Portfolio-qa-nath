
export default function PortfolioQA() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 font-sans">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-red-600">Nathaly Monsalve</h1>
        <p className="text-lg mt-2">QA Funcional | Validación de APIs | Automatización Básica | SQL | ISTQB en proceso</p>
      </section>

      <section className="py-10 border-t">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Sobre mí</h2>
        <p>
          Soy ingeniera de sistemas con más de 4 años de experiencia en control de calidad de software, especializada en pruebas funcionales, validación de integraciones y automatización básica con Postman y Selenium. Me he desempeñado en el sector financiero y tengo conocimientos sólidos en SQL, Jira y normativas SBS. Estoy en proceso de obtener mi certificación ISTQB Foundation.
        </p>
      </section>

      <section className="py-10 border-t">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Experiencia Profesional</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Financiera Credinka S.A. – Analista de Control de Calidad (2022–2024)</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Diseño y ejecución de pruebas funcionales, regresión e integración para plataformas como Topaz, AYNI y Cartera Digital.</li>
            <li>Validación de APIs REST y pruebas de integraciones usando Postman y SQL.</li>
            <li>Automatización básica con Selenium para flujos simples de prueba.</li>
            <li>Gestión de defectos y seguimiento en Jira, mejora del tiempo de respuesta en un 30%.</li>
            <li>Participación en certificaciones de software bajo normativas SBS.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Código de Barras Perú E.I.R.L. – QA Funcional (2020–2022)</h3>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Levantamiento de requerimientos, ejecución de pruebas UAT y soporte a usuarios.</li>
            <li>Pruebas en sistemas como SISCOP y Control de Almacenes, incluyendo apps móviles.</li>
            <li>Configuración de hardware de asistencia y validación de integraciones.</li>
          </ul>
        </div>
      </section>

      <section className="py-10 border-t">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Portafolio Técnico</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Casos de prueba funcionales:</strong> Documentación en PDF de flujos como login, validación de formularios y error handling.</li>
          <li><strong>Pruebas de API con Postman:</strong> Colecciones con scripts y validación de status codes, headers y body.</li>
          <li><strong>Automatización básica con Selenium:</strong> Scripts para login y validación de alertas.</li>
          <li><strong>Consultas SQL:</strong> Validación de integridad de datos en tablas de usuarios y transacciones.</li>
          <li><strong>Reportes:</strong> Ejemplo de informe de ejecución de pruebas con métricas de defectos y cobertura.</li>
        </ul>
      </section>

      <section className="py-10 border-t">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Contacto</h2>
        <p className="mt-2">📧 nathalymonsalv@gmail.com</p>
        <p className="mt-1">📞 +51 947 491 493</p>
        <p className="mt-1">📍 Lima, Perú</p>
        <p className="mt-1">🔗 <a href="https://github.com/nathalyqa" className="text-blue-600 underline">GitHub (si deseas crear uno)</a></p>
      </section>
    </main>
  );
}
