import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, TrendingUp, DollarSign, Clock, BarChart3 } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Section II : Le Suivi de l&apos;Avancement
          </h1>
          
          {/* A. Le suivi des coûts et des délais */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              A. Le suivi des coûts et des délais
            </h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                Dans le cadre d&apos;un suivi de projet, le responsable peut se heurter à deux difficultés : 
                il peut <strong>gaspiller</strong> (consommer plus de ressources que prévues) et il peut prendre 
                du <strong>retard ou de l&apos;avance</strong> (ne pas respecter ses délais).
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">⚠️ Difficulté majeure</h3>
              <p className="text-red-700">
                La difficulté est de distinguer les deux phénomènes (gaspillage et retard), 
                alors même qu&apos;ils se masquent mutuellement ! Une méthode d&apos;analyse des écarts est donc nécessaire.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Informations clés nécessaires</h3>
            <p className="text-gray-700 mb-4">
              Pour effectuer ce suivi, il faut disposer de deux informations clés à n&apos;importe quel moment :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Niveau d&apos;avancement
                </h4>
                <p className="text-blue-700 text-sm">Le niveau d&apos;avancement atteint à la date de contrôle</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Ressources consommées
                </h4>
                <p className="text-green-700 text-sm">Le montant des ressources consommées</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">📊 Principe des calculs cumulés</h4>
              <p className="text-yellow-700">
                La démarche reposant sur des suivis depuis l&apos;origine, elle nécessitera toujours 
                de calculer les éléments <strong>cumulés</strong> depuis le démarrage du projet.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Les trois indicateurs fondamentaux</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">CBTP - Coût Budgété du Travail Prévu</h4>
                <p className="text-blue-700 text-sm">
                  Le coût prévisionnel du projet au fur et à mesure de son avancement théorique. 
                  C&apos;est la référence budgétaire initiale.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">CBTE - Coût Budgété du Travail Effectué</h4>
                <p className="text-green-700 text-sm">
                  Le coût qui aurait été prévu sur la base du niveau réel d&apos;avancement. 
                  Permet de mesurer l&apos;avancement en valeur budgétaire.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-2">CRTE - Coût Réel du Travail Effectué</h4>
                <p className="text-orange-700 text-sm">
                  Les dépenses constatées à la date du calcul pour le niveau d&apos;avancement constaté. 
                  C&apos;est la réalité des coûts engagés.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Analyse des écarts</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">💰 Écart de coûts</h4>
                <p className="text-red-700 text-sm mb-2">
                  <strong>CRTE - CBTE</strong>
                </p>
                <p className="text-red-700 text-sm">
                  Traduit un gaspillage (le plus souvent) ou des économies dans l&apos;utilisation des ressources
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">⏰ Écart de délais</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>CBTE - CBTP</strong>
                </p>
                <p className="text-purple-700 text-sm">
                  Traduit un retard (le plus fréquent) ou de l&apos;avance sur la base des coûts théoriques
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">La courbe en S</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">📈 Représentation graphique</h4>
              <p className="text-gray-700 mb-3">
                On peut représenter le coût prévu au fur et à mesure de l&apos;avancée du projet. 
                On parle traditionnellement de <strong>courbe en S</strong> car :
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Début :</strong> Coûts plus faibles (phase de démarrage)</li>
                <li>• <strong>Milieu :</strong> Maximum des coûts (nombreuses tâches parallèles)</li>
                <li>• <strong>Fin :</strong> Coûts plus faibles (phase de finalisation)</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-800 mb-4">📊 Exemple détaillé : Projet système d&apos;information</h4>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-gray-800 mb-3">Données du projet :</h5>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <h6 className="font-semibold text-blue-800">Tâche A</h6>
                    <p className="text-blue-700">Durée : 4 semaines</p>
                    <p className="text-blue-700">Coût : 10 unités</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h6 className="font-semibold text-green-800">Tâche B</h6>
                    <p className="text-green-700">Durée : 8 semaines</p>
                    <p className="text-green-700">Coût : 35 unités</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <h6 className="font-semibold text-orange-800">Tâche C</h6>
                    <p className="text-orange-700">Durée : 6 semaines</p>
                    <p className="text-orange-700">Coût : 18 unités</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">Durée totale prévisionnelle : 11 semaines (tâches en parallèle)</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-gray-800 mb-3">Tableau de suivi (coûts cumulés) :</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Semaine</th>
                        <th className="border border-gray-300 p-2">CBTP</th>
                        <th className="border border-gray-300 p-2">CBTE</th>
                        <th className="border border-gray-300 p-2">CRTE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 p-2 text-center">1</td><td className="border border-gray-300 p-2 text-center">2,5</td><td className="border border-gray-300 p-2 text-center">2</td><td className="border border-gray-300 p-2 text-center">4</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">2</td><td className="border border-gray-300 p-2 text-center">5</td><td className="border border-gray-300 p-2 text-center">5</td><td className="border border-gray-300 p-2 text-center">6</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">3</td><td className="border border-gray-300 p-2 text-center">14</td><td className="border border-gray-300 p-2 text-center">12</td><td className="border border-gray-300 p-2 text-center">15</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">4</td><td className="border border-gray-300 p-2 text-center">23</td><td className="border border-gray-300 p-2 text-center">20</td><td className="border border-gray-300 p-2 text-center">27</td></tr>
                      <tr className="bg-yellow-50"><td className="border border-gray-300 p-2 text-center font-semibold">5</td><td className="border border-gray-300 p-2 text-center font-semibold">32</td><td className="border border-gray-300 p-2 text-center font-semibold">30</td><td className="border border-gray-300 p-2 text-center font-semibold">35</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">6</td><td className="border border-gray-300 p-2 text-center">41</td><td className="border border-gray-300 p-2 text-center">38</td><td className="border border-gray-300 p-2 text-center">49</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">7</td><td className="border border-gray-300 p-2 text-center">50</td><td className="border border-gray-300 p-2 text-center">45</td><td className="border border-gray-300 p-2 text-center">59</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">8</td><td className="border border-gray-300 p-2 text-center">54</td><td className="border border-gray-300 p-2 text-center">48</td><td className="border border-gray-300 p-2 text-center">70</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">9</td><td className="border border-gray-300 p-2 text-center">57</td><td className="border border-gray-300 p-2 text-center">52</td><td className="border border-gray-300 p-2 text-center">75</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">10</td><td className="border border-gray-300 p-2 text-center">60</td><td className="border border-gray-300 p-2 text-center">55</td><td className="border border-gray-300 p-2 text-center">78</td></tr>
                      <tr><td className="border border-gray-300 p-2 text-center">11</td><td className="border border-gray-300 p-2 text-center">63</td><td className="border border-gray-300 p-2 text-center">60</td><td className="border border-gray-300 p-2 text-center">82</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-800 mb-2">📈 Analyse à la semaine 5 :</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-700 font-medium">Écart sur coûts : CRTE - CBTE = 35 - 30 = +5</p>
                    <p className="text-red-600 text-sm">→ Dépassement budgétaire (gaspillage)</p>
                  </div>
                  <div>
                    <p className="text-purple-700 font-medium">Écart sur délais : CBTE - CBTP = 30 - 32 = -2</p>
                    <p className="text-purple-600 text-sm">→ Retard dans l&apos;avancement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* B. La correction du Reste à faire */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-green-600" />
              B. La correction du Reste à faire
            </h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                Le reste à faire correspond aux tâches restantes au moment où une vérification du projet est menée. 
                Le constat progressif de dérives oblige à envisager une remise en cause des prévisions initiales.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">🎯 Objectif de la correction</h3>
              <p className="text-orange-700">
                Proposer un nouveau budget et une nouvelle échéance qui, par leur réalisme, 
                seront cette fois-ci respectés. Il s&apos;agit de tirer les leçons des écarts constatés 
                pour réajuster les prévisions.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">Méthode de calcul du reste à faire</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded w-6 h-6 flex items-center justify-center">1</span>
                <div>
                  <span className="font-medium text-gray-800">Analyser les écarts actuels</span>
                  <p className="text-gray-600 text-sm">Identifier les causes des dépassements et retards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded w-6 h-6 flex items-center justify-center">2</span>
                <div>
                  <span className="font-medium text-gray-800">Estimer les tâches restantes</span>
                  <p className="text-gray-600 text-sm">Réévaluer le coût et la durée des activités non terminées</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded w-6 h-6 flex items-center justify-center">3</span>
                <div>
                  <span className="font-medium text-gray-800">Projeter les nouvelles prévisions</span>
                  <p className="text-gray-600 text-sm">Calculer le budget total révisé et la nouvelle date de fin</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🔧 Correction du travail restant</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-700 mb-3">📋 Principe de base :</h4>
                  <p className="text-gray-700 mb-3">Lorsque des écarts sont détectés, il faut corriger les estimations du travail restant pour maintenir la fiabilité du suivi.</p>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-blue-800 font-medium">Formule de correction :</p>
                    <p className="text-blue-700 text-sm mt-1">Nouveau coût total estimé = CRTE + (Travail restant corrigé)</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-700 mb-3">🔄 Méthodes de correction :</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h5 className="font-semibold text-green-700">1. Réestimation complète</h5>
                      <p className="text-gray-600 text-sm">Réviser entièrement les estimations du travail restant en tenant compte des nouvelles données</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h5 className="font-semibold text-orange-700">2. Correction proportionnelle</h5>
                      <p className="text-gray-600 text-sm">Appliquer un coefficient de correction basé sur les écarts observés</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h5 className="font-semibold text-purple-700">3. Réallocation des ressources</h5>
                      <p className="text-gray-600 text-sm">Redistribuer les ressources pour optimiser l&apos;efficacité</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h5 className="font-semibold text-red-700">4. Replanning</h5>
                      <p className="text-gray-600 text-sm">Modifier le planning et les jalons pour s&apos;adapter aux nouvelles contraintes</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Exemple de correction :</h4>
                  <div className="text-sm space-y-2">
                    <p className="text-gray-700">Si à la semaine 5 : CRTE = 35, CBTE = 30, Budget total initial = 63</p>
                    <p className="text-gray-700">Travail restant initial = 63 - 32 = 31 unités</p>
                    <p className="text-orange-700 font-medium">Coefficient de dérive = CRTE/CBTE = 35/30 = 1,17</p>
                    <p className="text-red-700 font-medium">Nouveau travail restant = 31 × 1,17 = 36,3 unités</p>
                    <p className="text-red-700 font-semibold">Nouveau coût total estimé = 35 + 36,3 = 71,3 unités</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Moyen mnémotechnique</h4>
              <p className="text-yellow-700">
                <strong>&quot;3C&quot;</strong> pour le suivi : <strong>C</strong>oût, <strong>C</strong>alendrier (délai), <strong>C</strong>onformité (qualité)
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <Link 
              href="/section-1" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent : Le suivi du risque
            </Link>
            
            <Link 
              href="/section-3" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suivant : La qualité
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}