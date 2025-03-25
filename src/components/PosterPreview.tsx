
import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PosterPreviewProps = {
  language: string;
  scene: string;
  style: string;
  text: string;
  loading?: boolean;
};

const PosterPreview: React.FC<PosterPreviewProps> = ({
  language,
  scene,
  style,
  text,
  loading = false,
}) => {
  // Generate a placeholder image based on the parameters
  const generatePlaceholderImage = () => {
    // For now, create a simple gradient background based on style
    let background;
    switch (style) {
      case 'minimal':
        background = 'bg-gradient-to-br from-slate-100 to-gray-200';
        break;
      case 'vibrant':
        background = 'bg-gradient-to-br from-blue-200 to-purple-200';
        break;
      case 'elegant':
        background = 'bg-gradient-to-br from-stone-100 to-amber-100';
        break;
      case 'retro':
        background = 'bg-gradient-to-br from-yellow-100 to-orange-100';
        break;
      default:
        background = 'bg-gradient-to-br from-slate-100 to-gray-200';
    }
    return background;
  };

  // Get appropriate font style based on selected style
  const getFontStyle = () => {
    switch (style) {
      case 'minimal':
        return 'font-light';
      case 'vibrant':
        return 'font-bold';
      case 'elegant':
        return 'font-medium italic';
      case 'retro':
        return 'font-semibold';
      default:
        return 'font-normal';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-lg glass relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className={`absolute inset-0 ${generatePlaceholderImage()}`}>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className={`text-center ${getFontStyle()}`}>
                <p className="text-lg md:text-xl break-words">
                  {text || (language === 'zh' ? '在此输入您的文字' : 'Enter your text here')}
                </p>
              </div>
            </div>
            
            {/* Watermark */}
            <div className="absolute bottom-2 right-2 text-xs text-gray-500 opacity-70">
              PosterAI
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-3 mt-5 animate-fade-in">
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="w-4 h-4" />
          Download
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default PosterPreview;
