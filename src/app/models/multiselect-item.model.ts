export interface IMultiselectItem {
    name: string;
    value: string;
    checked: boolean;
    children?: IMultiselectItem[];
}