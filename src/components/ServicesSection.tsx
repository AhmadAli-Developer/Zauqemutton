"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  HeartHandshake,
  Baby,
  ArrowRight,
  Clock,
  Check,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  service: string;
  meatCut: string;
  minceSize: string;
  quantityPreset: string;
  customQuantity: string;
  pickupMethod: string;
  date: string;
  notes: string;
}

export default function ServicesSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "meat-order",
    meatCut: "mix-meat",
    minceSize: "medium",
    quantityPreset: "1 kg",
    customQuantity: "",
    pickupMethod: "Self Pickup / Ride (Customer Responsibility)",
    date: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Set min date to today in YYYY-MM-DD format
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const services = [
    { id: "meat-order", label: "Meat Order" },
    { id: "qurbani", label: "Qurbani" },
    { id: "sadqah", label: "Sadqah" },
    { id: "aqiqa", label: "Aqiqa" },
  ];

  const meatCuts = [
    { id: "mix-meat", label: "Mix Meat (مکس گوشت)" },
    { id: "raan", label: "Raan / Leg (ران)" },
    { id: "dast", label: "Dast / Shoulder (دست)" },
    { id: "chaanp", label: "Chaanp / Chops & Ribs (چاپ)" },
    { id: "gardan", label: "Gardan / Neck (گردن)" },
    { id: "put", label: "Put / Flank (پٹھ)" },
    { id: "seena", label: "Seena / Breast (سینہ)" },
    { id: "qeema", label: "Qeema - Mince (قیمہ)" },
    { id: "siri-payee", label: "Siri Payee / Head & Trotters (سری پائے)" },
    { id: "payee", label: "Payee / Trotters (پائے)" },
    { id: "siri", label: "Siri / Goat Head (سری)" },
    { id: "kaleeji", label: "Kaleeji / Liver (کلیجی)" },
    { id: "maghaz", label: "Maghaz / Brain (مغز)" },
    { id: "aujri", label: "Aujri / Tripes (اوجھڑی)" },
    { id: "phipra", label: "Phipra / Lungs (پھیپھڑا)" },
  ];

  const minceSizes = [
    { id: "fine", label: "Fine (باریک)" },
    { id: "medium", label: "Medium (درمیانہ)" },
    { id: "coarse", label: "Coarse (موٹا / قیمہ ہاتھ کا)" },
  ];

  // Helper to determine quantity presets & labels based on service & cut
  // Helper to determine quantity presets & labels based on service & cut
  const getQuantityConfig = () => {
    if (formData.service === "qurbani") {
      return {
        label: "Number of Goats (قربانی بکرا)",
        placeholder: "e.g. 4 Goats or specify weight requirement",
        options: [
          "1 Goat",
          "2 Goats",
          "3 Goats",
          "Custom Quantity",
        ],
        defaultVal: "1 Goat",
      };
    }
    if (formData.service === "sadqah") {
      return {
        label: "Number of Sadqah Goats (صدقہ بکرا)",
        placeholder: "e.g. 4 Goats or charity distribution notes",
        options: [
          "1 Goat",
          "2 Goats",
          "3 Goats",
          "Custom Quantity",
        ],
        defaultVal: "1 Goat",
      };
    }
    if (formData.service === "aqiqa") {
      return {
        label: "Aqiqa Goat Quantity (عقیقہ بکرا)",
        placeholder: "e.g. 4 Goats or specific request",
        options: [
          "1 Goat",
          "2 Goats",
          "3 Goats",
          "Custom Quantity",
        ],
        defaultVal: "1 Goat",
      };
    }

    // meat-order: smart unit by cut (limited to 3 presets + Custom)
    switch (formData.meatCut) {
      case "siri-payee":
        return {
          label: "Quantity (Sets)",
          placeholder: "e.g. 4 Sets or custom pieces",
          options: [
            "1 Set (1 Head + 4 Trotters)",
            "2 Sets",
            "3 Sets",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Set (1 Head + 4 Trotters)",
        };
      case "payee":
        return {
          label: "Quantity (Sets / Pieces)",
          placeholder: "e.g. 4 Sets / 16 Trotters",
          options: [
            "1 Set (4 Trotters)",
            "2 Sets (8 Trotters)",
            "3 Sets (12 Trotters)",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Set (4 Trotters)",
        };
      case "siri":
        return {
          label: "Quantity (Heads / Pieces)",
          placeholder: "e.g. 4 Heads",
          options: [
            "1 Head (سری)",
            "2 Heads",
            "3 Heads",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Head (سری)",
        };
      case "maghaz":
        return {
          label: "Quantity (Brains / Pieces)",
          placeholder: "e.g. 4 Brains",
          options: [
            "1 Brain (مغز)",
            "2 Brains",
            "3 Brains",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Brain (مغز)",
        };
      case "aujri":
        return {
          label: "Quantity (Pieces / Full Sets)",
          placeholder: "e.g. 4 Full Sets",
          options: [
            "1 Full Set / Piece (اوجھڑی)",
            "2 Full Sets",
            "3 Full Sets",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Full Set / Piece (اوجھڑی)",
        };
      case "phipra":
        return {
          label: "Quantity (Pieces / Full Sets)",
          placeholder: "e.g. 4 Full Sets",
          options: [
            "1 Full Set / Piece (پھیپھڑا)",
            "2 Full Sets",
            "3 Full Sets",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 Full Set / Piece (پھیپھڑا)",
        };
      default:
        // Standard meat cuts & Kaleeji: Kilograms (1 kg, 2 kg, 3 kg + Custom)
        return {
          label: "Quantity / Weight (kg)",
          placeholder: "e.g. 0.5 kg, 5 kg, 10 kg...",
          options: [
            "1 kg",
            "2 kg",
            "3 kg",
            "Custom Quantity (Specify below)",
          ],
          defaultVal: "1 kg",
        };
    }
  };

  const quantityConfig = getQuantityConfig();

  const handleServiceChange = (serviceId: string) => {
    let nextCut = formData.meatCut;
    if (serviceId === "meat-order" && !nextCut) {
      nextCut = "mix-meat";
    }

    let defaultQty = "1 kg";
    if (
      serviceId === "qurbani" ||
      serviceId === "sadqah" ||
      serviceId === "aqiqa"
    ) {
      defaultQty = "1 Goat";
    }

    setFormData((prev) => ({
      ...prev,
      service: serviceId,
      meatCut: nextCut,
      quantityPreset: defaultQty,
      customQuantity: "",
    }));
  };

  const handleToggleService = (serviceId: string) => {
    if (formData.service === serviceId) {
      // Toggle off / deselect: revert gracefully back to default "Meat Order"
      handleServiceChange("meat-order");
    } else {
      handleServiceChange(serviceId);
    }
  };

  const handleMeatCutChange = (cutId: string) => {
    let defaultQty = "1 kg";
    if (cutId === "siri-payee") {
      defaultQty = "1 Set (1 Head + 4 Trotters)";
    } else if (cutId === "payee") {
      defaultQty = "1 Set (4 Trotters)";
    } else if (cutId === "siri") {
      defaultQty = "1 Head (سری)";
    } else if (cutId === "maghaz") {
      defaultQty = "1 Brain (مغز)";
    } else if (cutId === "aujri") {
      defaultQty = "1 Full Set / Piece (اوجھڑی)";
    } else if (cutId === "phipra") {
      defaultQty = "1 Full Set / Piece (پھیپھڑا)";
    }

    setFormData((prev) => ({
      ...prev,
      meatCut: cutId,
      quantityPreset: defaultQty,
      customQuantity: "",
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "service") {
      handleServiceChange(value);
    } else if (name === "meatCut") {
      handleMeatCutChange(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedService =
      services.find((s) => s.id === formData.service)?.label || formData.service;
    const selectedCut =
      meatCuts.find((c) => c.id === formData.meatCut)?.label || formData.meatCut;
    const selectedMince =
      minceSizes.find((m) => m.id === formData.minceSize)?.label || formData.minceSize;

    let extraDetails = "";
    if (formData.service === "meat-order") {
      extraDetails += `\n*Cut / Part:* ${selectedCut}`;
      if (formData.meatCut === "qeema") {
        extraDetails += `\n*Mince Size:* ${selectedMince}`;
      }
    }

    const isCustomQuantity = formData.quantityPreset.includes("Custom Quantity");
    const finalQuantity = isCustomQuantity
      ? formData.customQuantity.trim() || "Custom Quantity (To be confirmed)"
      : formData.quantityPreset;

    let formattedDate = "As soon as possible";
    if (formData.date) {
      try {
        const d = new Date(formData.date + "T00:00:00");
        formattedDate = d.toLocaleDateString("en-PK", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      } catch {
        formattedDate = formData.date;
      }
    }

    const orderReceiptId = `#ZM-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const timestamp = now.toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const message = `*Order / Booking Request - ${BUSINESS.name}*
*Order Receipt ID:* ${orderReceiptId}
*Submitted:* ${timestamp}

*Customer Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${selectedService}${extraDetails}
*Animal:* Goat (بکرا)
*Quantity / Unit:* ${finalQuantity}
*Pickup Method:* ${formData.pickupMethod}
*Preferred Date:* ${formattedDate}
*Special Notes:* ${formData.notes || "None"}

*Shop Location:* ${BUSINESS.location}
Sent via Zauq-e-Mutton Website`;

    const url = `https://wa.me/923224145022?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        service: "meat-order",
        meatCut: "mix-meat",
        minceSize: "medium",
        quantityPreset: "1 kg",
        customQuantity: "",
        pickupMethod: "Self Pickup / Ride (Customer Responsibility)",
        date: "",
        notes: "",
      });
    }, 2500);
  };

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-background border-t border-border overflow-hidden">
      {/* Target anchor for booking */}
      <span id="booking" className="sr-only" />

      {/* Background accents */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8C547 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-gold bg-gold-muted mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs sm:text-sm font-medium text-gold tracking-wide">
              Services &amp; Custom Orders
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-3">
            Qurbani, Sadqah &amp; <span className="text-gold-gradient">Meat Booking</span>
          </h2>
          <p className="text-warm-gray text-sm sm:text-base max-w-2xl mx-auto">
            Experience authentic Halal slaughter and custom cutting. Order fresh goat meat, arrange year-round Qurbani, or fulfill your Sadqah and Aqiqa with complete peace of mind.
          </p>
        </div>

        {/* Two-Column Layout: Side Info Cards (Left) + Booking Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Detailed Info Cards for Qurbani, Sadqah, Aqiqa & Pickup */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-bold text-gold tracking-widest uppercase block mb-1">
                Specialized Services
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-warm-white">
                Year-Round Slaughter &amp; Islamic Arrangements
              </h3>
            </div>

            {/* Qurbani Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleToggleService("qurbani")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggleService("qurbani");
                }
              }}
              title={
                formData.service === "qurbani"
                  ? "Click to deselect and return to Meat Order"
                  : "Click to select Qurbani service"
              }
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                formData.service === "qurbani"
                  ? "bg-gold-muted/40 border-gold shadow-gold-sm ring-1 ring-gold/40"
                  : "bg-card border-border hover:border-gold/50"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-warm-white">
                      Year-Round Qurbani &amp; Slaughter
                    </h4>
                    <span className="text-xs font-urdu text-gold/90" dir="rtl">
                      سال بھر قربانی و ذبیحہ
                    </span>
                  </div>
                </div>
                {formData.service === "qurbani" ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gold bg-gold/20 px-2.5 py-0.5 rounded-full border border-gold/40">
                    <Check className="w-3 h-3" /> Selected
                  </span>
                ) : (
                  <span className="text-xs text-warm-gray hover:text-gold flex items-center gap-1">
                    Select <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
              <p className="text-xs text-warm-gray leading-relaxed mb-3">
                Goat slaughtering and Qurbani services are available year-round across all 12 months, as well as during Eid-ul-Adha. We select healthy live goats, perform 100% Halal slaughter, and pack custom cuts for pickup.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-warm-white">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Available all 12 months</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Healthy live goats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Custom meat cuts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Self Pickup / Ride</span>
                </div>
              </div>
            </div>

            {/* Sadqah Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleToggleService("sadqah")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggleService("sadqah");
                }
              }}
              title={
                formData.service === "sadqah"
                  ? "Click to deselect and return to Meat Order"
                  : "Click to select Sadqah service"
              }
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                formData.service === "sadqah"
                  ? "bg-gold-muted/40 border-gold shadow-gold-sm ring-1 ring-gold/40"
                  : "bg-card border-border hover:border-gold/50"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-warm-white">
                      Sadqah Goat Services
                    </h4>
                    <span className="text-xs font-urdu text-gold/90" dir="rtl">
                      صدقہ بکرا
                    </span>
                  </div>
                </div>
                {formData.service === "sadqah" ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gold bg-gold/20 px-2.5 py-0.5 rounded-full border border-gold/40">
                    <Check className="w-3 h-3" /> Selected
                  </span>
                ) : (
                  <span className="text-xs text-warm-gray hover:text-gold flex items-center gap-1">
                    Select <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
              <p className="text-xs text-warm-gray leading-relaxed mb-3">
                Fulfill your Sadqah with ease and complete confidence. We perform proper Halal slaughter of healthy goats and distribute fresh meat to verified deserving families on your behalf.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-warm-white">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Healthy Sadqah goats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Verified charity distribution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Complete transparency</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>100% Halal certified</span>
                </div>
              </div>
            </div>

            {/* Aqiqa Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleToggleService("aqiqa")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleToggleService("aqiqa");
                }
              }}
              title={
                formData.service === "aqiqa"
                  ? "Click to deselect and return to Meat Order"
                  : "Click to select Aqiqa service"
              }
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                formData.service === "aqiqa"
                  ? "bg-gold-muted/40 border-gold shadow-gold-sm ring-1 ring-gold/40"
                  : "bg-card border-border hover:border-gold/50"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold shrink-0">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-warm-white">
                      Aqiqa Goat Arrangements
                    </h4>
                    <span className="text-xs font-urdu text-gold/90" dir="rtl">
                      عقیقہ بکرا
                    </span>
                  </div>
                </div>
                {formData.service === "aqiqa" ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-gold bg-gold/20 px-2.5 py-0.5 rounded-full border border-gold/40">
                    <Check className="w-3 h-3" /> Selected
                  </span>
                ) : (
                  <span className="text-xs text-warm-gray hover:text-gold flex items-center gap-1">
                    Select <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </div>
              <p className="text-xs text-warm-gray leading-relaxed mb-3">
                Complete Aqiqa arrangements with healthy goat selection, authentic Islamic slaughter, hygienic meat cutting, and custom packaging.
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-warm-white">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Healthy live goats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Hygienic separate packing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Distribution support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Self Pickup / Ride</span>
                </div>
              </div>
            </div>

            {/* Pickup Policy Note Card */}
            <div className="p-4 rounded-2xl bg-background/60 border border-border flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-warm-white block mb-0.5">
                  Self Pickup / Ride (Customer Responsibility)
                </span>
                <p className="text-[11px] text-warm-gray leading-relaxed">
                  Pick up fresh cuts directly at our shop in Nurian Bazaar inside Akbari Gate Lahore, or book a Bykea / Indrive / Ride rider to collect and deliver your order.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-card/90 backdrop-blur-md p-6 sm:p-8 lg:p-9 rounded-3xl border border-border-gold shadow-card relative"
            >
              <div className="border-b border-border/70 pb-4 mb-2">
                <span className="text-xs font-bold text-gold tracking-widest uppercase block mb-1">
                  Direct WhatsApp Booking
                </span>
                <h3 className="font-heading font-bold text-2xl text-warm-white">
                  Place Your Order Request
                </h3>
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ahmad"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0322 1234567"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors cursor-pointer"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id} className="bg-background text-warm-white">
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Conditional Meat Cuts (when Meat Order is selected) */}
              {formData.service === "meat-order" && (
                <div className="p-4 rounded-2xl bg-gold-muted/30 border border-gold/25 space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span className="text-xs font-bold text-gold uppercase tracking-wider">
                      Goat Cut Selection (15 Fresh Parts)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                        Goat Cut / Part Option *
                      </label>
                      <select
                        name="meatCut"
                        value={formData.meatCut}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors cursor-pointer"
                      >
                        {meatCuts.map((cut) => (
                          <option key={cut.id} value={cut.id} className="bg-background text-warm-white">
                            {cut.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {formData.meatCut === "qeema" && (
                      <div>
                        <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                          Mince Size *
                        </label>
                        <select
                          name="minceSize"
                          value={formData.minceSize}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors cursor-pointer"
                        >
                          {minceSizes.map((size) => (
                            <option key={size.id} value={size.id} className="bg-background text-warm-white">
                              {size.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Smart Quantity / Unit Handling */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider">
                  {quantityConfig.label} *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    name="quantityPreset"
                    value={formData.quantityPreset}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors cursor-pointer"
                  >
                    {quantityConfig.options.map((opt) => (
                      <option key={opt} value={opt} className="bg-background text-warm-white">
                        {opt}
                      </option>
                    ))}
                  </select>

                  {/* If custom quantity selected, show clean text field */}
                  {formData.quantityPreset.includes("Custom Quantity") ? (
                    <div className="relative">
                      <input
                        type="text"
                        name="customQuantity"
                        required
                        value={formData.customQuantity}
                        onChange={handleChange}
                        placeholder={quantityConfig.placeholder}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-gold/70 text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-colors"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div className="px-4 py-2.5 sm:py-3 rounded-xl bg-background/50 border border-border/60 text-warm-gray text-xs flex items-center justify-between">
                      <span>Selected Unit:</span>
                      <span className="font-semibold text-gold">{formData.quantityPreset}</span>
                    </div>
                  )}
                </div>
                {formData.quantityPreset.includes("Custom Quantity") && (
                  <p className="text-[11px] text-warm-gray px-1">
                    Please specify your custom amount or special weight requirements above.
                  </p>
                )}
              </div>

              {/* Row 4: Pickup Method & Calendar Date Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                    Pickup Method
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="pickupMethod"
                      readOnly
                      value={formData.pickupMethod}
                      className="w-full pl-3.5 pr-9 py-2.5 sm:py-3 rounded-xl bg-background/50 border border-border text-warm-white text-xs sm:text-sm cursor-default select-all focus:outline-none"
                    />
                    <Truck className="w-4 h-4 text-gold absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Preferred Date</span>
                    <span className="text-[10px] text-warm-gray font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      min={minDate}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors [color-scheme:dark] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                  Special Instructions / Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Custom cutting size, packaging, or charity distribution instructions..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gold-gradient text-zinc-950 font-bold hover:shadow-gold-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-75"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-zinc-950 animate-bounce" />
                      <span>Opening WhatsApp with Order...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 text-zinc-950" />
                      <span>Send Order Request via WhatsApp</span>
                    </>
                  )}
                </button>

                {/* Subtle Order Proof Note */}
                <p className="text-center text-xs text-warm-gray mt-2.5">
                  <span className="text-emerald-400 font-semibold mr-1">✓</span>
                  A copy of this order receipt will be saved in your WhatsApp chat history as proof.
                </p>

                <div className="flex items-center justify-between text-[11px] text-warm-gray mt-2 px-1">
                  <span>Self Pickup / Ride (Customer Responsibility)</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold" /> 8:00 AM - 3:00 PM
                  </span>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}