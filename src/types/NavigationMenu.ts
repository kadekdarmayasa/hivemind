export type NavigationMenuProps = {
  path: string,
  name: string,
  containSubMenu?: boolean,
  subMenus?: {
    name: string,
    path: string,
  }[],
}
