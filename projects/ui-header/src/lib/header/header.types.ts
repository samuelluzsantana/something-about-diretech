export interface HeaderNavigation {
  navigation: {
    tabs: HeaderTab[];
  };
}

export type HeaderTab = HeaderTabItem | HeaderDropdown;

export interface HeaderTabItem {
  name: string;
  href: string;
  type: 'tab';
}

export interface HeaderDropdown {
  name: string;
  type: 'dropdown';
  sections: DropdownSection[];
}

export interface DropdownSection {
  title: string;
  links: DropdownLink[];
}

export interface DropdownLink {
  label: string;
  href: string;
}
