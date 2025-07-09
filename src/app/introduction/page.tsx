import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Target, TrendingUp } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction : Le Suivi d&apos;un Projet SI
          </h1>
          
          {/* Contexte */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contexte et enjeux</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                Le suivi d&apos;un projet est de la responsabilité du directeur de projet, et a pour but 
                d&apos;éviter les dysfonctionnements. Dans la pratique, de nombreux projets SI sont associés 
                à la notion d&apos;échec, tant les sources de problèmes sont nombreuses.
              </p>
            </div>
          </div>

          {/* Triangle d'or */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Le triangle d&apos;or du projet</h2>
            <p className="text-gray-700 mb-6">
              Ce suivi va se focaliser sur les trois notions clés qui constituent le triangle d&apos;or de la gestion de projet :
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-red-800 mb-2">DÉLAI</h3>
                <p className="text-red-700 text-sm">Respect des échéances et planning</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800 mb-2">COÛT</h3>
                <p className="text-green-700 text-sm">Maîtrise du budget et des ressources</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-800 mb-2">QUALITÉ</h3>
                <p className="text-purple-700 text-sm">Conformité aux spécifications</p>
              </div>
            </div>
          </div>

          {/* Approche préalable */}
          <div className="mb-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Approche préalable</h3>
              <p className="text-yellow-700">
                Préalablement à tout suivi, il faut analyser le risque. Cette étape fondamentale 
                permet d&apos;anticiper les problèmes potentiels et de mettre en place les mesures préventives appropriées.
              </p>
            </div>
          </div>

          {/* Plan du chapitre */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan du chapitre</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">I</span>
                <span className="font-medium">Le suivi du risque</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">II</span>
                <span className="font-medium">Le suivi de l&apos;avancement</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-purple-600 text-white text-sm font-bold px-2 py-1 rounded">III</span>
                <span className="font-medium">La qualité</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <Link 
              href="/section-1" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suivant : Le suivi du risque
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}