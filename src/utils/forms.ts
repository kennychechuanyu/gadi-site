export const FORMS_ENDPOINT = "https://script.google.com/macros/s/AKfycbycf_srp7_6g45VQEcmZ8JaOPCEnzTz9aBhFPB6Vk1wLKQf6KC4WvGOkWnu05_b4YGg/exec";

export const formAction = (formspreeId: string) =>
  FORMS_ENDPOINT || `https://formspree.io/f/${formspreeId}`;
