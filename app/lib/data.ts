export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  authorId: string;
  category: string;
  image: string;
}

export const authors: Author[] = [
  {
    id: "1",
    name: "Brandon",
    slug: "brandon",
    role: "Pest Control Expert",
    bio: "Brandon has over 15 years of experience in the pest control industry, specializing in remote monitoring technologies.",
    avatar: "/api/placeholder/100/100" // Placeholder for now
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    slug: "sarah-jenkins",
    role: "Entomologist",
    bio: "Sarah is a certified entomologist passionate about sustainable pest management solutions.",
    avatar: "/api/placeholder/100/100"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How Chip Emmons Evolved His Operations with Skyhawk Trapmate's Kiwi Plus",
    slug: "chip-emmons-operations-kiwi-plus",
    excerpt: "The introduction of Trapmate's Kiwi Plus transformed Chip's approach to trapping, allowing him to scale his operations and boost profitability.",
    content: `
      <p>The pest control industry is rapidly evolving, and professionals like Chip Emmons are leading the charge by adopting new technologies.</p>
      <h2>The Challenge</h2>
      <p>Chip faced a common problem: too much time spent checking empty traps. This inefficiency limited the number of clients he could serve and increased his operational costs.</p>
      <h2>The Solution</h2>
      <p>By implementing Skyhawk Trapmate's Kiwi Plus, Chip was able to monitor traps remotely. This device attaches to existing traps and sends an alert when activity is detected.</p>
      <h2>The Results</h2>
      <p>Since adopting the Kiwi Plus, Chip has reduced his site visits by 60%, allowing him to take on more clients without hiring additional staff. "It's a game changer," says Chip.</p>
    `,
    date: "Dec 09, 2025",
    authorId: "1",
    category: "Case Study",
    image: "/api/placeholder/800/400"
  },
  {
    id: "2",
    title: "Roof Rat Removal: Outsmarting This Wily Rodent with Remote Monitoring",
    slug: "roof-rat-removal-remote-monitoring",
    excerpt: "Roof rats (rattus rattus) have proven to be one of the most challenging and dangerous rodents in the U.S. today.",
    content: `
      <p>Roof rats are notoriously difficult to catch. They are agile, cautious, and often located in hard-to-reach areas like attics and rooflines.</p>
      <h2>Why Remote Monitoring Matters</h2>
      <p>Checking traps in an attic is time-consuming and can be dangerous. Remote monitoring allows technicians to know exactly when a trap has been triggered, preventing necessary trips up the ladder.</p>
      <p>Using Trapmate sensors, you can monitor roof rat activity 24/7 without disturbing the environment, leading to faster capture rates.</p>
    `,
    date: "Nov 28, 2025",
    authorId: "1",
    category: "Pest Control",
    image: "/api/placeholder/800/400"
  },
  {
    id: "3",
    title: "Solving a Residential Infestation with Trapmate",
    slug: "solving-residential-infestation",
    excerpt: "St. Peter Pest Control received an urgent request for service from a residential property owner. Inspecting the home revealed a severe rodent infestation.",
    content: `
      <p>Residential infestations require a delicate touch. Homeowners want the problem solved quickly and discreetly.</p>
      <h2>The Approach</h2>
      <p>St. Peter Pest Control deployed a network of Trapmate sensors throughout the home. This allowed them to map the rodent activity hotspots effectively.</p>
      <h2>Outcome</h2>
      <p>Within 48 hours, the team had identified entry points and captured the primary breeding pair. The homeowner was thrilled with the speed and efficiency of the service.</p>
    `,
    date: "Nov 15, 2025",
    authorId: "2",
    category: "Case Study",
    image: "/api/placeholder/800/400"
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export function getAuthorBySlug(slug: string) {
  return authors.find(author => author.slug === slug);
}

export function getPostsByAuthor(authorId: string) {
  return blogPosts.filter(post => post.authorId === authorId);
}

