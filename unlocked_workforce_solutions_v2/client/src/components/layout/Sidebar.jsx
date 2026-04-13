import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { INTERNAL_NAV_ITEMS, PARTNER_NAV_ITEMS } from '../../constants/routes';

function Sidebar({ variant = 'internal' }) {
  const { user } = useAuth();

  const items = variant === 'partner' ? PARTNER_NAV_ITEMS : INTERNAL_NAV_ITEMS;
  const visibleItems = items.filter((item) => item.allowedRoles.includes(user.role));

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {visibleItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;