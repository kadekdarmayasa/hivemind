export type NavigationMenuProps = {
  href: string,
  name: string,
  containSubMenu?: boolean,
  subMenu?: {
    name: string,
    path: string,
  }[],
}
