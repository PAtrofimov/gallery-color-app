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
    <div className="content">
      <Colors />
    </div>
  </Main>
);
const UpdateColorWithMain = () => (
  <Main>
    <div className="content">
      <UpdateColor />
    </div>
  </Main>
);
const ErrorWithMain = () => (
  <Main>
    <div className="content">
      <Error />
    </div>
  </Main>
);

const AddColorWithMain = () => (
  <Main>
    <div className="content">
      <AddColor />
    </div>
  </Main>
);

export const publicRoutes = [
  {
    id: RouteNames.COLORS,
    path: RouteNames.COLORS,
    render: ColorsWithMain,
    exact: true,
  },
  {
    id: RouteNames.COLOR,
    path: RouteNames.COLOR,
    render: UpdateColorWithMain,
    exact: true,
  },
  {
    id: RouteNames.COLORADMIN,
    path: RouteNames.COLORADMIN,
    render: UpdateColorWithMain,
    exact: true,
  },
  {
    id: RouteNames.ADDCOLOR,
    path: RouteNames.ADDCOLOR,
    render: AddColorWithMain,
    exact: true,
  },
   { id: "/error", render: ErrorWithMain, exact: true },
];

export const privateRoutes = [];
