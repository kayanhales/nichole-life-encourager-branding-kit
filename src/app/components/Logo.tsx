interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  size?: number;
  className?: string;
}

export function Logo({ variant = 'full', size = 200, className = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="butterflyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(117, 95, 163)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(186, 148, 207)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Outer decorative circle */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#accentGradient)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#butterflyGradient)" strokeWidth="1" opacity="0.3" />
        
        {/* Butterfly wings - symbol of transformation */}
        <g transform="translate(100, 100)">
          {/* Left upper wing */}
          <path
            d="M -5 0 Q -35 -25, -45 -35 Q -50 -45, -45 -50 Q -40 -55, -30 -50 Q -20 -45, -15 -35 Q -10 -25, -5 -15 Z"
            fill="url(#butterflyGradient)"
            opacity="0.9"
          />
          {/* Right upper wing */}
          <path
            d="M 5 0 Q 35 -25, 45 -35 Q 50 -45, 45 -50 Q 40 -55, 30 -50 Q 20 -45, 15 -35 Q 10 -25, 5 -15 Z"
            fill="url(#butterflyGradient)"
            opacity="0.9"
          />
          {/* Left lower wing */}
          <path
            d="M -5 5 Q -30 15, -38 25 Q -42 35, -37 40 Q -32 43, -25 38 Q -18 33, -12 23 Q -8 13, -5 8 Z"
            fill="url(#accentGradient)"
            opacity="0.85"
          />
          {/* Right lower wing */}
          <path
            d="M 5 5 Q 30 15, 38 25 Q 42 35, 37 40 Q 32 43, 25 38 Q 18 33, 12 23 Q 8 13, 5 8 Z"
            fill="url(#accentGradient)"
            opacity="0.85"
          />
          
          {/* Wing details - delicate lines */}
          <path d="M -5 -5 Q -20 -20, -30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 5 -5 Q 20 -20, 30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M -5 5 Q -18 12, -25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 5 5 Q 18 12, 25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
          
          {/* Body of butterfly */}
          <ellipse cx="0" cy="-5" rx="3" ry="18" fill="rgb(76, 57, 145)" />
          <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgb(108, 92, 231)" />
          
          {/* Antennae */}
          <path d="M 0 -23 Q -3 -28, -4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 0 -23 Q 3 -28, 4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="-4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
          <circle cx="4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
          
          {/* Decorative dots on wings */}
          <circle cx="-28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
          <circle cx="28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
          <circle cx="-22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
          <circle cx="22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
        </g>
        
        {/* Subtle flourish at bottom */}
        <path
          d="M 70 160 Q 100 155, 130 160"
          stroke="url(#accentGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="100" cy="157" r="2" fill="rgb(186, 148, 207)" opacity="0.6" />
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <svg
        width={size * 2.5}
        height={size}
        viewBox="0 0 500 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="butterflyGradientH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(117, 95, 163)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="accentGradientH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(186, 148, 207)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Icon part */}
        <g transform="translate(0, 0)">
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#accentGradientH)" strokeWidth="1.5" opacity="0.4" />
          <circle cx="100" cy="100" r="95" fill="none" stroke="url(#butterflyGradientH)" strokeWidth="1" opacity="0.3" />
          
          <g transform="translate(100, 100)">
            <path
              d="M -5 0 Q -35 -25, -45 -35 Q -50 -45, -45 -50 Q -40 -55, -30 -50 Q -20 -45, -15 -35 Q -10 -25, -5 -15 Z"
              fill="url(#butterflyGradientH)"
              opacity="0.9"
            />
            <path
              d="M 5 0 Q 35 -25, 45 -35 Q 50 -45, 45 -50 Q 40 -55, 30 -50 Q 20 -45, 15 -35 Q 10 -25, 5 -15 Z"
              fill="url(#butterflyGradientH)"
              opacity="0.9"
            />
            <path
              d="M -5 5 Q -30 15, -38 25 Q -42 35, -37 40 Q -32 43, -25 38 Q -18 33, -12 23 Q -8 13, -5 8 Z"
              fill="url(#accentGradientH)"
              opacity="0.85"
            />
            <path
              d="M 5 5 Q 30 15, 38 25 Q 42 35, 37 40 Q 32 43, 25 38 Q 18 33, 12 23 Q 8 13, 5 8 Z"
              fill="url(#accentGradientH)"
              opacity="0.85"
            />
            
            <path d="M -5 -5 Q -20 -20, -30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M 5 -5 Q 20 -20, 30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M -5 5 Q -18 12, -25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M 5 5 Q 18 12, 25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
            
            <ellipse cx="0" cy="-5" rx="3" ry="18" fill="rgb(76, 57, 145)" />
            <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgb(108, 92, 231)" />
            
            <path d="M 0 -23 Q -3 -28, -4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 0 -23 Q 3 -28, 4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="-4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
            <circle cx="4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
            
            <circle cx="-28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
            <circle cx="28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
            <circle cx="-22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
            <circle cx="22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
          </g>
          
          <path
            d="M 70 160 Q 100 155, 130 160"
            stroke="url(#accentGradientH)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="100" cy="157" r="2" fill="rgb(186, 148, 207)" opacity="0.6" />
        </g>
        
        {/* Text part */}
        <g transform="translate(220, 70)">
          <text
            x="0"
            y="0"
            fontFamily="Georgia, serif"
            fontSize="36"
            fill="rgb(117, 95, 163)"
            fontWeight="400"
          >
            Nichole
          </text>
          <text
            x="0"
            y="40"
            fontFamily="Georgia, serif"
            fontSize="28"
            fill="rgb(147, 112, 219)"
            fontWeight="300"
            fontStyle="italic"
          >
            Life Encourager
          </text>
        </g>
      </svg>
    );
  }

  // Full vertical variant
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 300 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="butterflyGradientF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(117, 95, 163)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="accentGradientF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(147, 112, 219)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(186, 148, 207)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Icon part centered */}
      <g transform="translate(50, 20)">
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#accentGradientF)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#butterflyGradientF)" strokeWidth="1" opacity="0.3" />
        
        <g transform="translate(100, 100)">
          <path
            d="M -5 0 Q -35 -25, -45 -35 Q -50 -45, -45 -50 Q -40 -55, -30 -50 Q -20 -45, -15 -35 Q -10 -25, -5 -15 Z"
            fill="url(#butterflyGradientF)"
            opacity="0.9"
          />
          <path
            d="M 5 0 Q 35 -25, 45 -35 Q 50 -45, 45 -50 Q 40 -55, 30 -50 Q 20 -45, 15 -35 Q 10 -25, 5 -15 Z"
            fill="url(#butterflyGradientF)"
            opacity="0.9"
          />
          <path
            d="M -5 5 Q -30 15, -38 25 Q -42 35, -37 40 Q -32 43, -25 38 Q -18 33, -12 23 Q -8 13, -5 8 Z"
            fill="url(#accentGradientF)"
            opacity="0.85"
          />
          <path
            d="M 5 5 Q 30 15, 38 25 Q 42 35, 37 40 Q 32 43, 25 38 Q 18 33, 12 23 Q 8 13, 5 8 Z"
            fill="url(#accentGradientF)"
            opacity="0.85"
          />
          
          <path d="M -5 -5 Q -20 -20, -30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 5 -5 Q 20 -20, 30 -35" stroke="rgb(76, 57, 145)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M -5 5 Q -18 12, -25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 5 5 Q 18 12, 25 25" stroke="rgb(108, 92, 231)" strokeWidth="1" fill="none" opacity="0.4" />
          
          <ellipse cx="0" cy="-5" rx="3" ry="18" fill="rgb(76, 57, 145)" />
          <ellipse cx="0" cy="12" rx="4" ry="15" fill="rgb(108, 92, 231)" />
          
          <path d="M 0 -23 Q -3 -28, -4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 0 -23 Q 3 -28, 4 -32" stroke="rgb(76, 57, 145)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="-4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
          <circle cx="4" cy="-32" r="2" fill="rgb(147, 112, 219)" />
          
          <circle cx="-28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
          <circle cx="28" cy="-38" r="3" fill="rgb(186, 148, 207)" opacity="0.7" />
          <circle cx="-22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
          <circle cx="22" cy="22" r="2.5" fill="rgb(147, 112, 219)" opacity="0.7" />
        </g>
        
        <path
          d="M 70 160 Q 100 155, 130 160"
          stroke="url(#accentGradientF)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="100" cy="157" r="2" fill="rgb(186, 148, 207)" opacity="0.6" />
      </g>
      
      {/* Text part */}
      <g transform="translate(150, 270)">
        <text
          x="0"
          y="0"
          fontFamily="Georgia, serif"
          fontSize="42"
          fill="rgb(117, 95, 163)"
          textAnchor="middle"
          fontWeight="400"
        >
          Nichole
        </text>
        <text
          x="0"
          y="45"
          fontFamily="Georgia, serif"
          fontSize="32"
          fill="rgb(147, 112, 219)"
          textAnchor="middle"
          fontWeight="300"
          fontStyle="italic"
        >
          Life Encourager
        </text>
        <text
          x="0"
          y="90"
          fontFamily="Georgia, serif"
          fontSize="14"
          fill="rgb(117, 95, 163)"
          textAnchor="middle"
          fontWeight="300"
        >
          Encouraging you to be
        </text>
        <text
          x="0"
          y="108"
          fontFamily="Georgia, serif"
          fontSize="14"
          fill="rgb(117, 95, 163)"
          textAnchor="middle"
          fontWeight="300"
        >
          the best version of you
        </text>
      </g>
    </svg>
  );
}