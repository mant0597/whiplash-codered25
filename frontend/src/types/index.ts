// Previous interfaces remain the same...

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
}