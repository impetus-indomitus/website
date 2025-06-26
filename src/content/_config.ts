import { defineCollection, z } from 'astro:content';


const researchTeams = defineCollection({
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    description: z.string(),
    mission: z.string(),
    vision: z.string(),
    topics: z.array(z.string()),
    director: z.object({
      name: z.string(),
      image: z.string(),
    }),
    members: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        cvlac: z.string().url(),
        orcid: z.string().url(),
      })
    ),
    projects: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        authors: z.string(),
        link: z.string().url(),
        image: z.string(),
      })
    )
  }),
});


const membersCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        cvlac: z.string().url(),
        orcid: z.string().url(),
      })
    ),
  }),
});

export const collections = {
  'research-teams': researchTeams,
  'members': membersCollection,
};