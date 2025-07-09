'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  TrendingUp, 
  Star, 
  HelpCircle, 
  Award,
  FileText,
  ArrowRight
} from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
}

const iconMap = {
  rocket: Rocket,
  shield: Shield,
  'trending-up': TrendingUp,
  star: Star,
  'help-circle': HelpCircle,
  award: Award,
  'file-text': FileText,
};

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300'
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-300'
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-300'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-300'
  },
  red: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    border: 'border-red-200',
    hover: 'hover:border-red-300'
  },
  indigo: {
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-300'
  },
  teal: {
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    border: 'border-teal-200',
    hover: 'hover:border-teal-300'
  },
};

export default function SectionBlock({ title, description, href, icon, color }: SectionBlockProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="transition-all duration-200"
    >
      <Link href={href}>
        <div className={`
          ${colors.bg} ${colors.border} ${colors.hover}
          border-2 rounded-xl p-4 sm:p-6 
          hover:shadow-lg transition-all duration-200
          cursor-pointer group
        `}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Icône */}
              <div className={`${colors.iconBg} p-2.5 sm:p-3 rounded-full flex-shrink-0`}>
                <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${colors.iconColor}`} />
              </div>
              
              {/* Contenu */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            
            {/* Bouton */}
            <div className="flex items-center gap-2 self-end sm:self-auto mt-2 sm:mt-0">
              <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                Commencer
              </span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}