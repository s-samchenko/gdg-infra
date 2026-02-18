'use client';

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate in the conference?",
    a: "The event is open to everyone, and there is no fee associated with participation.",
  },
  {
    q: "How do I participate in the Case Competition?",
    a: "During your registration, there will be a question at the end where you can select to participate & we will send you out the case ahead of the event with details.",
  },
  {
    q: "When does BWAI start?",
    a: "At 10:00 am ET, on March 28th.",
  },
  {
    q: "Do I need prior AI experience to attend?",
    a: "No prior AI experience is required.",
  },
  {
    q: "How many people can be in my team for the Case Competition?",
    a: "You may be alone, or form a team of up to 3 participants.",
  },
  {
    q: "Will there be Food?",
    a: "We'll have breakfast & lunch accommodated, make sure to list your dietary restrictions when you apply!",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [maxExpandedHeights, setMaxExpandedHeights] = useState<{ [key: number]: number }>({});
  const [maxCollapsedHeights, setMaxCollapsedHeights] = useState<{ [key: number]: number }>({});
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenItems(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  // Calculate max expanded and collapsed heights for each row
  useEffect(() => {
    const calculateMaxHeights = () => {
      const expandedHeights: { [key: number]: number } = {};
      const collapsedHeights: { [key: number]: number } = {};

      // Process cards in pairs (rows of 2)
      for (let i = 0; i < faqs.length; i += 2) {
        const header1 = headerRefs.current[i];
        const header2 = headerRefs.current[i + 1];
        const answer1 = answerRefs.current[i];
        const answer2 = answerRefs.current[i + 1];

        if (header1 && header2) {
          // Calculate max header height for this row
          const headerHeight1 = header1.offsetHeight;
          const headerHeight2 = header2.offsetHeight;
          const maxHeaderHeight = Math.max(headerHeight1, headerHeight2);

          // Collapsed height = max header height
          collapsedHeights[i] = maxHeaderHeight;
          collapsedHeights[i + 1] = maxHeaderHeight;

          // For expanded height, use the SAME max header height for both cards
          if (answer1 && answer2) {
            const answerHeight1 = answer1.scrollHeight;
            const answerHeight2 = answer2.scrollHeight;
            const maxAnswerHeight = Math.max(answerHeight1, answerHeight2);

            // Both cards use max header + max answer
            const maxTotalHeight = maxHeaderHeight + maxAnswerHeight;

            expandedHeights[i] = maxTotalHeight;
            expandedHeights[i + 1] = maxTotalHeight;
          } else if (answer1) {
            expandedHeights[i] = maxHeaderHeight + answer1.scrollHeight;
          }
        }
      }

      setMaxExpandedHeights(expandedHeights);
      setMaxCollapsedHeights(collapsedHeights);
    };

    calculateMaxHeights();
    window.addEventListener('resize', calculateMaxHeights);
    return () => window.removeEventListener('resize', calculateMaxHeights);
  }, []);

  return (
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-purple-900/20 to-[#0a0a1f]" id="faq">

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions (FAQ's)
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all duration-300 overflow-hidden ${
                        openItems.includes(index) ? 'shadow-lg shadow-purple-500/20 border-purple-500/30' : 'hover:border-white/20'
                    }`}
                    style={{
                      height: openItems.includes(index)
                        ? (maxExpandedHeights[index] ? `${maxExpandedHeights[index]}px` : undefined)
                        : (maxCollapsedHeights[index] ? `${maxCollapsedHeights[index]}px` : undefined)
                    }}
                    onClick={(e) => toggleFAQ(index, e)}
                >
                  {/* Question Header - Fixed Height */}
                  <div ref={(el) => { headerRefs.current[index] = el }} className="flex items-center justify-between p-6 min-h-[80px]">
                    <h3 className="text-white font-semibold text-lg pr-4">
                      {faq.q}
                    </h3>
                    <ChevronDown
                        className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                            openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                    />
                  </div>

                  {/* Answer - Expandable */}
                  <div
                      className={`overflow-hidden ${
                          openItems.includes(index) ? 'max-h-96 transition-all duration-300' : 'max-h-0 transition-none'
                      }`}
                  >
                    <div ref={(el) => { answerRefs.current[index] = el }} className="px-6 pb-6 pt-0 border-t border-white/10">
                      <p className="text-gray-300 mt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}