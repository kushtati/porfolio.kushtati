import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import { askAI } from '../services/ai';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Bonjour ! Je peux vous renseigner sur Ibrahim Barry, ses compétences et ses projets. Que voulez-vous savoir ?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestions = [
    "Quelles sont ses compétences ?",
    "Parle-moi de ses projets",
    "Comment le contacter ?"
  ];

  const handleSend = async (text?: string) => {
    const question = text || input.trim();
    if (!question || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setInput('');
    setLoading(true);

    try {
      const response = await askAI(question);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: "Erreur. Réessayez ou contactez ib362392@gmail.com" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Assistant IA"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>
        </button>
      )}

      {/* Chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[500px] bg-slate-900 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-rose-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <div>
                <h3 className="text-white font-bold text-sm">Assistant IA</h3>
                <p className="text-white/80 text-xs">Ibrahim Barry</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white'
                    : 'bg-slate-800 text-slate-200 border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" 
                           style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-slate-500 text-xs">Questions rapides :</p>
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="block w-full text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-slate-300 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-900 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                placeholder="Posez une question..."
                className="flex-1 bg-slate-800 text-white rounded-full px-4 py-2 text-sm border border-white/5 focus:outline-none focus:border-orange-500/50"
                disabled={loading}
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-full p-2 hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
