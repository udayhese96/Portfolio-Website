import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Trash2 } from "lucide-react";
import { usePortfolio, Message } from "@/context/PortfolioContext";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  isRead: boolean;
}

const MessagesSection = () => {
  const { toast } = useToast();
  const { portfolioData, markMessageAsRead, deleteMessage } = usePortfolio();
  const [messages, setMessages] = useState<Message[]>(portfolioData.messages);
  
  // Keep local messages state in sync with context
  useEffect(() => {
    setMessages(portfolioData.messages);
  }, [portfolioData.messages]);
  
  const handleMarkAsRead = (id: number) => {
    markMessageAsRead(id);
    
    toast({
      title: "Message marked as read",
      description: "The message has been marked as read",
    });
  };
  
  const handleDeleteMessage = (id: number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      deleteMessage(id);
      
      toast({
        title: "Message deleted",
        description: "The message has been removed",
      });
    }
  };
  
  const unreadCount = messages.filter(message => !message.isRead).length;
  
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-portfolio-dark">Messages</h2>
          <p className="text-sm text-portfolio-gray">
            {unreadCount} unread {unreadCount === 1 ? "message" : "messages"}
          </p>
        </div>
      </div>
      
      {messages.length === 0 ? (
        <div className="rounded-lg border border-gray-200 p-8 text-center">
          <Mail size={48} className="mx-auto mb-4 text-portfolio-gray opacity-50" />
          <p className="text-lg text-portfolio-gray">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`rounded-lg border p-4 ${message.isRead ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'}`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-portfolio-dark">
                    {message.name}
                    {!message.isRead && (
                      <span className="ml-2 inline-block h-2 w-2 rounded-full bg-portfolio-blue"></span>
                    )}
                  </h3>
                  <p className="text-xs text-portfolio-gray">
                    {message.email} • {message.date}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!message.isRead && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-blue-200 text-portfolio-blue hover:bg-blue-50"
                      onClick={() => handleMarkAsRead(message.id)}
                    >
                      Mark as Read
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-red-200 text-red-500 hover:bg-red-50"
                    onClick={() => handleDeleteMessage(message.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="whitespace-pre-wrap rounded-md bg-gray-50 p-3 text-sm text-portfolio-gray">
                {message.message}
              </div>
              
              <div className="mt-3">
                <a 
                  href={`mailto:${message.email}`}
                  className="text-sm text-portfolio-blue hover:underline"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesSection;
