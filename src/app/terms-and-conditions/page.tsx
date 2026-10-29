import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, CheckCircle2, FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Alpine Club India",
  description:
    "Official Terms and Conditions, Mountaineering & Backcountry Ski Liability Waiver, Payment Schedules, Weather & Gondola Force Majeure Policies of Alpine Club India.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 28, 2026";
  const docRef = "ACI-LEGAL-TERMS-2026-V2";

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
              Binding Expedition Contract
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
              <span>Official Expedition Terms, Safety Charter & Booking Contract</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 tracking-tight mb-4">
              Alpine Club India — Terms & Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
              <p>Effective Date: <span className="text-neutral-800 font-medium">{lastUpdated}</span></p>
              <p>Jurisdiction: <span className="text-neutral-800 font-medium">District Courts of Baramulla, Jammu & Kashmir</span></p>
              <p>Document ID: <span className="text-neutral-800 font-medium">{docRef}</span></p>
            </div>
          </header>

          {/* Legal Warning Notice Callout */}
          <div className="mb-10 p-5 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wide text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Mandatory Wilderness & High-Altitude Acknowledgement</span>
            </div>
            <p className="leading-relaxed">
              Backcountry skiing, snowboarding, high-altitude alpine trekking, and ski mountaineering in the Pir Panjal and Greater Himalayas (Gulmarg, Apharwat Peak, Sonamarg) involve natural hazards including avalanches, crevasses, sub-zero hypothermia, acute mountain sickness (AMS/HAPE), and rapid weather deterioration. Participation in any Alpine Club India tour confirms full acceptance of these inherent mountain risks.
            </p>
          </div>

          {/* Table of Contents Box */}
          <nav aria-label="Table of Contents" className="mb-12 p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-600 mb-3">
              Document Sections
            </h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700 list-decimal list-inside font-medium">
              <li><a href="#section-1" className="hover:text-emerald-700 transition">1.0 Inherent Mountain Hazards & Waiver</a></li>
              <li><a href="#section-2" className="hover:text-emerald-700 transition">2.0 Mandatory Medical & Evacuation Insurance</a></li>
              <li><a href="#section-3" className="hover:text-emerald-700 transition">3.0 Booking, Deposit & Payment Schedules</a></li>
              <li><a href="#section-4" className="hover:text-emerald-700 transition">4.0 Cancellation, No-Show & Refund Tiers</a></li>
              <li><a href="#section-5" className="hover:text-emerald-700 transition">5.0 Weather, Gondola Stoppages & Force Majeure</a></li>
              <li><a href="#section-6" className="hover:text-emerald-700 transition">6.0 Guide Authority & Avalanche Protocol</a></li>
              <li><a href="#section-7" className="hover:text-emerald-700 transition">7.0 Wilderness Permits & Leave No Trace</a></li>
              <li><a href="#section-8" className="hover:text-emerald-700 transition">8.0 Governing Law & Dispute Resolution</a></li>
            </ol>
          </nav>

          {/* Document Body Sections */}
          <div className="space-y-10 text-neutral-700 text-sm sm:text-base leading-relaxed">
            
            <section id="section-1">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                1.0 Inherent Mountain Hazards & Liability Waiver
              </h2>
              <p className="mb-3">
                By booking any expedition, day tour, or hiring certified guides through Alpine Club India (&ldquo;ACI&rdquo;), the client explicitly acknowledges that alpine skiing, off-piste freeriding, and alpine mountaineering carry irreducible risks of severe injury, illness, or death caused by environmental conditions beyond human control.
              </p>
              <p>
                Clients agree to hold harmless Alpine Club India, its registered directors, guides, porters, and transport affiliates from any claim, liability, or loss arising from personal injury, altitude affliction, avalanche incident, or equipment damage sustained during an expedition, except where gross, deliberate negligence is proven under prevailing law.
              </p>
            </section>

            <section id="section-2">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                2.0 Mandatory Medical & Emergency Evacuation Insurance
              </h2>
              <p className="mb-3">
                All participants joining Phase 2 backcountry tours, off-piste powder excursions, or high-altitude treks must carry personal travel and medical insurance that expressly covers:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-800">
                <li>High-altitude backcountry skiing/trekking up to 4,500 meters (Apharwat Peak / Sunshine Peak).</li>
                <li>Emergency mountain search, rescue, and helicopter evacuation in Jammu & Kashmir.</li>
                <li>Hospitalization, critical care, and emergency repatriation to the participant&apos;s home country or domestic state.</li>
              </ul>
              <p className="mt-3">
                Evidence of policy coverage must be presented to our dispatch base in Gulmarg prior to mountain ascent. In emergency situations, Alpine Club India guides will mobilize rescue operations immediately; all third-party rescue and medical costs incurred remain the sole financial responsibility of the client or their insurance provider.
              </p>
            </section>

            <section id="section-3">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                3.0 Booking, Deposit & Payment Schedules
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2 text-neutral-800">
                <li><strong>Advance Deposit:</strong> A non-refundable 30% advance deposit is mandatory to lock dates, allocate certified lead guides, and confirm mountain logistics.</li>
                <li><strong>Balance Clearance:</strong> The remaining 70% balance must be settled in full at least 21 days prior to tour commencement or at our Gulmarg base prior to first day briefing.</li>
                <li><strong>Custom Expeditions & Private Guiding:</strong> Private guide reservations during peak season (January 1 – March 15) must be 100% prepaid 30 days prior to arrival.</li>
              </ul>
            </section>

            <section id="section-4">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                4.0 Cancellation, No-Show & Refund Tiers
              </h2>
              <p className="mb-3">
                Notice of cancellation must be received in writing via registered email to <strong>info@alpineclubindia.com</strong>. The following schedule applies:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left text-xs sm:text-sm border border-neutral-200">
                  <thead className="bg-neutral-100 font-mono text-neutral-700">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Cancellation Timing</th>
                      <th className="p-3 border-b border-neutral-200">Refund Entitlement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-3 font-medium">More than 45 days before arrival</td>
                      <td className="p-3 text-emerald-800 font-semibold">80% refund of total tour cost (less banking fees)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">30 to 44 days before arrival</td>
                      <td className="p-3 text-neutral-800">50% refund of total tour cost</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">15 to 29 days before arrival</td>
                      <td className="p-3 text-neutral-800">25% refund of total tour cost</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Less than 15 days, or No-Show</td>
                      <td className="p-3 text-rose-800 font-semibold">0% refund (strictly non-refundable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="section-5">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                5.0 Weather, Gondola Stoppages & Force Majeure
              </h2>
              <p className="mb-3">
                The Gulmarg Gondola (Phase 1 & Phase 2) operates under the exclusive authority of the Jammu & Kashmir Cable Car Corporation. Operations are subject to immediate closure without advance notice during high winds, technical maintenance, or extreme avalanche hazard.
              </p>
              <p>
                In the event of gondola closure, road blockages due to snowstorms (Srinagar-Gulmarg highway), flight cancellations, or political directives, Alpine Club India guides will reorganize the daily itinerary to safe tree-skiing, touring lower forest bowls (Monkey Hill, Baba Reshi), or technical clinics. <strong>No refunds or fee reductions are issued for gondola closures or natural weather stoppages outside our control.</strong>
              </p>
            </section>

            <section id="section-6">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                6.0 Guide Authority & Avalanche Safety Protocol
              </h2>
              <p className="mb-3">
                For the safety of the entire team, the Lead Certified Mountain Guide holds absolute operational authority on the mountain:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-800">
                <li>Every participant must wear an active, calibrated 3-antenna avalanche transceiver, carry a metal probe, and an avalanche shovel. No transceiver = No mountain access.</li>
                <li>The guide reserves the unconditional right to re-route, turn back, or terminate an expedition for any participant who disobeys terrain boundaries, displays symptoms of acute mountain sickness, or demonstrates reckless skiing that puts others at risk.</li>
                <li>Consumption of alcohol or unauthorized substances during mountain operations is strictly prohibited and results in immediate dismissal without refund.</li>
              </ul>
            </section>

            <section id="section-7">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                7.0 Wilderness Permits & Leave No Trace Principles
              </h2>
              <p>
                All participants agree to uphold strict environmental standards. Pack out all non-biodegradable waste, respect wildlife sanctuaries in the Pir Panjal biosphere, and honor local Kashmiri traditions and cultural sites. Compliance with J&K Forest and Wildlife regulations is mandatory.
              </p>
            </section>

            <section id="section-8">
              <h2 className="text-lg font-bold font-serif text-neutral-900 border-b border-neutral-200 pb-2 mb-3">
                8.0 Governing Law & Dispute Resolution
              </h2>
              <p className="mb-4">
                This agreement and any dispute, controversy, or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of the Union Territory of Jammu & Kashmir and the Republic of India. The courts of Baramulla / Srinagar shall have exclusive territorial jurisdiction over any legal proceedings.
              </p>
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 font-mono text-xs sm:text-sm space-y-1 text-neutral-800">
                <p><strong>Alpine Club India — Legal & Operations Base</strong></p>
                <p>Headquarters: Gulmarg Road, Gulmarg, Jammu and Kashmir 193403, India</p>
                <p>Phone: <a href="tel:+918082111967" className="text-emerald-700 underline font-sans">+91 8082111967</a></p>
                <p>Email: <a href="mailto:info@alpineclubindia.com" className="text-emerald-700 underline font-sans">info@alpineclubindia.com</a></p>
              </div>
            </section>

          </div>

          {/* Document Sign-off Footer */}
          <footer className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <div>
              <p>Authorized by: Directorate of Mountain Safety & Operations</p>
              <p>Classification: Public / Legally Binding Client Agreement</p>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-600" />
              <span>Standard Indian Mountaineering Foundation (IMF) Aligned Safety Policy</span>
            </div>
          </footer>

        </div>
      </article>
    </main>
  );
}
