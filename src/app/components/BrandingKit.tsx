import { useState } from 'react';
import { Logo } from './Logo';
import { Download, Copy, Check } from 'lucide-react';

export function BrandingKit() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Muted Purple Gray', rgb: 'rgb(117, 95, 163)', hex: '#755FA3', usage: 'Primary - Headers, main text, logo' },
    { name: 'Medium Purple', rgb: 'rgb(147, 112, 219)', hex: '#9370DB', usage: 'Secondary - Accents, CTAs, links' },
    { name: 'Deep Purple', rgb: 'rgb(76, 57, 145)', hex: '#4C3991', usage: 'Highlights - Important elements, emphasis' },
    { name: 'Royal Purple', rgb: 'rgb(108, 92, 231)', hex: '#6C5CE7', usage: 'Supporting - Decorative accents' },
    { name: 'Soft Lavender', rgb: 'rgb(186, 148, 207)', hex: '#BA94CF', usage: 'Light accent - Borders, subtle elements' },
    { name: 'Pale Orchid', rgb: 'rgb(221, 190, 223)', hex: '#DDBEDF', usage: 'Background accent - Soft backgrounds' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const downloadSVG = (variant: 'full' | 'icon' | 'horizontal') => {
    const svgElement = document.getElementById(`logo-${variant}`);
    if (svgElement) {
      const svgData = svgElement.outerHTML;
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `nichole-life-encourager-${variant}.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const downloadPNG = (variant: 'full' | 'icon' | 'horizontal') => {
  const svgElement = document.getElementById(`logo-${variant}`);
  if (svgElement) {
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    // Create a robust URL for the SVG data
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      // Set canvas size to match the high-res SVG size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw and export
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const pngUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = pngUrl;
          link.download = `nichole-life-encourager-${variant}.png`;
          link.click();
          URL.revokeObjectURL(pngUrl);
        }
      });
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(248,245,252)] to-[rgb(238,232,250)]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-[rgb(186,148,207)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[rgb(117,95,163)] mb-2">Nichole Life Encourager</h1>
              <p className="text-[rgb(147,112,219)] italic">Brand Identity Guide</p>
            </div>
            <Logo variant="icon" size={80} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Logo Variations */}
        <section>
          <h2 className="text-[rgb(117,95,163)] mb-8">Logo Variations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Full Logo */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-[300px]">
                  <Logo variant="full" size={200} />
                </div>
                <h3 className="text-[rgb(117,95,163)] mb-2">Primary Logo</h3>
                <p className="text-[rgb(117,95,163)] text-sm text-center mb-4">
                  Use for main brand applications
                </p>
                <button
                  onClick={() => downloadSVG('full')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(147,112,219)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors mb-2"
                >
                  <Download size={16} />
                  Download SVG
                </button>
                <button
                  onClick={() => downloadPNG('full')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(117,95,163)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors"
                >
                  <Download size={16} />
                  Download PNG
                </button>
              </div>
            </div>

            {/* Horizontal Logo */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-[300px]">
                  <Logo variant="horizontal" size={100} />
                </div>
                <h3 className="text-[rgb(76,57,145)] mb-2">Horizontal Logo</h3>
                <p className="text-[rgb(117,95,163)] text-sm text-center mb-4">
                  Use for headers and wide spaces
                </p>
                <button
                  onClick={() => downloadSVG('horizontal')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(108,92,231)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors"
                >
                  <Download size={16} />
                  Download SVG
                </button>
                <button
                  onClick={() => downloadPNG('horizontal')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(108,92,231)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors"
                >
                  <Download size={16} />
                  Download PNG
                </button>
              </div>
            </div>

            {/* Icon Only */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center h-[300px]">
                  <Logo variant="icon" size={200} />
                </div>
                <h3 className="text-[rgb(117,95,163)] mb-2">Icon Mark</h3>
                <p className="text-[rgb(117,95,163)] text-sm text-center mb-4">
                  Use for social media and small spaces
                </p>
                <button
                  onClick={() => downloadSVG('icon')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(147,112,219)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors mb-2"
                >
                  <Download size={16} />
                  Download SVG
                </button>
                <button
                  onClick={() => downloadPNG('icon')}
                  className="flex items-center gap-2 px-4 py-2 bg-[rgb(117,95,163)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors"
                >
                  <Download size={16} />
                  Download PNG
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Meaning */}
        <section className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
          <h2 className="text-[rgb(117,95,163)] mb-6">Logo Symbolism</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Design Elements</h3>
              <ul className="space-y-3 text-[rgb(117,95,163)]">
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(147,112,219)] mt-1">✦</span>
                  <div>
                    <strong>Butterfly:</strong> The ultimate symbol of transformation, metamorphosis, and rebirth
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(147,112,219)] mt-1">✦</span>
                  <div>
                    <strong>Delicate Wings:</strong> Represent strength through gentleness and the beauty of emerging renewed
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(147,112,219)] mt-1">✦</span>
                  <div>
                    <strong>Graceful Form:</strong> Embodies elegance, hope, and the journey from darkness to light
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(147,112,219)] mt-1">✦</span>
                  <div>
                    <strong>Circular Frame:</strong> Symbolizes wholeness, completion, and the continuous cycle of growth
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Brand Message</h3>
              <p className="text-[rgb(117,95,163)] mb-4">
                The butterfly perfectly captures the essence of transformation through grief. Just as a caterpillar 
                enters the darkness of a cocoon and emerges as something beautiful, individuals navigating grief 
                can transform their pain into purpose.
              </p>
              <p className="text-[rgb(117,95,163)]">
                This logo represents the journey from merely existing to truly LIVING—a metamorphosis guided by 
                encouragement, compassion, and the belief that everyone has the potential to become the best version 
                of themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-[rgb(117,95,163)] mb-8">Color Palette</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div
                key={color.hex}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-[rgb(200,158,164)]/30"
              >
                <div
                  className="h-32"
                  style={{ backgroundColor: color.rgb }}
                />
                <div className="p-6">
                  <h3 className="text-[rgb(117,95,163)] mb-3">{color.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(117,95,163)] text-sm">HEX</span>
                      <button
                        onClick={() => copyToClipboard(color.hex)}
                        className="flex items-center gap-2 text-[rgb(147,112,219)] hover:text-[rgb(76,57,145)] transition-colors"
                      >
                        <code className="text-sm">{color.hex}</code>
                        {copiedColor === color.hex ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(117,95,163)] text-sm">RGB</span>
                      <button
                        onClick={() => copyToClipboard(color.rgb)}
                        className="flex items-center gap-2 text-[rgb(147,112,219)] hover:text-[rgb(76,57,145)] transition-colors"
                      >
                        <code className="text-sm">{color.rgb}</code>
                        {copiedColor === color.rgb ? (
                          <Check size={14} />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-[rgb(117,95,163)] text-sm italic">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
          <h2 className="text-[rgb(117,95,163)] mb-8">Typography</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Primary Font: Georgia</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl text-[rgb(117,95,163)] font-serif">Aa Bb Cc</p>
                  <p className="text-[rgb(117,95,163)] text-sm mt-2">Georgia Regular</p>
                </div>
                <div>
                  <p className="text-5xl text-[rgb(117,95,163)] font-serif italic">Aa Bb Cc</p>
                  <p className="text-[rgb(117,95,163)] text-sm mt-2">Georgia Italic</p>
                </div>
                <p className="text-[rgb(117,95,163)] pt-4">
                  Georgia brings warmth, elegance, and readability. Use for headlines, 
                  taglines, and emphasis text to convey sophistication and compassion.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Secondary Font: System Sans</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-5xl text-[rgb(117,95,163)]">Aa Bb Cc</p>
                  <p className="text-[rgb(117,95,163)] text-sm mt-2">Sans-Serif Regular</p>
                </div>
                <div>
                  <p className="text-5xl text-[rgb(117,95,163)]"><strong>Aa Bb Cc</strong></p>
                  <p className="text-[rgb(117,95,163)] text-sm mt-2">Sans-Serif Bold</p>
                </div>
                <p className="text-[rgb(117,95,163)] pt-4">
                  Clean sans-serif fonts for body text ensure excellent readability. 
                  Use for paragraphs, captions, and UI elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Voice */}
        <section className="bg-gradient-to-br from-[rgb(248,245,252)] to-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
          <h2 className="text-[rgb(117,95,163)] mb-6">Brand Voice & Messaging</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Tagline</h3>
              <p className="text-2xl text-[rgb(117,95,163)] font-serif italic mb-6">
                "Encouraging you to be the best version of you"
              </p>
              
              <h3 className="text-[rgb(147,112,219)] mb-4">Key Messages</h3>
              <ul className="space-y-2 text-[rgb(117,95,163)]">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  From merely existing to LIVING
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Six key goal-setting areas for life transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Supporting those navigating grief
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Empowerment through encouragement
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4">Voice Characteristics</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-[rgb(186,148,207)]/30">
                  <h4 className="text-[rgb(117,95,163)] mb-1">Compassionate</h4>
                  <p className="text-[rgb(117,95,163)] text-sm">Warm, empathetic, and understanding</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[rgb(186,148,207)]/30">
                  <h4 className="text-[rgb(117,95,163)] mb-1">Encouraging</h4>
                  <p className="text-[rgb(117,95,163)] text-sm">Uplifting and motivational without being pushy</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[rgb(186,148,207)]/30">
                  <h4 className="text-[rgb(117,95,163)] mb-1">Authentic</h4>
                  <p className="text-[rgb(117,95,163)] text-sm">Genuine, relatable, and real</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-[rgb(186,148,207)]/30">
                  <h4 className="text-[rgb(117,95,163)] mb-1">Professional</h4>
                  <p className="text-[rgb(117,95,163)] text-sm">Expert yet approachable and accessible</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
          <h2 className="text-[rgb(117,95,163)] mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-[rgb(248,245,252)] to-white rounded-lg border border-[rgb(186,148,207)]/20">
              <h3 className="text-[rgb(147,112,219)] mb-3">Speaking</h3>
              <ul className="space-y-2 text-[rgb(117,95,163)] text-sm">
                <li>• Keynote Speaking</li>
                <li>• Motivational Talks</li>
                <li>• Workshops</li>
                <li>• Seminars</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-[rgb(248,245,252)] to-white rounded-lg border border-[rgb(186,148,207)]/20">
              <h3 className="text-[rgb(147,112,219)] mb-3">Consulting</h3>
              <ul className="space-y-2 text-[rgb(117,95,163)] text-sm">
                <li>• One-on-One Sessions</li>
                <li>• Goal Setting Guidance</li>
                <li>• Transformation Coaching</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-[rgb(248,245,252)] to-white rounded-lg border border-[rgb(186,148,207)]/20">
              <h3 className="text-[rgb(147,112,219)] mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-[rgb(117,95,163)] text-sm">
                <li>• Grief Support</li>
                <li>• Life Transformation</li>
                <li>• Personal Growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Applications */}
        <section>
          <h2 className="text-[rgb(117,95,163)] mb-8">Brand Applications</h2>
          <div className="space-y-8">
            {/* Business Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <h3 className="text-[rgb(147,112,219)] mb-6">Business Card</h3>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Front of card */}
                  <div className="w-[350px] h-[200px] bg-white rounded-lg shadow-lg border border-[rgb(186,148,207)]/20 overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-br from-[rgb(248,245,252)] via-white to-[rgb(238,232,250)] p-6 flex flex-col justify-between">
                      <div>
                        <Logo variant="horizontal" size={50} />
                      </div>
                      <div className="text-right">
                        <p className="text-[rgb(117,95,163)] font-serif italic text-xs mb-3">
                          Encouraging you to be the best version of you
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="w-[350px] h-[200px] bg-white rounded-lg shadow-lg border border-[rgb(186,148,207)]/20 overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-white to-[rgb(248,245,252)] p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-[rgb(117,95,163)] text-lg font-serif mb-1">Nichole Gordon</h4>
                          <p className="text-[rgb(147,112,219)] text-sm">Life Encourager, KeyNote Speaker & Consultant</p>
                        </div>
                        <Logo variant="icon" size={40} />
                      </div>
                      <div className="text-[rgb(117,95,163)] text-xs space-y-1">
                        <p>📧 hello@nicholelifeencourager.com</p>
                        <p>📱 (555) 123-4567</p>
                        <p>🌐 www.nicholelifeencourager.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letterhead */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <h3 className="text-[rgb(147,112,219)] mb-6">Letterhead</h3>
              <div className="flex justify-center">
                <div className="w-full max-w-[600px] h-[800px] bg-white rounded-lg shadow-lg border border-[rgb(186,148,207)]/20 overflow-hidden">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[rgb(248,245,252)] to-[rgb(238,232,250)] px-8 py-6 border-b border-[rgb(186,148,207)]/30">
                      <Logo variant="horizontal" size={80} />
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 px-12 py-8">
                      <p className="text-[rgb(117,95,163)] text-sm mb-4">March 18, 2026</p>
                      <p className="text-[rgb(117,95,163)] text-sm mb-6">Dear Friend,</p>
                      <div className="space-y-3 text-[rgb(117,95,163)] text-sm">
                        <p>
                          Thank you for your interest in transforming your life journey. At Nichole Life Encourager, 
                          we believe that everyone has the potential to move from merely existing to truly LIVING.
                        </p>
                        <p>
                          Through personalized coaching, motivational speaking, and compassionate guidance, we support 
                          you in becoming the best version of yourself across six key life areas.
                        </p>
                        <p>
                          I look forward to walking alongside you on this transformational journey.
                        </p>
                      </div>
                      <div className="mt-8">
                        <p className="text-[rgb(117,95,163)] font-serif italic text-sm">Be Encouraged,</p>
                        <p className="text-[rgb(147,112,219)] text-sm mt-2">Nichole Gordon</p>
                        <p className="text-[rgb(117,95,163)] text-xs">Life Encourager</p>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="bg-gradient-to-r from-[rgb(238,232,250)] to-[rgb(248,245,252)] px-8 py-4 border-t border-[rgb(186,148,207)]/30">
                      <div className="flex items-center justify-between text-[rgb(117,95,163)] text-xs">
                        <div>
                          <p>hello@nicholelifeencourager.com</p>
                          <p>(555) 123-4567</p>
                        </div>
                        <div className="text-right">
                          <p>www.nicholelifeencourager.com</p>
                          <p className="text-[rgb(147,112,219)] italic text-[10px]">Encouraging you to be the best version of you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PowerPoint Slide */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
              <h3 className="text-[rgb(147,112,219)] mb-6">PowerPoint Slide Example</h3>
              {/* <div className="flex items-center justify-between mb-6">
              <a 
                href="/assets/nichole-branding-kit.ppt" 
                download="Nichole-Life-Encourager-Template.ppt"
                className="flex items-center gap-2 px-4 py-2 bg-[rgb(117,95,163)] text-white rounded-lg hover:bg-[rgb(76,57,145)] transition-colors text-sm"
              >
                <Download size={16} />
                Download Template
              </a></div> */}
              
              <div className="flex justify-center">
                <div className="w-full max-w-[700px] aspect-video bg-white rounded-lg shadow-lg border border-[rgb(186,148,207)]/20 overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-[rgb(248,245,252)] via-white to-[rgb(238,232,250)] relative">
                    {/* Background butterfly watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
                      <Logo variant="icon" size={400} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col p-12">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-8">
                        <Logo variant="horizontal" size={70} />
                      </div>
                      
                      {/* Main content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-[rgb(117,95,163)] text-4xl font-serif mb-4">
                          From Existing to LIVING
                        </h2>
                        <p className="text-[rgb(147,112,219)] text-xl italic mb-8">
                          Six Key Areas for Transformation
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[rgb(186,148,207)]/30">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[rgb(147,112,219)] rounded-full"></div>
                              <p className="text-[rgb(117,95,163)]">Personal Growth</p>
                            </div>
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[rgb(186,148,207)]/30">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[rgb(147,112,219)] rounded-full"></div>
                              <p className="text-[rgb(117,95,163)]">Relationships</p>
                            </div>
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[rgb(186,148,207)]/30">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[rgb(147,112,219)] rounded-full"></div>
                              <p className="text-[rgb(117,95,163)]">Health & Wellness</p>
                            </div>
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-[rgb(186,148,207)]/30">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[rgb(147,112,219)] rounded-full"></div>
                              <p className="text-[rgb(117,95,163)]">Career & Purpose</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="text-center">
                        <p className="text-[rgb(117,95,163)] text-sm italic">
                          www.nicholelifeencourager.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="bg-white rounded-lg p-8 shadow-sm border border-[rgb(186,148,207)]/30">
          <h2 className="text-[rgb(117,95,163)] mb-6">Logo Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4 flex items-center gap-2">
                <span className="text-green-600">✓</span> Do
              </h3>
              <ul className="space-y-2 text-[rgb(117,95,163)]">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Maintain clear space around the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Use on white or light backgrounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Keep proportions when scaling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Use provided color combinations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[rgb(147,112,219)] mb-4 flex items-center gap-2">
                <span className="text-red-600">✗</span> Don't
              </h3>
              <ul className="space-y-2 text-[rgb(117,95,163)]">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Rotate or skew the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Change the colors or gradients
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Add effects like drop shadows or outlines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(147,112,219)]">•</span>
                  Place on busy or conflicting backgrounds
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Hidden Download Assets - Fixed position is more reliable for JS access */}
      <div 
        aria-hidden="true"
        style={{ 
          position: 'fixed', 
          left: '-5000px', 
          top: 0, 
          visibility: 'hidden', 
          pointerEvents: 'none' 
        }}
      ><Logo variant="full" size={800} id="logo-full" />
        <Logo variant="horizontal" size={800} id="logo-horizontal" />
        <Logo variant="icon" size={800} id="logo-icon" />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[rgb(186,148,207)]/30 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <Logo variant="icon" size={60} className="mx-auto mb-4" />
          <p className="text-[rgb(117,95,163)]">
            Nichole Life Encourager Brand Identity Guide
          </p>
          <p className="text-[rgb(117,95,163)] text-sm mt-2">
            © 2026 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
