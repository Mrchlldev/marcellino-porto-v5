export const contactConfig = {
  title: "Contact",
  subtitle: "Let's Work Together",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",

  // Contact methods
  methods: [
    {
      icon: "mail",
      label: "Email",
      value: "marcellino@example.com",
      href: "mailto:marcellino@example.com",
      description: "Best for project inquiries",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/marcellino",
      href: "https://linkedin.com/in/marcellino",
      description: "Let's connect professionally",
    },
    {
      icon: "github",
      label: "GitHub",
      value: "github.com/marcellino",
      href: "https://github.com/marcellino",
      description: "Check out my open source work",
    },
    {
      icon: "twitter",
      label: "Twitter / X",
      value: "@marcellino",
      href: "https://twitter.com/marcellino",
      description: "Tech thoughts and updates",
    },
  ],

  // Contact form configuration
  form: {
    enabled: true,
    // Formspree endpoint — replace with your own at https://formspree.io
    // Leave empty to hide the form
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    fields: {
      name: { label: "Your Name", placeholder: "John Doe" },
      email: { label: "Email Address", placeholder: "john@example.com" },
      subject: { label: "Subject", placeholder: "Project Inquiry" },
      message: { label: "Message", placeholder: "Tell me about your project..." },
    },
    submitLabel: "Send Message",
    successMessage: "Thanks! I'll get back to you within 24 hours. 🚀",
    errorMessage: "Oops! Something went wrong. Please try emailing me directly.",
  },

  // Availability card
  availability: {
    show: true,
    status: "Available for freelance work",
    responseTime: "Usually responds within 24h",
    timezone: "WIB (UTC+7) — Jakarta, Indonesia",
  },
};
