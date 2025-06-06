'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// ATP Synthase Turbine - electrons spinning to produce ATP
const ATPSynthase = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Turbine base */}
    <circle
      cx={x}
      cy={y}
      r="25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
    />
    
    {/* Rotating turbine blades */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1={x}
          y1={y}
          x2={x + Math.cos(angle * Math.PI / 180) * 20}
          y2={y + Math.sin(angle * Math.PI / 180) * 20}
          stroke="currentColor"
          strokeWidth="3"
          opacity="0.7"
        />
      ))}
    </motion.g>
    
    {/* Electrons flowing in */}
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        r="3"
        fill="currentColor"
        opacity="0.8"
        animate={{
          cx: [x - 60, x - 50, x - 40, x - 30, x - 60],
          cy: [
            y + Math.sin(i * Math.PI / 2) * 15, 
            y + Math.sin(i * Math.PI / 2) * 12,
            y + Math.sin(i * Math.PI / 2) * 10,
            y + Math.sin(i * Math.PI / 2) * 8,
            y + Math.sin(i * Math.PI / 2) * 15
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.75,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// DNA Replication Fork
const DNAReplication = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Parent DNA strands */}
    <path
      d={`M ${x} ${y} L ${x + 60} ${y + 30}`}
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.7"
    />
    <path
      d={`M ${x + 5} ${y + 10} L ${x + 65} ${y + 40}`}
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.7"
    />
    
    {/* Replication fork */}
    <path
      d={`M ${x + 60} ${y + 30} L ${x + 100} ${y + 20}`}
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.6"
    />
    <path
      d={`M ${x + 65} ${y + 40} L ${x + 105} ${y + 50}`}
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.6"
    />
    
    {/* DNA Polymerase moving along */}
    <motion.circle
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.8"
      animate={{
        cx: [x + 30, x + 50, x + 70, x + 80, x + 70, x + 50, x + 30],
        cy: [y + 15, y + 20, y + 28, y + 35, y + 28, y + 20, y + 15]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* New nucleotides being added */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        r="2"
        fill="currentColor"
        opacity="0.6"
        animate={{
          cx: [x + 20 + i * 15, x + 45 + i * 12, x + 70 + i * 15, x + 20 + i * 15],
          cy: [y + 5, y + 15, y + 25, y + 5],
          scale: [1, 1.2, 1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 1.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Legal Tech - Scales of Justice with Document Processing
const LegalTech = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Scale base */}
    <line
      x1={x}
      y1={y - 20}
      x2={x}
      y2={y + 30}
      stroke="currentColor"
      strokeWidth="3"
      opacity="0.7"
    />
    
    {/* Scale beam */}
    <motion.line
      x1={x - 30}
      y1={y - 15}
      x2={x + 30}
      y2={y - 15}
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.8"
      animate={{
        rotate: [-2, 0, 2, 0, -2]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: `${x}px ${y - 15}px` }}
    />
    
    {/* Left scale pan with documents */}
    <motion.g
      animate={{
        y: [0, -3, 0, 3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ellipse
        cx={x - 30}
        cy={y - 10}
        rx="12"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* Documents */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={x - 35 + i * 3}
          y={y - 15 - i}
          width="8"
          height="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
    </motion.g>
    
    {/* Right scale pan with legal symbols */}
    <motion.g
      animate={{
        y: [0, 3, 0, -3, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ellipse
        cx={x + 30}
        cy={y - 10}
        rx="12"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      {/* Legal gavel */}
      <rect
        x={x + 27}
        y={y - 16}
        width="6"
        height="3"
        fill="currentColor"
        opacity="0.6"
      />
    </motion.g>
    
    {/* Data flowing between systems */}
    {[0, 1].map((i) => (
      <motion.circle
        key={i}
        r="2"
        fill="currentColor"
        opacity="0.4"
        animate={{
          cx: [x - 60, x - 30, x + 30, x + 60, x - 60],
          cy: [y + 15, y + 5, y + 5, y + 15, y + 15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: i * 2.5,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Cloud Infrastructure - Distributed Systems
const CloudInfrastructure = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Server nodes */}
    {[
      [x - 40, y - 20], [x, y - 25], [x + 40, y - 20],
      [x - 20, y + 10], [x + 20, y + 10]
    ].map((pos, i) => (
      <motion.g key={i}>
        <motion.rect
          x={pos[0] - 8}
          y={pos[1] - 6}
          width="16"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut"
          }}
        />
        {/* Server indicators */}
        {[0, 1, 2].map((j) => (
          <motion.line
            key={j}
            x1={pos[0] - 6}
            y1={pos[1] - 3 + j * 2}
            x2={pos[0] + 6}
            y2={pos[1] - 3 + j * 2}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            animate={{
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6 + j * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.g>
    ))}
    
    {/* Data flow connections */}
    {[
      [[x - 40, y - 20], [x, y - 25]],
      [[x, y - 25], [x + 40, y - 20]],
      [[x - 40, y - 20], [x - 20, y + 10]],
      [[x + 40, y - 20], [x + 20, y + 10]],
      [[x - 20, y + 10], [x + 20, y + 10]]
    ].map((connection, i) => (
      <motion.line
        key={i}
        x1={connection[0][0]}
        y1={connection[0][1]}
        x2={connection[1][0]}
        y2={connection[1][1]}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="3,3"
        animate={{
          strokeDashoffset: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear"
        }}
      />
    ))}
    
    {/* Load balancer data packets */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        r="2"
        fill="currentColor"
        opacity="0.7"
        animate={{
          cx: [x - 60, x - 40, x, x + 40, x + 60, x + 40, x, x - 40, x - 60],
          cy: [y, y - 20, y - 25, y - 20, y, y + 10, y + 10, y, y]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Marketing Analytics - Funnel and Data Flow
const MarketingAnalytics = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Funnel shape */}
    <path
      d={`M ${x - 30} ${y - 25} L ${x + 30} ${y - 25} L ${x + 20} ${y - 5} L ${x + 10} ${y + 15} L ${x - 10} ${y + 15} L ${x - 20} ${y - 5} Z`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
    />
    
    {/* Conversion stages */}
    {[
      { y: y - 20, width: 50, label: "Visitors" },
      { y: y - 5, width: 35, label: "Leads" },
      { y: y + 10, width: 15, label: "Customers" }
    ].map((stage, i) => (
      <motion.g key={i}>
        {/* Stage indicator */}
        <line
          x1={x - stage.width/2}
          y1={stage.y}
          x2={x + stage.width/2}
          y2={stage.y}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        
        {/* Data points flowing through */}
        {Array.from({ length: 3 - i }).map((_, j) => (
          <motion.circle
            key={j}
            r="2"
            fill="currentColor"
            opacity="0.7"
            animate={{
              cx: [x - stage.width/2 + j * 10, x + stage.width/2 - j * 10, x - stage.width/2 + j * 10],
              cy: [stage.y - 2, stage.y - 2, stage.y - 2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5 + j * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.g>
    ))}
    
    {/* Analytics dashboard elements */}
    <motion.g
      animate={{
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Chart bars */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={x + 40 + i * 8}
          y={y - 15 + i * 3}
          width="6"
          height={15 - i * 3}
          fill="currentColor"
          opacity="0.5"
          animate={{
            height: [15 - i * 3, 20 - i * 2, 15 - i * 3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.g>
  </motion.g>
);

// Education/Children - Building Blocks and Growth
const EducationGrowth = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Building blocks stack */}
    {[0, 1, 2, 3].map((i) => (
      <motion.g key={i}>
        <motion.rect
          x={x - 12 + (i % 2) * 8}
          y={y + 15 - i * 8}
          width="16"
          height="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
          animate={{
            y: [y + 15 - i * 8, y + 12 - i * 8, y + 15 - i * 8],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
        
        {/* Block details */}
        <motion.circle
          cx={x - 4 + (i % 2) * 8}
          cy={y + 19 - i * 8}
          r="2"
          fill="currentColor"
          opacity="0.4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.8 + 0.5,
            ease: "easeInOut"
          }}
        />
      </motion.g>
    ))}
    
    {/* Growth arrow */}
    <motion.path
      d={`M ${x + 25} ${y + 20} Q ${x + 35} ${y - 10} ${x + 30} ${y - 25}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.5"
      strokeDasharray="5,3"
      animate={{
        strokeDashoffset: [0, -15, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Arrow head */}
    <motion.path
      d={`M ${x + 30} ${y - 25} L ${x + 27} ${y - 20} M ${x + 30} ${y - 25} L ${x + 33} ${y - 20}`}
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.5"
      animate={{
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Playful elements floating around */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        r="3"
        fill="currentColor"
        opacity="0.3"
        animate={{
          cx: [x - 30 + i * 15, x - 25 + i * 15, x - 30 + i * 15],
          cy: [y - 20 + i * 5, y - 25 + i * 5, y - 20 + i * 5],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 1.2,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Finance/Banking - Transaction Flow and Security
const FinanceBanking = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Bank/Institution */}
    <rect
      x={x - 25}
      y={y - 20}
      width="50"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
    />
    
    {/* Bank columns */}
    {[0, 1, 2].map((i) => (
      <line
        key={i}
        x1={x - 15 + i * 15}
        y1={y - 15}
        x2={x - 15 + i * 15}
        y2={y + 5}
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
    ))}
    
    {/* Transaction flows */}
    {[0, 1, 2].map((i) => (
      <motion.g key={i}>
        {/* Encrypted data packets */}
        <motion.rect
          x={x - 60 + i * 20}
          y={y + 20}
          width="8"
          height="6"
          fill="currentColor"
          opacity="0.7"
          animate={{
            x: [x - 60 + i * 20, x - 30, x, x + 30, x + 60, x + 30, x, x - 30, x - 60 + i * 20],
            y: [y + 20, y + 15, y + 10, y + 15, y + 20, y + 15, y + 10, y + 15, y + 20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Security lock indicators */}
        <motion.circle
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
          animate={{
            cx: [x - 55 + i * 20, x - 25, x + 5, x + 35, x + 65, x + 35, x + 5, x - 25, x - 55 + i * 20],
            cy: [y + 23, y + 18, y + 13, y + 18, y + 23, y + 18, y + 13, y + 18, y + 23],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeInOut"
          }}
        />
      </motion.g>
    ))}
    
    {/* Portfolio diversification chart */}
    <motion.g
      animate={{
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Pie chart segments */}
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M ${x + 40} ${y - 15} L ${x + 50} ${y - 15} A 10 10 0 0 1 ${x + 40 + 10 * Math.cos((i + 1) * Math.PI / 2)} ${y - 15 + 10 * Math.sin((i + 1) * Math.PI / 2)} Z`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: `${x + 40}px ${y - 15}px` }}
        />
      ))}
    </motion.g>
    
    {/* Risk assessment indicators */}
    {[0, 1, 2].map((i) => (
      <motion.line
        key={i}
        x1={x - 40}
        y1={y - 30 + i * 5}
        x2={x - 20 + i * 8}
        y2={y - 30 + i * 5}
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
        animate={{
          x2: [x - 20 + i * 8, x - 10 + i * 12, x - 20 + i * 8],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Molecular Orbital - Organic flowing structure  
const MolecularOrbital = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* Central orbital */}
    <motion.ellipse
      cx={x}
      cy={y}
      rx="20"
      ry="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
      animate={{
        rotate: [0, 360],
        rx: [20, 22, 25, 22, 20],
        ry: [15, 13, 10, 13, 15]
      }}
      transition={{
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        },
        rx: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        },
        ry: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
    
    {/* Outer orbital */}
    <motion.ellipse
      cx={x}
      cy={y}
      rx="35"
      ry="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.4"
      animate={{
        rotate: [0, -360],
        rx: [35, 32, 30, 32, 35],
        ry: [20, 22, 25, 22, 20]
      }}
      transition={{
        rotate: {
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        },
        rx: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        },
        ry: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
    
    {/* Electrons in orbital motion */}
    {[0, 1].map((i) => (
      <motion.circle
        key={i}
        r="3"
        fill="currentColor"
        opacity="0.8"
        animate={{
          cx: [
            x + 20 * Math.cos(i * Math.PI),
            x + 22 * Math.cos(i * Math.PI + Math.PI/3),
            x + 25 * Math.cos(i * Math.PI + 2*Math.PI/3),
            x + 22 * Math.cos(i * Math.PI + Math.PI),
            x + 20 * Math.cos(i * Math.PI + 4*Math.PI/3),
            x + 22 * Math.cos(i * Math.PI + 5*Math.PI/3),
            x + 20 * Math.cos(i * Math.PI)
          ],
          cy: [
            y + 15 * Math.sin(i * Math.PI),
            y + 13 * Math.sin(i * Math.PI + Math.PI/3),
            y + 10 * Math.sin(i * Math.PI + 2*Math.PI/3),
            y + 13 * Math.sin(i * Math.PI + Math.PI),
            y + 15 * Math.sin(i * Math.PI + 4*Math.PI/3),
            y + 13 * Math.sin(i * Math.PI + 5*Math.PI/3),
            y + 15 * Math.sin(i * Math.PI)
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: i * 2.5,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

// Protein Synthesis - back by popular demand for below hero
const ProteinSynthesis = ({ x, y }: { x: number; y: number }) => (
  <motion.g>
    {/* mRNA strand */}
    <path
      d={`M ${x} ${y} Q ${x + 30} ${y - 10} ${x + 60} ${y} Q ${x + 90} ${y + 10} ${x + 120} ${y}`}
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
      strokeDasharray="5,3"
    />
    
    {/* Ribosome moving along mRNA */}
    <motion.g
      animate={{
        x: [0, 20, 40, 60, 80, 60, 40, 20, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <circle
        cx={x + 20}
        cy={y}
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />
      <circle
        cx={x + 20}
        cy={y - 8}
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />
    </motion.g>
    
    {/* Amino acids being added */}
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        r="3"
        fill="currentColor"
        opacity="0.6"
        animate={{
          cx: [x + 10 + i * 20, x + 10 + i * 20, x + 10 + i * 20],
          cy: [y + 25, y + 20, y + 15, y + 25],
          scale: [0.8, 1, 1.2, 0.8]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.g>
);

const BiochemProcess = ({ x, y, type }: { x: number; y: number; type: string }) => {
  switch (type) {
    case 'atp':
      return <ATPSynthase x={x} y={y} />;
    case 'dna':
      return <DNAReplication x={x} y={y} />;
    case 'legal':
      return <LegalTech x={x} y={y} />;
    case 'cloud':
      return <CloudInfrastructure x={x} y={y} />;
    case 'marketing':
      return <MarketingAnalytics x={x} y={y} />;
    case 'education':
      return <EducationGrowth x={x} y={y} />;
    case 'finance':
      return <FinanceBanking x={x} y={y} />;
    case 'orbital':
      return <MolecularOrbital x={x} y={y} />;
    case 'protein':
      return <ProteinSynthesis x={x} y={y} />;
    default:
      return null;
  }
};

export default function MolecularBackground() {
  const [processes, setProcesses] = useState<Array<{ id: number; x: number; y: number; type: string }>>([]);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Fixed strategic positions - closer to hero and more content below
    const generateProcesses = () => {
      const fixedPositions = [
        // Top tier - closer to hero
        { x: 0.08, y: 0.18, type: 'orbital' },        // Top left - molecular orbital
        { x: 0.28, y: 0.12, type: 'legal' },         // Top left-center - legal tech
        { x: 0.5, y: 0.08, type: 'cloud' },          // Top center - cloud infrastructure
        { x: 0.72, y: 0.12, type: 'atp' },           // Top right-center - biochem
        { x: 0.88, y: 0.18, type: 'marketing' },     // Top right - marketing
        
        // Middle tier - sides closer to hero
        { x: 0.12, y: 0.45, type: 'dna' },           // Left side - DNA
        
        // Bottom tier - MORE content below hero
        { x: 0.15, y: 0.72, type: 'finance' },       // Bottom left - finance
        { x: 0.35, y: 0.78, type: 'protein' },       // Bottom left-center - protein synthesis
        { x: 0.5, y: 0.82, type: 'orbital' },        // Bottom center - another orbital
        { x: 0.65, y: 0.78, type: 'cloud' },         // Bottom right-center - more cloud
        { x: 0.82, y: 0.72, type: 'education' }      // Bottom right - education (safe from edge)
      ];

      const newProcesses = fixedPositions.map((pos, i) => ({
        id: i,
        x: pos.x * dimensions.width,
        y: pos.y * dimensions.height,
        type: pos.type
      }));
      
      setProcesses(newProcesses);
    };

    generateProcesses();
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0 text-primary/60 dark:text-primary/40"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {processes.map((process) => (
          <BiochemProcess
            key={process.id}
            x={process.x}
            y={process.y}
            type={process.type}
          />
        ))}
        
        {/* Subtle connecting lines between processes */}
        {processes.length > 1 && [
          [0, 2], [1, 4], [3, 6], [5, 7], [8, 10]  // Connect related processes
        ].map(([startIdx, endIdx], i) => {
          const start = processes[startIdx];
          const end = processes[endIdx];
          if (!start || !end) return null;
          
          return (
            <motion.line
              key={`connection-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.04"
              strokeDasharray="2,12"
              animate={{
                strokeDashoffset: [0, -15]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
} 