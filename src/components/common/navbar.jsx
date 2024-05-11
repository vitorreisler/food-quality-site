import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  HomeIcon,
  Bars2Icon,
  InformationCircleIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

// nav list menu
const navListMenuItems = [
  {
    title: "SIF",
    description: "Serviço de Inspeção Federal",
    to: "https://www.gov.br/agricultura/pt-br/assuntos/inspecao/produtos-animal/sif",
  },
  {
    title: "SISP",
    description: "Serviço de Inspeção de São Paulo",
    to: "https://www.defesa.agricultura.sp.gov.br/www/servicos/?/sisp-registro-de-estabelecimento/&cod=63",
  },
  {
    title: "SISBI",
    description: "Sistema Brasileiro de Inspeção de Produtos de Origem Animal",
    to: "https://www.gov.br/agricultura/pt-br/assuntos/defesa-agropecuaria/suasa/sisbi-1",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, to }) => (
    <a href={to} key={title} target="_blank">
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-900" />{" "}
              Serviços de Inspeção{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="transparent"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md object-fit"
          >
            <img
              className="rounded"
              src="https://vmxagro.com.br/wp-content/uploads/2023/12/proteina-produtos.jpg"
            />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-900" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    to: "/",
  },
  {
    label: "A Quality",
    icon: TrophyIcon,
    to: "/quality",
  },
  {
    label: "Area de atuação",
    icon: BriefcaseIcon,
    to: "/atuacao",
  },
  // {
  //   label: "About",
  //   icon: InformationCircleIcon,
  // },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, to }, key) => (
        <Typography
          key={label}
          as="a"
          href={to}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-900"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
      <NavListMenu />
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full p-5 rounded-none lg:pl-6 bg-white border-none">
      <div className="relative mx-auto flex items-center justify-evenly text-black">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Quality <i className="bi bi-egg-fill"></i> Foods
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="black"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
