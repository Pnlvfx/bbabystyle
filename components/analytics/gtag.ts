type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

const production = process.env.NODE_ENV === 'production' ? true : false

const gtag = {
  pageview: (url: URL) => {
    if (!production) return;
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  },
  event: ({ action, category, label, value }: GTagEvent) => {
    if (!production) return;
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  },
};

export default gtag;
