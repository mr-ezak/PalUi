/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import ContextMenuStyle from './style';
import { Placement, ItemType, LinkProps } from '../types';
import Menu from '../Menu';
import Overlay, { OverlayRefObject } from '../PopoverLay';

const ContextMenu: React.FC<ContextMenuProps> = props => {
  const overlayRef = React.useRef<OverlayRefObject>(null);
  return (
    <Overlay
      ref={overlayRef}
      target={props.children}
      placement={props.placement}
      style={props.style}
      className={props.className}
      eventListener={props.eventListener}
      transformSize={15}
    >
      <ContextMenuStyle>
        <span className="arrow" />
        <Menu className="context-menu" Link={props.Link} items={props.items} toggleSidebar={overlayRef.current?.hide} />
      </ContextMenuStyle>
    </Overlay>
  );
};

interface ContextMenuProps {
  items: ItemType[];
  eventListener?: string;
  placement: Placement;
  children: React.ReactNode;
  Link: React.ComponentType<LinkProps>;
  style?: React.CSSProperties;
  className?: string;
}

export default ContextMenu;