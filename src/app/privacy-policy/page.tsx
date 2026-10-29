import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Printer, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Alpine Club India",
  description:
    "Official Privacy Policy of Alpine Club India. Learn how we handle your personal data, high-altitude expedition medical disclosures, and permit identity records.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 28, 2026";
  const docRef = "ACI-LEGAL-PRIV-2026-V2";

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 pt-28 pb-20">
      {/* Top Document Meta Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-5 bg-white border border-neutral-200 rounded-xl shadow-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Alpine Club India</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
            <span className="hidden sm:inline">REF: {docRef}</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full font-sans font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Active Policy
            </span>
          </div>
        </div>
      </div>

      {/* Document Sheet */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-neutral-300/80 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] p-8 sm:p-14 md:p-16">
          
          {/* Document Header */}
          <header className="border-b border-neutral-200 pb-8 mb-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-500 mb-2">
              <FileText className="w-4 h-4 text-neutral-400" />
              <span>Official Regulatory & Client Privacy Document</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 tracking-tight mb-4">
              Alpine Club India — Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
              <p>Effective Date: <span className="text-neutral-800 font-medium">{lastUpdated}</span></p>
              <p>Jurisdiction: <span className="text-neutral-800 font-medium">Jammu & Kashmir, India</span></p>
              <p>Document ID: <span className="text-neutral-800 font-medium">{docRef}</span></p>
            </div>
          </header>

          {/* Table of Contents Box */}
          <nav aria-label="Table of Contents" className="mb-12 p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-600 mb-3">
              Document Sections
            </h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700 list-decimal list-inside font-medium">
              <li><a href="#section-1" className="hover:text-emerald-700 transition">1.0 Scope & Data Controller</a></li>
              <li><a href="#section-2" className="hover:text-emerald-700 transition">2.0 Expedition Information We Collect</a></li>
              <li><a href="#section-3" className="hover:text-emerald-700 transition">3.0 Medical Disclosures & Altitude Safety</a></li>
              <li><a href="#section-4" className="hover:text-emerald-700 transition">4.0 Government Permits & Regulatory Sharing</a></li>
              <li><a href="#section-5" className="hover:text-emerald-700 transition">5.0 Payment & Transaction Security</a></li>
              <li><a href="#section-6" className="hover:text-emerald-700 transition">6.0 Data Retention & Deletion Rights</a></li>
              <li><a href="#section-7" className="hover:text-emerald-700 transition">7.0 Cookies & Search Analytics</a></li>
              <li><a href="#section-8" className="hover:text-emerald-700 transition">8.0 Contact the Privacy Officer</a></li>
            </ol>
          </nav>

          {/* Document Body Sections */}
          <div className="space-y-10 text-neutral-700 text-sm sm:text-base leading-relaxed">
            
            <section id="section-1">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                1.0 Scope & Data Controller
              </h2>
              <p>
                Alpine Club India (&ldquo;ACI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates alpine expeditions, backcountry ski guiding, high-altitude trekking, and heli-ski operations throughout Gulmarg, Sonamarg, Pahalgam, and the Pir Panjal ranges of Jammu & Kashmir. This Privacy Policy outlines our standards for gathering, handling, and protecting personal data collected via our website (<strong>alpineclubindia.com</strong>), WhatsApp client desks, booking inquiry vouchers, and expedition registration forms.
              </p>
            </section>

            <section id="section-2">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                2.0 Expedition Information We Collect
              </h2>
              <p className="mb-3">
                When you reserve an alpine guide, purchase a backcountry ski package, or register for high-altitude expeditions, we collect the following mandatory information:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-800">
                <li><strong>Identification Details:</strong> Full legal name, date of birth, nationality, passport copy (foreign nationals), or Aadhaar / Government ID (Indian nationals).</li>
                <li><strong>Contact Points:</strong> Personal email address, active mobile phone number, WhatsApp contact, and home mailing address.</li>
                <li><strong>Emergency Escalation Contacts:</strong> Name, relationship, and 24/7 phone numbers of two next-of-kin or emergency contacts not traveling on the mountain.</li>
                <li><strong>Technical Ski & Alpine Metrics:</strong> Skiing ability level, avalanche rescue training history, boot/binding sizing for equipment rental calibration, and previous high-altitude experience.</li>
              </ul>
            </section>

            <section id="section-3">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                3.0 Medical Disclosures & Altitude Safety
              </h2>
              <p className="mb-3">
                Due to extreme wilderness conditions exceeding 4,000 meters above sea level in Gulmarg and Apharwat Peak, clients may be requested to declare:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-800">
                <li>Cardiovascular and pulmonary history, blood pressure stability, asthma, or history of High Altitude Pulmonary/Cerebral Edema (HAPE/HACE).</li>
                <li>Current daily prescription medications, known drug/environmental allergies, and blood group.</li>
                <li>Insurance policy certificates with dedicated helicopter evacuation and backcountry mountaineering riders.</li>
              </ul>
              <p className="mt-3 text-neutral-600 italic">
                *Note: Medical disclosures are kept strictly confidential, accessible only by the assigned Lead Certified Mountain Guide and attending mountain rescue/medical teams in the event of an emergency.
              </p>
            </section>

            <section id="section-4">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                4.0 Government Permits & Regulatory Sharing
              </h2>
              <p>
                Under the regulations of the Jammu & Kashmir Tourism Department, Gulmarg Development Authority (GDA), Gulmarg Gondola Authorities, Forest Department, and local district magistrates, personal identification documents must be submitted to secure inner-line movement permits, wildlife transit clearances, and gondola access. We never sell, lease, or monetize client records to third-party advertisers or brokers.
              </p>
            </section>

            <section id="section-5">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                5.0 Payment & Transaction Security
              </h2>
              <p>
                All electronic transactions, card authorizations, and bank transfers are processed via certified, PCI-DSS compliant Indian payment gateways (such as Razorpay / Cashfree) or authenticated international wire systems. Alpine Club India does not store raw credit card numbers, CVVs, or bank net-banking passwords on our web servers.
              </p>
            </section>

            <section id="section-6">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                6.0 Data Retention & Deletion Rights
              </h2>
              <p>
                We retain client booking data and permit clearances for a statutory duration of three (3) years to fulfill accounting, regulatory, and search-and-rescue archival mandates under Indian law. After this period, records are securely archived or expunged. You may request verification or correction of your registered data by emailing our desk.
              </p>
            </section>

            <section id="section-7">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                7.0 Cookies & Search Analytics
              </h2>
              <p>
                Our web platform utilizes standard session cookies and privacy-respecting telemetry to monitor server uptime, load speeds, and organic search indexing. We do not engage in invasive cross-site consumer tracking or behavioural advertising profiling.
              </p>
            </section>

            <section id="section-8">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                8.0 Contact the Privacy Officer
              </h2>
              <p className="mb-4">
                For questions regarding data processing, permit documentation archives, or compliance inquiries, please contact our administrative desk:
              </p>
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 font-mono text-xs sm:text-sm space-y-1 text-neutral-800">
                <p><strong>Alpine Club India — Data & Safety Desk</strong></p>
                <p>Location: Gulmarg Road, Gulmarg, Jammu and Kashmir 193403, India</p>
                <p>Direct Phone / WhatsApp: <a href="tel:+918082111967" className="text-emerald-700 underline font-sans">+91 8082111967</a></p>
                <p>Official Email: <a href="mailto:info@alpineclubindia.com" className="text-emerald-700 underline font-sans">info@alpineclubindia.com</a></p>
              </div>
            </section>

          </div>

          {/* Document Sign-off Footer */}
          <footer className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <div>
              <p>Issued by: Alpine Club India Operations Directorate</p>
              <p>Classification: Public / Informational Document</p>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Compliant with Digital Personal Data Protection Norms</span>
            </div>
          </footer>

        </div>
      </article>
    </main>
  );
}
