// utils/analytics.js

export function trackEvent(category, label) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "click", {
      event_category: category,
      event_label: label,
    });
  }
}
