export const SITE_TITLE = 'AviKaiDo';
export const SITE_URL = 'https://avikaido.com';
/** Business email stays on Gmail (not Zoho Mail). */
export const SITE_EMAIL = 'avikaido@gmail.com';
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
  actionUrl: '',
  /** Hidden field xnQsjsdp */
  xnQsjsdp: '',
  /** Hidden field xmIwtLD */
  xmIwtLD: '',
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
    title: 'Designation',
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
  widgetCode: '',
  /** salesiq.zohopublic.com | salesiq.zohopublic.eu | … */
  scriptHost: 'salesiq.zohopublic.com',
} as const;

/**
 * Zoho Books / Invoice client portal (optional).
 * Share the portal URL so clients can view/pay invoices.
 */
export const ZOHO_BOOKS = {
  clientPortalUrl: '',
  label: 'Client invoice portal',
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
