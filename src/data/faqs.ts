export interface FAQItem {
  question: string;
  answer: string;
  category?: "general" | "booking" | "kashmir" | "ski";
}

export const generalFaqs: FAQItem[] = [
  {
    question: "How does booking work, and what are the payment terms?",
    answer:
      "You send an enquiry through our form, WhatsApp or a quick call, and our local team prepares a tailored itinerary with an all-inclusive quote within 24 hours. To confirm your dates, a 25% advance secures all hotels, private vehicle permits, and guides. The remaining balance can be settled anytime before your tour starts via bank transfer or UPI.",
    category: "booking",
  },
  {
    question: "Can I customize the tour itinerary according to our family or group needs?",
    answer:
      "Yes. Every tour we operate is private. You can add extra days in Gulmarg or Pahalgam, choose specific boutique houseboats on Dal Lake, adjust daily activity paces, or request child and elderly-friendly arrangements.",
    category: "general",
  },
  {
    question: "When is the best season to visit Kashmir and Gulmarg?",
    answer:
      "For snow and powder skiing, December through March is peak season. For lush meadows, blooming gardens, and mild mountain weather, April through August is ideal. September to November brings golden autumn foliage across the Chinar trees.",
    category: "kashmir",
  },
  {
    question: "Do you provide equipment and lessons for first-time skiers in Gulmarg?",
    answer:
      "Yes. We arrange certified local ski instructors, premium rental skis, boots, and poles fitted the evening before your first session, plus gondola pass logistics so beginners learn safely and comfortably on beginner-friendly slopes.",
    category: "ski",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Cancellations 21 days or more prior to departure receive a full refund. Cancellations between 14 and 20 days receive a 50% refund. Within 14 days, we work transparently to recover and refund everything possible from hotels and transport partners.",
    category: "booking",
  },
  {
    question: "Who will be guiding and driving us during the trip?",
    answer:
      "You are guided by our own verified mountain guides and experienced local drivers who grew up in the valley and know the mountain roads, passes, and weather patterns inside out. A dedicated trip coordinator is also available 24/7 on WhatsApp.",
    category: "general",
  },
];
