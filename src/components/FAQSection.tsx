import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'WHAT IS SHREYAS SWARNA.AI?',
    answer:
      '“It\'s an upcoming personalised gold jewellery initiative under Shreyas Group, focused on helping customers explore their own design ideas.”',
  },
  {
    question: 'CAN I CREATE MY OWN JEWELLERY DESIGN?',
    answer:
      '“The vision is to help customers explore personalised design concepts. Every design must be checked for practical manufacturing before it can be made.”',
  },
  {
    question: 'WHEN WILL THE SERVICE LAUNCH?',
    answer:
      '“We are preparing the initiative for launch. Pre-register for early access to receive official launch announcements and updates.”',
  },
  {
    question: 'CAN MY JEWELLERY STORE JOIN?',
    answer:
      '“We\'re exploring partnerships with independent jewellery retailers. Contact us to discuss your interest.”',
  },
  {
    question: 'CAN I INVEST OR PARTNER WITH THE VENTURE?',
    answer:
      '“You can contact our team to express interest in a potential business or strategic partnership.”',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 border-b border-white/5 bg-[#0C0C0C]">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-[#EBD38D] font-semibold mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            A FEW THINGS YOU SHOULD KNOW.
          </h2>
          <p className="mt-4 text-base text-[#C0BCB5]">
            Key details about our upcoming venture, design exploration, and partnership network.
          </p>
        </div>

        {/* Framer Style Accordion with Rounded-2xl Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C6A15B]/40 bg-[#161616] shadow-xl'
                    : 'border-white/10 bg-[#121212] hover:border-white/20 hover:bg-[#141414]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3
                    className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#EBD38D] transition-colors pr-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shrink-0 group-hover:border-[#C6A15B]/50 transition-colors">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#C6A15B]" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-[#C0BCB5] leading-relaxed border-t border-white/5 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
