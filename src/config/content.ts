export const siteConfig = {
  name: 'Andrés Linarez',
  title: 'Andrés Linarez - Ingeniero de Sistemas',
  description:
    'Portafolio de Andrés Linarez, Ingeniero de Sistemas con experiencia en desarrollo backend, infraestructura y bases de datos',
  social: {
    github: 'https://github.com/andresdlm',
    linkedin: 'https://linkedin.com/in/andreslinarez',
    email: 'mailto:andreslinarez9@gmail.com',
  },
};

export const homeContent = {
  title: 'Hola, soy Andrés Linarez',
  description:
    'Ingeniero de Sistemas con 3 años de experiencia en desarrollo backend, gestión de infraestructura y administración de bases de datos. Apasionado por la ciencia de datos, la administración de servidores, el desarrollo backend y la cultura DevOps.',
  buttons: {
    about: {
      text: 'Sobre Mí',
      href: '/about/',
    },
    posts: {
      text: 'Ver Proyectos',
      href: '/projects/',
    },
  },
  images: {
    light:
      'https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg',
    dark: '/assets/images/tech-background-dark.svg',
  },
};

export const aboutContent = {
  meta: {
    title: 'Sobre Mí - Andrés Linarez',
    description:
      'Conoce más sobre mi experiencia, habilidades y formación profesional',
  },
  title: 'Sobre Mí',
  description:
    'Ingeniero de Sistemas con 3 años de experiencia en desarrollo backend, gestión de infraestructura y administración de bases de datos. Mi experiencia me ha permitido desarrollar soluciones efectivas, software de calidad e impulsar la innovación constante, mejorando las experiencias de clientes y compañeros de trabajo. Me apasiona la ciencia de datos, la administración de servidores, el desarrollo backend y la cultura DevOps. Estoy comprometido con la mejora continua, expandiendo constantemente mis conocimientos y habilidades.',
  skills: [
    'Angular',
    'NestJs',
    'TypeScript',
    'Java',
    'Spring Boot',
    'SQL',
    'PostgreSQL',
    'SQL Server',
    'Docker',
    'Linux',
    'Python',
    'Google Cloud Platform',
    'Git',
    'Flutter',
  ],
  image: {
    src: '/assets/images/about/profile.jpg',
    alt: 'Andrés Linarez',
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        period: '2023 - Presente',
        position: 'Desarrollador Backend & Full Stack',
        company: 'IT Security Solutions C.A.',
        description:
          'Desarrollo de productos de software de recaudación para BBVA Provincial. Backend con Java EE y SQL Server para Botón de Pago Interbancario. Full Stack con Angular 19, Spring Boot y SQL Server para Portal de Remesas Internacionales. Soporte continuo a sistemas en producción, asistiendo a clientes, recaudadores y proveedores.',
      },
      {
        period: '2022 - 2024',
        position: 'Ingeniero de Sistemas',
        company: 'Comunicaciones Migtel C.A.',
        description:
          'Desarrollo completo de sistema de facturación y reportería con Angular, NestJS y PostgreSQL. Creación de página web corporativa. Sistema automatizado de corte de servicios con Python. Administración de servidores on-premise y migración a Google Cloud Platform (GCP) con CI/CD.',
      },
    ],
  },
  education: {
    title: 'Educación',
    items: [
      {
        period: '2024 - Presente',
        degree: 'Máster en Sistemas de Información',
        institution: 'Universidad Católica Andrés Bello',
      },
      {
        period: '2018 - 2023',
        degree: 'Ingeniero de Sistemas',
        institution: 'Universidad Metropolitana',
      },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'B2' },
    ],
  },
  connect: {
    title: 'Conectemos',
    description:
      'No dudes en contactarme si quieres colaborar o simplemente conversar. Puedes encontrarme en redes sociales o enviarme un',
    email: {
      text: 'email',
      href: 'mailto:andreslinarez9@gmail.com',
    },
  },
};

export const projectsContent = {
  meta: {
    title: 'Proyectos - Andrés Linarez',
    description: 'Muestra de mis proyectos y trabajos destacados',
  },
  title: 'Proyectos Destacados',
  description:
    'A continuación, presento algunos de los proyectos más relevantes en los que he trabajado, demostrando mis capacidades técnicas y enfoque en soluciones de calidad.',
  projects: [
    {
      title: 'Portal de Remesas Internacionales BBVA',
      description:
        'Desarrollo full stack con Angular 19, Spring Boot y SQL Server. Responsable del desarrollo frontend y backend, contribuyendo significativamente al éxito del producto.',
      image: '/assets/images/projects/remesas.jpg',
      technologies: ['Angular 19', 'Spring Boot', 'SQL Server'],
      href: '#',
    },
    {
      title: 'Botón de Pago Interbancario BBVA',
      description:
        'Desarrollo backend utilizando Java EE sin framework y SQL Server, implementando lógica de negocio robusta y segura para transacciones interbancarias.',
      image: '/assets/images/projects/boton-pago.jpg',
      technologies: ['Java EE', 'SQL Server'],
      href: '#',
    },
    {
      title: 'Sistema de Facturación y Reportería',
      description:
        'Sistema completo desarrollado con Angular, NestJS y PostgreSQL durante proyecto industrial universitario. Integrado exitosamente en la operación de Comunicaciones Migtel y en evolución activa.',
      image: '/assets/images/projects/facturacion.jpg',
      technologies: ['Angular', 'NestJS', 'PostgreSQL'],
      href: '#',
    },
    {
      title: 'Sistema Automatizado de Corte de Servicios',
      description:
        'Desarrollado en Python con manipulación avanzada de datos y dashboards interactivos, fomentando una cultura de inteligencia de negocios y automatización de procesos.',
      image: '/assets/images/projects/corte-servicios.jpg',
      technologies: ['Python', 'Data Analytics', 'Dashboards'],
      href: '#',
    },
    {
      title: 'Migración a Google Cloud Platform',
      description:
        'Migración progresiva de infraestructura on-premise a GCP, aprovechando VMs, servicios serverless, bases de datos autoadministradas y pipelines de CI/CD, mejorando disponibilidad y escalabilidad.',
      image: '/assets/images/projects/gcp-migration.jpg',
      technologies: ['Google Cloud Platform', 'CI/CD', 'DevOps'],
      href: '#',
    },
    {
      title: 'Página Web Corporativa Migtel',
      description:
        'Desarrollo de página web corporativa con Angular, mejorando la presencia digital y la comunicación con los clientes de la empresa.',
      image: '/assets/images/projects/web-migtel.jpg',
      technologies: ['Angular', 'Web Development'],
      href: '#',
    },
  ],
};
