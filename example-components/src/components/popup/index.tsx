import React, { useEffect, useRef } from "react";
import { StyledOverlay, StyledPopup } from "./popup.syles";
import { createPortal } from "react-dom";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const portalEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!portalEl.current) {
      portalEl.current = document.createElement("div");
      document.body.appendChild(portalEl.current);
    }
  }, []);

  if (!isOpen || !portalEl.current) {
    return null;
  }

  return createPortal(
    <StyledOverlay onClick={onClose}>
      <StyledPopup onClick={(e) => e.stopPropagation()}>{children}</StyledPopup>
    </StyledOverlay>,
    portalEl.current
  );
};

export default Popup;
