'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating an AI-powered lead quality score and concise insights for Australian real estate agents.
 *
 * - aiLeadInsightAndScoring - A function that handles the AI lead insight and scoring process.
 * - AiLeadInsightAndScoringInput - The input type for the aiLeadInsightAndScoring function.
 * - AiLeadInsightAndScoringOutput - The return type for the aiLeadInsightAndScoring function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiLeadInsightAndScoringInputSchema = z.object({
  leadName: z.string().describe('The name of the real estate lead.'),
  leadEmail: z.string().email().optional().describe('The lead\u0027s email address.'),
  leadPhone: z.string().optional().describe('The lead\u0027s phone number.'),
  leadBudget: z.number().describe('The lead\u0027s budget in Australian Dollars (AUD).'),
  leadPreferredLocation: z.string().describe('The lead\u0027s preferred suburb or area in Australia.'),
  leadPreferredPropertyType: z.string().describe('e.g., House, Apartment, Townhouse, Land.').describe('The lead\u0027s preferred property type.'),
  leadMotivation: z.string().describe('Brief description of the lead\u0027s motivation for buying/selling (e.g., upsizing, first home buyer, investment).'),
  marketOverview: z.string().describe('Current general market conditions for the specified preferred location (e.g., "seller\u0027s market with low inventory", "stable market with moderate demand") relevant to the Australian real estate market.'),
  propertyMatchDescription: z.string().describe('Description of how well available properties match the lead\u0027s preferences and budget.'),
});
export type AiLeadInsightAndScoringInput = z.infer<typeof AiLeadInsightAndScoringInputSchema>;

const AiLeadInsightAndScoringOutputSchema = z.object({
  leadQualityScore: z.number().min(0).max(100).describe('A score from 0 to 100, indicating the potential quality of the lead, with 100 being highest potential.'),
  conciseInsights: z.string().describe('Concise, bullet-point insights about the lead\u0027s potential and key characteristics relevant to the Australian real estate market.'),
  nextStepsRecommendations: z.string().describe('Actionable recommendations for the real estate agent, specific to the Australian context, to engage with this lead.'),
});
export type AiLeadInsightAndScoringOutput = z.infer<typeof AiLeadInsightAndScoringOutputSchema>;

export async function aiLeadInsightAndScoring(input: AiLeadInsightAndScoringInput): Promise<AiLeadInsightAndScoringOutput> {
  return aiLeadInsightAndScoringFlow(input);
}

const aiLeadInsightAndScoringPrompt = ai.definePrompt({
  name: 'aiLeadInsightAndScoringPrompt',
  input: { schema: AiLeadInsightAndScoringInputSchema },
  output: { schema: AiLeadInsightAndScoringOutputSchema },
  prompt: `You are an expert real estate analyst specializing in the Australian property market. Your task is to evaluate a lead and provide a quality score, concise insights, and actionable next steps for a real estate agent. Focus on identifying strong potential and highlighting any red flags or challenges.

Here is the lead information:
Lead Name: {{{leadName}}}
Lead Email: {{{leadEmail}}}
Lead Phone: {{{leadPhone}}}
Lead Budget: AUD {{{leadBudget}}}
Preferred Location: {{{leadPreferredLocation}}}
Preferred Property Type: {{{leadPreferredPropertyType}}}
Lead Motivation: {{{leadMotivation}}}

Market Overview for {{{leadPreferredLocation}}}: {{{marketOverview}}}
Property Match Description: {{{propertyMatchDescription}}}

Based on this information, generate the following:
1. A 'leadQualityScore' from 0 (very low potential) to 100 (very high potential).
2. 'conciseInsights' as bullet points summarizing the lead's potential and key characteristics, considering the Australian market specifics.
3. 'nextStepsRecommendations' as actionable advice for the agent to best engage with this lead in the Australian context.`,
});

const aiLeadInsightAndScoringFlow = ai.defineFlow(
  {
    name: 'aiLeadInsightAndScoringFlow',
    inputSchema: AiLeadInsightAndScoringInputSchema,
    outputSchema: AiLeadInsightAndScoringOutputSchema,
  },
  async (input) => {
    const { output } = await aiLeadInsightAndScoringPrompt(input);
    return output!;
  }
);
