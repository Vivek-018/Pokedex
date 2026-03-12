import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const pokemonSelect = {
  id: true,
  name: true,
  types: true,
  spriteUrl: true,
} as const;

export const pokemonRouter = createTRPCRouter({
  getByName: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const pokemon = await ctx.prisma.pokemon.findUnique({
        where: { name: input.name },
        select: pokemonSelect,
      });
      return pokemon;
    }),

  getManyByNames: publicProcedure
    .input(
      z.object({
        names: z.array(z.string().min(1)),
      }),
    )
    .query(async ({ ctx, input }) => {
      const pokemon = await ctx.prisma.pokemon.findMany({
        where: {
          name: {
            in: input.names,
          },
        },
        select: pokemonSelect,
        orderBy: { id: "asc" },
      });
      return pokemon;
    }),

  getByType: publicProcedure
    .input(
      z.object({
        type: z.string().min(1).optional(),
        page: z.number().int().min(1).default(1),
        pageSize: z.number().int().min(1).max(50).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { type, page, pageSize } = input;

      const where = type
        ? {
            types: {
              has: type,
            },
          }
        : {};

      const [items, total] = await Promise.all([
        ctx.prisma.pokemon.findMany({
          where,
          select: pokemonSelect,
          orderBy: { id: "asc" },
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        ctx.prisma.pokemon.count({ where }),
      ]);

      return {
        items,
        total,
        page,
        pageSize,
      };
    }),

  getAllTypes: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.prisma.pokemon.findMany({
      select: { types: true },
    });
    const typeSet = new Set<string>();
    rows.forEach((row) => {
      row.types.forEach((t) => typeSet.add(t));
    });
    return Array.from(typeSet).sort();
  }),
});

