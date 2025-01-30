export const flagemojiToPNG = (flag) => {
  if (!flag) return null;
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export const countryCodeToPNG = (countryCode) => {
  if (!countryCode || countryCode.length !== 2) {
    console.warn("Invalid country code:", countryCode);
    return null;
  }

  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
      alt={`flag of ${countryCode}`}
      onError={(e) => {
        console.warn("Failed to load flag image:", countryCode);
        e.target.style.display = "none";
      }}
    />
  );
};

export function countryCodeToFlag(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}
