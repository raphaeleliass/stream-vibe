import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqContent = [
  {
    title: "What is StreamVibe?",
    content:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    title: "How much does StreamVibe cost?",
    content:
      "StreamVibe offers different subscription plans starting at $9.99 per month. Prices may vary based on your region and selected plan.",
  },
  {
    title: "What content is available on StreamVibe?",
    content:
      "StreamVibe offers a wide variety of movies, TV shows, and exclusive content from different genres including action, drama, comedy, and documentaries.",
  },
  {
    title: "How can I watch StreamVibe?",
    content:
      "You can watch StreamVibe on various devices such as smart TVs, smartphones, tablets, computers, and streaming devices like Roku or Chromecast.",
  },
  {
    title: "How do I sign up for StreamVibe?",
    content:
      "To sign up, visit the StreamVibe website or download the app on your device. Click 'Sign Up', choose a subscription plan, and follow the instructions to create your account.",
  },
  {
    title: "What is the StreamVibe free trial?",
    content:
      "StreamVibe offers a 7-day free trial for new users. During this period, you can explore the platform and access all content without being charged.",
  },
  {
    title: "How do I contact StreamVibe customer support?",
    content:
      "You can contact StreamVibe customer support through the 'Help' section on the website or app, where you'll find options for live chat, email, or phone support.",
  },
  {
    title: "What are the StreamVibe payment methods?",
    content:
      "StreamVibe accepts various payment methods including credit/debit cards, PayPal, and select mobile payment services, depending on your region.",
  },
];

function Faq() {
  return (
    <>
      <Accordion
        type="single"
        className="grid grid-cols-1 gap-x-6 md:grid-cols-2"
      >
        {faqContent.map((item, index) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>
              <div className="flex size-10 items-center justify-center rounded-lg bg-zinc-700 font-Poppins text-sm">
                0{index + 1}
              </div>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Faq;
