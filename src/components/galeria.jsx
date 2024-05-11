export function DefaultGallery() {
    const data = [
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/tecnologo-em-uniforme-de-protecao-usando-mascara-de-rede-para-o-cabelo-e-luvas-fechando-reservatorio-de-tanque-industrial_342744-1167.jpg?w=900&t=st=1713834490~exp=1713835090~hmac=c1267b1a7460cf5a785185aa40c943ad0c6ef87a7f8fbdc06e0d25b7d54f754f",
      },
      {
        imageLink:
        "https://img.freepik.com/fotos-gratis/visao-dos-alergenos-comumente-encontrados-em-laticinios_23-2150170330.jpg?t=st=1713834781~exp=1713838381~hmac=e189fd7ef4956bcee45179650e9dbb3e4f6fbab2eb7317725cd44e6c2edf7b0b&w=360"
      },
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/medico-veterinario-de-animais-na-fazenda-de-porcos-verificando-o-estado-de-saude-de-animais-domesticos-de-porcos-em-seu-computador-tablet-no-chiqueiro_342744-337.jpg?t=st=1713834595~exp=1713838195~hmac=6dd2113b0fda02faf70299eb5d97e5d9b0cd10a4fa9f0ab04ca75d5b42b26f53&w=900",
      },
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/carne-vermelha-fresca-e-trabalhador-de-acougue-trabalhando-em-segundo-plano_342744-662.jpg?t=st=1713834738~exp=1713838338~hmac=b33b9292d8251d004a9f2791e9893844bb9ec942511ce7ffc8a7ad9da9ebc5d3&w=900",
      },
      {
        imageLink:
        "https://img.freepik.com/fotos-gratis/trabalhador-industrial-com-roupas-protetoras-brancas-segurando-uma-lista-de-verificacao-e-lendo-os-resultados_342744-1192.jpg?w=900&t=st=1713834532~exp=1713835132~hmac=988544e5d964a7822b6106d646f397edf9917127df214cc5678c7a7761fa019d",
      },
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/tres-ovos-crus-organicos-frescos-isolados-na-superficie-branca_114579-43677.jpg?t=st=1713834817~exp=1713838417~hmac=4208ba03b8c3848923d385b9937abcf90b9dcb41e4d98138386e3de228e3d8f6&w=900",
      },
      {
        imageLink:
        "https://img.freepik.com/fotos-gratis/homem-com-equipamento-de-seguranca-no-trabalho_23-2148976350.jpg?t=st=1713834890~exp=1713838490~hmac=8a76dfa8742ee4e106d5f11581b8654d0d8046f0763b761c11b21ace1a3151e3&w=900",
      },
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/filetes-de-peito-de-frango-cru-na-tabua-de-madeira-com-ervas-e-especiarias_2829-16891.jpg?t=st=1713834960~exp=1713838560~hmac=da30b187d1a4036506693af8764b96183bc47fd2d37f51d6d6c0663baf4e9285&w=900",
      },
      {
        imageLink:
          "https://img.freepik.com/fotos-gratis/chef-com-frutas-e-legumes_23-2148145579.jpg?t=st=1713835050~exp=1713838650~hmac=59bcf1b13f7e31a4c530504759451422501aaf894725d015eca34ae1ab921a3d&w=900",
      },
    ];
   
    return (
      <figure className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-10">
        {data.map(({ imageLink }, index) => (
            <img
            key={index}
              className="h-40 w-full max-w-full rounded-lg object-cover object-center shadow-lg"
              src={imageLink}
              alt="gallery-photo"
            />
        ))}
      </figure>
    );
  }
   