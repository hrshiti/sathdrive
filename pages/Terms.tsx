import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="bg-primary text-white py-16 px-6 lg:px-20 border-b border-accent/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Terms &amp; Conditions / End User License Agreement (EULA)
          </h1>
          <p className="text-sm md:text-base text-white/80">
            For Saathi Drive
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 mt-2">
            Last Updated: 14 November 2025
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto prose prose-sm sm:prose-base prose-headings:text-primary prose-p:text-slate-700 prose-li:text-slate-700">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Saathi Drive (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            These Terms &amp; Conditions govern your access and use of the Saathi Drive
            mobile application, website, and related services (collectively, the
            &quot;Platform&quot;).
          </p>
          <p>
            By downloading, installing, accessing, registering, or using the Platform,
            you agree to be bound by these Terms.
          </p>
          <p>If you do not agree to these Terms, you must not use the Platform.</p>

          <h2>2. Definitions</h2>
          <ul>
            <li>
              <strong>User / Rider:</strong> Any individual using Saathi Drive to
              request transportation services.
            </li>
            <li>
              <strong>Driver / Partner:</strong> An independent contractor providing
              transportation services.
            </li>
            <li>
              <strong>Platform:</strong> Saathi Drive mobile app, website, and related
              digital systems.
            </li>
            <li>
              <strong>Services:</strong> Ride-booking and related operational features
              provided through the Platform.
            </li>
          </ul>

          <h2>3. Eligibility</h2>
          <p>To use the Platform, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Have full legal capacity to enter into a binding agreement</li>
            <li>Provide accurate and verifiable personal information</li>
          </ul>

          <h2>4. Account Registration</h2>
          <p>
            To access the Platform, you must create an account using a mobile number
            and OTP verification.
          </p>
          <p>You agree to:</p>
          <ul>
            <li>Maintain accurate and up-to-date account information</li>
            <li>Not share login access with others</li>
            <li>Take responsibility for all activity under your account</li>
          </ul>

          <h2>5. Use of Services</h2>
          <p>
            The Saathi Drive Platform connects Users with Drivers. Saathi Drive itself
            does not own vehicles nor employ drivers. Drivers operate as independent
            service providers.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>Use the app for unlawful activities</li>
            <li>Disrupt Platform operations</li>
            <li>Misuse booking or cancellation features</li>
          </ul>
          <p>
            Saathi Drive reserves the right to suspend or terminate accounts violating
            these Terms.
          </p>

          <h2>6. Payments &amp; Charges</h2>
          <p>
            Prices are calculated based on distance, time, demand, tolls, and service
            type.
          </p>
          <p>
            Payments may be made in cash, UPI, wallet, or other online methods
            supported on the Platform.
          </p>
          <p>
            Once a ride is completed, the fare is generally non-refundable, except in
            verified dispute cases at the sole discretion of Saathi Drive.
          </p>
          <p>
            Saathi Drive may revise pricing at any time without prior notice, subject
            to applicable law.
          </p>

          <h2>7. Cancellations &amp; No-Show Policy</h2>
          <p>Riders may cancel a ride before driver arrival, subject to:</p>
          <ul>
            <li>
              If a Rider cancels late, a cancellation fee may apply as per the policy
              shown in the app.
            </li>
            <li>
              If a Rider does not show after the Driver arrives at the pickup location,
              a no-show fee may apply.
            </li>
          </ul>

          <h2>8. Safety &amp; Conduct Guidelines</h2>
          <p>
            Both Riders and Drivers must behave respectfully. Harassment, abuse,
            threats, or illegal behavior will result in permanent account suspension
            and, where appropriate, legal action.
          </p>
          <p>
            Emergency assistance / SOS features may be available but are not guaranteed
            to respond instantly. They are provided on a best-effort basis and should
            not replace contacting local emergency services.
          </p>

          <h2>9. Location Access</h2>
          <p>
            Saathi Drive collects real-time GPS data to provide accurate pickup,
            routing, and safety features. You may control location access through your
            device settings, but certain features may not function correctly if
            location access is disabled.
          </p>

          <h2>10. Ratings &amp; Feedback</h2>
          <p>
            Users and Drivers may rate and review each other after trips. Repeated low
            ratings, inappropriate feedback, or misconduct may result in account
            suspension or deactivation.
          </p>

          <h2>11. Intellectual Property</h2>
          <p>
            All designs, code, trademarks, logos, and digital assets used on the
            Platform belong to Saathi Drive or its licensors.
          </p>
          <p>Users may not:</p>
          <ul>
            <li>Copy or reproduce the Platform or its content</li>
            <li>Modify or create derivative works based on the Platform</li>
            <li>Reverse-engineer, decompile, or disassemble any part of the Platform</li>
            <li>Sell, rent, or distribute the Platform or any portion of it</li>
          </ul>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Saathi Drive is not responsible for:</p>
          <ul>
            <li>Driver actions or omissions</li>
            <li>Personal loss, theft, or damage to property</li>
            <li>Delays, cancellations, or accidents during trips</li>
            <li>Unauthorized third-party actions or security incidents beyond our control</li>
          </ul>
          <p>
            You agree to use the Platform at your own risk. Saathi Drive&apos;s
            aggregate liability arising out of or relating to the Platform shall be
            limited as permitted under applicable law.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Saathi Drive, its directors,
            employees, and partners from any claims, liabilities, damages, losses, and
            expenses arising out of or related to:
          </p>
          <ul>
            <li>Your misuse of the Platform</li>
            <li>Your violation of these Terms</li>
            <li>Any damage, loss, or injury caused during trips due to your actions</li>
          </ul>

          <h2>14. Data Privacy</h2>
          <p>
            Your data will be handled in accordance with the Saathi Drive Privacy
            Policy. Please review the Privacy Policy to understand how we collect, use,
            and safeguard your personal information.
          </p>

          <h2>15. Termination</h2>
          <p>Saathi Drive may suspend or terminate access to the Platform at any time for:</p>
          <ul>
            <li>Policy or Terms violations</li>
            <li>Fraudulent or suspicious behavior</li>
            <li>Abuse of Platform features or other users</li>
          </ul>
          <p>
            Users may delete their account at any time through the app or by contacting
            Saathi Drive support, unless restricted due to ongoing investigations,
            disputes, or legal requirements.
          </p>

          <h2>16. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            resolved exclusively in the competent courts within India, subject to
            applicable jurisdictional rules.
          </p>

          <h2>17. Changes to Terms</h2>
          <p>
            Saathi Drive may update these Terms periodically. We will update the
            &quot;Last Updated&quot; date at the top of this page when changes are
            made. Continued use of the Platform after such changes indicates your
            acceptance of the updated Terms.
          </p>

          <h2>18. Contact Information</h2>
          <p>For support or legal communication, you can reach Saathi Drive at:</p>
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

export default Terms;

