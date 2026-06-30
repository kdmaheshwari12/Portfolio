export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image?: string;
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Javascript programming essentials",
    issuer: "IBM / Coursera",
    date: "2025",
    credentialId: "ibm-javascript-2025",
    url: "https://www.credly.com/badges/e452e2c1-d719-4b44-aa06-f9bf23c20b7a/linked_in_profile",
  },
  {
    id: "cert-2",
    title: "Data Science",
    issuer: "Cisco Networking Academy",
    date: "2025",
    credentialId: "cisco-data-science-2025",
    url: "https://www.credly.com/badges/92e1a235-cff9-4c2d-9bbd-95d8d94ebfe8/linked_in_profile",
  },
  {
    id: "cert-3",
    title: "BAsics of python programming",
    issuer: "Great Learning",
    date: "2024",
  },
  {
    id: "cert-4",
    title: "Docker",
    issuer: "Kodecloud",
    date: "2026",
    credentialId: "kodecloud-docker-2026",
    url: "https://learn.kodekloud.com/certificate/879e6879-953a-4421-8565-192794f92255",
  },
];
