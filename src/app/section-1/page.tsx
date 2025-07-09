import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Shield, Search } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Section I : Le Suivi du Risque
          </h1>
          
          {/* A. Le risque et les projets SI */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              A. Le risque et les projets SI
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                Les exemples de dysfonctionnements ayant abouti à l&apos;échec d&apos;un projet SI sont légion. 
                L&apos;analyse du risque se révèle à ce titre une démarche fondamentale.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Définition du risque</h3>
            <p className="text-gray-700 mb-4">
              Un risque se caractérise par 3 notions complémentaires :
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">🎯 Une menace</h4>
                <p className="text-orange-700 text-sm">
                  Un événement défavorable à la firme. La principale menace reste la menace humaine !
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📊 Une probabilité</h4>
                <p className="text-blue-700 text-sm">
                  La probabilité d&apos;apparition de l&apos;événement défavorable
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">💰 Une conséquence</h4>
                <p className="text-green-700 text-sm">
                  L&apos;impact estimé financièrement
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">📝 Définition projet</h4>
              <p className="text-blue-700">
                En matière de gestion de projet, on préfère définir le risque comme la possibilité qu&apos;un projet 
                ne s&apos;exécute pas conformément aux prévisions de dates d&apos;achèvement, de coût et de spécifications, 
                ces écarts étant considérés comme difficilement acceptables voire inacceptables.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Types de réalisation des risques</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">⚙️ Sur le processus</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Le projet n&apos;aboutit pas</li>
                  <li>• Consommation excessive de ressources</li>
                  <li>• Durée trop longue</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Sur le résultat</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Le système ne remplit pas la fonction attendue</li>
                  <li>• Non acceptation par l&apos;utilisateur</li>
                  <li>• Fonctionnement trop coûteux</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Situations d&apos;incertitude</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">INCERTITUDE</span>
                <span className="text-gray-700">Manque général d&apos;information</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">IMPRÉVUS</span>
                <span className="text-gray-700">Événement non anticipé lors des prévisions initiales</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">ALÉAS</span>
                <span className="text-gray-700">Événement imprévisible ayant une conséquence néfaste</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Démarche de management des risques</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Les 5 étapes :</h4>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">1</span>
                  Identifier les risques
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">2</span>
                  Évaluer leur impact possible sur les coûts, le délai et la qualité
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">3</span>
                  Définir des actions pour réduire les risques inacceptables
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">4</span>
                  Suivre les actions et surveiller l&apos;état des risques
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded-full w-6 h-6 flex items-center justify-center">5</span>
                  Capitaliser l&apos;expérience
                </li>
              </ol>
            </div>
          </section>

          {/* B. L'identification des risques */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-green-600" />
              B. L&apos;identification des risques et leur impact
            </h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                L&apos;identification du risque est le point le plus fondamental de l&apos;approche par les risques. 
                Sans risque identifié, il n&apos;est pas possible de manager le risque.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">1) L&apos;étude généralisée</h3>
            <p className="text-gray-700 mb-4">
              Cette approche consiste à identifier les menaces de façon exhaustive. Une méthode reconnue 
              est le diagramme d&apos;Ishikawa avec 6 causes fondamentales :
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">🌍 Milieu</h4>
                <p className="text-blue-700 text-sm">Environnement et contexte de réalisation</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">📦 Matière</h4>
                <p className="text-green-700 text-sm">Éléments utilisés dans le processus</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">⚙️ Méthodes</h4>
                <p className="text-orange-700 text-sm">Manière de travailler et processus</p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">🖥️ Matériel</h4>
                <p className="text-purple-700 text-sm">Équipements, machines, logiciels</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">👥 Main d&apos;œuvre</h4>
                <p className="text-red-700 text-sm">Ressources humaines et compétences</p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">👔 Management</h4>
                <p className="text-indigo-700 text-sm">Impact des managers sur l&apos;échec</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Moyen mnémotechnique</h4>
              <p className="text-yellow-700">
                <strong>&quot;6M&quot;</strong> : <strong>M</strong>ilieu, <strong>M</strong>atière, <strong>M</strong>éthodes, <strong>M</strong>atériel, <strong>M</strong>ain d&apos;œuvre, <strong>M</strong>anagement
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">2) Liste type de risques (BOEHM)</h3>
            <p className="text-gray-700 mb-4">
              BOEHM a distingué 10 risques majeurs intervenant aux différentes phases d&apos;un projet :
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-800 mb-4">📋 Les 10 risques majeurs de BOEHM</h4>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-red-800 mb-2">1. Déficits de personnel</h5>
                  <p className="text-red-700 text-sm">Manque de compétences, formation insuffisante, turnover élevé</p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">2. Calendriers et budgets irréalistes</h5>
                  <p className="text-orange-700 text-sm">Estimations trop optimistes, pression temporelle excessive</p>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-yellow-800 mb-2">3. Développement de mauvaises fonctions et propriétés</h5>
                  <p className="text-yellow-700 text-sm">Spécifications inadéquates, besoins mal compris</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-green-800 mb-2">4. Développement de mauvaises interfaces utilisateur</h5>
                  <p className="text-green-700 text-sm">Ergonomie défaillante, interfaces non intuitives</p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">5. Perfectionnisme excessif, recherche de l&apos;or</h5>
                  <p className="text-blue-700 text-sm">Sur-ingénierie, fonctionnalités non essentielles</p>
                </div>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-indigo-800 mb-2">6. Flux de besoins continus</h5>
                  <p className="text-indigo-700 text-sm">Changements constants des exigences, scope creep</p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">7. Déficits COTS (Commercial Off-The-Shelf)</h5>
                  <p className="text-purple-700 text-sm">Composants externes inadéquats ou défaillants</p>
                </div>
                
                <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-pink-800 mb-2">8. Déficits de performance en temps réel</h5>
                  <p className="text-pink-700 text-sm">Problèmes de performance, temps de réponse inadéquats</p>
                </div>
                
                <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">9. Forcer les capacités informatiques</h5>
                  <p className="text-gray-700 text-sm">Limitations techniques, contraintes matérielles</p>
                </div>
                
                <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                  <h5 className="font-semibold text-teal-800 mb-2">10. Développement dépendant d&apos;éléments externes</h5>
                  <p className="text-teal-700 text-sm">Dépendances critiques, fournisseurs externes</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">3) L&apos;approche par le profil de risque</h3>
            <p className="text-gray-700 mb-4">
              Cette approche se focalise sur 6 caractéristiques souvent source d&apos;échec :
            </p>
            
            <div className="space-y-2 mb-6">
              {[
                'La taille du projet',
                'La difficulté technique', 
                'Le degré d\'intégration',
                'La configuration organisationnelle',
                'Le degré de changement',
                'L\'instabilité de l\'équipe de projet'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="bg-purple-600 text-white text-sm font-bold px-2 py-1 rounded w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <Link 
              href="/introduction" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent : Introduction
            </Link>
            
            <Link 
              href="/section-2" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suivant : Le suivi de l&apos;avancement
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}