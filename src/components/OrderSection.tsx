"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
  CheckCircle2,
  Clock,
  Calendar,
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

export default function OrderSection() {
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

  const getQuantityConfig = () => {
    if (formData.service === "qurbani") {
      return {
        label: "Number of Goats (قربانی بکرا)",
        placeholder: "e.g. 4 Goats or specify weight requirement",
        options: ["1 Goat", "2 Goats", "3 Goats", "Custom Quantity"],
        defaultVal: "1 Goat",
      };
    }
    if (formData.service === "sadqah") {
      return {
        label: "Number of Sadqah Goats (صدقہ بکرا)",
        placeholder: "e.g. 4 Goats or charity distribution notes",
        options: ["1 Goat", "2 Goats", "3 Goats", "Custom Quantity"],
        defaultVal: "1 Goat",
      };
    }
    if (formData.service === "aqiqa") {
      return {
        label: "Aqiqa Goat Quantity (عقیقہ بکرا)",
        placeholder: "e.g. 4 Goats or specific request",
        options: ["1 Goat", "2 Goats", "3 Goats", "Custom Quantity"],
        defaultVal: "1 Goat",
      };
    }

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
        return {
          label: "Quantity / Weight (kg)",
          placeholder: "e.g. 0.5 kg, 5 kg, 10 kg...",
          options: ["1 kg", "2 kg", "3 kg", "Custom Quantity (Specify below)"],
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
    <section id="order" className="relative py-12 lg:py-20 bg-background overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-gold bg-gold-muted mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs sm:text-sm font-medium text-gold tracking-wide">
              Direct WhatsApp Booking
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-3">
            Place Your <span className="text-gold-gradient">Order Request</span>
          </h1>
          <p className="text-warm-gray text-sm sm:text-base max-w-2xl mx-auto">
            Order fresh goat meat, arrange year-round Qurbani, or fulfill Sadqah and Aqiqa. Fill out the details below to generate your order receipt directly on WhatsApp.
          </p>
        </div>

        {/* Order Form Card */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-border-gold shadow-card relative"
          >
            <div className="border-b border-border/70 pb-4">
              <span className="text-xs font-bold text-gold tracking-widest uppercase block mb-1">
                Order Details
              </span>
              <h2 className="font-heading font-bold text-2xl text-warm-white">
                Customize Your Cut &amp; Booking
              </h2>
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
              <div className="p-4 rounded-2xl bg-background/50 border border-border/80 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                    Select Goat Meat Cut / Part *
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

                {/* Conditional Mince Sizes (when Qeema is selected) */}
                {formData.meatCut === "qeema" && (
                  <div>
                    <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                      Select Mince Size (قیمہ سائز) *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {minceSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, minceSize: size.id }))}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.minceSize === size.id
                              ? "bg-gold text-zinc-950 font-bold border-gold"
                              : "bg-background border-border text-warm-gray hover:border-gold/40"
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Row 3: Quantity Config */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider">
                  {quantityConfig.label} *
                </label>
                <span className="text-[11px] text-gold font-medium">
                  {formData.quantityPreset}
                </span>
              </div>

              {/* Quantity Preset Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                {quantityConfig.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, quantityPreset: opt }))}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium border transition-all text-center truncate ${
                      formData.quantityPreset === opt
                        ? "bg-gold text-zinc-950 font-bold border-gold shadow-sm"
                        : "bg-background border-border text-warm-gray hover:border-gold/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Custom Quantity Input when selected */}
              {formData.quantityPreset.includes("Custom Quantity") && (
                <input
                  type="text"
                  name="customQuantity"
                  value={formData.customQuantity}
                  onChange={handleChange}
                  placeholder={quantityConfig.placeholder}
                  className="w-full mt-2 px-4 py-2.5 rounded-xl bg-background border border-gold text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                />
              )}
            </div>

            {/* Row 4: Pickup Method & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                  Pickup / Delivery Method
                </label>
                <div className="p-3 rounded-xl bg-background border border-border text-xs text-warm-white flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gold shrink-0" />
                  <span>Self Pickup / Ride (Customer Responsibility)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                  Preferred Date (Optional)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-background border border-border text-warm-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                  />
                  <Calendar className="w-4 h-4 text-warm-gray absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 5: Special Notes */}
            <div>
              <label className="block text-xs font-semibold text-warm-gray uppercase tracking-wider mb-1.5">
                Special Cutting Instructions / Notes (Optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="e.g. Small karahi cut pieces, clean extra fat, separate liver & payee..."
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-warm-white placeholder:text-warm-dark text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
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

              {/* Order Proof Note */}
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

          {/* Quick Pickup & Halal Info Below Form */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-warm-white block mb-0.5">
                  100% Halal Guaranteed
                </span>
                <p className="text-[11px] text-warm-gray leading-relaxed">
                  Strict adherence to Islamic Zabiha with Takbeer recited at slaughter of healthy goats.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-warm-white block mb-0.5">
                  Self Pickup / Send Ride
                </span>
                <p className="text-[11px] text-warm-gray leading-relaxed">
                  Pick up at shop in Nurian Bazaar inside Akbari Gate Lahore, or send Bykea/Indrive rider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
