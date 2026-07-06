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
  company: {
    byline: string;
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
  maintenance: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    roadmapHeader: string;
    roadmap: readonly { title: string; desc: string; status?: string; href?: string }[];
    emailHeader: string;
    emailPlaceholder: string;
    emailSubmit: string;
    emailSuccess: string;
    emailError: string;
    existingUser: string;
    existingUserCta: string;
    eta: string;
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
        "Nimer AI is ByNimer's gateway to every major model. One drop-in SDK routes Claude, GPT, Gemini and 4 more providers — and screens every response for safety, bias, and PII before it reaches your users.",
      cta1: "Get early access",
      cta2: "View on GitHub",
      footnote: "SDK free forever · 14-day dashboard trial · No credit card",
    },
    company: {
      byline: "Nimer AI · a ByNimer product",
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
        "An AI gateway with built-in Sharia-aware filtering. Block riba, gharar, and haram content. Generate finance, legal, and education answers your compliance team can sign off on.",
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
      built: "© ByNimer Holdings LLC · Made for the world",
      terms: "Terms",
      docs: "Docs",
      contact: "Contact",
      twitter: "Twitter",
      github: "GitHub",
    },
    maintenance: {
      badge: "ByNimer",
      title1: "Trustworthy AI,",
      title2: "engineered from first principles.",
      subtitle:
        "ByNimer is an AI research and infrastructure company. We build intelligence that can be trusted — a grounded-memory reasoning core, and a regional AI gateway for the Middle East.",
      roadmapHeader: "Our projects",
      roadmap: [
        {
          title: "Nimer Cortex",
          status: "Research · Patent-pending",
          desc: "A memory-and-reasoning core that learns continuously with zero-gradient training — and can prove to itself which of its own beliefs are grounded.",
        },
        {
          title: "Nimer Gateway",
          status: "In development",
          desc: "One SDK across 7 providers and 22+ models, with virtual API keys and a Halal AI mode — the AI gateway for the Middle East.",
          href: "/gateway",
        },
        {
          title: "More on the way",
          status: "Coming soon",
          desc: "New projects under the ByNimer umbrella. Join the list to hear about them first.",
        },
      ],
      emailHeader: "Follow what we're building",
      emailPlaceholder: "you@company.com",
      emailSubmit: "Notify me",
      emailSuccess: "✓ You're on the list",
      emailError: "Something went wrong — please try again.",
      existingUser: "Already a Gateway user?",
      existingUserCta: "Go to dashboard →",
      eta: "New projects launching soon",
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
        "Nimer AI هي بوابة ByNimer إلى كل النماذج الكبرى. مكتبة واحدة تندمج بسطرٍ واحد وتوجّه طلباتك بين Claude وGPT وGemini و٤ مزوّدين آخرين — وتفحص كل إجابة من المخاطر والتحيّز والبيانات الحسّاسة قبل أن تصل لمستخدميك.",
      cta1: "ابدأ مجانًا",
      cta2: "الكود على GitHub",
      footnote: "SDK مجاني للأبد · ١٤ يوم تجربة · بدون بطاقة ائتمان",
    },
    company: {
      byline: "Nimer AI · منتج من ByNimer",
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
        "بوابة ذكاء اصطناعي بفلترة شرعية مدمجة. ترفض الربا والغرر والمحتوى المحرّم. تولّد إجابات مالية وقانونية وتعليمية يقبلها فريق الامتثال لديك.",
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
      title1: "ابدأ التوفير في",
      title2: "إصدارك القادم.",
      subtitle:
        "تغيير سطر واحد. بدون بنية تحتية. بدون مفاتيح إضافية. طلبات الذكاء الاصطناعي تصبح أرخص فورًا.",
      placeholder: "you@company.com",
      submit: "انضم الآن",
      success: "✓ تم تسجيلك",
      error: "حدث خطأ — حاول مرة أخرى.",
    },
    footer: {
      built: "© ByNimer Holdings LLC · صُنع للعالم",
      terms: "الشروط",
      docs: "الوثائق",
      contact: "تواصل",
      twitter: "Twitter",
      github: "GitHub",
    },
    maintenance: {
      badge: "ByNimer",
      title1: "ذكاءٌ موثوق،",
      title2: "مبنيٌّ من المبادئ الأولى.",
      subtitle:
        "ByNimer شركة أبحاث وبنية تحتية للذكاء الاصطناعي. نبني ذكاءً يمكن الوثوق به — نواة تفكير بذاكرة مُرتَكِزة على الواقع، وبوابة ذكاء إقليمية للشرق الأوسط.",
      roadmapHeader: "مشاريعنا",
      roadmap: [
        {
          title: "Nimer Cortex",
          status: "بحث · براءة قيد الإيداع",
          desc: "نواة ذاكرة وتفكير تتعلّم باستمرار بلا تدريب تدرّجي — وتقدر أن تتحقّق بنفسها من مدى ارتكاز معتقداتها على الواقع وموثوقيتها.",
        },
        {
          title: "Nimer Gateway",
          status: "قيد التطوير",
          desc: "مكتبة واحدة عبر ٧ مزوّدين و٢٢+ نموذجًا، مع مفاتيح API افتراضية ووضع حلال — بوابة الذكاء للشرق الأوسط.",
          href: "/gateway",
        },
        {
          title: "المزيد قريبًا",
          status: "قريبًا",
          desc: "مشاريع جديدة تحت مظلّة ByNimer. سجّل لتكون أوّل من يعرف عنها.",
        },
      ],
      emailHeader: "تابع ما نبنيه",
      emailPlaceholder: "you@company.com",
      emailSubmit: "أبلغني",
      emailSuccess: "✓ تم تسجيلك",
      emailError: "حدث خطأ — حاول مرة أخرى.",
      existingUser: "مستخدم Gateway بالفعل؟",
      existingUserCta: "ادخل لوحة التحكّم ←",
      eta: "مشاريع جديدة قريبًا",
    },
  },
};
