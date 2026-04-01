"use client";

import React, { useState } from 'react';
import { aiLeadInsightAndScoring, AiLeadInsightAndScoringOutput } from '@/ai/flows/ai-lead-insight-and-scoring-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Loader2, Zap, Target, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function LeadInsightPanel() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiLeadInsightAndScoringOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const output = await aiLeadInsightAndScoring({
        leadName: formData.get('name') as string,
        leadBudget: Number(formData.get('budget')),
        leadPreferredLocation: formData.get('location') as string,
        leadPreferredPropertyType: formData.get('type') as string,
        leadMotivation: formData.get('motivation') as string,
        marketOverview: "Growing demand in Australian metropolitan areas with limited supply.",
        propertyMatchDescription: "Strong alignment with luxury apartment trends in requested suburbs."
      });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-headline py-8 text-xl tracking-[0.15em] transition-all duration-500 uppercase shadow-2xl rounded-2xl animate-pulse-soft">
          BOOK A DISCOVERY CALL
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-primary/20 max-h-[90vh] overflow-y-auto rounded-[2.5rem]">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl text-primary">AI Lead Quality Scoring</DialogTitle>
          <p className="text-sm font-body text-muted-foreground">Preview our LQS technology before your 15-minute walkthrough.</p>
        </DialogHeader>
        
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-foreground/50">Lead Name</Label>
                <Input id="name" name="name" placeholder="John Smith" required className="bg-background/50 border-foreground/10 h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-xs uppercase tracking-widest text-foreground/50">Budget (AUD)</Label>
                <Input id="budget" name="budget" type="number" placeholder="1500000" required className="bg-background/50 border-foreground/10 h-12 rounded-xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-xs uppercase tracking-widest text-foreground/50">Suburb</Label>
                <Input id="location" name="location" placeholder="Bondi, NSW" required className="bg-background/50 border-foreground/10 h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-xs uppercase tracking-widest text-foreground/50">Property Type</Label>
                <Input id="type" name="type" placeholder="Luxury Apartment" required className="bg-background/50 border-foreground/10 h-12 rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-xs uppercase tracking-widest text-foreground/50">Motivation</Label>
              <Input id="motivation" name="motivation" placeholder="Investment opportunity / Downsizing" required className="bg-background/50 border-foreground/10 h-12 rounded-xl" />
            </div>
            
            <Button type="submit" disabled={loading} className="w-full h-14 bg-primary text-primary-foreground text-lg rounded-xl">
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Zap className="mr-2 h-5 w-5" />}
              Generate AI Insights
            </Button>
          </form>
        ) : (
          <div className="space-y-8 mt-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between p-8 bg-primary/5 rounded-[1.5rem] border border-primary/20">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Lead Quality Score</p>
                  <p className="text-5xl font-headline text-primary">{result.leadQualityScore}<span className="text-lg opacity-40">/100</span></p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary text-sm px-4 py-1.5 uppercase tracking-widest">
                {result.leadQualityScore > 80 ? 'Elite' : result.leadQualityScore > 60 ? 'Strong' : 'Moderate'}
              </Badge>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center font-headline text-xl text-foreground">
                <TrendingUp className="w-5 h-5 mr-3 text-primary" />
                Strategic Insights
              </h4>
              <div className="bg-background/50 p-6 rounded-2xl text-sm font-body leading-relaxed whitespace-pre-line border border-foreground/5">
                {result.conciseInsights}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center font-headline text-xl text-foreground">
                <Zap className="w-5 h-5 mr-3 text-primary" />
                Actionable Recommendations
              </h4>
              <div className="bg-primary/5 p-6 rounded-2xl text-sm font-body border-l-4 border-primary">
                {result.nextStepsRecommendations}
              </div>
            </div>

            <Button onClick={() => setResult(null)} variant="outline" className="w-full h-12 rounded-xl border-foreground/10 hover:bg-background">
              Analyze Another Lead
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}