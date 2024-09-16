"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Frequently Asked Questions</h1>
          <p className="mt-4 text-muted-foreground">Get answers to common questions about mental health.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="depression">
            <AccordionTrigger className="text-black flex items-center justify-between bg-muted px-4 py-3 rounded-lg text-lg font-medium transition-transform duration-300 hover:bg-primary hover:text-white hover:scale-105">
              What is depression and how can I get help?
              <div className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-90" />
            </AccordionTrigger>
            <AccordionContent className="text-black px-4 py-3 text-muted-foreground h-[200px] overflow-y-auto">
              Depression is a mental health condition characterized by persistent feelings of sadness, hopelessness, and loss of interest. If you're struggling with depression, it's important to seek professional help. Speak to your doctor or a mental health therapist who can provide treatment options like therapy and medication.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="anxiety">
            <AccordionTrigger className="text-black flex items-center justify-between bg-muted px-4 py-3 rounded-lg text-lg font-medium transition-transform duration-300 hover:bg-primary hover:text-white hover:scale-105">
              How can I manage my anxiety?
              <div className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-90" />
            </AccordionTrigger>
            <AccordionContent className="text-black px-4 py-3 text-muted-foreground h-[200px] overflow-y-auto">
              Anxiety is a normal response to stress, but when it becomes excessive or unmanageable, it can negatively impact your daily life. Some effective strategies for managing anxiety include practicing relaxation techniques like deep breathing, meditation, or yoga, getting regular exercise, and talking to a therapist who can provide cognitive-behavioral therapy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="stress">
            <AccordionTrigger className="text-black flex items-center justify-between bg-muted px-4 py-3 rounded-lg text-lg font-medium transition-transform duration-300 hover:bg-primary hover:text-white hover:scale-105">
              What are some healthy ways to manage stress?
              <div className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-90" />
            </AccordionTrigger>
            <AccordionContent className="text-black px-4 py-3 text-muted-foreground h-[200px] overflow-y-auto">
              Chronic stress can have negative impacts on both your mental and physical health. Some healthy ways to manage stress include getting enough sleep, eating a balanced diet, engaging in regular exercise, practicing mindfulness or meditation, and making time for activities you enjoy. It's also important to set boundaries and learn to say no when necessary.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="therapy">
            <AccordionTrigger className="text-black flex items-center justify-between bg-muted px-4 py-3 rounded-lg text-lg font-medium transition-transform duration-300 hover:bg-primary hover:text-white hover:scale-105">
              How do I know if I need therapy?
              <div className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-90" />
            </AccordionTrigger>
            <AccordionContent className="text-black px-4 py-3 text-muted-foreground h-[200px] overflow-y-auto">
              Therapy can be beneficial for a wide range of mental health concerns, from depression and anxiety to relationship issues and trauma. If you're experiencing persistent emotional or behavioral challenges that are interfering with your daily life, it may be time to consider speaking with a licensed therapist. They can help you develop coping strategies and work towards improving your overall mental well-being.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
