import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqData = [
  {
    question: "What is Bolt?",
    answer: "Bolt is an expert AI assistant and exceptional senior software developer created by StackBlitz. It has vast knowledge across multiple programming languages, frameworks, and best practices."
  },
  {
    question: "How can Bolt help me?",
    answer: "Bolt can assist you with various programming tasks, answer technical questions, provide code examples, and offer guidance on best practices in software development."
  },
  {
    question: "Is Bolt available 24/7?",
    answer: "Yes, Bolt is available 24/7 to assist you with your programming needs and questions."
  },
  {
    question: "Can Bolt write code in multiple languages?",
    answer: "Absolutely! Bolt has expertise in multiple programming languages and can provide code examples and solutions in various languages and frameworks."
  },
  {
    question: "How do I get started with Bolt?",
    answer: "To get started with Bolt, simply ask a question or describe a programming task you need help with. Bolt will provide you with a detailed and helpful response."
  }
]

function FAQ() {
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

export default FAQ