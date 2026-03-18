// Image Assets Catalog for Venice Beach Love Stories
// Based on the official photo catalog with 167 images

export interface ImageAsset {
  filename: string;
  caption: string;
  category: 'subject-ivo' | 'subject-jataun' | 'subject-tito' | 'subject-lance' | 'subject-skateboarder' | 'beach' | 'architecture' | 'murals' | 'homelessness' | 'gentrification' | 'venice-life' | 'branding';
  suggestedUse: string;
  subject?: 'ivo' | 'jataun' | 'tito' | 'lance' | 'skateboarder';
}

// ============================================
// SUBJECT: IVO VERGARA - THE MURALIST (26 images)
// ============================================
export const ivoImages: ImageAsset[] = [
  { filename: 'image1.jpeg', caption: 'Ivo Vergara, muralist from Chile who lives in Venice', category: 'subject-ivo', suggestedUse: 'HERO', subject: 'ivo' },
  { filename: 'image2.jpeg', caption: 'Ivo at work', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image3.jpg', caption: 'Ivo Vergara Chilean muralist at work', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image8.jpeg', caption: "Ivo's with members of the community depicted", category: 'subject-ivo', suggestedUse: 'Featured mural', subject: 'ivo' },
  { filename: 'image12.jpeg', caption: "Ivo at work on mural of Venice people's faces", category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image17.jpeg', caption: 'Ivo at work. Tito Casillas in Zoot Suit', category: 'subject-ivo', suggestedUse: 'Crossover shot', subject: 'ivo' },
  { filename: 'image19.jpeg', caption: 'Ivo showing photos of family', category: 'subject-ivo', suggestedUse: 'Personal moment', subject: 'ivo' },
  { filename: 'image28.jpeg', caption: 'Ivo at work on mural', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image33.jpeg', caption: 'Ivo at work at night on mural', category: 'subject-ivo', suggestedUse: 'Dramatic shot', subject: 'ivo' },
  { filename: 'image36.jpeg', caption: "Ivo's paint", category: 'subject-ivo', suggestedUse: 'Detail shot', subject: 'ivo' },
  { filename: 'image41.jpeg', caption: "Ivo's paint and mate", category: 'subject-ivo', suggestedUse: 'Detail/cultural', subject: 'ivo' },
  { filename: 'image42.jpeg', caption: 'Ivo at work', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image46.jpeg', caption: "Ivo's mural art", category: 'subject-ivo', suggestedUse: 'Mural detail', subject: 'ivo' },
  { filename: 'image58.jpeg', caption: "Ivo painting Jataun's face on mural", category: 'subject-ivo', suggestedUse: 'Crossover - connects subjects', subject: 'ivo' },
  { filename: 'image83.jpeg', caption: 'Ivo being filmed in my office', category: 'subject-ivo', suggestedUse: 'Behind scenes', subject: 'ivo' },
  { filename: 'image90.jpeg', caption: 'Ivo working on Jataun at night', category: 'subject-ivo', suggestedUse: 'Crossover shot', subject: 'ivo' },
  { filename: 'image101.jpeg', caption: 'Ivo at outside mural', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image103.jpeg', caption: "Ivo's mandala mural", category: 'subject-ivo', suggestedUse: 'Mural work', subject: 'ivo' },
  { filename: 'image110.jpeg', caption: 'Place where Ivo worked on mandala mural', category: 'subject-ivo', suggestedUse: 'Location', subject: 'ivo' },
  { filename: 'image112.jpeg', caption: 'Ivo working on mandala mural', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image116.jpeg', caption: 'Ivo mural with Tito and Jataun', category: 'subject-ivo', suggestedUse: 'KEY SHOT - all subjects', subject: 'ivo' },
  { filename: 'image126.jpeg', caption: "Ivo's paints", category: 'subject-ivo', suggestedUse: 'Detail', subject: 'ivo' },
  { filename: 'image143.jpg', caption: 'Ivo on camera in my office', category: 'subject-ivo', suggestedUse: 'Behind scenes', subject: 'ivo' },
  { filename: 'image147.jpeg', caption: 'Ivo being filmed by Chris mandala', category: 'subject-ivo', suggestedUse: 'Behind scenes', subject: 'ivo' },
  { filename: 'image149.jpeg', caption: 'Jataun blueprint for mural Ivo', category: 'subject-ivo', suggestedUse: 'Process', subject: 'ivo' },
  { filename: 'image150.jpeg', caption: 'Ivo mural covered up on Lincoln', category: 'subject-ivo', suggestedUse: 'Story element', subject: 'ivo' },
  { filename: 'image152.jpeg', caption: 'Ivo with friend', category: 'subject-ivo', suggestedUse: 'Personal', subject: 'ivo' },
  { filename: 'image155.jpeg', caption: 'Ivo painting stuff', category: 'subject-ivo', suggestedUse: 'Story page', subject: 'ivo' },
  { filename: 'image159.jpeg', caption: 'Ivo painting low angle', category: 'subject-ivo', suggestedUse: 'Dramatic angle', subject: 'ivo' },
  { filename: 'image164.jpeg', caption: 'Ivo Lincoln mural on paper', category: 'subject-ivo', suggestedUse: 'Process', subject: 'ivo' },
];

// ============================================
// SUBJECT: JATAUN VALENTINE - THE MATRIARCH (3 images)
// ============================================
export const jataunImages: ImageAsset[] = [
  { filename: 'image29.jpg', caption: "Jataun Valentine, community leader and activist", category: 'subject-jataun', suggestedUse: 'HERO PORTRAIT', subject: 'jataun' },
  { filename: 'image82.jpeg', caption: 'Jataun Valentine on Mural', category: 'subject-jataun', suggestedUse: 'Symbolic image', subject: 'jataun' },
  { filename: 'image160.jpeg', caption: 'Jataun and friends on street', category: 'subject-jataun', suggestedUse: 'Community shot', subject: 'jataun' },
];

// ============================================
// SUBJECT: TITO CASILLAS - THE ZOOT SUITER (3 images)
// ============================================
export const titoImages: ImageAsset[] = [
  { filename: 'image22.jpeg', caption: 'Tito in Purple Zoot Suit', category: 'subject-tito', suggestedUse: 'HERO PORTRAIT', subject: 'tito' },
  { filename: 'image24.jpeg', caption: 'Tito on mural', category: 'subject-tito', suggestedUse: 'Connection to Ivo', subject: 'tito' },
  { filename: 'image88.jpeg', caption: 'Tito striking a pose', category: 'subject-tito', suggestedUse: 'Alternate hero', subject: 'tito' },
];

// ============================================
// SUBJECT: LANCE - THE BICYCLE WHISPERER (14 images)
// ============================================
export const lanceImages: ImageAsset[] = [
  { filename: 'image26.jpeg', caption: 'Lance, Bicycle Whisperer', category: 'subject-lance', suggestedUse: 'HERO PORTRAIT', subject: 'lance' },
  { filename: 'image57.jpeg', caption: 'Lance and Danny and friend, bicycle whisperer', category: 'subject-lance', suggestedUse: 'Group shot', subject: 'lance' },
  { filename: 'image78.jpeg', caption: 'Danny at bicycle whisperer', category: 'subject-lance', suggestedUse: 'Supporting', subject: 'lance' },
  { filename: 'image79.jpeg', caption: 'Bicycle whisperer truck', category: 'subject-lance', suggestedUse: 'Location/context', subject: 'lance' },
  { filename: 'image98.jpeg', caption: 'Lance the bicycle whisperer', category: 'subject-lance', suggestedUse: 'Alternate portrait', subject: 'lance' },
  { filename: 'image102.jpeg', caption: 'Lance bicycle whisperer and camera', category: 'subject-lance', suggestedUse: 'Story page', subject: 'lance' },
  { filename: 'image111.jpeg', caption: 'Bicycle whisperer van', category: 'subject-lance', suggestedUse: 'Context', subject: 'lance' },
  { filename: 'image122.jpeg', caption: 'Bicycle whisperer bikes', category: 'subject-lance', suggestedUse: 'Detail', subject: 'lance' },
  { filename: 'image131.jpg', caption: 'Lance bicycle whisperer big smile', category: 'subject-lance', suggestedUse: 'Great portrait', subject: 'lance' },
  { filename: 'image146.jpeg', caption: 'Bicycle whisperer inside van', category: 'subject-lance', suggestedUse: 'Interior', subject: 'lance' },
  { filename: 'image151.jpeg', caption: 'Lance with friend', category: 'subject-lance', suggestedUse: 'Personal', subject: 'lance' },
  { filename: 'image153.jpeg', caption: 'Bicycle whisperer van', category: 'subject-lance', suggestedUse: 'Context', subject: 'lance' },
  { filename: 'image161.jpeg', caption: 'Danny, helper at bicycle whisperer', category: 'subject-lance', suggestedUse: 'Supporting character', subject: 'lance' },
  { filename: 'image163.jpeg', caption: 'Lance on street', category: 'subject-lance', suggestedUse: 'Candid', subject: 'lance' },
];

// ============================================
// VENICE BEACH - BEACH & OCEAN (20 images)
// ============================================
export const beachImages: ImageAsset[] = [
  { filename: 'image16.jpeg', caption: 'Storm coming Venice Beach', category: 'beach', suggestedUse: 'Dramatic hero option' },
  { filename: 'image18.jpeg', caption: 'Path along Venice Beach', category: 'beach', suggestedUse: 'Atmospheric' },
  { filename: 'image23.jpeg', caption: 'Near Tower 26', category: 'beach', suggestedUse: 'Location' },
  { filename: 'image31.jpeg', caption: 'Venice Beach at night', category: 'beach', suggestedUse: 'Night atmosphere' },
  { filename: 'image32.jpeg', caption: 'Venice Beach sunset', category: 'beach', suggestedUse: 'Homepage hero option' },
  { filename: 'image40.jpeg', caption: 'People at dusk at beach', category: 'beach', suggestedUse: 'Atmospheric' },
  { filename: 'image45.jpeg', caption: 'Tracks in sand at night Beach', category: 'beach', suggestedUse: 'Artistic' },
  { filename: 'image47.jpeg', caption: 'Stationary Bike Riders at Beach', category: 'beach', suggestedUse: 'Venice life' },
  { filename: 'image49.jpeg', caption: 'Bench at beach', category: 'beach', suggestedUse: 'Contemplative' },
  { filename: 'image52.jpeg', caption: 'Cement block at beach', category: 'beach', suggestedUse: 'Iconic location' },
  { filename: 'image53.jpeg', caption: 'People walk at beach night', category: 'beach', suggestedUse: 'Night life' },
  { filename: 'image59.jpeg', caption: 'Tower 26', category: 'beach', suggestedUse: 'Landmark' },
  { filename: 'image75.jpeg', caption: 'Silhouette of people at beach', category: 'beach', suggestedUse: 'Artistic hero option' },
  { filename: 'image84.jpeg', caption: 'SM Pier', category: 'beach', suggestedUse: 'Area context' },
  { filename: 'image96.jpg', caption: 'Wave crash at cement block at beach', category: 'beach', suggestedUse: 'Dramatic' },
  { filename: 'image108.jpeg', caption: 'Lonely beach', category: 'beach', suggestedUse: 'Contemplative' },
  { filename: 'image119.jpeg', caption: 'Blueish beach Venice', category: 'beach', suggestedUse: 'Mood' },
  { filename: 'image120.jpeg', caption: 'Man fishing Venice', category: 'beach', suggestedUse: 'Character' },
  { filename: 'image123.jpeg', caption: 'Fisherman at cement blocks baiting up', category: 'beach', suggestedUse: 'Detail' },
  { filename: 'image124.jpeg', caption: 'Cool photo of Venice Beach in fog', category: 'beach', suggestedUse: 'Atmospheric hero' },
];

// ============================================
// VENICE ARCHITECTURE & STREETS (18 images)
// ============================================
export const architectureImages: ImageAsset[] = [
  { filename: 'image5.jpg', caption: 'Old time Venice Beach', category: 'architecture', suggestedUse: 'Historical context' },
  { filename: 'image25.jpeg', caption: 'Venice Beach bungalows', category: 'architecture', suggestedUse: 'Architecture' },
  { filename: 'image34.jpeg', caption: 'Old car Venice Beach', category: 'architecture', suggestedUse: 'Vintage Venice' },
  { filename: 'image48.jpeg', caption: 'Apartment pink at beach', category: 'architecture', suggestedUse: 'Architecture' },
  { filename: 'image51.jpeg', caption: 'Big modern house in Venice', category: 'architecture', suggestedUse: 'Gentrification' },
  { filename: 'image60.jpeg', caption: 'Ghastly modern home Venice', category: 'architecture', suggestedUse: 'Gentrification' },
  { filename: 'image64.jpeg', caption: 'Cool lights and palm trees at night', category: 'architecture', suggestedUse: 'Atmosphere' },
  { filename: 'image65.jpeg', caption: 'Bicycle and palm trees at night', category: 'architecture', suggestedUse: 'Iconic' },
  { filename: 'image67.jpeg', caption: 'At night shot cool light skyline of apartments', category: 'architecture', suggestedUse: 'Skyline' },
  { filename: 'image68.jpeg', caption: 'At night shot of distant beach', category: 'architecture', suggestedUse: 'Night' },
  { filename: 'image69.jpeg', caption: 'Apartment and beautiful sky at night', category: 'architecture', suggestedUse: 'Architecture' },
  { filename: 'image71.jpeg', caption: 'Venice hotel on Rose and Lincoln', category: 'architecture', suggestedUse: 'Location' },
  { filename: 'image80.jpeg', caption: 'Cool small house Venice at sunset', category: 'architecture', suggestedUse: 'Old Venice' },
  { filename: 'image81.jpeg', caption: 'Old black car Venice', category: 'architecture', suggestedUse: 'Vintage' },
  { filename: 'image85.jpeg', caption: 'Venice plant store at night', category: 'architecture', suggestedUse: 'Local business' },
  { filename: 'image86.jpeg', caption: 'Venice yard Santa surfing', category: 'architecture', suggestedUse: 'Quirky Venice' },
  { filename: 'image99.jpeg', caption: 'Old car Venice', category: 'architecture', suggestedUse: 'Vintage' },
  { filename: 'image104.jpeg', caption: 'Hideous new home Venice', category: 'architecture', suggestedUse: 'Gentrification' },
];

// ============================================
// MURALS & STREET ART (Not Ivo's) (16 images)
// ============================================
export const muralImages: ImageAsset[] = [
  { filename: 'image7.jpg', caption: 'Venice mural, not named', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image13.jpeg', caption: 'Painter unknown', category: 'murals', suggestedUse: 'Art scene' },
  { filename: 'image15.jpeg', caption: 'Venice pole art', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image21.jpeg', caption: 'Mural', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image30.jpeg', caption: 'Poll art', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image44.jpeg', caption: 'Pole art', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image54.jpeg', caption: 'Jim Morrison mural Venice', category: 'murals', suggestedUse: 'Iconic mural' },
  { filename: 'image56.jpeg', caption: 'Pole art', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image72.jpeg', caption: 'Venice Freaky ballet dancing male on building', category: 'murals', suggestedUse: 'Quirky' },
  { filename: 'image77.jpeg', caption: 'Touch of Evil mural', category: 'murals', suggestedUse: 'Film reference' },
  { filename: 'image87.jpeg', caption: 'Never fight a man with a perm sign', category: 'murals', suggestedUse: 'Humor' },
  { filename: 'image114.jpeg', caption: 'Lincoln street mural', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image115.jpeg', caption: 'Running with umbrella mural Lincoln', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image121.jpg', caption: 'Pole art', category: 'murals', suggestedUse: 'Street art' },
  { filename: 'image125.jpeg', caption: 'Angel statue on lawn', category: 'murals', suggestedUse: 'Art' },
  { filename: 'image134.jpeg', caption: 'Pole art', category: 'murals', suggestedUse: 'Street art' },
];

// ============================================
// HOMELESSNESS & SOCIAL ISSUES (9 images)
// ============================================
export const homelessnessImages: ImageAsset[] = [
  { filename: 'image6.jpeg', caption: 'Lincoln trash', category: 'homelessness', suggestedUse: 'Social issue' },
  { filename: 'image10.jpeg', caption: 'Homeless camp Venice', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image11.jpeg', caption: 'Homeless encampment Venice', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image37.jpeg', caption: 'Homeless tents Venice', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image38.jpeg', caption: 'Homeless camp Venice', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image39.jpeg', caption: 'Homeless tent near mural', category: 'homelessness', suggestedUse: 'Juxtaposition' },
  { filename: 'image100.jpeg', caption: 'Venice homeless camp', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image107.jpeg', caption: 'Homeless encampment at beach', category: 'homelessness', suggestedUse: 'Social documentation' },
  { filename: 'image141.jpeg', caption: 'Venice homeless', category: 'homelessness', suggestedUse: 'Social documentation' },
];

// ============================================
// GENTRIFICATION & DEVELOPMENT (8 images)
// ============================================
export const gentrificationImages: ImageAsset[] = [
  { filename: 'image9.jpeg', caption: 'Destruction for 5M house Venice', category: 'gentrification', suggestedUse: 'Gentrification story' },
  { filename: 'image70.jpeg', caption: 'Venice new construction', category: 'gentrification', suggestedUse: 'Development' },
  { filename: 'image73.jpeg', caption: 'Venice new apartments', category: 'gentrification', suggestedUse: 'Development' },
  { filename: 'image127.jpeg', caption: 'Venice modern house', category: 'gentrification', suggestedUse: 'Contrast' },
  { filename: 'image128.jpeg', caption: 'Venice new development', category: 'gentrification', suggestedUse: 'Development' },
  { filename: 'image135.jpeg', caption: 'Go home yuppies graffiti', category: 'gentrification', suggestedUse: 'Gentrification resistance' },
  { filename: 'image142.jpeg', caption: 'Strange dog sign Venice', category: 'gentrification', suggestedUse: 'Quirky' },
  { filename: 'image145.jpeg', caption: 'Resistance is your duty sign over highway', category: 'gentrification', suggestedUse: 'Political' },
];

// ============================================
// VENICE LIFE & CHARACTERS (23+ images)
// ============================================
export const veniceLifeImages: ImageAsset[] = [
  { filename: 'image4.jpg', caption: 'Venice Beach boardwalk scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image14.jpeg', caption: 'Venice Beach life', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image20.jpeg', caption: 'Venice Beach characters', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image27.jpeg', caption: 'Venice street scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image35.jpeg', caption: 'Venice neighborhood', category: 'venice-life', suggestedUse: 'Context' },
  { filename: 'image43.jpeg', caption: 'Venice Beach sunset life', category: 'venice-life', suggestedUse: 'Atmospheric' },
  { filename: 'image50.jpeg', caption: 'Venice Beach life scene', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image55.jpeg', caption: 'Venice boardwalk', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image61.jpeg', caption: 'Venice community', category: 'venice-life', suggestedUse: 'Community' },
  { filename: 'image62.jpeg', caption: 'Venice Beach scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image63.jpeg', caption: 'Venice Beach life', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image74.jpeg', caption: 'Venice Beach scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image76.jpeg', caption: 'Venice street life', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image89.jpeg', caption: 'Venice neighborhood life', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image91.jpeg', caption: 'Venice community scene', category: 'venice-life', suggestedUse: 'Community' },
  { filename: 'image92.jpeg', caption: 'Venice Beach characters', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image93.jpeg', caption: 'Venice life', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image94.jpeg', caption: 'Venice scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image95.jpeg', caption: 'Venice Beach life', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image97.jpeg', caption: 'Venice community', category: 'venice-life', suggestedUse: 'Community' },
  { filename: 'image105.jpeg', caption: 'Venice scene', category: 'venice-life', suggestedUse: 'Atmosphere' },
  { filename: 'image106.jpeg', caption: 'Venice characters', category: 'venice-life', suggestedUse: 'Character' },
  { filename: 'image109.jpeg', caption: 'Venice life', category: 'venice-life', suggestedUse: 'Atmosphere' },
];

// ============================================
// BRANDING ASSETS (2 images)
// ============================================
export const brandingImages: ImageAsset[] = [
  { filename: 'image66.png', caption: 'Venice Beach Love Stories banner', category: 'branding', suggestedUse: 'Logo/Banner' },
  { filename: 'image148.jpeg', caption: 'Venice Beach Love Stories sign', category: 'branding', suggestedUse: 'Hero/Branding' },
];

// ============================================
// HERO IMAGE RECOMMENDATIONS (from catalog)
// ============================================
export const heroImageRecommendations = {
  homepage: ['image32.jpeg', 'image124.jpeg', 'image148.jpeg'],
  stories: ['image75.jpeg'],
  about: ['image16.jpeg'],
  connect: ['image124.jpeg'],
  filmmaker: ['kerry-candaele.jpg'],
};

// ============================================
// CROSSOVER IMAGES (featuring multiple subjects)
// ============================================
export const crossoverImages: ImageAsset[] = [
  { filename: 'image17.jpeg', caption: 'Ivo at work. Tito Casillas in Zoot Suit', category: 'subject-ivo', suggestedUse: 'Crossover - Ivo & Tito', subject: 'ivo' },
  { filename: 'image58.jpeg', caption: "Ivo painting Jataun's face on mural", category: 'subject-ivo', suggestedUse: 'Crossover - Ivo & Jataun', subject: 'ivo' },
  { filename: 'image90.jpeg', caption: 'Ivo working on Jataun at night', category: 'subject-ivo', suggestedUse: 'Crossover - Ivo & Jataun', subject: 'ivo' },
  { filename: 'image116.jpeg', caption: 'Ivo mural with Tito and Jataun', category: 'subject-ivo', suggestedUse: 'KEY SHOT - All three subjects', subject: 'ivo' },
];

// ============================================
// ALL IMAGES COMBINED
// ============================================
export const allImages: ImageAsset[] = [
  ...ivoImages,
  ...jataunImages,
  ...titoImages,
  ...lanceImages,
  ...beachImages,
  ...architectureImages,
  ...muralImages,
  ...homelessnessImages,
  ...gentrificationImages,
  ...veniceLifeImages,
  ...brandingImages,
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getImagesByCategory(category: ImageAsset['category']): ImageAsset[] {
  return allImages.filter(img => img.category === category);
}

export function getImagesBySubject(subject: 'ivo' | 'jataun' | 'tito' | 'lance' | 'skateboarder'): ImageAsset[] {
  return allImages.filter(img => img.subject === subject);
}

export function getHeroImages(): ImageAsset[] {
  return allImages.filter(img => img.suggestedUse.toUpperCase().includes('HERO'));
}
