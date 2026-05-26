export const translations = {
    en: {
        banner: 'MARCO GONZÁLEZ PÉREZ · AUDIO PROGRAMMER C++ · FRONTEND DEVELOPER · CREATIVE DEVELOPER · MUSICIAN · PHOTOGRAPHER',

        common: {
            close: '✕ Close',
            projects: 'projects',
            works: 'works',
            playing: 'Playing',
            paused: 'Paused',
            unmute: 'Unmute',
            mute: 'Mute',
        },

        nav: {
            portfolioYear: 'Portfolio — 2026',
            tagline: 'Audio Programmer C++ · Frontend\nCreative Developer · Musician',
            availableForWork: 'Available for work',
            navigate: 'Navigate',
            sections: [
                { id: 'tech',        label: 'Audio Dev C++',   sub: 'Plugins & DSP' },
                { id: 'frontend',    label: 'Frontend',         sub: 'React & web' },
                { id: 'creative',    label: 'Creative Dev',     sub: 'Generative & AV' },
                { id: 'career',      label: 'Studies / Career', sub: 'Education & work' },
                { id: 'music',       label: 'Music',            sub: 'Projects & bands' },
                { id: 'photography', label: 'Photo',            sub: '35mm film' },
            ],
        },

        home: {
            badge: 'Portfolio — 2026',
            tagline: 'Audio programmer, frontend developer, and creative coder based wherever the work takes me.',
            verticalText: 'Code · Sound · Image',
            headline: ['Discovery', 'in code', '& sound'],
            body: 'Building audio plugins in C++, web experiences in React, and generative AV systems in the browser. Also plays guitar and shoots 35mm film.',
            openTo: 'Open to',
            openToValue: 'Freelance · Collaboration',
            currentlyWorkingOn: 'Currently working on',
            currentProject: 'i73 plugin suite\nHeritage Audio',
            whatIBuild: 'What I build',
            buildItems: ['VST / AU / AAX Plugins', 'Web Audio Tools', 'React Interfaces', 'Generative Systems', 'AV Performances'],
            stack: 'Stack',
            alsoInto: 'Also into',
            alsoIntoText: 'Garage psych, 35mm film, modular synthesis, and the occasional bad idea that turns into a good project.',
            roles: [
                { label: 'Audio / C++',  sub: 'plugins & DSP' },
                { label: 'Frontend',     sub: 'React · Next.js' },
                { label: 'Creative Dev', sub: 'generative & AV' },
            ],
        },

        tech: {
            title: 'AUDIO DEV C++',
            intro: 'Professional audio software built in C++ — plugins, desktop applications, and embedded systems.',
            projects: [
                { description: "A suite of audio plugins emulating Heritage Audio's classic analog hardware — EQ, compressors, guitar and bass amp simulators. Built in C++ with JUCE, combining DSP circuit modelling with ML-driven amp emulation via TensorFlow. Shipped with iLok licensing. Supports macOS and Windows." },
                { description: "A C++ desktop application that controls Heritage Audio's i73 Pro hardware interfaces over USB — the software backbone of their first digital product line. Built from the ground up as part of a three-year R&D project. Supports macOS and Windows." },
                { description: 'Contributed to the software stack of the Exquis, an expressive MPE MIDI controller made in France. Researched and built a custom Linux image using the Yocto Project on Raspberry Pi — a minimal OS that boots directly into a JUCE audio host.' },
            ],
        },

        frontend: {
            title: 'FRONTEND',
            intro: 'Web interfaces that live at the intersection of design, interaction, and sound.',
            skillLabels: ['Languages', 'Frameworks', 'Styling', 'Tools'],
            projects: [
                { description: 'This very site. Built with React, Vite, Tailwind CSS and Framer Motion. Includes a live audio playground with a step sequencer powered by Tone.js.' },
                { description: 'Website for Making Great, an independent creative agency based in Madrid working with brands like Tiffany & Co., Nespresso and Uniqlo. Dark, editorial aesthetic with case study portfolio. Built with Next.js.' },
                { description: 'Corporate website for ABM Distribution, a beauty and K-beauty distributor covering 2,000+ retail doors across Spain. Bilingual (ES / EN), built with Next.js.' },
            ],
        },

        creative: {
            title: ['CREATIVE', 'DEV'],
            intro: 'Experiments at the edge of code, sound, and visual form. No briefs, no clients — just curiosity.',
            disciplineDesc: "A creative developer sits between engineer and artist — building things that don't fit neatly into either category. These are the projects that live there.",
            works: [
                { description: 'Real-time visuals performed live using Hydra, a browser-based video synth. Feedback loops, shader functions, and OSC messages from Ableton Live drive the visuals in sync with the music.' },
                { description: 'An augmented electric guitar built at Aalborg University. A Teensy 4.0 board embedded in the body adds a dual high-pass filter driven by an LFO — a souped-up wah-wah where you can swap the waveform between sine, sawtooth and pulse. Controlled from knobs on the guitar, no pedal needed. Documented as a NIME paper.' },
                { description: 'A tangible multiplayer instrument for two players with different skill levels — one handles melody, one handles rhythm. Sliders and light-dependent resistors control a PureData sound engine with FM, additive synthesis and Karplus-Strong patches. Presented at SMC 2020, Aalborg University.' },
                { description: 'A web tool built for a concert at Wurlitzer Ballroom — musicians joining the show can load the setlist, mute individual stems, and practice their parts at home before the gig.' },
            ],
        },

        career: {
            title: 'CAREER',
            experienceLabel: 'Experience',
            educationLabel: 'Education',
            jobs: [
                { description: "Heritage Audio wanted to go digital. I helped build that from scratch — the i73 Mixer app in C++, communicating via USB with their hardware interfaces, and a plugin suite emulating their analog gear: EQ, compressors, guitar and bass amps. Three years of R&D from zero to shipped. JUCE, iLok, DSP circuit emulation, and ML-driven amp modelling with TensorFlow. Attended ADC 2023, London." },
                { description: "Researched and prototyped an embedded audio system for the Exquis — an expressive MPE MIDI controller designed and assembled in France. Used the Yocto Project to build a custom Linux image on Raspberry Pi, optimized to boot directly into a JUCE audio host with a plugin loaded. A minimal OS that woke up as a synthesizer. Also ran hardware testing on the controller's pressure-sensitive sensors — from raw sensor evaluation to comparing silicone button prototypes to find the right feel." },
            ],
            education: [
                { description: "A master's for people who live at the intersection of music and engineering. Projects included a physical model of a Rhodes piano, a multiplayer instrument, and an augmented guitar with Teensy 4.0. Paper presented at SMC 2020. Thesis: designing a new gestural controller inspired by string instruments." },
                { description: 'Computer science fundamentals. Final project: a learning tool for multitrack audio mixing.' },
            ],
        },

        music: {
            title: 'MUSIC',
            intro: 'My musical journey.',
            bands: [
                { description: 'My main project and band. Our first effort in releasing music, showcasing our garage-psych sound.' },
                { description: 'A neo-folk collaborative project. I play guitar.' },
                { description: 'My personal project where I have complete creative liberty to experiment and express myself.' },
                { description: "A friend's project that I'm producing. Three singles out: NIÑA GRITANDO AL CIELO, Atentamente, ÉL and sobre su VIENTRE." },
            ],
        },

        photo: {
            title: 'PHOTO',
            label: '35mm film',
            intro: 'Capturing moments, textures, and light on 35mm film.',
            closeBtn: '✕ Close',
            photoTitles: ['Coastal Landscape', 'Urban Reflection', 'Rooftop Elephant', 'Friends Gathering', 'Modern Architecture', 'Flower Bee', 'Street Scene', 'Cat Portrait', 'Fries Statue'],
        },
    },

    es: {
        banner: 'MARCO GONZÁLEZ PÉREZ · PROGRAMADOR AUDIO C++ · DESARROLLADOR FRONTEND · DEV CREATIVO · MÚSICO · FOTÓGRAFO',

        common: {
            close: '✕ Cerrar',
            projects: 'proyectos',
            works: 'trabajos',
            playing: 'Reproduciendo',
            paused: 'En pausa',
            unmute: 'Activar sonido',
            mute: 'Silenciar',
        },

        nav: {
            portfolioYear: 'Portfolio — 2026',
            tagline: 'Programador Audio C++ · Frontend\nDev Creativo · Músico',
            availableForWork: 'Disponible para trabajar',
            navigate: 'Navegar',
            sections: [
                { id: 'tech',        label: 'Audio Dev C++',     sub: 'Plugins y DSP' },
                { id: 'frontend',    label: 'Frontend',           sub: 'React y web' },
                { id: 'creative',    label: 'Creative Dev',       sub: 'Generativo y AV' },
                { id: 'career',      label: 'Estudios / Carrera', sub: 'Formación y trabajo' },
                { id: 'music',       label: 'Música',             sub: 'Proyectos y bandas' },
                { id: 'photography', label: 'Foto',               sub: 'Carrete 35mm' },
            ],
        },

        home: {
            badge: 'Portfolio — 2026',
            tagline: 'Programador de audio, desarrollador frontend y dev creativo. Trabajo donde haga falta.',
            verticalText: 'Código · Sonido · Imagen',
            headline: ['Descubrir', 'en código', 'y sonido'],
            body: 'Construyo plugins de audio en C++, webs en React y sistemas AV generativos en el navegador. También toco la guitarra y hago fotos en carrete.',
            openTo: 'Disponible para',
            openToValue: 'Freelance · Colaboración',
            currentlyWorkingOn: 'Trabajando en',
            currentProject: 'i73 plugin suite\nHeritage Audio',
            whatIBuild: 'Qué construyo',
            buildItems: ['Plugins VST / AU / AAX', 'Herramientas Web Audio', 'Interfaces React', 'Sistemas Generativos', 'Performances AV'],
            stack: 'Stack',
            alsoInto: 'También me gusta',
            alsoIntoText: 'Psicodelia garage, fotografía en carrete, síntesis modular y alguna mala idea que acaba siendo un buen proyecto.',
            roles: [
                { label: 'Audio / C++',  sub: 'plugins y DSP' },
                { label: 'Frontend',     sub: 'React · Next.js' },
                { label: 'Dev Creativo', sub: 'generativo y AV' },
            ],
        },

        tech: {
            title: 'AUDIO DEV C++',
            intro: 'Software de audio profesional en C++ — plugins, aplicaciones de escritorio y sistemas embebidos.',
            projects: [
                { description: 'Una suite de plugins de audio que emula el hardware analógico clásico de Heritage Audio — EQ, compresores, simuladores de amplificador de guitarra y bajo. Construido en C++ con JUCE, combinando modelado de circuitos DSP con emulación de amplificadores basada en ML con TensorFlow. Distribuido con licencias iLok. Compatible con macOS y Windows.' },
                { description: 'Aplicación de escritorio en C++ que controla las interfaces de hardware i73 Pro de Heritage Audio por USB — el núcleo de software de su primera línea de productos digitales. Construida desde cero como parte de un proyecto de I+D de tres años. Compatible con macOS y Windows.' },
                { description: 'Contribuí al stack de software del Exquis, un controlador MIDI MPE expresivo fabricado en Francia. Investigué y construí una imagen Linux personalizada con Yocto en Raspberry Pi — un SO mínimo que arranca directamente en un host de audio JUCE.' },
            ],
        },

        frontend: {
            title: 'FRONTEND',
            intro: 'Interfaces web en la intersección del diseño, la interacción y el sonido.',
            skillLabels: ['Lenguajes', 'Frameworks', 'Estilos', 'Herramientas'],
            projects: [
                { description: 'Este mismo sitio. Construido con React, Vite, Tailwind CSS y Framer Motion. Incluye un playground de audio con un step sequencer basado en Tone.js.' },
                { description: 'Web para Making Great, una agencia creativa independiente con sede en Madrid que trabaja con marcas como Tiffany & Co., Nespresso y Uniqlo. Estética oscura y editorial con portfolio de casos. Construida con Next.js.' },
                { description: 'Web corporativa para ABM Distribution, distribuidora de belleza y K-beauty con más de 2.000 puntos de venta en España. Bilingüe (ES / EN), construida con Next.js.' },
            ],
        },

        creative: {
            title: ['CREATIVE', 'DEV'],
            intro: 'Experimentos en los límites del código, el sonido y la forma visual. Sin briefings, sin clientes — solo curiosidad.',
            disciplineDesc: 'Un dev creativo vive entre el ingeniero y el artista — construyendo cosas que no encajan limpiamente en ninguna de las dos categorías. Aquí están los proyectos que viven en ese espacio.',
            works: [
                { description: 'Visuales en tiempo real interpretados en directo con Hydra, un sintetizador de vídeo basado en navegador. Bucles de retroalimentación, funciones shader y mensajes OSC desde Ableton Live sincronizan los visuales con la música.' },
                { description: 'Una guitarra eléctrica aumentada construida en la Universidad de Aalborg. Una placa Teensy 4.0 incrustada en el cuerpo añade un filtro paso-alto dual controlado por un LFO — un wah-wah mejorado donde puedes cambiar la forma de onda entre seno, sierra y pulso. Controlado desde los knobs de la guitarra, sin pedal. Documentado como paper NIME.' },
                { description: 'Un instrumento tangible multijugador para dos jugadores con distintos niveles de habilidad — uno maneja la melodía, otro el ritmo. Sliders y resistencias dependientes de la luz controlan un motor de sonido en PureData con FM, síntesis aditiva y Karplus-Strong. Presentado en SMC 2020, Universidad de Aalborg.' },
                { description: 'Una herramienta web construida para un concierto en Wurlitzer Ballroom — los músicos del show pueden cargar el setlist, silenciar stems individuales y ensayar sus partes en casa antes del concierto.' },
            ],
        },

        career: {
            title: 'CARRERA',
            experienceLabel: 'Experiencia',
            educationLabel: 'Formación',
            jobs: [
                { description: 'Heritage Audio quería dar el salto a lo digital. Ayudé a construirlo desde cero — la app i73 Mixer en C++, comunicándose por USB con sus interfaces de hardware, y una suite de plugins que emula su equipamiento analógico: EQ, compresores, amplificadores de guitarra y bajo. Tres años de I+D desde cero hasta el lanzamiento. JUCE, iLok, emulación de circuitos DSP y modelado de amplificadores con ML y TensorFlow. Asistí a la ADC 2023 en Londres.' },
                { description: 'Investigué y prototipé un sistema de audio embebido para el Exquis — un controlador MIDI MPE expresivo diseñado y ensamblado en Francia. Usé el Proyecto Yocto para construir una imagen Linux personalizada en Raspberry Pi, optimizada para arrancar directamente en un host de audio JUCE con un plugin cargado. Un SO mínimo que arrancaba como sintetizador. También realicé pruebas de hardware en los sensores de presión del controlador — desde la evaluación de sensores en bruto hasta la comparación de prototipos de botones de silicona.' },
            ],
            education: [
                { description: 'Un máster para gente que vive en la intersección entre la música y la ingeniería. Los proyectos incluyeron un modelo físico de un piano Rhodes, un instrumento multijugador y una guitarra aumentada con Teensy 4.0. Paper presentado en SMC 2020. Tesis: diseño de un nuevo controlador gestual inspirado en instrumentos de cuerda.' },
                { description: 'Fundamentos de informática. Proyecto final: una herramienta de aprendizaje para mezcla de audio multipista.' },
            ],
        },

        music: {
            title: 'MÚSICA',
            intro: 'Mi trayectoria musical.',
            bands: [
                { description: 'Mi proyecto principal. Nuestro primer trabajo discográfico, con nuestro sonido psicodélico garage.' },
                { description: 'Un proyecto colaborativo de neo-folk. Toco la guitarra.' },
                { description: 'Mi proyecto en solitario, donde tengo total libertad creativa para experimentar y expresarme.' },
                { description: 'Proyecto de un amigo al que estoy produciendo. Tres singles publicados: NIÑA GRITANDO AL CIELO, Atentamente, ÉL y sobre su VIENTRE.' },
            ],
        },

        photo: {
            title: 'FOTO',
            label: 'Carrete 35mm',
            intro: 'Capturando momentos, texturas y luz en carrete de 35mm.',
            closeBtn: '✕ Cerrar',
            photoTitles: ['Paisaje costero', 'Reflejo urbano', 'Elefante en tejado', 'Amigos reunidos', 'Arquitectura moderna', 'Flor y abeja', 'Escena callejera', 'Retrato de gato', 'Estatua de patatas'],
        },
    },
};
