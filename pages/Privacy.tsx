import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-primary text-white py-16 px-6 lg:px-20 border-b border-accent/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Privacy Policy — Saathi Drive
          </h1>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60">
            Last Updated: 14 November 2025
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto prose prose-sm sm:prose-base prose-headings:text-primary prose-p:text-slate-700 prose-li:text-slate-700">
          <p className="text-sm text-slate-700">
            Saathi Drive (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our mobile applications, website, and services
            (collectively, the Saathi Drive Platform).
          </p>

          <p className="text-sm text-slate-700">
            By using the Saathi Drive Platform, you agree to the terms of this Privacy
            Policy and our Terms &amp; Conditions.
          </p>

          <h2>1. Scope of This Policy</h2>
          <p>This Privacy Policy applies to:</p>
          <ul>
            <li>Saathi Drive Riders</li>
            <li>Saathi Drive Drivers (including Driver applicants)</li>
            <li>
              All Saathi Drive products, apps, websites, features, and services
            </li>
          </ul>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information directly from you, automatically while you use the
            platform, and from third-party sources.
          </p>

          <h3>2.A. Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Registration:</strong> Name, phone number, email, payment
              details, profile photo, saved addresses, preferences.
            </li>
            <li>
              <strong>Driver Application:</strong> Name, address, date of birth,
              government ID, driving license, vehicle details, insurance, PAN/Tax info,
              bank account details.
            </li>
            <li>
              <strong>SOS Contacts:</strong> Contact access permission when adding
              emergency contacts.
            </li>
            <li>
              <strong>Ratings &amp; Feedback:</strong> Reviews and ratings submitted by
              Riders or Drivers.
            </li>
            <li>
              <strong>Support &amp; Communication:</strong> Messages, attachments, and
              support history.
            </li>
          </ul>

          <h3>2.B. Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Location Data:</strong>
              <ul>
                <li>
                  <strong>Riders:</strong> Precise GPS location from ride request until
                  completion.
                </li>
                <li>
                  <strong>Drivers:</strong> GPS tracking while online, and for a short
                  period after going offline for safety monitoring.
                </li>
              </ul>
            </li>
            <li>
              <strong>Usage Information:</strong> Trip details (route, time, distance,
              fare, promotions used, etc.).
            </li>
            <li>
              <strong>Device Information:</strong> IP address, device model, operating
              system, advertising IDs, app version, push notification tokens.
            </li>
            <li>
              <strong>Communication Logs:</strong> Encrypted call routing and SMS
              metadata (not your real number).
            </li>
            <li>
              <strong>Cookies &amp; Tracking:</strong> Analytics tools (e.g., Google
              Analytics) to improve performance and personalization.
            </li>
          </ul>

          <h3>2.C. Information from Third Parties</h3>
          <ul>
            <li>Background verification agencies</li>
            <li>Payment gateways and financial partners</li>
            <li>Marketing and referral programs</li>
            <li>Enterprise accounts (if your ride is sponsored)</li>
            <li>Other users during referrals or shared rides</li>
            <li>Government or law enforcement (if required)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage the Saathi Drive Platform</li>
            <li>Process ride requests and payments</li>
            <li>Improve app experience, security, and performance</li>
            <li>Prevent fraud and ensure safety</li>
            <li>Provide customer support</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. How We Share Information</h2>
          <p>We do not sell your data. However, we share your information when necessary:</p>
          <table>
            <thead>
              <tr>
                <th>Shared With</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Riders ↔ Drivers</td>
                <td>Pickup details, trip progress, contact (masked), vehicle details</td>
              </tr>
              <tr>
                <td>Service Providers</td>
                <td>Payments, identity verification, analytics, messaging</td>
              </tr>
              <tr>
                <td>Government or Law Enforcement</td>
                <td>When legally required</td>
              </tr>
              <tr>
                <td>Business Integrations</td>
                <td>If your ride is booked or sponsored by another party</td>
              </tr>
              <tr>
                <td>During Business Merger/Sale</td>
                <td>If ownership changes</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Data Storage &amp; Security</h2>
          <p>
            We retain information only as long as needed to operate the service and to
            fulfill legal, tax, and safety obligations (for example, a minimum of 7
            years for transaction records, where required by law).
          </p>
          <p>
            We use industry-standard safeguards to protect your data, but no system is
            100% secure. We cannot guarantee absolute security of your information.
          </p>

          <h2>6. Your Rights &amp; Controls</h2>
          <p>You may:</p>
          <ul>
            <li>Update or correct your profile information</li>
            <li>Manage communication settings (SMS, email, push notifications)</li>
            <li>Control location access through your device settings</li>
            <li>
              Request deletion of your account (unless restricted due to fraud, dispute,
              or legal requirement)
            </li>
            <li>Request access to the data we hold about you, where permitted by law</li>
          </ul>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Saathi Drive services are not directed to children under 13. We do not
            knowingly collect their information. If we become aware that a child under
            13 has provided us with personal data, we will take steps to delete such
            information.
          </p>

          <h2>8. External Links</h2>
          <p>
            The Saathi Drive Platform may contain links to third-party websites or
            services. Their privacy policies and terms govern your use of those
            services. We are not responsible for the content or privacy practices of
            such third parties.
          </p>

          <h2>9. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            technology, law, or our services. When we do, we will update the &quot;Last
            Updated&quot; date at the top of this page. Continued use of the Saathi
            Drive Platform after such updates means you accept the revised policy.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy or need assistance
            regarding your data, you can contact Saathi Drive using the details below:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@saathidrive.com">support@saathidrive.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919900007816">+91 99000 07816</a>
            </li>
            <li>
              <strong>Postal Address:</strong> 17, 12th Cross, opposite to JP Park,
              Brindavan Nagar, Mathikere, Bengaluru, Karnataka 560054, India
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

