'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronRight, BookOpen, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  question: string;
  solution: string[];
  methodology: string[];
  tips: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Analyse des écarts d&apos;un projet SI",
    context: "Une entreprise développe un nouveau système de gestion commerciale. Après 6 mois de développement, voici les données du projet :\n\n• Budget initial : 200 000 €\n• Avancement prévu : 60%\n• Avancement réel : 45%\n• Coûts réels engagés : 110 000 €",
    question: "Calculez et analysez les écarts de coûts et de délais. Que recommandez-vous ?",
    solution: [
      "**Calcul des indicateurs :**",
      "• CBTP = 200 000 × 60% = 120 000 €",
      "• CBTE = 200 000 × 45% = 90 000 €",
      "• CRTE = 110 000 €",
      "",
      "**Calcul des écarts :**",
      "• Écart de coûts = CRTE - CBTE = 110 000 - 90 000 = +20 000 €",
      "• Écart de délais = CBTE - CBTP = 90 000 - 120 000 = -30 000 €",
      "",
      "**Analyse :**",
      "• Écart de coûts positif : gaspillage de 20 000 € (dépassement budgétaire)",
      "• Écart de délais négatif : retard équivalent à 30 000 € de travail",
      "• Le projet coûte plus cher que prévu ET prend du retard",
      "",
      "**Recommandations :**",
      "• Analyser les causes du gaspillage (ressources mal utilisées ?)",
      "• Revoir la planification pour rattraper le retard",
      "• Mettre en place un suivi hebdomadaire renforcé",
      "• Évaluer le &apos;reste à faire&apos; pour ajuster le budget final"
    ],
    methodology: [
      "1. Identifier les 3 indicateurs clés (CBTP, CBTE, CRTE)",
      "2. Calculer les écarts (coûts et délais)",
      "3. Interpréter les signes (+ = dépassement, - = économie/retard)",
      "4. Analyser les causes racines",
      "5. Proposer des actions correctives"
    ],
    tips: [
      "💡 Mémoriser : CRTE - CBTE = écart de coûts",
      "📊 Un écart positif = mauvaise nouvelle (dépassement)",
      "⏰ Toujours analyser les deux écarts ensemble",
      "🎯 Proposer des actions concrètes et mesurables"
    ]
  },
  {
    id: 2,
    title: "Gestion des risques d&apos;un projet ERP",
    context: "Votre entreprise lance un projet d&apos;implémentation ERP. L&apos;équipe projet a identifié plusieurs risques potentiels :\n\n• Résistance au changement des utilisateurs\n• Complexité technique sous-estimée\n• Indisponibilité des experts métier\n• Problèmes d&apos;intégration avec les systèmes existants",
    question: "Utilisez la méthode des 6M pour analyser ces risques et proposez un plan de traitement.",
    solution: [
      "**Analyse par les 6M :**",
      "",
      "**Main d'œuvre :**",
      "• Résistance au changement → Formation, communication",
      "• Indisponibilité experts → Planning dédié, backup",
      "",
      "**Méthodes :**",
      "• Processus mal définis → Cartographie détaillée",
      "• Méthodologie projet inadaptée → Approche agile",
      "",
      "**Matériel :**",
      "• Infrastructure insuffisante → Audit technique préalable",
      "• Serveurs sous-dimensionnés → Tests de charge",
      "",
      "**Matière :**",
      "• Données de mauvaise qualité → Nettoyage préalable",
      "• Migration complexe → Plan de migration détaillé",
      "",
      "**Milieu :**",
      "• Problèmes d'intégration → Tests d'intégration précoces",
      "• Environnement instable → Environnement de test dédié",
      "",
      "**Management :**",
      "• Manque de soutien direction → Sponsoring visible",
      "• Communication insuffisante → Plan de communication",
      "",
      "**Plan de traitement :**",
      "• Risques critiques : traitement préventif obligatoire",
      "• Risques moyens : surveillance et plans de contingence",
      "• Risques faibles : acceptation avec monitoring"
    ],
    methodology: [
      "1. Lister tous les risques identifiés",
      "2. Classer chaque risque dans une catégorie des 6M",
      "3. Évaluer probabilité × impact pour chaque risque",
      "4. Définir une stratégie : éviter, réduire, transférer, accepter",
      "5. Élaborer des plans d'action préventifs et correctifs",
      "6. Mettre en place un suivi régulier"
    ],
    tips: [
      "🔍 Les 6M couvrent TOUS les aspects d'un projet",
      "⚖️ Prioriser selon la criticité (probabilité × impact)",
      "🛡️ Toujours avoir un plan B pour les risques majeurs",
      "📋 Documenter et suivre l&apos;évolution des risques"
    ]
  },
  {
    id: 3,
    title: "Évaluation qualité d&apos;une application",
    context: "Vous devez évaluer la qualité d&apos;une application de gestion des stocks développée en interne. L&apos;application présente les caractéristiques suivantes :\n\n• Toutes les fonctionnalités demandées sont présentes\n• Interface utilisateur complexe, formation nécessaire\n• Temps de réponse lents sur certaines requêtes\n• Code source mal documenté\n• Compatible uniquement avec Windows\n• Coût de maintenance élevé",
    question: "Analysez cette application selon les 4 axes qualité et proposez des améliorations prioritaires.",
    solution: [
      "**Analyse par les 4 axes qualité :**",
      "",
      "**1. Axe Fonctionnel :**",
      "• ✅ Pertinence : Toutes les fonctionnalités présentes",
      "• ✅ Adéquation : Répond aux besoins métier",
      "• ⚠️ Généralité : Spécifique à un contexte",
      "**→ Score : 7/10**",
      "",
      "**2. Axe Utilisation :**",
      "• ❌ Facilité d'emploi : Interface complexe",
      "• ❌ Efficacité : Temps de réponse lents",
      "• ⚠️ Confidentialité : Non évaluée",
      "**→ Score : 4/10**",
      "",
      "**3. Axe Maintenance :**",
      "• ❌ Maintenabilité : Code mal documenté",
      "• ⚠️ Fiabilité : Pas d'information sur les bugs",
      "**→ Score : 3/10**",
      "",
      "**4. Axe Économique :**",
      "• ❌ Interopérabilité : Windows uniquement",
      "• ❌ Adaptabilité : Coût de maintenance élevé",
      "• ❌ Portabilité : Mono-plateforme",
      "**→ Score : 2/10**",
      "",
      "**Améliorations prioritaires :**",
      "1. **Urgent** : Optimiser les performances (axe utilisation)",
      "2. **Important** : Refactoring et documentation du code",
      "3. **Moyen terme** : Améliorer l'ergonomie de l'interface",
      "4. **Long terme** : Portage multi-plateforme"
    ],
    methodology: [
      "1. Évaluer chaque facteur qualité sur une échelle (ex: 1-10)",
      "2. Identifier les axes les plus faibles",
      "3. Prioriser selon l'impact utilisateur et le coût",
      "4. Définir un plan d'amélioration progressive",
      "5. Mettre en place des métriques de suivi"
    ],
    tips: [
      "📊 Utiliser une grille d'évaluation standardisée",
      "🎯 Prioriser les améliorations selon l'impact business",
      "💰 Considérer le ROI de chaque amélioration",
      "🔄 Réévaluer régulièrement la qualité"
    ]
  }
];

export default function QuestionsDSCG() {
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'solution' | 'methodology' | 'tips'>('solution');

  const toggleExercise = (id: number) => {
    setExpandedExercise(expandedExercise === id ? null : id);
    setActiveTab('solution');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cas pratiques - Suivi de Projet SI
          </h1>
          <p className="text-lg text-gray-600">
            Exercices d&apos;application pratique pour maîtriser le suivi de projet SI dans le contexte DSCG.
          </p>
        </div>

        <div className="space-y-6">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleExercise(exercise.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Exercice {exercise.id} : {exercise.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">
                      {exercise.context.split('\n')[0]}
                    </p>
                  </div>
                  <div className="ml-4">
                    {expandedExercise === exercise.id ? (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {expandedExercise === exercise.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6">
                      {/* Contexte */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          📋 Contexte
                        </h3>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                          <pre className="whitespace-pre-wrap text-blue-800 font-medium">
                            {exercise.context}
                          </pre>
                        </div>
                      </div>

                      {/* Question */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          ❓ Question
                        </h3>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                          <p className="text-orange-800 font-medium">{exercise.question}</p>
                        </div>
                      </div>

                      {/* Onglets */}
                      <div className="mb-4">
                        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                          <button
                            onClick={() => setActiveTab('solution')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                              activeTab === 'solution'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <CheckCircle className="h-4 w-4" />
                            Solution
                          </button>
                          <button
                            onClick={() => setActiveTab('methodology')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                              activeTab === 'methodology'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <Target className="h-4 w-4" />
                            Méthodologie
                          </button>
                          <button
                            onClick={() => setActiveTab('tips')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                              activeTab === 'tips'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <Lightbulb className="h-4 w-4" />
                            Conseils
                          </button>
                        </div>
                      </div>

                      {/* Contenu des onglets */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {activeTab === 'solution' && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                Solution détaillée
                              </h4>
                              <div className="space-y-2">
                                {exercise.solution.map((line, index) => (
                                  <div key={index} className="text-green-700">
                                    {line.startsWith('**') && line.endsWith('**') ? (
                                      <p className="font-semibold mt-3 mb-1">
                                        {line.replace(/\*\*/g, '')}
                                      </p>
                                    ) : line.startsWith('•') ? (
                                      <p className="ml-4">{line}</p>
                                    ) : line === '' ? (
                                      <div className="h-2" />
                                    ) : (
                                      <p>{line}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {activeTab === 'methodology' && (
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Méthodologie de résolution
                              </h4>
                              <ol className="space-y-3">
                                {exercise.methodology.map((step, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                                      {index + 1}
                                    </span>
                                    <span className="text-purple-700">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {activeTab === 'tips' && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                                <Lightbulb className="h-5 w-5" />
                                Conseils et astuces
                              </h4>
                              <div className="space-y-3">
                                {exercise.tips.map((tip, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <span className="text-yellow-600 text-lg">💡</span>
                                    <span className="text-yellow-700">{tip}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between">
            <Link 
              href="/quiz" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent : Quiz
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                <BookOpen className="h-4 w-4" />
                Cours terminé !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}