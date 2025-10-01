const workoutSections = [
  {
    badge: 'Calentamiento',
    title: 'Warm Up',
    items: [
      {
        name: 'Upward Dog',
        description:
          'Estiramiento de yoga donde te acuestas boca abajo, colocas las manos cerca del pecho y estiras los brazos levantando el torso, abriendo el pecho y llevando los hombros hacia atrás, mientras las caderas se mantienen cerca del suelo.',
        video: './assets/mp4/upward_dog.mp4',
      },
      {
        name: 'Forward Fold',
        description:
          'De pie, se flexiona el torso hacia adelante dejando caer la cabeza y los brazos hacia el suelo, buscando tocar los pies o el suelo. Ayuda a estirar isquiotibiales, espalda baja y relajar la tensión en el cuello.',
        video: './assets/mp4/forward_fold.mp4',
      },
      {
        name: 'Cobra Pose',
        description:
          'Similar al <em>Upward Dog</em>, pero con los codos semiflexionados y las caderas apoyadas en el suelo. Se utiliza para abrir el pecho, estirar abdominales y aliviar la columna lumbar.',
        video: './assets/mp4/cobra_pose.mp4',
      },
      {
        name: 'Triangle Pose',
        description:
          'De pie con las piernas abiertas, se estira un brazo hacia el suelo y el otro hacia arriba, manteniendo el torso alineado en un ángulo lateral. Trabaja la estabilidad, la flexibilidad de la cadera y la fuerza en el tronco.',
        video: './assets/mp4/triangle_pose.mp4',
      },
      {
        name: 'Dancer Pose',
        description:
          'Postura de equilibrio en la que, de pie, se toma un pie por detrás con una mano y se eleva la pierna hacia arriba y atrás, mientras el otro brazo se extiende hacia adelante. Mejora el equilibrio, la concentración y fortalece las piernas y glúteos.',
        video: './assets/mp4/dancer_pose.mp4',
      },
    ],
  },
  {
    badge: 'Fuerza y Amor',
    title: 'Ejercicios de libra',
    items: [
      {
        name: 'Romanian Deadlift',
        description:
          'Ejercicio de fuerza para glúteos e isquiotibiales. De pie con barra o mancuernas, se baja el torso hacia adelante empujando las caderas atrás con la espalda recta, y se sube contrayendo glúteos.',
        video: './assets/mp4/romanian_deadlift.mp4',
      },
      {
        name: 'Glute Raise',
        description:
          'También llamado <em>hip thrust</em>, consiste en apoyar la espalda en un banco con los pies en el suelo, bajar la cadera y luego subirla hasta que el torso quede alineado con las piernas, apretando los glúteos arriba.',
        video: './assets/mp4/glute_raise.mp4',
      },
      {
        name: 'Calf Raise',
        description:
          'Elevación de talones en la que te pones de pie, subes lentamente hasta quedar sobre la punta de los pies, sostienes unos segundos y bajas controlado, fortaleciendo las pantorrillas.',
        video: './assets/mp4/calf_raise.mp4',
      },
      {
        name: 'Treadmill',
        description:
          'Ejercicio cardiovascular en cinta de correr donde puedes caminar, trotar o correr ajustando la velocidad y la inclinación. Mejora la resistencia física y ayuda a quemar calorías.',
        video: './assets/mp4/treadmill.mp4',
      },
      {
        name: 'Goblet Squats',
        description:
          'Sentadilla sosteniendo una pesa frente al pecho. Se baja flexionando rodillas y caderas hasta que los muslos estén paralelos al suelo, y se sube empujando con los talones. Trabaja piernas, glúteos y core.',
        video: './assets/mp4/goblet_squat.mp4',
      },
      {
        name: 'Jefferson Curl',
        description:
          'Movimiento de movilidad y estiramiento en el que, con un peso ligero, se baja enrollando la columna vértebra por vértebra hacia el suelo y luego se sube desenrollándola, mejorando flexibilidad en espalda e isquiotibiales.',
        video: './assets/mp4/jefferson_curl.mp4',
      },
    ],
  },
];

const contentRoot = document.getElementById('workout-content');

const createSection = ({ badge, title, items }) => {
  const section = document.createElement('section');
  section.className = 'section';

  const header = document.createElement('div');
  header.className = 'section__header';

  if (badge) {
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = badge;
    header.appendChild(badgeEl);
  }

  const titleEl = document.createElement('h2');
  titleEl.className = 'section__title';
  titleEl.textContent = title;
  header.appendChild(titleEl);

  section.appendChild(header);

  items.forEach((item) => {
    section.appendChild(createCard(item));
  });

  return section;
};

const createCard = ({ name, description, video }) => {
  const card = document.createElement('article');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card__header';

  const title = document.createElement('h3');
  title.className = 'card__title';
  title.textContent = name;
  header.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.className = 'card__description';
  paragraph.innerHTML = description;
  header.appendChild(paragraph);

  const videoEl = document.createElement('video');
  videoEl.className = 'workout-video';
  videoEl.autoplay = true;
  videoEl.muted = true;
  videoEl.playsInline = true;
  videoEl.loop = true;
  videoEl.setAttribute('autoplay', '');
  videoEl.setAttribute('muted', '');
  videoEl.setAttribute('playsinline', '');
  videoEl.setAttribute('loop', '');
  videoEl.controls = true;
  videoEl.setAttribute('title', name);
  videoEl.setAttribute('aria-label', name);

  const sourceEl = document.createElement('source');
  sourceEl.src = video;
  sourceEl.type = 'video/mp4';
  videoEl.appendChild(sourceEl);
  videoEl.appendChild(
    document.createTextNode(
      'Tu navegador no puede reproducir este video. Puedes descargarlo ' +
        `directamente desde ${video}.`
    )
  );

  card.appendChild(header);
  card.appendChild(videoEl);

  return card;
};

workoutSections.forEach((section) => {
  contentRoot.appendChild(createSection(section));
});
