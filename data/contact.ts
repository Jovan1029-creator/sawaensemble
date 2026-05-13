export const contactPhoneDisplay = "+255 673 469 206";
export const whatsappNumber = "255673469206";

export function whatsappUrl(message?: string) {
  const baseUrl = `https://wa.me/${whatsappNumber}`;

  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
