export type EvidenceItem = {
  id: string;
  title: string;
  category: string;
  date?: string;
  issuer?: string;
  description: string;
  image?: string;
  document?: string;
};

// Keep this file as the single place to add/edit portfolio content.
// Future entries are intentionally empty and therefore do not appear publicly.
export const futureEntries: EvidenceItem[] = [
  // { id: 'mun-2026', title: 'Model United Nations', category: 'Leadership & Involvement', description: 'Add an approved description.', image: '/assets/mun-photo.jpg' },
  // { id: 'debate-02', title: 'Additional debate certificate', category: 'Public Speaking & Debate', description: 'Add an approved description.', image: '/assets/debate-certificate.jpg' },
  // { id: 'organising', title: 'Debate competition organising', category: 'Leadership & Involvement', description: 'Add event details and evidence.', image: '/assets/event-photo.jpg' },
  // { id: 'other-position', title: 'Additional appointment', category: 'Leadership & Involvement', description: 'Add position and organisation.', document: '/assets/appointment.pdf' },
  // { id: 'other-achievement', title: 'Additional achievement', category: 'Achievements', description: 'Add a verified description.', image: '/assets/achievement.jpg' },
];

export const links = {
  paradigmShift: 'https://bhavyatuhin.github.io/Paradigm-Shift-/',
  bangUjBridge: 'https://ban-guj-bridge.vercel.app/',
  drifted: 'https://www.wattpad.com/story/409152215-drifted-from-lost-to-self-directed',
  womenSafetyArticle: 'https://bhavyaai.wordpress.com/protected-on-paper-vulnerable-in-practice-indias-womens-safety-crisis/',
};
