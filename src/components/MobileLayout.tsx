import React from 'react';
import { 
  Image,
  Menu 
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from '../hooks/use-mobile';
import { Link } from 'react-router-dom';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  if (!isMobile) return <>{children}</>;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <main className="flex-1">
        {children}
      </main>
      
      {/* Mobile Bottom Navigation Bar - 简化为只有创建和菜单功能 */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-t border-gray-200 flex items-center justify-around z-50 dark:bg-slate-800/80 dark:border-slate-700">
        <a href="#generator" className="flex flex-col items-center justify-center">
          <Image size={24} />
          <span className="text-xs mt-1">创建</span>
        </a>
        
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center justify-center">
              <Menu size={24} />
              <span className="text-xs mt-1">菜单</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[385px]">
            <div className="py-6">
              <h2 className="text-xl font-semibold mb-4">功能菜单</h2>
              <nav className="space-y-4">
                <a href="#generator" className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-secondary">
                  <Image size={20} />
                  <span>创建卡片</span>
                </a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      
      {/* Add bottom padding to account for the navigation bar */}
      <div className="h-16"></div>
    </div>
  );
};

export default MobileLayout;
