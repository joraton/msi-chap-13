'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ArrowLeft, Calendar, FileText, BookOpen } from 'lucide-react';

export default function QuestionsDSCGNew() {
  const [visibleCorrections, setVisibleCorrections] = useState<Record<string, boolean>>({});

  const toggleCorrection = (questionId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Questions DSCG : Suivi de Projet SI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Questions et corrections tirées des annales DSCG, organisées par session, 
            couvrant la gestion de projet, les risques, et les méthodologies SI.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">À propos de ces questions</h2>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Ces questions sont tirées des annales DSCG et sont pertinentes par rapport aux concepts 
              abordés dans le &quot;CHAPITRE 13 : LE SUIVI D&apos;UN PROJET SI&quot; et la gestion de projet en général.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Note :</strong> Le document &quot;CHAPITRE-13-PROJET-SUIVI-OK.pdf&quot; est un support de cours 
              expliquant les notions de suivi de projet (coût, délai, qualité, risques), mais ne contient pas 
              de questions d&apos;examen. Les questions ci-dessous proviennent des annales de DSCG.
            </p>
          </div>
        </div>

        {/* Session 2024 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Session 2024</h2>
          </div>

          {/* Question 1.3 */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 1.3</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 1 – Accompagner une démarche de mise en cohérence de CRM inter-organisationnels)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; En ce qui concerne le troisième argument de H2O : caractérisez précisément ce risque et 
                proposez des moyens de le gérer en détaillant votre réponse. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2024-1-3')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2024-1-3'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2024-1-3'] && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Correction :</h4>
                <div className="text-green-800 space-y-3">
                  <p>
                    Le risque est lié à une situation d&apos;incertitude, à des imprévus ou des aléas. La réalisation 
                    des risques peut porter sur le processus (projet non abouti, consommation excessive de ressources, 
                    durée trop longue) ou sur le résultat (système non fonctionnel, non accepté par l&apos;utilisateur, 
                    coût de fonctionnement excessif).
                  </p>
                  <p>
                    La démarche générale de management des risques comprend cinq étapes : identifier les risques, 
                    évaluer leur impact possible sur les coûts, le délai et la qualité, définir des actions pour 
                    réduire les risques inacceptables, suivre ces actions et surveiller l&apos;état des risques, 
                    et capitaliser l&apos;expérience.
                  </p>
                  <p>
                    Concernant l&apos;argument &quot;Enfin, ils mettent en avant le fait, que les employés et les clients 
                    sont habitués à leur application, et qu&apos;il sera très problématique de changer.&quot;, 
                    les risques identifiés peuvent inclure :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Adhésion des employés :</strong> L&apos;adhésion des employés est un point crucial qui fera échouer le projet s&apos;il n&apos;est pas pris en compte. Les salariés vont avoir à faire à des changements d&apos;ordre.</li>
                    <li><strong>Technologique :</strong> L&apos;application va les obliger à passer par une interface nouvelle pour tout un tas d&apos;activités. Ce changement sera important.</li>
                    <li><strong>Organisationnel :</strong> Certains sont plus particulièrement touchés par ce changement organisationnel : leur rôles, métiers, tâches en seront affectés.</li>
                  </ul>
                  <p>
                    Les moyens pour gérer la conduite du changement incluent la communication et la formation.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Question 3.2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 3.2</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 3 – Gestion de projet, SI fantômes et BYOD)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Vous relèverez les erreurs déjà commises en termes de gestion de projet par Etienne Dupond. 
                Vous structurerez votre réponse autour des grandes phases de la gestion de projet informatique. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2024-3-2')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2024-3-2'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2024-3-2'] && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Correction :</h4>
                <div className="text-green-800">
                  <p className="mb-3">
                    Le corrigé propose un tableau des phases du projet avec les erreurs correspondantes :
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">Phases Préliminaires :</h5>
                      <p>Erreur signalée comme &quot;OK-RAS&quot; (Okay - Rien à signaler).</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Phase Lancement du projet / Définition projet :</h5>
                      <p>Les erreurs incluent l&apos;absence de grandes lignes du projet et de sa gouvernance, une équipe projet non précisée, un chef de projet sans connaissance de son rôle, l&apos;absence d&apos;un comité de pilotage, et une contractualisation avec les acteurs externes décidée par la MOE (Maîtrise d&apos;œuvre) seule.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Phase Expression du besoin :</h5>
                      <p>Les fonctionnalités précises à développer n&apos;ont pas été identifiées trop en amont.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Phase Planification :</h5>
                      <p>L&apos;absence de mise en place d&apos;outil de gestion de projet PERT/GANTT, le fait que le chef de projet ne tienne pas son rôle (pas de contrôle, aucune relation avec le futur utilisateur) sont des erreurs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Session 2023 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Session 2023</h2>
          </div>

          {/* Question 6 */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 6</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Direction de projet)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Pour piloter l&apos;ensemble de vos projets au sein du programme de bascule des clients de l&apos;ESN, 
                vous décidez d&apos;organiser un Comité de pilotage mensuel. Quels sont les participants à convier à ce comité ? &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2023-6')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2023-6'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2023-6'] && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Correction :</h4>
                <div className="text-blue-800 space-y-3">
                  <p>
                    Un Comité de pilotage convie les acteurs impliqués dans l&apos;ensemble du projet. Les membres à convier sont :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Le chef ou le directeur de projet :</strong> C&apos;est le rôle de l&apos;examinateur, qui anime ce comité.</li>
                    <li><strong>Le sponsor du projet :</strong> C&apos;est la personne qui finance le budget du programme, généralement un directeur opérationnel au sein d&apos;une ESN.</li>
                    <li><strong>Les membres de l&apos;équipe :</strong> Un membre de l&apos;équipe sachant sur un sujet peut intervenir en fonction des sujets et de l&apos;ordre du jour. Le chef de projet peut aussi être convié.</li>
                    <li><strong>Le donneur d&apos;ordre du programme :</strong> C&apos;est le client pour lequel le programme de projet est réalisé, délégué par la direction générale à un manager opérationnel.</li>
                  </ul>
                  <p>
                    Les clients sur lesquels les bascules sont réalisées ne sont pas invités à ce niveau de &quot;programme de projet&quot;, 
                    mais aux différents COPROJ (Comités Projets) les concernant.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Question 7 */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 7</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Direction de projet)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Décrire la méthodologie de projet employée pour basculer un client de GED à partir des informations 
                présentées en annexe 2 et 3. Justifier ce choix de méthodologie en décrivant les avantages et les inconvénients. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2023-7')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2023-7'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2023-7'] && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Correction :</h4>
                <div className="text-blue-800 space-y-3">
                  <p>
                    La méthodologie de projet utilisée est le <strong>cycle en V ou en cascade</strong>. Les tâches du projet 
                    se succèdent sans itération : analyse, installation/paramétrage, recette, formation, mise en production. 
                    La différence avec la méthode en cascade est que le cycle en V permet un retour aux étapes précédentes.
                  </p>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Avantages du cycle en V ou en cascade :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>S&apos;adapte à un programme de multi-projet identique, facilitant la spécialisation des ressources et la parallélisation des tâches identiques.</li>
                      <li>Facilite la gestion et le pilotage du projet avec une visibilité claire de la cible dès le départ.</li>
                      <li>Limite la conduite du changement, car l&apos;outil et le projet sont déjà connus du client et des utilisateurs.</li>
                      <li>La durée du projet est courte, un cycle en V s&apos;adapte plus facilement et sera plus efficace.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Inconvénients du cycle en V ou en cascade :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Risque d&apos;excès de confiance de la part de l&apos;équipe projet qui peut omettre des particularités ou négliger certaines tâches.</li>
                      <li>Manque de souplesse pour un cas de projet ou de client très particulier.</li>
                      <li>Manque de communication entre client et fournisseur, donnant beaucoup d&apos;autonomie à la MOE.</li>
                      <li>Nécessite généralement une période de garantie plus longue après la mise en production.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Question 8 */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 8</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Direction de projet)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Donner deux critères d&apos;organisation du programme de projet à l&apos;aide des éléments présentés au sein des annexes 2 et 3 
                afin de réaliser les 100 bascules clients en un minimum de temps. Vous présenterez ensuite un Gantt du programme pour les 5 premières bascules. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2023-8')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2023-8'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2023-8'] && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Correction :</h4>
                <div className="text-blue-800 space-y-3">
                  <p>
                    L&apos;organisation pour maximiser le nombre de bascules en un minimum de temps doit prendre en compte les critères suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Traiter les étapes de plusieurs bascules sans attendre qu&apos;une bascule se termine</strong> (limite les temps d&apos;attente d&apos;une ressource entre chaque projet).</li>
                    <li><strong>Prioriser les étapes entre les bascules pour ne pas laisser des ressources sans charge</strong> (certaines étapes peuvent être réalisées indépendamment ou simultanément).</li>
                    <li><strong>Répartir les étapes sur le chemin critique des projets pour limiter les risques</strong> (permet d&apos;avancer d&apos;autres projets par rapport au chemin critique d&apos;un seul projet).</li>
                    <li><strong>La gestion de projet est transverse à tous les projets</strong>, elle est donc mutualisée.</li>
                  </ul>
                  <p>
                    Le corrigé fournit un exemple de <strong>diagramme de Gantt</strong> pour 5 bascules optimisées, 
                    montrant l&apos;enchaînement des tâches par personne pour chaque bascule.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Question 9 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 9</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Direction de projet)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Après avoir défini la notion d&apos;urbanisation du Système d&apos;information, présenter un minimum de trois éléments 
                de révision des documents d&apos;urbanisation dans le cadre des bascules de GED chez vos clients. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2023-9')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2023-9'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2023-9'] && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Correction :</h4>
                <div className="text-blue-800 space-y-3">
                  <p>
                    L&apos;urbanisation du système d&apos;information consiste à s&apos;assurer que chaque évolution ou transformation du SI 
                    conserve de la cohérence vis-à-vis des objectifs métiers et opérationnels de l&apos;entreprise, en respectant la stratégie du SI.
                  </p>
                  <p>
                    La bascule de GED impacte l&apos;urbanisation du SI sur plusieurs éléments nécessitant une révision :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Éléments d&apos;infrastructure Technique :</strong> La nouvelle application de GED aura son propre DAT (Dossier d&apos;Architecture Technique), qui fait partie de l&apos;urbanisation du SI.</li>
                    <li><strong>Éléments d&apos;interface :</strong> Les interfaces ou technologies pouvant évoluer avec la nouvelle GED, il faut décrire dans l&apos;urbanisation les flux entre les applications du SI qui seront orientés vers la nouvelle GED.</li>
                    <li><strong>Éléments de sécurité :</strong> La GED étant liée aux utilisateurs, l&apos;urbanisation du SI doit veiller au respect des différents profils et sessions de connexion des utilisateurs pour accéder au service.</li>
                    <li><strong>Éléments de processus :</strong> La nouvelle GED peut apporter de nouvelles fonctionnalités applicatives à cataloguer dans l&apos;urbanisation du SI sous forme de cartographie des processus.</li>
                    <li><strong>Éléments d&apos;architecture applicative :</strong> La nouvelle GED est une application à part entière, remplaçant l&apos;ancienne, avec ses versions, serveurs applicatifs principaux et secondaires.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Session 2022 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Session 2022</h2>
          </div>

          {/* Question 1 */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 1</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 1 – Gouvernance du SI)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Présenter les enjeux de la gouvernance du SI pour l&apos;entreprise GEST-IMMO. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2022-1')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2022-1'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2022-1'] && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Correction :</h4>
                <div className="text-green-800 space-y-3">
                  <p>
                    La gouvernance du SI pour GEST-IMMO présente plusieurs enjeux majeurs :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Enjeu stratégique :</strong> Aligner le SI sur la stratégie de l&apos;entreprise et ses objectifs métiers</li>
                    <li><strong>Enjeu de performance :</strong> Optimiser les processus métiers et améliorer l&apos;efficacité opérationnelle</li>
                    <li><strong>Enjeu de maîtrise des risques :</strong> Gérer les risques liés à la sécurité, à la continuité d&apos;activité et à la conformité réglementaire</li>
                    <li><strong>Enjeu économique :</strong> Optimiser les investissements IT et maîtriser les coûts du SI</li>
                    <li><strong>Enjeu de transformation :</strong> Accompagner l&apos;évolution de l&apos;entreprise et l&apos;innovation</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 2</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 1 – Gouvernance du SI)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                « Identifier et justifier trois indicateurs de pilotage du SI que vous proposeriez au comité de direction de GEST-IMMO. »
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2022-2')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2022-2'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2022-2'] && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Correction :</h4>
                <div className="text-green-800 space-y-3">
                  <p>Trois indicateurs de pilotage du SI recommandés :</p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">1. Taux de disponibilité du SI</h5>
                      <p>Mesure le pourcentage de temps où le système est opérationnel. Justification : Critical pour la continuité d&apos;activité de GEST-IMMO.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">2. Coût total de possession (TCO) du SI</h5>
                      <p>Évalue l&apos;ensemble des coûts liés au SI. Justification : Permet de maîtriser les investissements et optimiser le budget IT.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">3. Taux de satisfaction des utilisateurs</h5>
                      <p>Mesure la satisfaction des utilisateurs métiers. Justification : Indicateur de l&apos;adéquation du SI aux besoins opérationnels.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 3</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Mise en œuvre d&apos;un workflow)</span>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
              <p className="text-blue-800">
                &laquo; Présenter les avantages et les inconvénients de la mise en place d&apos;un workflow pour la gestion des demandes de travaux. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2022-3')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2022-3'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2022-3'] && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Correction :</h4>
                <div className="text-green-800 space-y-3">
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Avantages du workflow :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Standardisation et formalisation des processus</li>
                      <li>Amélioration de la traçabilité des demandes</li>
                      <li>Réduction des délais de traitement</li>
                      <li>Meilleur suivi et contrôle des activités</li>
                      <li>Automatisation de certaines tâches répétitives</li>
                      <li>Amélioration de la qualité de service</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Inconvénients du workflow :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Rigidité du processus, difficulté à gérer les cas particuliers</li>
                      <li>Coût de mise en &oelig;uvre et de maintenance</li>
                      <li>Résistance au changement des utilisateurs</li>
                      <li>Nécessité de formation des équipes</li>
                      <li>Risque de sur-complexification pour des processus simples</li>
                      <li>Dépendance technologique accrue</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Session 2021 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Calendar className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Session 2021</h2>
          </div>

          {/* Question 1 */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 1</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 1 – Gestion de projet)</span>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-900 mb-2">Question :</h4>
              <p className="text-purple-800">
                « Présenter les facteurs de succès et les difficultés de la gestion de projet SI. »
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2021-1')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2021-1'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2021-1'] && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Correction :</h4>
                <div className="text-purple-800 space-y-3">
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Facteurs de succès :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Implication et soutien de la direction générale</li>
                      <li>Définition claire des objectifs et du périmètre</li>
                      <li>Équipe projet compétente et motivée</li>
                      <li>Communication efficace entre toutes les parties prenantes</li>
                      <li>Gestion rigoureuse des risques</li>
                      <li>Planification réaliste et suivi régulier</li>
                      <li>Conduite du changement adaptée</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Difficultés :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Résistance au changement des utilisateurs</li>
                      <li>Complexité technique et intégration avec l&apos;existant</li>
                      <li>Évolution des besoins en cours de projet</li>
                      <li>Contraintes budgétaires et de délais</li>
                      <li>Coordination entre équipes métier et technique</li>
                      <li>Gestion des compétences et des ressources</li>
                      <li>Maîtrise des risques technologiques</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Question 2 */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 2</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 2 – Prévention des risques)</span>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-900 mb-2">Question :</h4>
              <p className="text-purple-800">
                &laquo; Identifier et analyser les risques liés à la mise en &oelig;uvre du nouveau SI. Proposer des mesures de prévention. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2021-2')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2021-2'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2021-2'] && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Correction :</h4>
                <div className="text-purple-800 space-y-3">
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Risques identifiés :</h5>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Risques techniques :</strong> Problèmes d&apos;intégration, performance insuffisante, bugs</li>
                      <li><strong>Risques organisationnels :</strong> Résistance au changement, formation insuffisante</li>
                      <li><strong>Risques financiers :</strong> Dépassement de budget, coûts cachés</li>
                      <li><strong>Risques de planning :</strong> Retards de livraison, indisponibilité des ressources</li>
                      <li><strong>Risques de sécurité :</strong> Failles de sécurité, perte de données</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Mesures de prévention :</h5>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Tests approfondis et recettes utilisateurs</li>
                      <li>Plan de formation et accompagnement au changement</li>
                      <li>Suivi budgétaire rigoureux et provisions pour aléas</li>
                      <li>Planification réaliste avec marges de sécurité</li>
                      <li>Audit de sécurité et plan de sauvegarde</li>
                      <li>Communication régulière et transparente</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Question 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <FileText className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Question 3</h3>
              <span className="ml-2 text-sm text-gray-600">(Dossier 3 – Urbanisation du SI)</span>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-900 mb-2">Question :</h4>
              <p className="text-purple-800">
                &laquo; Expliquer les principes de l&apos;urbanisation du SI et son intérêt pour l&apos;entreprise. &raquo;
              </p>
            </div>

            <button
              onClick={() => toggleCorrection('2021-3')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors mb-4"
            >
              {visibleCorrections['2021-3'] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction
                </>
              )}
            </button>

            {visibleCorrections['2021-3'] && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Correction :</h4>
                <div className="text-purple-800 space-y-3">
                  <p>
                    L&apos;urbanisation du SI consiste à organiser et structurer le système d&apos;information 
                    de manière cohérente et évolutive, en s&apos;inspirant des principes d&apos;urbanisme.
                  </p>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Principes de l&apos;urbanisation :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Découpage en zones fonctionnelles cohérentes</li>
                      <li>Définition d&apos;interfaces standardisées</li>
                      <li>Réutilisation des composants</li>
                      <li>Évolutivité et flexibilité</li>
                      <li>Gouvernance et règles d&apos;architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mt-4 mb-2">Intérêts pour l&apos;entreprise :</h5>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Réduction de la complexité du SI</li>
                      <li>Amélioration de l&apos;agilité et de la réactivité</li>
                      <li>Optimisation des coûts de développement et maintenance</li>
                      <li>Facilitation de l&apos;intégration de nouvelles applications</li>
                      <li>Meilleure maîtrise des risques</li>
                      <li>Alignement du SI sur la stratégie métier</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            href="/quiz" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au Quiz
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}