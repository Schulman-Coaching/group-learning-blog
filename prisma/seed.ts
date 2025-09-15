import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Louis Ormont
  const louisOrmont = await prisma.author.create({
    data: {
      name: 'Louis Ormont',
      bio: 'Louis Ormont (1918-2008) was a pioneering group psychoanalyst known for his work on group process, resistance, and the bridge technique. He was a founding member of the American Group Psychotherapy Association and made significant contributions to understanding group dynamics and therapeutic interventions.',
      birthYear: 1918,
      deathYear: 2008,
      nationality: 'American',
    },
  })

  // Create other notable group psychoanalysts
  const irvinYalom = await prisma.author.create({
    data: {
      name: 'Irvin D. Yalom',
      bio: 'Irvin D. Yalom is an American existential psychiatrist and emeritus professor of psychiatry at Stanford University. He is the author of several influential books including The Theory and Practice of Group Psychotherapy.',
      birthYear: 1931,
      nationality: 'American',
    },
  })

  const wilfredBion = await prisma.author.create({
    data: {
      name: 'Wilfred Bion',
      bio: 'Wilfred Ruprecht Bion was a British psychoanalyst who became a influential figure in the development of group dynamics and psychoanalysis. His work on group processes and basic assumptions remains foundational.',
      birthYear: 1897,
      deathYear: 1979,
      nationality: 'British',
    },
  })

  // Create Louis Ormont's key writings
  await prisma.writing.create({
    data: {
      title: 'The Group Therapy Experience',
      content: 'Louis Ormonts The Group Therapy Experience represents one of his most comprehensive works on group psychotherapy. In this seminal work, Ormont explores the intricate dynamics of therapeutic groups, emphasizing the importance of emotional accessibility and the role of the therapist as both facilitator and participant. The book delves into Ormonts signature bridge technique, which helps group members connect their individual experiences to the group process. He demonstrates how resistance manifests in group settings and provides practical interventions for working through therapeutic impasses.',
      excerpt: 'A comprehensive exploration of group therapy dynamics, introducing Ormonts revolutionary bridge technique and practical interventions for therapeutic groups.',
      type: 'BOOK',
      year: 1992,
      tags: JSON.stringify(['group therapy', 'bridge technique', 'resistance', 'therapeutic process']),
      authorId: louisOrmont.id,
    },
  })

  await prisma.writing.create({
    data: {
      title: 'The Bridge Technique in Group Psychotherapy',
      content: 'The Bridge Technique, developed by Louis Ormont, represents a sophisticated method for helping group members connect their individual experiences to the group process. This technique addresses the common problem of members discussing issues abstractly rather than experiencing them emotionally in the present moment. The bridge technique involves several steps: identifying when a member is discussing rather than experiencing, gently interrupting the intellectual discussion, inviting the member to explore their current feelings, connecting these feelings to the group process, and inviting other members to respond to what they are experiencing.',
      excerpt: 'Detailed explanation of Ormonts signature bridge technique for transforming intellectual discussions into emotional experiences in group therapy.',
      type: 'ESSAY',
      year: 1988,
      tags: JSON.stringify(['bridge technique', 'group process', 'resistance', 'emotional engagement']),
      authorId: louisOrmont.id,
    },
  })

  await prisma.writing.create({
    data: {
      title: 'Resistance in Group Psychotherapy: A Process Approach',
      content: 'Louis Ormonts approach to resistance in group psychotherapy emphasizes understanding resistance as a creative adaptation rather than simply an obstacle to treatment. He views resistance as the clients attempt to protect themselves from perceived threats to their psychological equilibrium. In group settings, resistance manifests in multiple ways: individual resistance patterns that emerge in the group context, group-level resistance that affects the entire therapeutic process, resistance to the group leader and group norms, and resistance to emotional intimacy with other group members.',
      excerpt: 'Ormonts process-oriented approach to understanding and working with resistance in group psychotherapy, viewing resistance as creative adaptation.',
      type: 'RESEARCH_PAPER',
      year: 1995,
      tags: JSON.stringify(['resistance', 'group process', 'therapeutic technique', 'defense mechanisms']),
      authorId: louisOrmont.id,
    },
  })

  await prisma.writing.create({
    data: {
      title: 'The Therapists Use of Self in Group Psychotherapy',
      content: 'Louis Ormonts conceptualization of the therapists use of self in group psychotherapy emphasizes the therapists role as both facilitator and participant in the group process. Unlike traditional models that position the therapist as an outside observer, Ormonts approach involves active engagement while maintaining therapeutic boundaries. Key aspects include authentic emotional responses to group members, strategic self-disclosure when therapeutically indicated, use of the therapists emotional reactions as diagnostic information, modeling emotional accessibility and vulnerability, and balancing participation with professional role.',
      excerpt: 'Examination of how group therapists can effectively use their own emotional responses and authentic engagement to facilitate therapeutic process.',
      type: 'ARTICLE',
      year: 1990,
      tags: JSON.stringify(['therapeutic relationship', 'therapist self', 'group facilitation', 'emotional engagement']),
      authorId: louisOrmont.id,
    },
  })

  // Create writings for other authors
  await prisma.writing.create({
    data: {
      title: 'The Theory and Practice of Group Psychotherapy',
      content: 'Irvin Yaloms comprehensive work on group psychotherapy theory and practice, covering therapeutic factors, group development, and practical techniques for group facilitation. This classic textbook has been updated through multiple editions and remains a foundational text for group therapists worldwide.',
      excerpt: 'Classic textbook on group psychotherapy covering theory, practice, and therapeutic factors in group treatment.',
      type: 'BOOK',
      year: 1970,
      tags: JSON.stringify(['group therapy', 'therapeutic factors', 'group development']),
      authorId: irvinYalom.id,
    },
  })

  await prisma.writing.create({
    data: {
      title: 'Experiences in Groups',
      content: 'Wilfred Bions foundational work on group dynamics and basic assumptions, introducing concepts that remain central to understanding group behavior and therapeutic group processes. Bion introduced the idea that groups operate under basic assumptions that can interfere with their work task.',
      excerpt: 'Bions seminal work on group dynamics, introducing the concept of basic assumptions in group behavior.',
      type: 'BOOK',
      year: 1961,
      tags: JSON.stringify(['group dynamics', 'basic assumptions', 'group psychology']),
      authorId: wilfredBion.id,
    },
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })