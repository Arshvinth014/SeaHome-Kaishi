import { useEffect, useState } from 'react';
import { ChatBotPopup } from '../features/home/components/ChatBotPopup';

const DEFAULT_BUTTON_BOTTOM = 24;
const BUTTON_HEIGHT = 56;
const FOOTER_GAP = 24;

export function ChatBotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonBottom, setButtonBottom] = useState(DEFAULT_BUTTON_BOTTOM);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  useEffect(() => {
    const updateButtonPosition = () => {
      const footer = document.querySelector('footer');

      if (!footer) {
        setButtonBottom(DEFAULT_BUTTON_BOTTOM);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const desiredBottom = viewportHeight - footerRect.top - BUTTON_HEIGHT + FOOTER_GAP;

      setButtonBottom(Math.max(DEFAULT_BUTTON_BOTTOM, desiredBottom));
    };

    updateButtonPosition();
    window.addEventListener('scroll', updateButtonPosition, { passive: true });
    window.addEventListener('resize', updateButtonPosition);

    return () => {
      window.removeEventListener('scroll', updateButtonPosition);
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className="fixed right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] shadow-2xl shadow-[#0066FF]/40 hover:from-[#0052CC] hover:to-[#0044AA] hover:scale-105 hover:shadow-[#0066FF]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 focus:ring-offset-2"
        style={{ bottom: `${buttonBottom}px` }}
        aria-label={isOpen ? 'Close chat' : 'Open chat with Sora'}
        aria-expanded={isOpen}
      >
        <img
          src="/BlueBirdBuyPage.png"
          alt="Sora Assistant"
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Pulse animation for unread/new chat indication */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
        )}
      </button>

      {/* Chat Bot Popup */}
      <ChatBotPopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
