import { footerCol1, footerCol2, footerCol3, footerSupportData } from "@/data/footerData";
import { FooterCol } from "./footerCol";

export const Footer = () => {
  const footerTitle = 'font-semibold text-foreground text-sm md:text-base'

  return (
    <footer className="w-full bg-white dark:bg-black border-t py-6 px-8 text-xs md:text-sm text-muted-foreground mt-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <div className="flex flex-col space-y-2">
          <h4 className={footerTitle}>Sobre</h4>
          {footerCol1.map((item, index) => (
            <FooterCol key={index} item={item} />
          ))}
          <p className="text-xs text-muted-foreground/80 mt-2">LinkedIn Corporation © 2025</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className={footerTitle}>Acessibilidade</h4>
          {footerCol2.map((item, index) => (
            <FooterCol key={index} item={item} />
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className={footerTitle}>Soluções</h4>
          {footerCol3.map((item, index) => (
            <FooterCol key={index} item={item} />
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {footerSupportData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}>
                <p className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-base md:text-lg text-foreground">
                    <Icon />
                  </span>
                  <span>
                    <strong className="text-sm md:text-base text-foreground">{item.title}</strong>
                    <FooterCol key={index} item={item} />
                    <br />
                    <span className="text-muted-foreground text-xs md:text-sm">
                      {item.description}
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
          <div className="flex flex-col mt-2">
            <label
              htmlFor="language"
              className="text-muted-foreground font-semibold mb-1 text-sm md:text-base"
            >
              Selecionar idioma
            </label>
            <select
              id="language"
              className="border border-muted-foreground rounded-md px-3 py-2 bg-white dark:bg-black focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm md:text-base"
            >
              <option>Português (Português)</option>
              <option>English (English)</option>
              <option>Español (Español)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
