
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePortfolio } from "@/context/PortfolioContext";

// Use the Message type from PortfolioContext
interface MessagesSectionProps {}

const MessagesSection = ({}: MessagesSectionProps) => {
  const { toast } = useToast();
  const { portfolioData, markMessageAsRead, deleteMessage } = usePortfolio();
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);
  
  const handleMarkAsRead = (id: number) => {
    markMessageAsRead(id);
    toast({
      title: "Message marked as read",
      description: "The message has been marked as read",
    });
  };
  
  const handleDelete = (id: number) => {
    deleteMessage(id);
    if (selectedMessageId === id) {
      setSelectedMessageId(null);
    }
    toast({
      title: "Message deleted",
      description: "The message has been deleted successfully",
      variant: "destructive",
    });
  };
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-portfolio-dark">Messages</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-medium text-portfolio-dark">Inbox</h3>
          </div>
          
          <div className="divide-y max-h-[500px] overflow-y-auto">
            {portfolioData.messages.length > 0 ? (
              portfolioData.messages.map((message) => (
                <div 
                  key={message.id}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${!message.isRead ? 'bg-blue-50' : ''} ${selectedMessageId === message.id ? 'bg-gray-100' : ''}`}
                  onClick={() => setSelectedMessageId(message.id)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>{getInitials(message.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className={`font-medium truncate ${!message.isRead ? 'text-portfolio-dark' : 'text-portfolio-gray'}`}>
                          {message.name}
                        </p>
                        <p className="text-xs text-portfolio-gray whitespace-nowrap">
                          {formatDate(message.date)}
                        </p>
                      </div>
                      <p className="text-sm text-portfolio-gray truncate">
                        {message.email}
                      </p>
                      <p className="text-sm truncate mt-1">
                        {message.message.substring(0, 60)}
                        {message.message.length > 60 ? '...' : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-portfolio-gray">
                <p>No messages yet.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:col-span-2 border rounded-lg">
          {selectedMessageId ? (
            (() => {
              const selectedMessage = portfolioData.messages.find(m => m.id === selectedMessageId);
              
              if (!selectedMessage) return (
                <div className="p-8 text-center text-portfolio-gray">
                  <p>Message not found.</p>
                </div>
              );
              
              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="text-lg">{getInitials(selectedMessage.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-lg text-portfolio-dark">{selectedMessage.name}</h3>
                        <p className="text-portfolio-gray">{selectedMessage.email}</p>
                      </div>
                    </div>
                    <div className="text-sm text-portfolio-gray">
                      {formatDate(selectedMessage.date)}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => window.location.href = `mailto:${selectedMessage.email}`}
                      >
                        Reply
                      </Button>
                    </div>
                    <div className="space-x-2">
                      {!selectedMessage.isRead && (
                        <Button
                          variant="outline"
                          onClick={() => handleMarkAsRead(selectedMessage.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(selectedMessage.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="p-8 text-center text-portfolio-gray h-full flex items-center justify-center">
              <p>Select a message to view its content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
