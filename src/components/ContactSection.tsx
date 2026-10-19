import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  RefreshCw,
  Copy,
  Check,
  Shield,
  Sparkles,
} from 'lucide-react';
import { ContactFormData, UserCategory } from '../types';

interface ContactSectionProps {
  initialCategory?: UserCategory;
  prefilledDesignConcept?: string;
}

const CATEGORIES: UserCategory[] = [
  'Jewellery Customer',
  'Retailer: In-Store Design Studio',
  'Retailer: Exclusive Showroom Partner',
  'Jewellery Master Artisan / Workshop',
  'Strategic Design Partner',
  'Investor / Business Enquiry',
  'Other',
];

const WHATSAPP_NUMBER = '919666965765';
const FORMATTED_NUMBER = '+91 96669 65765';

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCategory,
  prefilledDesignConcept,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    category: initialCategory || 'Jewellery Customer',
    cityTown: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  useEffect(() => {
    if (prefilledDesignConcept) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in exploring the "${prefilledDesignConcept}" collection.`,
      }));
    }
  }, [prefilledDesignConcept]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // 1. Full Name required
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    // 2. Mobile Number required & sensible phone validation
    const cleanedMobile = formData.mobileNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10,14}$/.test(cleanedMobile)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    // 3. Email optional, but if entered must be valid
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 4. Category required
    if (!formData.category) {
      newErrors.category = 'Please select your enquiry category';
    }

    // 5. City/Town required
    if (!formData.cityTown.trim()) {
      newErrors.cityTown = 'City / Town is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = (data: ContactFormData): string => {
    const emailText = data.email.trim() ? data.email.trim() : 'Not Provided';
    const messageText = data.message.trim() ? data.message.trim() : 'Not Provided';

    return `Hello SHREYAS SWARNA.AI Team,

I would like to connect regarding your upcoming initiative.

Name: ${data.fullName.trim() || '[Your Name]'}
Mobile: ${data.mobileNumber.trim() || '[Mobile Number]'}
Email: ${emailText}
I am a: ${data.category}
City/Town: ${data.cityTown.trim() || '[City/Town]'}

Message:
${messageText}

Source: SHREYAS SWARNA.AI Website

Looking forward to connecting.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const message = constructWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const destinationUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setSubmittedMessage(message);
    setWhatsappUrl(destinationUrl);

    // Open WhatsApp in a new tab/application
    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (submittedMessage) {
      navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmittedMessage(null);
    setWhatsappUrl(null);
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-b border-white/5 bg-[#090909]">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Header with COMING SOON Banner */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6A15B]/30 bg-[#161410] px-4 py-1.5 text-xs font-semibold tracking-widest text-[#EBD38D] uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#C6A15B]" />
            <span>COMING SOON · PRE-LAUNCH ENQUIRY</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            LET'S START A CONVERSATION.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#C0BCB5] leading-relaxed">
            “Whether you're exploring a personal jewellery idea or interested in retail partnership,
            we'd love to hear from you as we prepare for launch.”
          </p>

          <p className="mt-2 text-xs text-[#EBD38D] font-medium">
            * An upcoming initiative under Shreyas Group. Pre-launch enquiries welcome.
          </p>
        </div>

        {/* Clean, Full-Width Luxury Contact Card */}
        <div className="rounded-3xl border border-white/10 bg-[#121212] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {submittedMessage && whatsappUrl ? (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#C6A15B]/40 bg-[#181611]">
                <CheckCircle2 className="h-8 w-8 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white uppercase"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    WhatsApp Message Prepared
                  </h3>
                  <p className="mt-2 text-sm text-[#C0BCB5] leading-relaxed">
                    A new tab has opened with your details addressed to our concierge at{' '}
                    <span className="font-semibold text-white">{FORMATTED_NUMBER}</span>.
                    Please press <span className="font-semibold text-[#EBD38D]">Send</span> inside
                    WhatsApp to complete your enquiry.
                  </p>
                </div>
              </div>

              {/* Message Details Preview */}
              <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs text-[#888888]">
                  <span className="uppercase tracking-wider font-semibold text-[#A0A0A0]">
                    Your Message Details
                  </span>
                  <button
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1.5 text-xs text-[#EBD38D] hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy message</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs sm:text-sm text-[#E8E4DC] whitespace-pre-wrap font-sans leading-relaxed">
                  {submittedMessage}
                </pre>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] px-8 py-4 text-xs font-bold tracking-wider text-[#090909] shadow-lg shadow-[#C6A15B]/20 transition-all hover:brightness-110 active:scale-95"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>RE-OPEN WHATSAPP CHAT ↗</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-semibold tracking-wider text-white hover:bg-white/10 transition-all"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Edit Details</span>
                </button>
              </div>

              <p className="text-xs text-[#888888]">
                Your details will be used solely to respond to your enquiry regarding this upcoming initiative.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                  >
                    Full Name <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Ramesh Varma"
                    className={`w-full rounded-xl bg-[#181818] border px-4 py-3.5 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/10 focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                  >
                    Mobile Number <span className="text-[#C6A15B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, mobileNumber: e.target.value });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                    }}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full rounded-xl bg-[#181818] border px-4 py-3.5 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors ${
                      errors.mobileNumber
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/10 focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 3. Email Address (Optional) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                  >
                    Email Address <span className="text-xs text-[#888888] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. ramesh@example.com"
                    className={`w-full rounded-xl bg-[#181818] border px-4 py-3.5 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/10 focus:border-[#C6A15B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* 4. I AM A (Dropdown) */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                  >
                    I AM A <span className="text-[#C6A15B]">*</span>
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => {
                      setFormData({ ...formData, category: e.target.value as UserCategory });
                      if (errors.category) setErrors({ ...errors, category: undefined });
                    }}
                    className="w-full rounded-xl bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C6A15B] transition-colors"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#181818] text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. City / Town */}
              <div>
                <label
                  htmlFor="cityTown"
                  className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                >
                  City / Town <span className="text-[#C6A15B]">*</span>
                </label>
                <input
                  type="text"
                  id="cityTown"
                  value={formData.cityTown}
                  onChange={(e) => {
                    setFormData({ ...formData, cityTown: e.target.value });
                    if (errors.cityTown) setErrors({ ...errors, cityTown: undefined });
                  }}
                  placeholder="e.g. Hyderabad, Vijayawada, Warangal, Visakhapatnam, Bengaluru"
                  className={`w-full rounded-xl bg-[#181818] border px-4 py-3.5 text-sm text-white placeholder-[#666666] focus:outline-none transition-colors ${
                    errors.cityTown
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/10 focus:border-[#C6A15B]'
                  }`}
                />
                {errors.cityTown && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.cityTown}</span>
                  </p>
                )}
              </div>

              {/* 6. Message (Optional Multiline) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold tracking-wider text-[#D8D4CC] uppercase mb-2"
                >
                  Message <span className="text-xs text-[#888888] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your jewellery design ideas, showroom location, or collaboration interests..."
                  className="w-full rounded-xl bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-[#666666] focus:outline-none focus:border-[#C6A15B] transition-colors resize-y"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#EBD38D] via-[#C6A15B] to-[#A58226] py-4 text-xs font-bold tracking-wider text-[#090909] shadow-lg shadow-[#C6A15B]/20 transition-all hover:shadow-[#C6A15B]/35 hover:brightness-105 active:scale-[0.99]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span>SEND ENQUIRY ON WHATSAPP ↗</span>
                </button>

                <p className="text-xs text-[#A0A0A0] text-center leading-relaxed">
                  WhatsApp will open with your message ready to send. Please press Send to complete your enquiry.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#777777] border-t border-white/5 pt-3">
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-[#C6A15B]" />
                    <span>Your details will be used to respond to your enquiry.</span>
                  </span>
                  <span className="font-mono text-[#EBD38D]">Direct Destination: {FORMATTED_NUMBER}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
