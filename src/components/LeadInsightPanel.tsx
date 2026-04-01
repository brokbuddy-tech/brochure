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
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-headline py-7 text-xl tracking-[0.1em] transition-all duration-500 glow-primary animate-pulse-soft uppercase shadow-2xl rounded-full">
          BOOK A DISCOVERY CALL
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card border-primary/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">AI Lead Quality Scoring</DialogTitle>
        </DialogHeader>
        
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Lead Name</Label>
                <Input id="name" name="name" placeholder="John Smith" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (AUD)</Label>
                <Input id="budget" name="budget" type="number" placeholder="1500000" required className="bg-background" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Suburb</Label>
                <Input id="location" name="location" placeholder="Bondi, NSW" required className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Property Type</Label>
                <Input id="type" name="type" placeholder="Luxury Apartment" required className="bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="motivation">Motivation</Label>
              <Input id="motivation" name="motivation" placeholder="Investment opportunity / Downsizing" required className="bg-background" />
            </div>
            
            <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Zap className="mr-2 h-4 w-4" />}
              Generate AI Insights
            </Button>
          </form>
        ) : (
          <div className="space-y-6 mt-4 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">Lead Quality Score</p>
                  <p className="text-4xl font-headline text-primary">{result.leadQualityScore}/100</p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary text-primary text-lg px-4 py-1">
                {result.leadQualityScore > 80 ? 'Elite' : result.leadQualityScore > 60 ? 'Strong' : 'Moderate'}
              </Badge>
            </div>

            <div className="space-y-3">
              <h4 className="flex items-center font-headline text-lg text-secondary">
                <TrendingUp className="w-5 h-5 mr-2" />
                Concise Insights
              </h4>
              <div className="bg-background/50 p-4 rounded-lg text-sm font-body leading-relaxed whitespace-pre-line">
                {result.conciseInsights}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="flex items-center font-headline text-lg text-primary">
                <Zap className="w-5 h-5 mr-2" />
                Next Steps Recommendations
              </h4>
              <div className="bg-primary/5 p-4 rounded-lg text-sm font-body border-l-2 border-primary">
                {result.nextStepsRecommendations}
              </div>
            </div>

            <Button onClick={() => setResult(null)} variant="outline" className="w-full">
              Analyze Another Lead
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
