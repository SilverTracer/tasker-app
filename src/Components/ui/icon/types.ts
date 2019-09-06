import { Color } from '../types';

export interface IIcon {
  color: Color;
  width?: number;
  size?: number;
}

export interface IIcons extends IIcon {
  type:
    'Feather' |
    'Plus' |
    'PlusCircle' |
    'Search' |
    'BarChart';
}
