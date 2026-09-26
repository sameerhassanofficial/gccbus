import { Route } from '../types';
import { DAY_TRIPS_DATA } from './dayTripsData';
import { MULTI_DAY_2D1N } from './multiDay2D1N';
import { MULTI_DAY_3D2N } from './multiDay3D2N';
import { MULTI_DAY_4D3N } from './multiDay4D3N';
import { MULTI_DAY_5D4N } from './multiDay5D4N';
import { MULTI_DAY_6D5N } from './multiDay6D5N';
import { MULTI_DAY_7D6N } from './multiDay7D6N';

export { DAY_TRIPS_DATA } from './dayTripsData';
export { MULTI_DAY_2D1N } from './multiDay2D1N';
export { MULTI_DAY_3D2N } from './multiDay3D2N';
export { MULTI_DAY_4D3N } from './multiDay4D3N';
export { MULTI_DAY_5D4N } from './multiDay5D4N';
export { MULTI_DAY_6D5N } from './multiDay6D5N';
export { MULTI_DAY_7D6N } from './multiDay7D6N';

export const MULTI_DAY_DATA: Route[] = [
  ...MULTI_DAY_2D1N,
  ...MULTI_DAY_3D2N,
  ...MULTI_DAY_4D3N,
  ...MULTI_DAY_5D4N,
  ...MULTI_DAY_6D5N,
  ...MULTI_DAY_7D6N
];

export const ROUTES_DATA: Route[] = [
  ...DAY_TRIPS_DATA,
  ...MULTI_DAY_DATA
];
