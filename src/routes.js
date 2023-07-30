import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import SearchById from "views/admin/searchbyid";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdSearch
} from "react-icons/md";

const routes = [
  /** 
  {
    name: "Main Dashboard",                   // El nombre de la ruta.
    layout: "/admin",                         // La ubicación de diseño asociada a la ruta. Por ejemplo, si accedes a la ruta "/admin/default", el componente <MainDashboard /> se renderizará dentro del diseño asociado a "/admin".
    path: "default",                          // La ruta de la URL para acceder a esta página.
    icon: <MdHome className="h-6 w-6" />,     // El icono que se mostrará en la interfaz de usuario para esta ruta.
    component: <MainDashboard />,             // El componente que se renderizará cuando se acceda a esta ruta.
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,    
    secondary: true,                          // Un valor booleano que indica si la ruta es secundaria o no.
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
    {
    name: "Métricas",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "yyy",
    component: <DataTables />,
  },
    */

  {
    name: "Búsqueda por Cédula",
    layout: "/admin",
    icon: <MdSearch className="h-6 w-6" />,
    path: "searchbyid",
    component: <SearchById />,
  },

];
export default routes;