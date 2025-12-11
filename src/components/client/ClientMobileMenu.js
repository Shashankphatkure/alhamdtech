'use client';

import MobileMenu from '../MobileMenu';

export default function ClientMobileMenu({ isOpen, onClose, activeSection }) {
  return <MobileMenu isOpen={isOpen} onClose={onClose} activeSection={activeSection} />;
} 