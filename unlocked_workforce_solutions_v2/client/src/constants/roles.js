const ROLES = {
  SUPER_ADMIN: 'super_admin',
  WEB_ADMIN: 'web_admin',
  STAFF: 'staff',
  PARTNER_ADMIN: 'partner_admin',
  PARTNER_USER: 'partner_user',
  PUBLIC_VISITOR: 'public_visitor',
};

const INTERNAL_ROLES = [
  ROLES.SUPER_ADMIN,
  ROLES.WEB_ADMIN,
  ROLES.STAFF,
];

const PARTNER_ROLES = [ROLES.PARTNER_ADMIN, ROLES.PARTNER_USER];

const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.WEB_ADMIN]: 'Web Admin',
  [ROLES.STAFF]: 'Staff',
  [ROLES.PARTNER_ADMIN]: 'Partner Admin',
  [ROLES.PARTNER_USER]: 'Partner User',
  [ROLES.PUBLIC_VISITOR]: 'Public Visitor',
};

const ROLE_HOME_ROUTES = {
  [ROLES.SUPER_ADMIN]: '/internal/dashboard',
  [ROLES.WEB_ADMIN]: '/internal/dashboard',
  [ROLES.STAFF]: '/internal/dashboard',
  [ROLES.PARTNER_ADMIN]: '/partner/dashboard',
  [ROLES.PARTNER_USER]: '/partner/dashboard',
  [ROLES.PUBLIC_VISITOR]: '/',
  staff: '/internal/dashboard',
};

export {
  ROLES,
  INTERNAL_ROLES,
  PARTNER_ROLES,
  ROLE_LABELS,
  ROLE_HOME_ROUTES,
};