import { FooterWithSocialLinks } from "@/components/common/footer";
import { ComplexNavbar } from "@/components/common/navbar";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";

const About = () => {
  const [pulse, setPulse] = React.useState("");
  setInterval(() => {
    if (!pulse) {
      return setPulse("scale-150");
    } else {
      return setPulse("");
    }
  }, 1500);
  return (
    <>
      <ComplexNavbar />
      <Typography
        variant="h1"
        color="white"
        className="text-center eb-garamond-fonte-altenativa text-6xl my-5"
      >
        Muito mais que uma consultoria!
      </Typography>
      <section className="container pt-8 shadow rounded my-3 bg-white text-center mx-auto mb-10">
        <section className="flex items-center justify-evenly flex-wrap gap-3">
          <img
            className="rounded shadow sm:w-full lg:w-[600px]"
            src="https://integrafoods.com.br/wp-content/uploads/2021/08/andrew-neel-66NjVBij7P8-unsplash-1024x683.jpg"
            alt=""
          />
          <article className="sm:w-full lg:w-[400px]">
            A Integra é uma empresa de consultoria em segurança de alimentos e
            buscamos além de garantir a qualidade da cadeia de processos que
            envolve o alimento deste a sua saída do campo até o consumidor
            final, garantir que haja entendimento da importância das etapas e
            procedimentos por parte de toda a equipe, desde os operadores até a
            alta gestão. Nossas interações tendem ser mais humanizadas e
            prezamos por uma linguagem acessível. E para conseguir nosso
            objetivo, contamos com uma equipe multidisciplinar que não para de
            se atualizar, e além disso, prezamos por uma comunicação eficiente e
            fazer o que muitos duvidam para conseguir, respeitando o momento de
            cada cliente, para assim, garantir que sejamos vistos e notados por
            todos.
          </article>
        </section>
        <section className="text-center my-5 flex flex-col items-center">
          <h1 className="mb-3 text-3xl">Nossa Localização</h1>
          <iframe
            className="rounded shadow mb-2 sm:w-[300px] lg:w-[500px]"
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3825988186354!2d-46.6676451!3d-23.5187377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7fefb67f003%3A0xeb4cdb9758ea9dfe!2sAv.%20Ordem%20e%20Progresso%2C%20157%20-%20V%C3%A1rzea%20da%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001141-030!5e0!3m2!1spt-BR!2sbr!4v1705860177997!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form action="mailto:vgr92@hotmail.com?Subject=Hi" className="my-2 flex flex-wrap justify-center gap-3">
            <h1 className="text-3xl">Trabalhe Conosco</h1>
            <a className="w-[35px]" href="mailto:vgr92@hotmail.com?subject=CV">
              {" "}
              <EnvelopeIcon
                color="green"
                className={`${pulse} transition duration-700`}
              />{" "}
            </a>
          </form>
        </section>
      </section>
      <FooterWithSocialLinks/>
    </>
  );
};

export default About;
