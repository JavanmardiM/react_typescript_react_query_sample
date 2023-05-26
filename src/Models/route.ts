export interface Route {
  path: string;
  exact: boolean;
  name: string;
  component: any;
  isPrivate: boolean;
}
