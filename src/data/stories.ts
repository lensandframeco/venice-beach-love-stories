// Story data for the documentary subjects
const ivoHero = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/41565544-2791-4dda-8331-c4d149cd1473.jpg";
const jataunHero = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5fc28b46-0704-411b-a562-b43adb6e09dc.jpg";
const titoHero = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/469dbf25-f03b-415a-a1dd-dda0a583f3fa.jpg";
const lanceHero = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/473f475c-3f25-4975-b78f-6b1ef0bf94cf.jpg";

export interface Story {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  preview: string;
  fullStory: string[];
  image: string;
  mobileImage?: string;
  tabletImage?: string;
  imagePosition?: string; // CSS object-position value (e.g., "top", "center 20%")
  videoUrl?: string;
  videoTitle?: string;
}

// Placeholder for photos we don't have yet
const placeholderImage = "";

export const stories: Story[] = [
  {
    slug: "the-muralist",
    name: "Ivo Vergara",
    title: "The Muralist",
    tagline: "Walls as testimony",
    preview: "He came from Chile, where walls spoke when mouths could not. In Venice Beach, he found another country in need of public memory. His murals are not decoration—they are testimony, resistance, invitation.",
    fullStory: [
      "He came from Chile carrying a tradition: that walls can speak when mouths cannot. In the years of Pinochet, murals became a secret language—protest, memory, hope painted in public view. When he arrived in Venice Beach, he found another country in need of witness.",
      "His murals stretch across the neighborhood—on the sides of buildings, along alleyways, facing the ocean. Faces of those who built this place. Hands raised in solidarity. Colors that refuse to fade. Each one is an act of resistance against forgetting. Each one is an invitation to remember who lived here, who loved here, who was pushed out.",
      "Venice Beach has always been a canvas. The boardwalk performers, the graffiti writers, the skaters—all of them making their mark. But his work carries a different weight. It is not spectacle. It is testimony. A way of saying: this neighborhood has a history. These walls remember what the new buildings try to erase.",
      "As gentrification reshapes Venice, his murals become more urgent. Luxury condos rise beside his painted faces. Tech workers pass his images without knowing their stories. But the murals remain, stubborn and bright, insisting on a different kind of value than real estate.",
      '"Art is memory," he says. "And memory is how we fight."'
    ],
    image: ivoHero,
    videoUrl: "https://www.youtube.com/embed/2YajIWtzpD8",
    videoTitle: "The Muralist: Ivo Vergara - Trailer",
  },
  {
    slug: "the-matriarch",
    name: "Jataun Valentine",
    title: "The Matriarch, the activist, the keeper of Oakwood history",
    tagline: "Memory and dignity",
    preview: "Descended from one of Venice's early African American families, she has spent decades working to preserve the cultural legacy, housing stability, and social fabric of Oakwood amid rapid development and displacement pressures.",
    fullStory: [
      "Jataun Valentine is a longtime community leader, activist, and respected elder in Venice, California, with deep family roots in the neighborhood's historic Oakwood community. Descended from one of Venice's early African American families, Valentine has spent decades working to preserve the cultural legacy, housing stability, and social fabric of Venice amid rapid development and displacement pressures.",
      "She has been especially active in advocacy for seniors, low-income residents, and people with disabilities, combining grassroots organizing with formal civic engagement. Valentine served as vice president of the Board of Directors of Venice Community Housing, where she helped guide policies supporting affordable housing and resident services.",
      "Her volunteer work has included involvement with organizations such as People Organized for Westside Renewal (POWER), the Braille Outreach Program, and local health and senior clinics, reflecting her commitment to inclusion and access to essential resources.",
      "Known for her steady leadership and moral authority within the community, Valentine has been a consistent voice in neighborhood planning discussions, social justice efforts, and intergenerational organizing. Over the years, she has received community recognition for her dedication to public service and her lifelong efforts to empower marginalized residents.",
      "Through advocacy, mentorship, and volunteerism, Jataun Valentine has played a significant role in sustaining Venice's historic community identity while working toward a more equitable future."
    ],
    image: jataunHero,
  },
  {
    slug: "the-zoot-suiter",
    name: "Tito Casillas",
    title: "The Zoot Suiter",
    tagline: "Dressed in defiance",
    preview: "He was born in Venice, and every day he dresses like a statement. The zoot suit was once an act of resistance against wartime conformity. He wears it now as inheritance, as pride, as a way of saying: I am from here. I remain a statement.",
    fullStory: [
      "He was born in Venice, and every day he dresses like a declaration. The zoot suit: wide-brimmed hat tilted just so, high-waisted trousers with their dramatic taper, long coat with padded shoulders, a watch chain swinging at his side. It is not costume. It is inheritance.",
      "In 1943, during the Zoot Suit Riots, American servicemen roamed the streets of Los Angeles beating young Mexican-American men who wore these suits. The style was seen as unpatriotic, wasteful, defiant—and that was precisely the point. To wear a zoot suit was to refuse invisibility, to claim space and style in a country that demanded assimilation.",
      "He wears the suit now for the same reasons his ancestors did: pride, resistance, beauty. On the streets of Venice, where tech bros in hoodies pass him without a glance, he is a walking history lesson. Some people stop to take photos. Some ask where he's from. \"From here,\" he says. \"I'm from right here.\"",
      "His Venice is the Venice of Latino families, of backyard quinceañeras and lowrider cruises, of Spanish spoken on corners that now host boutique coffee shops. That Venice is shrinking, but he refuses to let it disappear. Every time he puts on the hat, buttons the coat, steps out onto the boardwalk, he is saying: we were here. We are still here.",
      '"They want to forget us," he says. "But I make it hard to forget."'
    ],
    image: titoHero,
    imagePosition: "top", // Ensures Tito's face is visible
  },
  {
    slug: "the-bicycle-whisperer",
    name: "Lance Small",
    title: "The Bicycle Whisperer",
    tagline: "Keeping Venice rolling",
    preview: "From his mobile repair truck, he fixes the bikes that keep Venice moving—the cruisers, the fixies, the beach bikes that define this neighborhood. More than a mechanic, he's a connector, a storyteller, a keeper of the Venice spirit.",
    fullStory: [
      "His truck is a fixture on the streets of Venice, a mobile workshop where broken bikes come back to life. They call him the Bicycle Whisperer, and watching him work, you understand why. He listens to the click of a derailleur, feels the wobble of a wheel, diagnoses problems with an intuition born from years of practice.",
      "Venice has always been a cycling neighborhood. The flat streets, the beach path, the culture of cruising slow—bicycles are woven into its identity. But as the neighborhood changes, the old bike shops close, replaced by boutiques and juice bars. His truck fills a gap, bringing repair to the people instead of waiting for them to come to him.",
      "More than fixing bikes, he fixes connections. His truck becomes a gathering spot—neighbors stopping by to chat, tourists asking for directions, kids watching him work with wide eyes. He knows everyone's name, everyone's story. In a Venice that grows more anonymous by the day, he maintains the old way of being neighbors.",
      '"A bike is freedom," he says. "When I fix someone\'s bike, I\'m giving them back their freedom. That\'s worth more than money."',
      "He has watched Venice change, watched the people who used to crowd the boardwalk get pushed further from the beach. But he stays, keeps the truck rolling, keeps the community connected one repair at a time. The Bicycle Whisperer—part mechanic, part philosopher, all Venice."
    ],
    image: lanceHero,
  },
  {
    slug: "the-skateboarder",
    name: "The Skateboarder",
    title: "The Skateboarder",
    tagline: "Flowing lines, fearless creativity",
    preview: "Dogtown was born here—the style, the rebellion, the flight. He carries that lineage in his body, airborne over the bowls that made skateboarding a global language. But the Venice beneath his wheels is changing.",
    fullStory: [
      "The concrete bowls at Venice Beach are a pilgrimage site. Skaters come from Tokyo, São Paulo, Berlin—all to ride the park that sits where Dogtown was born. In the 1970s, a crew of young surfers from this stretch of coast transformed skateboarding from a sidewalk novelty into an art form. They rode empty swimming pools during droughts. They invented a style—low, aggressive, fluid—that changed everything.",
      "He grew up in their shadow, learning to skate on these same streets. The Zephyr team, the Z-Boys, the legends: he knows their names, their moves, their mythology. When he drops into the bowl, he is carrying that history in his body. The way he carves, the way he flies—it is a conversation with ghosts.",
      "But the Venice beneath his wheels is not the Venice of the 1970s. Google's Los Angeles headquarters looms nearby. Lamborghinis cruise past the skate park. The rents that once let artists and surfers live here now price out everyone who isn't already wealthy. The old heads—the ones who remember the original Dogtown—are dying or moving away.",
      "He skates on anyway. There is defiance in it, and love. The park is free. The ocean is still there. As long as he can drop in, push off, feel the concrete rise beneath him, something of the old Venice survives.",
      '"This is church," he says. "This is where I belong."'
    ],
    image: placeholderImage,
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getAdjacentStories(currentSlug: string): { prev: Story | null; next: Story | null } {
  const currentIndex = stories.findIndex((story) => story.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? stories[currentIndex - 1] : stories[stories.length - 1],
    next: currentIndex < stories.length - 1 ? stories[currentIndex + 1] : stories[0],
  };
}
