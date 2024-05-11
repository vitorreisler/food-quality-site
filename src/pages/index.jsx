import { CarouselWithContent } from "@/components/carousel";
import Contato from "@/components/contato";
import { DefaultGallery } from "@/components/galeria";
import { ComplexNavbar } from "@/components/common/navbar";
import { FooterWithSocialLinks } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <main className="bg-green-800">
        <ComplexNavbar />
        <CarouselWithContent />
        <DefaultGallery />
        <Contato />
        <FooterWithSocialLinks />
      </main>
    </>
  );
}
