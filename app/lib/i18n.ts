export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "NIMER_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ar";
}

export interface Dict {
  nav: {
    features: string;
    how: string;
    pricing: string;
    faq: string;
    github: string;
    cta: string;
  };
  locale: {
    switchTo: string;
    label: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    footnote: string;
  };
  providers: {
    eyebrow: string;
    and: string;
  };
  halal: {
    badge: string;
    title: string;
    titleAccent: string;
    desc: string;
    bullets: readonly string[];
    ctaPlaceholder: string;
    cta: string;
    success: string;
    error: string;
  };
  ctaFinal: {
    badgeText: string;
    title1: string;
    title2: string;
    subtitle: string;
    placeholder: string;
    submit: string;
    success: string;
    error: string;
  };
  footer: {
    built: string;
    terms: string;
    docs: string;
    contact: string;
    twitter: string;
    github: string;
  };
}

export const dict: Record<Locale, Dict> = {
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      pricing: "Pricing",
      faq: "FAQ",
      github: "GitHub",
      cta: "Get early access",
    },
    locale: {
      switchTo: "العربية",
      label: "Language",
    },
    hero: {
      badge: "AI Gateway for the Middle East · Open source",
      title1: "Cheaper, safer",
      title2: "AI from one gateway.",
      subtitle:
        "Drop-in SDK that intelligently routes Claude, GPT, Gemini and 4 more providers — and runs every response through a safety, bias, and PII gateway.",
      cta1: "Get early access",
      cta2: "View on GitHub",
      footnote: "SDK free forever · 14-day dashboard trial · No credit card",
    },
    providers: {
      eyebrow: "One SDK. 7 providers. 22+ models.",
      and: "+ more soon",
    },
    halal: {
      badge: "Coming soon · MENA exclusive",
      title: "Halal AI Mode",
      titleAccent: "for the Muslim world.",
      desc:
        "The first AI gateway with built-in Sharia-aware filtering. Block riba, gharar, and haram content. Generate finance, legal, and education answers your compliance team can sign off on.",
      bullets: [
        "Filtered against a curated Islamic finance & ethics policy",
        "Optional — toggle per request, per user, or per environment",
        "Audit log for every halal-mode response",
        "For MENA banks, fintechs, edtech, and consumer apps",
      ],
      ctaPlaceholder: "you@company.com",
      cta: "Notify me when it launches",
      success: "✓ You're on the list",
      error: "Something went wrong — please try again.",
    },
    ctaFinal: {
      badgeText: "SDK free forever · 14-day dashboard trial",
      title1: "Start saving on",
      title2: "your next deploy.",
      subtitle:
        "One import change. No infrastructure. No API keys to manage. Your AI calls get cheaper immediately.",
      placeholder: "you@company.com",
      submit: "Get early access",
      success: "✓ You're on the list",
      error: "Something went wrong — please try again.",
    },
    footer: {
      built: "Built in Dammam, Saudi Arabia · Made for the world",
      terms: "Terms",
      docs: "Docs",
      contact: "Contact",
      twitter: "Twitter",
      github: "GitHub",
    },
  },
  ar: {
    nav: {
      features: "المزايا",
      how: "كيف يعمل",
      pricing: "الأسعار",
      faq: "الأسئلة",
      github: "GitHub",
      cta: "ابدأ مجانًا",
    },
    locale: {
      switchTo: "English",
      label: "اللغة",
    },
    hero: {
      badge: "بوابة الذكاء الاصطناعي للشرق الأوسط · مفتوحة المصدر",
      title1: "ذكاء اصطناعي",
      title2: "أرخص وأكثر أمانًا.",
      subtitle:
        "مكتبة جاهزة توجّه طلباتك بذكاء بين Claude وGPT وGemini و٤ مزوّدين آخرين — مع فلترة كل إجابة من المخاطر والبيانات الحسّاسة قبل أن تصل لمستخدميك.",
      cta1: "ابدأ مجانًا",
      cta2: "الكود على GitHub",
      footnote: "SDK مجاني للأبد · ١٤ يوم تجربة · بدون بطاقة ائتمان",
    },
    providers: {
      eyebrow: "مكتبة واحدة. ٧ مزوّدين. ٢٢+ نموذج.",
      and: "والمزيد قريبًا",
    },
    halal: {
      badge: "قريبًا · حصري للمنطقة",
      title: "وضع الذكاء الاصطناعي",
      titleAccent: "الحلال.",
      desc:
        "أوّل بوابة ذكاء اصطناعي بفلترة شرعية مدمجة. ترفض الربا والغرر والمحتوى المحرّم. تولّد إجابات مالية وقانونية وتعليمية يقبلها فريق الامتثال لديك.",
      bullets: [
        "مفلترة وفق سياسة تمويل وأخلاقيات إسلامية موثّقة",
        "اختيارية — قابلة للتفعيل لكل طلب أو مستخدم أو بيئة",
        "سجلّ تدقيق لكل إجابة في الوضع الحلال",
        "للبنوك والتقنيات المالية والتعليم وتطبيقات المستهلك في المنطقة",
      ],
      ctaPlaceholder: "you@company.com",
      cta: "أبلغني عند الإطلاق",
      success: "✓ تم تسجيلك",
      error: "حدث خطأ — حاول مرة أخرى.",
    },
    ctaFinal: {
      badgeText: "SDK مجاني للأبد · ١٤ يوم تجربة Dashboard",
      title1: "ابدأ الحفظ في",
      title2: "إصدارك القادم.",
      subtitle:
        "تغيير سطر واحد. بدون بنية تحتية. بدون مفاتيح إضافية. طلبات الذكاء الاصطناعي تصبح أرخص فورًا.",
      placeholder: "you@company.com",
      submit: "انضم الآن",
      success: "✓ تم تسجيلك",
      error: "حدث خطأ — حاول مرة أخرى.",
    },
    footer: {
      built: "صُنع في الدمّام، السعودية · للعالم",
      terms: "الشروط",
      docs: "الوثائق",
      contact: "تواصل",
      twitter: "Twitter",
      github: "GitHub",
    },
  },
};
