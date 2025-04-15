type FooterLinkGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Tutorials", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "News", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Events", href: "#" },
      { label: "Help center", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  },
];
