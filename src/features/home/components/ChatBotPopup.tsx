import { useState, useEffect, useRef, useCallback } from 'react';
import { Send, X, Eye, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export function ChatBotPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Inject styles once on mount
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes typingDots {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-4px); }
      }
      .chat-popup { animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .message-bubble-user { animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .message-bubble-bot { animation: slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .typing-dot { animation: typingDots 1.4s infinite ease-in-out; }
      .typing-dot:nth-child(2) { animation-delay: 0.2s; }
      .typing-dot:nth-child(3) { animation-delay: 0.4s; }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      
      /* Mobile responsive styles */
      @media (max-width: 480px) {
        .chat-popup-mobile {
          width: calc(100vw - 2rem) !important;
          max-width: calc(100vw - 2rem) !important;
          height: 60vh !important;
          max-height: 60vh !important;
          bottom: 4.5rem !important;
          right: 1rem !important;
          left: 1rem !important;
          border-radius: 1.5rem !important;
        }
      }
      
      @media (max-width: 640px) {
        .chat-popup-tablet {
          width: 360px !important;
          max-width: 360px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sora, your SeaHomeNet assistant. How can I help you find your perfect property today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTimestamp, setShowTimestamp] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Handle Enter key (send) and Shift+Enter (new line)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = useCallback(() => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response with variable delay
    const responseDelay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const responses = [
        "I can help you search for properties, schedule viewings, or answer questions about the market. What are you looking for today?",
        "Great question! I have access to listings across multiple countries. Are you interested in a specific location or property type?",
        "I'd be happy to help! Whether you're looking for a vacation home, investment property, or permanent residence, I can guide you through the process.",
        "Let me find you some great options! What's your budget range and preferred location?",
        "I can also help with mortgage calculations, neighborhood insights, and connecting you with local agents. What would be most useful?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const botResponse: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, responseDelay);
  }, [input, isTyping]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bottom-4 left-[48%] -translate-x-1/2 z-50 w-[calc(100vw-1rem)] max-w-sm sm:bottom-6 sm:right-25 sm:left-auto sm:w-auto sm:translate-x-0 lg:bottom-6 lg:right-25">
        <div
          className="chat-popup chat-popup-mobile chat-popup-tablet relative w-full h-[480px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          role="dialog"
          aria-label="Chat with Sora Assistant"
          style={{ animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#0066FF] to-[#0052CC] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="relative">
                <img
                  src="/Sora.png"
                  alt="Sora Assistant"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-lg"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Sora Assistant</h3>
                <p className="text-white/80 text-xs">AI Property Guide • Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 relative z-10">
              <button
                onClick={() => setShowTimestamp(!showTimestamp)}
                className="text-white/70 hover:text-white hover:bg-white/15 rounded-lg p-1.5 transition-colors"
                aria-label={showTimestamp ? 'Hide timestamps' : 'Show timestamps'}
                title={showTimestamp ? 'Hide timestamps' : 'Show timestamps'}
              >
                <Eye size={16} className={showTimestamp ? 'text-white' : 'text-white/70'} />
              </button>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white hover:bg-white/15 rounded-lg p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg, index) => {
              const prevMsg = messages[index - 1];
              const showAvatar = !msg.isUser && (index === 0 || prevMsg?.isUser);
              const isContinuation = !msg.isUser && prevMsg && !prevMsg.isUser;

              return (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} ${
                    isContinuation ? 'mt-1' : 'mt-0'
                  }`}
                >
                  {!msg.isUser && showAvatar && (
                    <div className="flex-shrink-0 w-8 h-8 mr-2 mt-0.5 flex-shrink-0">
                      <img
                        src="/Sora.png"
                        alt="Sora"
                        className="w-full h-full rounded-full object-cover shadow-sm"
                      />
                    </div>
                  )}
                  {!msg.isUser && !showAvatar && <div className="flex-shrink-0 w-8 mr-2" />}

                  <div
                    className={`relative max-w-[75%] ${
                      msg.isUser ? 'message-bubble-user' : 'message-bubble-bot'
                    } ${isContinuation ? 'rounded-tl-none' : ''}`}
                  >
                    <div
                      className={`${msg.isUser ? 'bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white' : 'bg-slate-50 text-slate-800 shadow-sm'} rounded-2xl px-4 py-2.5 ${
                        isContinuation ? 'rounded-tl-none' : (msg.isUser ? 'rounded-tr-xl' : 'rounded-tl-xl')
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{msg.text}</p>

                      {showTimestamp && (
                        <div className={`flex items-center justify-end mt-1.5 space-x-1.5 ${msg.isUser ? 'text-white/60' : 'text-slate-400'}`}>
                          <span className="text-[10px]">{formatTime(msg.timestamp)}</span>
                          {msg.isUser && msg.status === 'sent' && (
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M18 6L7 17l-5-5" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Message tail */}
                    {!isContinuation && (
                      <div
                        className={`absolute bottom-0 ${msg.isUser ? 'right-0' : 'left-0'} w-3 h-3`}
                        aria-hidden="true"
                      >
                        {msg.isUser ? (
                          <svg viewBox="0 0 12 12" className="w-full h-full text-[#0052CC]" fill="currentColor">
                            <path d="M0 12L12 12L0 0Z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 12 12" className="w-full h-full text-slate-50" fill="currentColor" transform="scale(-1, 1)">
                            <path d="M0 12L12 12L0 0Z" />
                          </svg>
                        )}
                      </div>
                    )}
                  </div>

                  {msg.isUser && (
                    <div className="flex-shrink-0 w-8 ml-2 mt-0.5 flex-shrink-0" />
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start" aria-live="polite">
                <div className="w-8 h-8 mr-2 flex-shrink-0">
                  <img
                    src="/Sora.png"
                    alt="Sora"
                    className="w-full h-full rounded-full object-cover shadow-sm"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
                  <div className="flex items-center space-x-1.5 h-6">
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                    <span className="typing-dot w-2 h-2 bg-slate-400 rounded-full" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-slate-100 p-3.5">
            <div className="flex items-end space-x-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="w-full px-4 py-2.5 pr-10 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] text-sm bg-slate-50 transition-all disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-slate-400"
                  aria-label="Chat message input"
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white flex items-center justify-center hover:from-[#0052CC] hover:to-[#0044AA] active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:from-[#0066FF] disabled:hover:to-[#0052CC] shadow-lg shadow-[#0066FF]/30 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 focus:ring-offset-2"
                aria-label="Send message"
                aria-disabled={!input.trim() || isTyping}
              >
                {isTyping ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-2.5">
              Press <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 font-mono text-[10px]">Enter</kbd> to send • <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600 font-mono text-[10px]">Shift+Enter</kbd> for new line
            </p>
          </div>
        </div>
      </div>
    </>
  );
}