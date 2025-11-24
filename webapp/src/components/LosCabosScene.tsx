import type { CSSProperties } from "react";

const stars = [
  { cx: 80, cy: 90, r: 2.6, delay: 0.2, duration: 5.2 },
  { cx: 160, cy: 60, r: 1.8, delay: 1.4, duration: 3.4 },
  { cx: 240, cy: 120, r: 2.1, delay: 0.8, duration: 4.6 },
  { cx: 320, cy: 40, r: 1.4, delay: 2.2, duration: 3.8 },
  { cx: 420, cy: 90, r: 1.7, delay: 1.1, duration: 4.2 },
  { cx: 500, cy: 60, r: 1.9, delay: 0.6, duration: 3.6 },
  { cx: 580, cy: 110, r: 2.2, delay: 2.6, duration: 5.8 },
  { cx: 660, cy: 50, r: 1.5, delay: 1.9, duration: 3.2 },
  { cx: 760, cy: 80, r: 2.8, delay: 0.4, duration: 4.9 },
  { cx: 850, cy: 120, r: 2.1, delay: 1.3, duration: 4.1 },
  { cx: 930, cy: 70, r: 1.8, delay: 2.8, duration: 5.1 },
  { cx: 1020, cy: 100, r: 2.4, delay: 0.9, duration: 4.0 },
  { cx: 1100, cy: 60, r: 2.0, delay: 2.1, duration: 5.4 },
  { cx: 1180, cy: 140, r: 1.6, delay: 1.8, duration: 3.7 },
];

const foregroundLights = [
  { cx: 220, cy: 470, r: 6, opacity: 0.25 },
  { cx: 350, cy: 520, r: 8, opacity: 0.2 },
  { cx: 520, cy: 490, r: 10, opacity: 0.2 },
  { cx: 700, cy: 510, r: 7, opacity: 0.2 },
  { cx: 860, cy: 500, r: 9, opacity: 0.22 },
  { cx: 980, cy: 470, r: 6, opacity: 0.25 },
];

export default function LosCabosScene() {
  return (
    <div className="relative w-full max-w-5xl">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[32px] border border-white/20 bg-[#020617] shadow-[0_40px_140px_rgba(15,23,42,0.6)]">
        <svg
          viewBox="0 0 1200 800"
          className="h-full w-full"
          role="img"
          aria-labelledby="cabo-title cabo-desc"
        >
          <title id="cabo-title">
            El Arco de Los Cabos iluminado por una luna llena
          </title>
          <desc id="cabo-desc">
            Ilustración nocturna con cielo estrellado, luna brillante y el Arco
            de Cabo San Lucas reflejado sobre el océano.
          </desc>
          <defs>
            <radialGradient id="skyGradient" cx="50%" cy="15%" r="80%">
              <stop offset="0%" stopColor="#fff7f1" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#f5cdda" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#5b2dd1" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080b2e" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="waterGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#2f4c9f" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#1c2d6f" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#040924" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="archStone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7af68" />
              <stop offset="45%" stopColor="#e98a47" />
              <stop offset="100%" stopColor="#b45323" />
            </linearGradient>
            <linearGradient id="cliffStone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7c693" />
              <stop offset="40%" stopColor="#e99957" />
              <stop offset="100%" stopColor="#9d4b18" />
            </linearGradient>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe9" />
              <stop offset="60%" stopColor="#ffe4a8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffd68c" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="moonCore" cx="45%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#fffef4" />
              <stop offset="40%" stopColor="#fff2c7" />
              <stop offset="100%" stopColor="#fce4a3" />
            </radialGradient>
            <linearGradient id="archHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe7c7" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#ffc287" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#f18d4c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b3f10" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="foamGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <linearGradient id="reflectionGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,196,128,0.48)" />
              <stop offset="60%" stopColor="rgba(255,128,80,0.18)" />
              <stop offset="100%" stopColor="rgba(255,140,96,0)" />
            </linearGradient>
            <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(132,204,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,166,255,0.15)" />
              <stop offset="100%" stopColor="rgba(132,204,255,0.05)" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="30" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1200" height="800" fill="url(#skyGradient)" />

          <g opacity="0.35" filter="url(#softGlow)">
            <path
              d="M100 260 Q220 180 380 220 T650 200 T950 260 T1150 240 L1150 0 L100 0 Z"
              fill="url(#auroraGradient)"
            />
          </g>

          <g>
            {stars.map((star, index) => (
              <circle
                key={index}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                className="twinkle"
                style={
                  {
                    animationDelay: `${star.delay}s`,
                    animationDuration: `${star.duration}s`,
                  } as CSSProperties
                }
                fill="#ffe7ff"
                fillOpacity="0.9"
              />
            ))}
          </g>

          <g>
            <circle cx="920" cy="160" r="160" fill="url(#moonGlow)" />
            <circle cx="920" cy="160" r="115" fill="url(#moonCore)" />
            <circle cx="895" cy="130" r="12" fill="#fff4db" opacity="0.4" />
            <circle cx="955" cy="185" r="18" fill="#ffe6a6" opacity="0.25" />
          </g>

          <path
            d="M0 480 C180 460 260 420 320 400 C380 380 450 360 520 360 C600 360 670 380 750 410 C830 440 910 450 1030 440 C1120 430 1200 450 1200 450 L1200 800 L0 800 Z"
            fill="url(#waterGradient)"
          />

          <path
            d="M-40 420 C120 360 240 340 320 360 C380 375 430 420 470 470 C510 520 540 580 540 580 L-40 580 Z"
            fill="url(#cliffStone)"
          />

          <path
            d="M1200 440 C1050 380 950 360 880 380 C830 395 780 430 740 470 C700 510 640 585 640 585 L1200 620 Z"
            fill="url(#cliffStone)"
          />

          <g filter="url(#softGlow)">
            <path
              d="M520 520 C540 440 560 380 600 340 C630 310 690 290 730 310 C780 334 820 360 860 420 C900 480 920 560 900 620 C880 680 820 720 760 700 C700 680 650 620 600 600 C550 580 520 600 500 620 C480 640 460 700 440 760 L400 760 C420 680 440 600 460 560 C480 520 500 520 520 520 Z"
              fill="url(#archStone)"
            />
            <path
              d="M600 380 C660 340 740 350 790 400 C840 450 880 520 860 600 C845 660 790 700 740 690 C700 680 650 620 600 580 C540 530 540 430 600 380 Z"
              fill="url(#archHighlight)"
              opacity="0.75"
            />
          </g>

          <path
            d="M580 580 C650 540 770 560 820 620 C860 670 830 720 760 720 C700 720 640 690 600 660 C560 630 540 600 560 590 Z"
            fill="url(#reflectionGradient)"
            opacity="0.75"
          />

          <g opacity="0.65">
            {foregroundLights.map((light, index) => (
              <circle
                key={`light-${index}`}
                cx={light.cx}
                cy={light.cy}
                r={light.r}
                fill="url(#foamGlow)"
                fillOpacity={light.opacity}
              />
            ))}
          </g>

          <path
            d="M0 560 C80 540 140 540 180 560 C220 580 260 600 340 590 C420 580 470 550 520 560 C580 575 630 610 700 610 C770 610 820 590 880 580 C940 570 1020 590 1200 640 L1200 700 C1020 650 940 630 880 640 C820 650 770 680 700 680 C630 680 580 650 520 640 C460 630 410 650 340 660 C270 670 220 650 180 640 C140 630 80 630 0 650 Z"
            fill="rgba(255,255,255,0.15)"
            opacity="0.6"
          />

          <path
            d="M980 300 C940 260 880 260 830 300 C780 340 760 420 780 470 C800 520 850 560 900 550 C950 540 990 490 1000 440 C1010 390 1020 340 980 300 Z"
            fill="rgba(255, 181, 120, 0.35)"
            opacity="0.8"
          />

          <path
            d="M320 740 Q480 780 680 760 T1050 780"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />

          <path
            d="M260 700 Q420 740 620 720 T980 740"
            stroke="rgba(71, 207, 255, 0.25)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,230,180,0.25),rgba(7,11,41,0))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,244,214,0.22),rgba(2,6,23,0.05))]" />
      </div>
    </div>
  );
}
