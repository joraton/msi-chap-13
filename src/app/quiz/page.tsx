'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quels sont les trois éléments qui caractérisent un risque ?",
    options: [
      "Menace, probabilité, conséquence",
      "Coût, délai, qualité",
      "Processus, résultat, impact",
      "Identification, évaluation, traitement"
    ],
    correct: 0,
    explanation: "Un risque se caractérise par une menace (événement défavorable), une probabilité d'apparition et une conséquence (impact financier)."
  },
  {
    id: 2,
    question: "Que signifie l'acronyme CBTP ?",
    options: [
      "Coût Budgété du Travail Prévu",
      "Coût Budgété du Travail Produit",
      "Coût Budgété du Travail Planifié",
      "Coût Budgété du Travail Programmé"
    ],
    correct: 0,
    explanation: "CBTP signifie Coût Budgété du Travail Prévu. C'est le coût prévisionnel du projet selon l'avancement théorique."
  },
  {
    id: 3,
    question: "Combien d'axes qualité sont définis pour évaluer un logiciel ?",
    options: [
      "3 axes",
      "4 axes",
      "5 axes",
      "6 axes"
    ],
    correct: 1,
    explanation: "Il y a 4 axes qualité : fonctionnel, utilisation, maintenance et économique."
  },
  {
    id: 4,
    question: "Quel est le moyen mnémotechnique pour retenir les 6 causes du diagramme d'Ishikawa ?",
    options: [
      "6M : Milieu, Matière, Méthodes, Matériel, Main d'œuvre, Management",
      "6C : Coût, Calendrier, Conformité, Contrôle, Communication, Coordination",
      "6P : Processus, Produit, Personnel, Procédure, Performance, Planning",
      "6R : Risque, Ressource, Résultat, Responsabilité, Reporting, Révision"
    ],
    correct: 0,
    explanation: "Les 6M représentent les 6 causes fondamentales du diagramme d'Ishikawa : Milieu, Matière, Méthodes, Matériel, Main d'œuvre, Management."
  },
  {
    id: 5,
    question: "Comment calcule-t-on l'écart de coûts ?",
    options: [
      "CBTP - CBTE",
      "CRTE - CBTE",
      "CBTE - CBTP",
      "CRTE - CBTP"
    ],
    correct: 1,
    explanation: "L'écart de coûts = CRTE - CBTE. Il traduit un gaspillage (positif) ou des économies (négatif) dans l'utilisation des ressources."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <BackToPlanButton />
          
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-6"
            >
              {percentage >= 80 ? (
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
              ) : percentage >= 60 ? (
                <CheckCircle className="h-20 w-20 text-orange-500 mx-auto mb-4" />
              ) : (
                <XCircle className="h-20 w-20 text-red-500 mx-auto mb-4" />
              )}
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Résultats du Quiz
            </h1>
            
            <div className="text-6xl font-bold mb-4">
              <span className={`${
                percentage >= 80 ? 'text-green-500' : 
                percentage >= 60 ? 'text-orange-500' : 'text-red-500'
              }`}>
                {percentage}%
              </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-6">
              Vous avez obtenu {score} sur {questions.length} bonnes réponses
            </p>
            
            <div className="mb-8">
              {percentage >= 80 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">🎉 Excellent !</p>
                  <p className="text-green-700">Vous maîtrisez parfaitement le suivi de projet SI.</p>
                </div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 font-semibold">👍 Bien !</p>
                  <p className="text-orange-700">Vous avez une bonne compréhension, quelques révisions seraient bénéfiques.</p>
                </div>
              )}
              {percentage < 60 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">📚 À revoir</p>
                  <p className="text-red-700">Il serait utile de réviser les sections du cours avant de continuer.</p>
                </div>
              )}
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              
              <Link 
                href="/questions-dscg" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Cas pratiques
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                Quiz : Suivi de Projet SI
              </h1>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
            </div>
            
            {/* Barre de progression */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-3 mb-6">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  const showAnswer = showExplanation;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showExplanation && handleAnswer(index)}
                      disabled={showExplanation}
                      className={`
                        w-full p-4 text-left rounded-lg border-2 transition-all
                        ${
                          showAnswer
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isSelected
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }
                        ${
                          showExplanation ? 'cursor-default' : 'cursor-pointer'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showAnswer && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {showAnswer && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"
                >
                  <h3 className="font-semibold text-blue-800 mb-2">💡 Explication</h3>
                  <p className="text-blue-700">{questions[currentQuestion].explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <Link 
              href="/section-3" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent : La qualité
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}