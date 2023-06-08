import React from "react";
import FilmPage from "../(pages)/Zenix_Film/(public)/info/[type]/[id]/page";
import Page from "../(pages)/Zenix_Film/(public)/[[...main]]/page";
import Page from "../(pages)/Zenix_Film/(private)/favourite/page";
import Page from "../(pages)/Zenix_Film/(public)/searched/[query]/[[...page]]/page";
import Page from "../(pages)/Zenix_Film/(auth)/auth-page/page";

interface Routes {
  path: string;
  element: React.FC;
}

export const privateRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:category?/page?/:num?",
    element: Page,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/Zenix_Film/favourite", element: Page },
  {
    path: "/Zenix_Film/searched/:queryParam/:page/:num",
    element: Page,
  },
];
export const publicRoutes: Routes[] = [
  {
    path: "/Zenix_Film/:type?/:category?/page?/:num?",
    element: Page,
  },
  {
    path: "/Zenix_Film/view/:type/:id",
    element: FilmPage,
  },
  { path: "/Zenix_Film/login", element: Page },
  {
    path: "/Zenix_Film/searched/:queryParam/:page/:num",
    element: Page,
  },
];
