import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 p-3 sm:p-4 rounded-xl mx-auto sm:mx-0">
          <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Chapitre 13 : Le Suivi d&apos;un Projet SI
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
            Maîtrisez les techniques de suivi et de contrôle des projets de systèmes d&apos;information. 
            Apprenez à gérer les risques, suivre l&apos;avancement et assurer la qualité de vos projets SI.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
            <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">3h 30min</span>
            </div>
            <div className="bg-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}