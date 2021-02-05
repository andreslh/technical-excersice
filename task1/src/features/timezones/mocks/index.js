import { BASE_URL, ZONE_BASE_URL } from '../../../app/constants';
import timezones from './timezones.json';
import andorra from './andorra.json';
import tirane from './tirane.json';

export const mockTimezones = (mock) =>
  mock.onGet(`${BASE_URL}Europe/*`).reply(200, timezones);

export const mockSelectedAndorra = (mock) =>
  mock.onGet(`${ZONE_BASE_URL}Europe/Andorra`).reply(200, andorra);

export const mockSelectedTirane = (mock) =>
  mock.onGet(`${ZONE_BASE_URL}Europe/Tirane`).reply(200, tirane);
