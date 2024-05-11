import { FooterWithSocialLinks } from "@/components/common/footer";
import { ComplexNavbar } from "@/components/common/navbar";
import { Typography } from "@material-tailwind/react";

const Atuacao = () => {
  return (
    <>
      <ComplexNavbar />
      <Typography variant="h1" color="white" className="text-center text-6xl my-5 eb-garamond-fonte-altenativa ">
        Nossas áreas de atuação
      </Typography>
      <section className="container flex flex-column flex-wrap justify-center items-center mx-auto gap-3 shadow p-4 rounded text-center bg-white mb-5">
        <article className=" flex flex-wrap justify-center gap-4 md:p-5  ">
          <a
            href="https://www.embrapa.br/agencia-de-informacao-tecnologica/tematicas/tecnologia-de-alimentos/seguranca/bpf"
            target="_blank"
            className="flex rounded  items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/manufacture.png"
              alt="Boas praticas de Fabricação"
            />
            <Typography variant="paragraph" className="m-0 w-72">
              Implementação e treinamento em Boas Práticas de Fabricação - BPF.
            </Typography>
          </a>
          <a
            href="https://www.defesa.agricultura.sp.gov.br/legislacoes/resolucao-dipoa-10-de-22-05-2003,744.html#:~:text=PROGRAMA%20DE%20PROCEDIMENTOS%20%2D%20PADR%C3%83O%20DE,ESTABELECIMENTOS%20DE%20LEITE%20E%20DERIVADOS.&text=1.1.,1.1.1."
            target="_blank"
            className="flex rounded items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/hygiene-mask.png"
              alt="PPHO"
            />
            <p className="m-0 w-72">
              Implementação e treinamento em Procedimentos Padronizados de
              Higiene Operacional - PPHO
            </p>
          </a>
        </article>

        <article className=" flex flex-wrap justify-center gap-4 md:p-5 ">
          <a
            href="https://www.gov.br/siscomex/pt-br/servicos/aprendendo-a-exportarr/conhecendo-temas-importantes-1/sistema-appcc-haccp"
            target="_blank"
            className="flex rounded  items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/report.png"
              alt="APPCC"
            />
            <p className="m-0 w-72">
              Implementação e treinamento em Programa de Análise de Perigo e
              Pontos Críticos de Controle - APPCC.
            </p>
          </a>
          <a
            href="https://portalefood.com.br/artigos/novas-regras-de-rotulagem-de-alimentos-e-os-seus-impactos/"
            target="_blank"
            className=" flex rounded items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/document.png"
              alt="rotulagem"
            />
            <p className="m-0 w-72">
              Criação e Atualização de rotulagem de acordo com a{" "}
              <strong>nova lei de rotulagem</strong>
            </p>
          </a>
        </article>

        <article className=" flex flex-wrap justify-center gap-4 md:p-5 ">
          <a
            href="https://portalefood.com.br/bpf/a-importancia-dos-treinamentos-operacionais-nas-praticas-de-fabricacao-em-servicos-de-alimentacao/"
            target="_blank"
            className="flex rounded items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/training.png"
              alt="Treinamento de Manipuladores de alimentos"
            />
            <p className="m-0 w-72">
              Treinamentos para manipuladores de alimentos em geral.
            </p>
          </a>
          <a
            href="https://www.santaritadopassaquatro.sp.gov.br/portal/servicos-de-inspecao-saiba-mais-sobre-os-selos-sif-sisp-sim-e-sisbi/"
            target="_blank"
            className=" flex rounded items-center gap-3 "
          >
            <img
              className="w-[100px] hover:scale-110 transition ease-in-out duration-500"
              src="https://integrafoods.com.br/wp-content/uploads/2021/08/development.png"
              alt="Projetos SIF,SISP,SISBI"
            />
            <p className="m-0 w-72">
              Elaboração de projetos para empresas de alimentos. (SIF, SISP,
              Anvisa)
            </p>
          </a>
        </article>
      </section>
      <FooterWithSocialLinks/>
    </>
  );
};

export default Atuacao;
