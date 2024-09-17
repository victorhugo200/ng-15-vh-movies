export interface MenusModel {
    menus: MenuModel[];
}
export interface MenuModel {
    title: string;
    group: MenuGroupModel[];
}

interface MenuGroupModel {
    subtitle: string;
    route: string;
}