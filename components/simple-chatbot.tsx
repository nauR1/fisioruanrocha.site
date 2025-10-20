"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { localAnswer } from "@/lib/chat-knowledge"
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants"

type Msg = { sender: "bot" | "user"; text: string }

const initialGreeting: Msg = {
  sender: "bot",
  text:
    "Olá! Sou o assistente do site. Posso ajudar com: agendamento (/agendamento), serviços (/servicos) — Ombro, Quiropraxia, Performance, Dor Crônica, horários, locais, contato (WhatsApp e email) e página Sobre. Pergunte algo ou clique em Agendar.",
}

export function SimpleChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([initialGreeting])
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isSending) return
    setInput("")
    setIsSending(true)

    const userMsg: Msg = { sender: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])

    try {
      const reply = localAnswer(trimmed)
      setMessages((prev) => [...prev, { sender: "bot", text: reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Desculpe, ocorreu um erro. Tente novamente ou acesse /agendamento." },
      ])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          aria-label="Abrir chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Painel do chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[320px] sm:w-[360px] bg-card border border-border rounded-xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-muted">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-primary" size={18} />
              <span className="text-sm font-semibold">Assistente do Site</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar chatbot"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.sender === "bot"
                    ? "bg-muted/60 text-foreground rounded-lg px-3 py-2 text-sm"
                    : "bg-primary/10 text-foreground rounded-lg px-3 py-2 text-sm ml-auto max-w-[85%]"
                }
              >
                {m.text}
              </div>
            ))}
            {isSending && (
              <div className="bg-muted/60 text-foreground rounded-lg px-3 py-2 text-sm inline-block">
                Digitando…
              </div>
            )}
            {/* Ações rápidas */}
            <div className="text-xs text-muted-foreground pt-2 flex gap-2 flex-wrap">
              <Button asChild size="sm" variant="secondary">
                <a href="/agendamento">Agendar</a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a href="/servicos">Serviços</a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a href="/contato">Contato</a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a href="/ombro">Ombro</a>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <a href={getWhatsAppLink(WHATSAPP_MESSAGES.schedule)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  sendMessage()
                }
              }}
            />
            <Button size="sm" onClick={sendMessage} className="px-3">
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}