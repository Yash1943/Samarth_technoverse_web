"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi there! I'm the Samarth Technoverse virtual assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date(),
  },
];

const botResponses: Record<string, string> = {
  services:
    "We offer ERP solutions, web & app development, consultancy services, and automation solutions. Which service are you interested in?",
  erp: "Our ERP solutions are custom-built to streamline your business operations, integrate departments, and boost productivity. Would you like to schedule a consultation?",
  web: "Our web development team creates stunning, responsive websites and applications that drive business growth. Do you have a specific project in mind?",
  app: "We develop native and cross-platform mobile applications with intuitive interfaces and powerful functionality. What kind of app are you looking to build?",
  consult:
    "Our consultancy services provide expert guidance on technology selection, digital transformation, and IT infrastructure optimization. What challenges are you facing?",
  contact:
    "You can reach us at info@samarthtechnoverse.com or call +91 98765 43210. Alternatively, you can fill out our contact form and we'll get back to you soon.",
  pricing:
    "Our pricing varies based on project requirements. We'd be happy to provide a custom quote after understanding your specific needs. Would you like to schedule a consultation?",
  default:
    "I'm sorry, I couldn't understand that. Please try asking about our services, pricing, or how to contact us. Alternatively, you can email us at info@samarthtechnoverse.com for more complex inquiries.",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("service")) return botResponses.services;
    if (lowerCaseMessage.includes("erp")) return botResponses.erp;
    if (lowerCaseMessage.includes("web")) return botResponses.web;
    if (lowerCaseMessage.includes("app")) return botResponses.app;
    if (lowerCaseMessage.includes("consult")) return botResponses.consult;
    if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("email") || lowerCaseMessage.includes("phone"))
      return botResponses.contact;
    if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost") || lowerCaseMessage.includes("quote"))
      return botResponses.pricing;
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full shadow-lg z-50 size-14"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      <div
        className={cn(
          "fixed bottom-24 right-6 w-[350px] z-50 transform transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <Card className="border shadow-lg">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg pb-4">
            <CardTitle className="text-lg font-medium">
              Samarth Technoverse Assistant
            </CardTitle>
          </CardHeader>
          <ScrollArea className="h-[350px] p-4">
            <CardContent className="pt-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.isBot ? "justify-start" : "justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                        message.isBot
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      )}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
          </ScrollArea>
          <CardFooter className="border-t p-3">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}