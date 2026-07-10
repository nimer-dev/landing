export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "NIMER_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ar";
}

// WHY: The dictionary is intentionally minimal — the site is now a single Cortex-led
// company homepage (dict.home) plus the language switcher (dict.locale). Every claim in
// `home` traces to an approved research record; nothing discloses a mechanism beyond the
// filed provisional (inventions A–E). Both locales are complete and RTL-safe.
export interface Dict {
  locale: {
    switchTo: string;
    label: string;
  };
  home: {
    nav: { research: string; follow: string };
    hero: {
      badge: string;
      title1: string;
      title2: string;
      subtitle: string;
      ctaResearch: string;
      ctaFollow: string;
      note: string;
      figCaption: string;
      stats: readonly { value: string; label: string }[];
    };
    belief: { eyebrow: string; body: string };
    metaphor: {
      eyebrow: string;
      title: string;
      engineLabel: string;
      engineBody: string;
      brainLabel: string;
      brainBody: string;
    };
    cortex: {
      eyebrow: string;
      status: string;
      title: string;
      body: string;
      pillars: readonly { title: string; desc: string }[];
      cta: string;
    };
    proof: {
      eyebrow: string;
      title: string;
      items: readonly { label: string; body: string }[];
      papersEyebrow: string;
      papers: readonly { tag: string; name: string; blurb: string; href: string }[];
      allResearch: string;
      ip: string;
    };
    more: { eyebrow: string; title: string; body: string };
    follow: {
      title: string;
      subtitle: string;
      placeholder: string;
      submit: string;
      success: string;
      error: string;
    };
    footer: { built: string; research: string; terms: string; twitter: string; contact: string };
  };
}

export const dict: Record<Locale, Dict> = {
  en: {
    locale: {
      switchTo: "العربية",
      label: "Language",
    },
    home: {
      nav: { research: "Research", follow: "Follow" },
      hero: {
        badge: "ByNimer · AI Research",
        title1: "A brain that grows through",
        title2: "architecture, not scale.",
        subtitle:
          "ByNimer is an AI research company building a memory that reasons — and grounds itself in the real world. We build in the open and publish our results honestly, including the ones that failed.",
        ctaResearch: "Read the research",
        ctaFollow: "Follow what we're building",
        note: "Patent-pending · Reproducible",
        figCaption: "12 → 1 · symmetry becomes grounding · Paper 4",
        stats: [
          { value: "9", label: "Inventions filed" },
          { value: "2", label: "Papers published" },
          { value: "Open", label: "& reproducible" },
        ],
      },
      belief: {
        eyebrow: "What we believe",
        body: "Today's AI gets smarter by getting bigger — more parameters, more data, more compute. We're making the opposite bet: intelligence is a design problem, not a size problem. A system that composes what it already knows, reasons at inference time, and grows new capability without retraining.",
      },
      metaphor: {
        eyebrow: "The idea",
        title: "A brain, not an engine.",
        engineLabel: "An engine",
        engineBody:
          "gets more powerful by getting bigger — more cylinders, more fuel, more heat. Scale is the only lever it has.",
        brainLabel: "A brain",
        brainBody:
          "gets more capable by getting better organized — new connections, new structure, memory grounded in the world. It grows.",
      },
      cortex: {
        eyebrow: "Nimer Cortex",
        status: "Research · Patent-pending",
        title: "A memory-and-reasoning core that learns without gradients.",
        body: "Cortex stores knowledge in a relational memory, reasons over it at inference time, and can prove to itself which of its own beliefs are grounded in the real world — and which are only self-consistent.",
        pillars: [
          { title: "Composition", desc: "New capability by combining what it already knows — not by retraining from scratch." },
          { title: "Adaptive reasoning", desc: "A real think-time loop: plan, draft, verify, revise, remember." },
          { title: "Grounded memory", desc: "It can tell which of its beliefs are anchored to the world, and which are merely consistent." },
          { title: "Heterogeneous lobes", desc: "Specialized parts composed like the regions of a brain — not one monolith." },
        ],
        cta: "Explore the research",
      },
      proof: {
        eyebrow: "How we work",
        title: "Credibility is the one asset a research lab can't rebuild.",
        items: [
          { label: "Reproducible", body: "every number recomputes from a committed script and a git commit, across 20 random seeds, with control arms." },
          { label: "Honest", body: "we publish our null results on purpose — two of our sharpest findings are NULLs." },
          { label: "Corroborated", body: "an independent Rust reimplementation agrees with the original research code to golden parity." },
          { label: "Lean", body: "most experiments run at $0 on CPU; the whole research line ran on a single 6 GB GPU." },
        ],
        papersEyebrow: "Recent papers",
        papers: [
          {
            tag: "Paper 4",
            name: "Grounding Is Symmetry-Breaking",
            blurb: "What a memory can verify by itself — and the exact point where it must consult the world.",
            href: "/research/grounding-is-symmetry-breaking",
          },
          {
            tag: "Paper 5",
            name: "Two Channels to a Grounded World",
            blurb: "Identity from perception, relation from time — with two honest null results.",
            href: "/research/two-channels-to-a-grounded-world",
          },
        ],
        allResearch: "All research",
        ip: "Intellectual property. The core inventions behind this research are protected by two U.S. provisional patents (filed July 2026). Technical details are available to serious partners under NDA.",
      },
      more: {
        eyebrow: "The ByNimer umbrella",
        title: "More on the way.",
        body: "New projects are taking shape under ByNimer. Join the list to hear about them first.",
      },
      follow: {
        title: "Follow what we're building.",
        subtitle: "A brain, built in the open — honest results and all. No spam; just the work.",
        placeholder: "you@company.com",
        submit: "Notify me",
        success: "✓ You're on the list",
        error: "Something went wrong — please try again.",
      },
      footer: {
        built: "© ByNimer · Building trustworthy AI from first principles",
        research: "Research",
        terms: "Terms",
        twitter: "X",
        contact: "Contact",
      },
    },
  },
  ar: {
    locale: {
      switchTo: "English",
      label: "اللغة",
    },
    home: {
      nav: { research: "الأبحاث", follow: "تابِعنا" },
      hero: {
        badge: "ByNimer · أبحاث الذكاء الاصطناعي",
        title1: "دماغٌ ينمو بالتصميم،",
        title2: "لا بالتضخّم.",
        subtitle:
          "ByNimer شركة أبحاث ذكاء اصطناعي تبني ذاكرةً تفكّر — وترتكز على الواقع. نبني في العلن وننشر نتائجنا بصدق، بما فيها التي أخفقت.",
        ctaResearch: "اقرأ الأبحاث",
        ctaFollow: "تابِع ما نبنيه",
        note: "براءة قيد الإيداع · قابل لإعادة الإنتاج",
        figCaption: "١٢ ← ١ · التماثل يصير تأريضًا · الورقة ٤",
        stats: [
          { value: "٩", label: "اختراعات مُودَعة" },
          { value: "٢", label: "ورقتان منشورتان" },
          { value: "مفتوح", label: "وقابل للإنتاج" },
        ],
      },
      belief: {
        eyebrow: "بماذا نؤمن",
        body: "ذكاء اليوم يزداد قوّةً بالتضخّم — معاملات أكثر، بيانات أكثر، حوسبة أكثر. نحن نراهن على العكس: الذكاء مسألة تصميم لا مسألة حجم. نظامٌ يركّب ما يعرفه، ويفكّر وقت الاستدلال، وينمو بقدرات جديدة دون إعادة تدريب.",
      },
      metaphor: {
        eyebrow: "الفكرة",
        title: "دماغ، لا محرّك.",
        engineLabel: "المحرّك",
        engineBody: "يزداد قوّةً بالتضخّم — أسطوانات أكثر، وقود أكثر، حرارة أكثر. التوسّع رافعته الوحيدة.",
        brainLabel: "الدماغ",
        brainBody: "يزداد قدرةً بحُسن التنظيم — روابط جديدة، بنية جديدة، ذاكرة مرتكزة على الواقع. إنّه ينمو.",
      },
      cortex: {
        eyebrow: "Nimer Cortex",
        status: "بحث · براءة قيد الإيداع",
        title: "نواة ذاكرة وتفكير تتعلّم بلا تدرّجات.",
        body: "تخزّن Cortex المعرفة في ذاكرة علائقيّة، وتفكّر فيها وقت الاستدلال، وتقدر أن تُثبِت لنفسها أيُّ معتقداتها مرتكزٌ على الواقع — وأيُّها متّسقٌ مع نفسه فحسب.",
        pillars: [
          { title: "التركيب", desc: "قدرات جديدة بدمج ما تعرفه أصلًا — لا بإعادة تدريب من الصفر." },
          { title: "التفكير المتكيّف", desc: "حلقة تفكير حقيقيّة وقت الاستدلال: خطّط، سوّد، تحقّق، راجِع، تذكّر." },
          { title: "الذاكرة المرتكزة", desc: "تُميّز أيّ معتقداتها مربوطٌ بالواقع، وأيّها متّسقٌ فحسب." },
          { title: "الفصوص غير المتجانسة", desc: "أجزاء متخصّصة مركّبة كفصوص الدماغ — لا كتلة واحدة صمّاء." },
        ],
        cta: "استكشف الأبحاث",
      },
      proof: {
        eyebrow: "كيف نعمل",
        title: "المصداقيّة هي الأصل الوحيد الذي لا يقدر مختبرٌ أن يعيد بناءه.",
        items: [
          { label: "قابل لإعادة الإنتاج", body: "كلّ رقم يُعاد حسابه من سكربت مُودَع وcommit في Git، عبر ٢٠ بذرة عشوائيّة، مع أذرع تحكّم." },
          { label: "صادق", body: "ننشر نتائجنا الصفريّة عن قصد — اثنتان من أحدّ نتائجنا NULL." },
          { label: "مُتحقَّق منه", body: "إعادة تنفيذ مستقلّة بلغة Rust تطابق كود البحث الأصليّ حتّى تطابق الذهب." },
          { label: "رشيق", body: "أغلب التجارب تعمل بتكلفة صفر على المعالج؛ خطّ البحث كلّه جرى على معالج رسومات ٦ غيغابايت واحد." },
        ],
        papersEyebrow: "أوراق حديثة",
        papers: [
          {
            tag: "Paper 4",
            name: "التأريض كسرٌ للتماثل",
            blurb: "ما تقدر الذاكرة أن تتحقّق منه بنفسها — والنقطة الدقيقة التي يجب عندها استشارة الواقع.",
            href: "/research/grounding-is-symmetry-breaking",
          },
          {
            tag: "Paper 5",
            name: "قناتان إلى عالمٍ مُرتَكِز",
            blurb: "الهويّة من الإدراك، والعلاقة من الزمن — مع نتيجتين صفريّتين صادقتين.",
            href: "/research/two-channels-to-a-grounded-world",
          },
        ],
        allResearch: "كلّ الأبحاث",
        ip: "الملكية الفكرية. الاختراعات الجوهرية خلف هذا البحث محميّة بموجب طلبَي براءة اختراع مؤقّتَين في الولايات المتحدة (أُودعا في يوليو 2026). التفاصيل التقنية متاحة للشركاء الجادّين بموجب اتفاقية سرّية.",
      },
      more: {
        eyebrow: "مظلّة ByNimer",
        title: "والمزيد في الطريق.",
        body: "مشاريع جديدة تتشكّل تحت ByNimer. سجّل لتكون أوّل من يعرف عنها.",
      },
      follow: {
        title: "تابِع ما نبنيه.",
        subtitle: "دماغٌ يُبنى في العلن — بنتائجه الصادقة كلّها. بلا إزعاج؛ العمل فقط.",
        placeholder: "you@company.com",
        submit: "أبلغني",
        success: "✓ تم تسجيلك",
        error: "حدث خطأ — حاول مرة أخرى.",
      },
      footer: {
        built: "© ByNimer · نبني ذكاءً موثوقًا من المبادئ الأولى",
        research: "الأبحاث",
        terms: "الشروط",
        twitter: "X",
        contact: "تواصل",
      },
    },
  },
};
