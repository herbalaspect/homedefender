import { pageMetadata } from "@/lib/seo";
import { BUSINESS, BRAND } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { ContactForm } from "@/components/forms/ContactForm";

/**
 * /contact — single lead capture surface for the whole site. Form posts to
 * /api/contact (Resend). Pre-selects the service when ?service=... is passed
 * (used by Defender Shield and the FinalCTA buttons elsewhere).
 *
 * Lead-only positioning per Neighborhood Strategy §3 — no payment UI.
 */

export const metadata = pageMetadata({
  title: "Contact Home Defender Remodeling | Madison Roofing",
  description:
    "Schedule a free roof, gutter, or window estimate in Madison and Dane County. Form, phone, email, and office hours — we respond within one business day.",
  path: "/contact",
});

const ALLOWED_SERVICES = new Set([
  "roofing",
  "gutter",
  "windows",
  "storm-damage",
  "defender-shield",
  "other",
]);

interface SearchParams {
  service?: string;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const defaultService = sp.service && ALLOWED_SERVICES.has(sp.service)
    ? sp.service
    : undefined;

  return (
    <main className="flex flex-1 flex-col">
      <LocalBusinessSchema />

      {/* Hero */}
      <section style={{ backgroundColor: BRAND.colors.navy, color: "#ffffff" }}>
        <Container className="py-14 sm:py-20">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.colors.green }}
            >
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
              Schedule a free estimate.
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              Tell us about the project. We&apos;ll come out, climb the roof
              if it makes sense, photograph anything worth photographing, and
              put a written estimate in your hand within 1–2 business days.
              No high-pressure close. No obligation.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + sidebar */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2
                className="text-2xl font-medium sm:text-3xl"
                style={{ color: BRAND.colors.navy }}
              >
                Tell us about the project
              </h2>
              <p className="mt-3 text-base text-gray-700">
                Required fields are marked. The more detail you can give, the
                more useful our first response will be.
              </p>
              <div className="mt-8">
                <ContactForm defaultService={defaultService} />
              </div>
            </div>

            <aside className="space-y-8">
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  Call us
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Active leak, storm damage, or anything urgent? Calling is the
                  fastest way to reach us — phone calls are triaged ahead of
                  email.
                </p>
                <p className="mt-2 text-base font-semibold">
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    style={{ color: BRAND.colors.green }}
                  >
                    {BUSINESS.phone}
                  </a>
                </p>
              </div>

              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  Email
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="underline underline-offset-2"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </div>

              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  Office
                </h3>
                <address className="mt-2 not-italic text-sm text-gray-700">
                  {BUSINESS.address.streetAddress}
                  <br />
                  {BUSINESS.address.addressLocality},{" "}
                  {BUSINESS.address.addressRegion}{" "}
                  {BUSINESS.address.postalCode}
                </address>
              </div>

              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  Hours
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Monday–Friday, 8:00 AM – 6:00 PM. After hours: leave a
                  message — we return calls first thing next morning.
                </p>
              </div>

              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: BRAND.colors.navy }}
                >
                  Service area
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Madison, Dane County, and southern Wisconsin.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-14">
        <Container>
          <h2
            className="text-2xl font-medium sm:text-3xl"
            style={{ color: BRAND.colors.navy }}
          >
            Find us
          </h2>
          <div className="mt-6 overflow-hidden rounded-img border border-gray-200 bg-white">
            <iframe
              title={`${BUSINESS.name} office location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion} ${BUSINESS.address.postalCode}`,
              )}&output=embed`}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
