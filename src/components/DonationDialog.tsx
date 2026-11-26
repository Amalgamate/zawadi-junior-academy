import { useEffect, useState } from "react";
import { school } from "../config";

const donationAmounts = [10, 25, 50, 100];

export default function DonationDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [amount, setAmount] = useState("25");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const donateToPayPal = () => {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0 || !school.paypalEmail) return;
    const paypalUrl = new URL("https://www.paypal.com/cgi-bin/webscr");
    paypalUrl.search = new URLSearchParams({
      cmd: "_donations",
      business: school.paypalEmail,
      item_name: "Sponsor a Child - Zawadi Junior Academy",
      currency_code: "USD",
      amount: numericAmount.toFixed(2),
    }).toString();
    window.location.assign(paypalUrl.toString());
  };

  return (
    <div className="donation-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="donation-dialog" role="dialog" aria-modal="true" aria-labelledby="donation-title">
        <button type="button" className="donation-close" onClick={onClose} aria-label="Close donation dialog">×</button>
        <p className="eyebrow">Make a difference</p>
        <h2 id="donation-title">Sponsor a Child</h2>
        <p>Choose a one-time gift amount. Your support helps make learning opportunities possible for Zawadi learners.</p>
        <fieldset className="donation-amounts">
          <legend>Donation amount (USD)</legend>
          {donationAmounts.map((preset) => (
            <button key={preset} type="button" className={`donation-amount ${amount === String(preset) ? "selected" : ""}`} onClick={() => setAmount(String(preset))} aria-pressed={amount === String(preset)}>
              ${preset}
            </button>
          ))}
        </fieldset>
        <label className="donation-custom-label" htmlFor="donation-custom">Or enter another amount (USD)</label>
        <div className="donation-custom-input"><span>$</span><input id="donation-custom" type="number" min="1" step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)} /></div>
        {school.paypalEmail ? (
          <button type="button" className="btn btn-paypal" onClick={donateToPayPal} disabled={!Number.isFinite(Number(amount)) || Number(amount) <= 0}>
            Continue with PayPal
          </button>
        ) : (
          <p className="donation-config-note">PayPal donations are not available yet. Please contact the school to sponsor a child.</p>
        )}
        <p className="donation-currency-note">PayPal will show the final amount and payment options before you complete your gift.</p>
      </section>
    </div>
  );
}
