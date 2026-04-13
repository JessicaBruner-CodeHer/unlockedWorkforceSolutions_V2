import { ROLES } from './roles';

const PUBLIC_ROUTES = {
  home: '/',
  login: '/login',
};

const INTERNAL_ROUTE_CONFIG = {
  dashboard: {
    label: 'Dashboard',
    path: '/internal/dashboard',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  users: {
    label: 'Users',
    path: '/internal/users',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN],
  },
  partners: {
    label: 'Partners',
    path: '/internal/partners',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  participants: {
    label: 'Participants',
    path: '/internal/participants',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  jobs: {
    label: 'Jobs',
    path: '/internal/jobs',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  events: {
    label: 'Events',
    path: '/internal/events',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  documents: {
    label: 'Documents',
    path: '/internal/documents',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  resumes: {
    label: 'Resumes',
    path: '/internal/resumes',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN, ROLES.STAFF],
  },
  reports: {
    label: 'Reports',
    path: '/internal/reports',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN],
  },
  settings: {
    label: 'Settings',
    path: '/internal/settings',
    allowedRoles: [ROLES.SUPER_ADMIN, ROLES.WEB_ADMIN],
  },
};

const PARTNER_ROUTE_CONFIG = {
  dashboard: {
    label: 'Dashboard',
    path: '/partner/dashboard',
    allowedRoles: [ROLES.PARTNER_ADMIN, ROLES.PARTNER_USER],
  },
  jobs: {
    label: 'Jobs',
    path: '/partner/jobs',
    allowedRoles: [ROLES.PARTNER_ADMIN, ROLES.PARTNER_USER],
  },
  participants: {
    label: 'Participants',
    path: '/partner/participants',
    allowedRoles: [ROLES.PARTNER_ADMIN, ROLES.PARTNER_USER],
  },
  documents: {
    label: 'Documents',
    path: '/partner/documents',
    allowedRoles: [ROLES.PARTNER_ADMIN, ROLES.PARTNER_USER],
  },
};

const INTERNAL_NAV_ITEMS = Object.values(INTERNAL_ROUTE_CONFIG);
const PARTNER_NAV_ITEMS = Object.values(PARTNER_ROUTE_CONFIG);

export {
  PUBLIC_ROUTES,
  INTERNAL_ROUTE_CONFIG,
  PARTNER_ROUTE_CONFIG,
  INTERNAL_NAV_ITEMS,
  PARTNER_NAV_ITEMS,
};