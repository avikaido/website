export const SITE_TITLE = 'AviKaiDo';
export const SITE_URL = 'https://avikaido.com';
/** Business email stays on Gmail (not Zoho Mail). */
export const SITE_EMAIL = 'avikaido@gmail.com';
/** Google Calendar appointment booking page. */
export const BOOKING_URL = 'https://calendar.app.google/oGs3U1rr4u3ipJC58';
export const SITE_DESCRIPTION =
  'AviKaiDo helps businesses turn AI ambition into production systems — agentic workflows, conversational AI, and automation that ship on real data with measurable ROI.';
export const SITE_TAGLINE = 'AI products & implementation consulting';

/**
 * Zoho CRM Web-to-Lead / Webform
 * Paste values from Setup → Channels → Webforms → your form → Source code.
 * See ZOHO.md for the free-tier walkthrough.
 */
export const ZOHO_CRM = {
  /** e.g. https://crm.zoho.com/crm/WebToLeadForm or crm.zoho.eu / … */
  actionUrl: 'https://crm.zoho.com/crm/WebToLeadForm',
  /** Hidden field xnQsjsdp */
  xnQsjsdp: 'bd22b57fc2df93080b7f3946ddc878ce6eb3892a80e06b96a5f0ab2adc67b6bd',
  /** Hidden field xmIwtLD */
  xmIwtLD:
    '1021250b0abb4d78d645fea2e818e11fc4dde82d553fd8a2b2842b01babd4ab3aa41c67cc7295bef0adcbc46280bda15',
  /** Usually TGVhZHM= (Leads) — copy from Zoho source */
  actionType: 'TGVhZHM=',
  /** Redirect after submit */
  returnUrl: `${SITE_URL}/contact?sent=1`,
  /**
   * Map our form fields → Zoho input `name` attributes from the generated HTML.
   * Defaults match common Lead webform labels; override if your form differs.
   */
  fields: {
    lastName: 'Last Name',
    firstName: 'First Name',
    email: 'Email',
    company: 'Company',
    phone: 'Phone',
    description: 'Description',
    /** Optional custom field name from Zoho for timeline, or leave empty to fold into Description */
    timeline: '',
  },
} as const;

/**
 * Zoho SalesIQ live chat / visitor widget.
 * Settings → Brands → Installation → Website → copy the `wc=` widget code.
 * Widget works on free SalesIQ; deep CRM visitor sync may require paid plans.
 */
export const ZOHO_SALESIQ = {
  /** Widget code after `wc=` in the embed URL */
  widgetCode: 'siq9bad591efa36173fa5a153ec53c76364e8b49267afcd781bee814e87ca33854d',
  /** salesiq.zohopublic.com | salesiq.zohopublic.eu | … */
  scriptHost: 'salesiq.zohopublic.com',
} as const;

/**
 * Zoho Books / Invoice client portal (optional).
 * Share the portal URL so clients can view/pay invoices.
 */
export const ZOHO_BOOKS = {
  clientPortalUrl: 'https://invoice.zohosecure.com/portal/avikaido',
  label: 'Client Portal',
} as const;

export const zohoCrmConfigured = Boolean(
  ZOHO_CRM.actionUrl && ZOHO_CRM.xnQsjsdp && ZOHO_CRM.xmIwtLD,
);

export const zohoSalesIqConfigured = Boolean(ZOHO_SALESIQ.widgetCode);

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
