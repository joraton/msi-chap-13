import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl mb-8">
      <div className="flex items-start gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 p-4 rounded-xl">
          <BookOpen className="h-12 w-12 text-white" />
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-3">
            Chapitre 13 : Le Suivi d&apos;un Projet SI
          </h1>
          <p className="text-blue-100 text-lg mb-6 leading-relaxed">
            Maîtrisez les techniques de suivi et de contrôle des projets de systèmes d&apos;information. 
            Apprenez à gérer les risques, suivre l&apos;avancement et assurer la qualité de vos projets SI.
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Expert</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">3h 30min</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">3 sections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}