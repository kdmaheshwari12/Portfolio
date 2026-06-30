import type { Metadata } from "next";
import ResumePageClient from "./ResumePageClient";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download or preview Kundan Kumar's resume.",
};

export default function ResumePage() {
  return <ResumePageClient />;
}
