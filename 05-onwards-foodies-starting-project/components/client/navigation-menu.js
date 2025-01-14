import Link from "next/link";

export const menuList = [
  {
    id: 'community',
    label: 'community',
    link: '/community',
    subMenu: [],
  },
  {
    id: 'meals',
    label: 'meals',
    link: '/meals',
    subMenu: [
      {
        id: 'mealsShare',
        label: 'share',
        link: '/meals/share',
        subMenu: [],
      },
    ],
  },
  {
    id: 'home',
    label: 'home',
    link: '/',
    subMenu: [],
  },
];

export default function NavigationMenu() {
  function renderMenuList(menuList) {
    return (
      <ul>
        {menuList.map(({ id, label, link, subMenu }) => (
          <li key={id}>
            <Link href={link}>{label}</Link>
            {Boolean(subMenu.length) && renderMenuList(subMenu)}
          </li>
        ))}
      </ul>
    ); 
  }

  return (
    <header>
      <nav>
        {renderMenuList(menuList)}
      </nav>
    </header>
  );
}