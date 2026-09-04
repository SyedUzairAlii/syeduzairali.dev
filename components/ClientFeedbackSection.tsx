"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Review = {
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  service: string;
  screenshot: string;
};

const reviews: Review[] = [
  {
    name: "talha_javed97",
    country: "Pakistan",
    flag: "🇵🇰",
    rating: 5,
    text: "Great Developer once again deliver as expected , really liked his work. Syed was extraordinary. I would recommend working with Syed and will do for sure work with him in the future as well! Thanks for your great service !",
    service: "Cross-Platform Development",
    screenshot: "/reviews/talha-review-1.png",
  },
  {
    name: "duran24p",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    text: "Always a pleasure working with Syed! Great job!",
    service: "Cross-Platform Development",
    screenshot: "/reviews/duran-review-1.png",
  },
  {
    name: "duran24p",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    text: "Amazing to work with! Very patient and very understanding! Will continue working with this developer going forward",
    service: "Cross-Platform Development",
    screenshot: "/reviews/duran-review-2.png",
  },
  {
    name: "mwrs1ky",
    country: "Canada",
    flag: "🇨🇦",
    rating: 5,
    text: "Syed, is an amazing Fiverr freelancer. Highly recommend.",
    service: "Cross-Platform Development",
    screenshot: "/reviews/mwrs1ky-review.png",
  },
  {
    name: "antonliulichev2",
    country: "Netherlands",
    flag: "🇳🇱",
    rating: 5,
    text: "Great Service! Delivered on time",
    service: "Cross-Platform Development",
    screenshot: "/reviews/anton-review-1.png",
  },
  {
    name: "antonliulichev2",
    country: "Netherlands",
    flag: "🇳🇱",
    rating: 5,
    text: "Great Expirience! Work was done in time and good quality. Communication is perfect.",
    service: "Cross-Platform Development",
    screenshot: "/reviews/anton-review-2.png",
  },
  {
    name: "talha_javed97",
    country: "Pakistan",
    flag: "🇵🇰",
    rating: 5,
    text: "Great experience. Uzair is one of the best seller i have met, clearly understandable, cooperative, Delivery was made earlier than anticipated and was exactly what I expected. Will surely work with him again. Highly recommended. A++++",
    service: "Cross-Platform Development",
    screenshot: "/reviews/talha-review-2.png",
  },
  {
    name: "dunnec",
    country: "Ireland",
    flag: "🇮🇪",
    rating: 5,
    text: "Great guy, easy to communicate with, exceptional work.",
    service: "Cross-Platform Development",
    screenshot: "/reviews/dunnec-review.png",
  },
  {
    name: "wahidmagdy",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    text: "Fast response.",
    service: "Cross-Platform Development",
    screenshot: "/reviews/wahidmagdy-review.png",
  },
];

function ReviewCard({
  review,
  onOpen,
}: {
  review: Review;
  onOpen: (review: Review) => void;
}) {
  return (
    <article className="flex h-[300px] w-[390px] shrink-0 flex-col rounded-[24px] border border-[#CBD8DB] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9CBDB7] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:w-[430px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className="flex gap-0.5 text-[15px] text-[#D99B2B]"
            aria-label={`${review.rating} out of 5 stars`}
          >
            {"★★★★★"}
          </div>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0F766E]">
            Fiverr Review
          </p>
        </div>

        <span className="rounded-full border border-[#D9E4E6] bg-[#F5F9F9] px-3 py-1 text-xs font-semibold text-[#475569]">
          {review.rating}.0
        </span>
      </div>

      <blockquote className="mt-5 line-clamp-5 text-[16px] leading-7 text-[#334155]">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <div className="mt-auto border-t border-[#E5ECEE] pt-5">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="font-semibold text-[#0B132B]">{review.name}</p>

            <p className="mt-1 text-sm text-[#64748B]">
              {review.flag} {review.country}
            </p>

            <p className="mt-2 text-xs text-[#94A3B8]">{review.service}</p>
          </div>

          <button
            type="button"
            onClick={() => onOpen(review)}
            className="shrink-0 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#0F766E]"
          >
            View original ↗
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ClientFeedbackSection() {
  const [activeReview, setActiveReview] = useState<Review | null>(null);

  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4);

  useEffect(() => {
    if (!activeReview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveReview(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeReview]);

  return (
    <>
      <section
        id="feedback"
        className="w-full scroll-mt-20 overflow-hidden bg-[#F7F4EE]"
      >
        <div className="mx-auto max-w-[1328px] px-6 pb-14 pt-24 lg:px-12 lg:pt-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-[#0F766E]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                  Client Feedback
                </p>
              </div>

              <h2 className="mt-6 text-[40px] font-bold leading-[1.06] tracking-[-0.045em] text-[#0B132B] sm:text-[48px] lg:text-[54px]">
                Real feedback from
                <span className="block bg-gradient-to-r from-[#1D4ED8] to-[#0F766E] bg-clip-text text-transparent">
                  real client work.
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#64748B]">
                Selected feedback from my early freelance mobile and
                cross-platform development work on Fiverr. Reviews below are
                shown using the original client wording.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#D8E1DF] bg-white/75 px-6 py-5">
              <div className="flex items-center gap-2">
                <span className="text-lg text-[#D99B2B]">★★★★★</span>

                <span className="font-bold text-[#0B132B]">5.0</span>
              </div>

              <p className="mt-1 text-sm text-[#64748B]">
                14 Fiverr client reviews
              </p>

              <a
                href="https://www.fiverr.com/s/7jvEwgL"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#0F766E]"
              >
                View Fiverr profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Moving reviews */}
        <div className="pb-24 lg:pb-32">
          <div className="feedback-marquee overflow-hidden">
            <div className="feedback-track feedback-track-left flex w-max gap-5 px-3 py-3">
              {[...firstRow, ...firstRow].map((review, index) => (
                <ReviewCard
                  key={`${review.name}-row-1-${index}`}
                  review={review}
                  onOpen={setActiveReview}
                />
              ))}
            </div>
          </div>

          <div className="feedback-marquee mt-4 overflow-hidden">
            <div className="feedback-track feedback-track-right flex w-max gap-5 px-3 py-3">
              {[...secondRow, ...secondRow].map((review, index) => (
                <ReviewCard
                  key={`${review.name}-row-2-${index}`}
                  review={review}
                  onOpen={setActiveReview}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot modal */}
      {activeReview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Original Fiverr review from ${activeReview.name}`}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8"
        >
          {/* Dark backdrop */}
          <div
            data-cursor-light
            className="absolute inset-0 bg-[#050A18]/90 backdrop-blur-sm"
            onClick={() => setActiveReview(null)}
          />

          {/* Modal */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0B132B] shadow-2xl">
            {/* Dark top bar */}
            <div
              data-cursor-light
              className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6"
            >
              <div>
                <p className="font-semibold text-white">
                  Original Fiverr Review
                </p>

                <p className="mt-1 text-sm text-[#94A3B8]">
                  {activeReview.name} · {activeReview.country}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveReview(null)}
                aria-label="Close review"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-xl text-white transition-colors hover:bg-white/10"
              >
                ×
              </button>
            </div>

            {/* White screenshot area */}
            <div className="relative min-h-[65vh] w-full bg-white">
              <Image
                src={activeReview.screenshot}
                alt={`Screenshot of Fiverr review from ${activeReview.name}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Dark bottom bar */}
            <div
              data-cursor-light
              className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-6"
            >
              <p className="text-sm text-[#94A3B8]">
                Screenshot from my Fiverr reviews profile.
              </p>

              <a
                href="https://www.fiverr.com/s/7jvEwgL"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#93C5FD] transition-colors hover:text-[#5EEAD4]"
              >
                View Fiverr profile ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
