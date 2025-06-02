import { FC } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

declare const Sidebar: FC<SidebarProps>;

export default Sidebar; 