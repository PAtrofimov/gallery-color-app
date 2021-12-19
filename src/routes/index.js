import Main from "../layouts/Main";
import AddColor from "../pages/AddColor";
import Colors from "../pages/Colors";
import Error from "../pages/Error";
import UpdateColor from "../pages/UpdateColor";

export const RouteNames = {
  COLORADMIN: "/color/:id?role=admin",
  COLOR: "/color/:id",
  COLORS: "/",
  ADDCOLOR: "/add",
};

const ColorsWithMain = () => (
  <Main>
    <Colors />
  </Main>
);
const UpdateColorWithMain = () => (
  <Main>
    <UpdateColor />
  </Main>
);
const ErrorWithMain = () => (
  <Main>
    <Error />
  </Main>
);

const AddColorWithMain = () => (
   <Main>
     <AddColor />
   </Main>
 );

export const publicRoutes = [
  { path: RouteNames.COLORS, render: ColorsWithMain, exact: true },
  { path: RouteNames.COLOR, render: UpdateColorWithMain, exact: true },
  { path: RouteNames.COLORADMIN, render: UpdateColorWithMain, exact: true },
  { path: RouteNames.ADDCOLOR, render: AddColorWithMain, exact: true },
//   { render: ErrorWithMain, exact: true },
];

export const privateRoutes = [];
