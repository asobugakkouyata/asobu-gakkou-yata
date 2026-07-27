import { footerLinks, siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#3d6b2e] px-5 py-7 text-center text-[13px] text-[#c8e0b8]">
      <div className="mb-2.5">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mx-2.5 text-[13px] text-[#d4ecc4] transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p>&copy; {siteInfo.orgName}</p>
    </footer>
  );
}
