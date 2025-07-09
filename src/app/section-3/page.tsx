import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Star, Settings, Users, Wrench, DollarSign } from 'lucide-react';

export default function Section3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Section III : La Qualité
          </h1>
          
          {/* Introduction */}
          <section className="mb-8">
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                En simplifiant les choses, un logiciel peut être approché sous deux angles : 
                les <strong>fonctions qu&apos;il réalise</strong> et ses <strong>caractéristiques techniques d&apos;utilisation</strong>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Les 4 axes qualité</h3>
              <p className="text-gray-700 mb-3">
                Les facteurs qualité sont répartis selon quatre axes principaux :
              </p>
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white p-3 rounded-lg text-center">
                  <span className="font-semibold text-blue-600">Fonctionnel</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <span className="font-semibold text-green-600">Utilisation</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <span className="font-semibold text-orange-600">Maintenance</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <span className="font-semibold text-purple-600">Économique</span>
                </div>
              </div>
            </div>
          </section>

          {/* Axe fonctionnel */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              L&apos;axe fonctionnel (conceptuel)
            </h2>
            
            <p className="text-gray-700 mb-4">
              Correspond aux besoins fonctionnels et comporte trois facteurs :
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 La pertinence</h4>
                <p className="text-blue-700 text-sm">
                  La capacité de répondre au problème de l&apos;organisation. 
                  C&apos;est le facteur dont la réponse est la plus spécifique de chaque projet.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🔗 L&apos;adéquation</h4>
                <p className="text-blue-700 text-sm">
                  L&apos;adéquation du logiciel à l&apos;organisation et aux procédures. 
                  Applications informatiques et procédures de travail doivent faire un tout cohérent.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🌐 La généralité</h4>
                <p className="text-blue-700 text-sm">
                  L&apos;aptitude de la solution à résoudre des problèmes de portée plus large 
                  que le contexte particulier du projet.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Axe Fonctionnel</h3>
              <p className="text-gray-700 mb-4">Capacité du logiciel à répondre aux besoins exprimés.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3">📊 Pertinence (Suitability)</h4>
                  <p className="text-gray-700 mb-2">Adéquation entre les fonctions fournies et les besoins exprimés.</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800"><strong>Exemple :</strong> Un logiciel de comptabilité doit permettre la saisie des écritures, l&apos;édition des bilans, etc.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3">🎯 Exactitude (Accuracy)</h4>
                  <p className="text-gray-700 mb-2">Précision et justesse des résultats fournis par le logiciel.</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800"><strong>Exemple :</strong> Les calculs financiers doivent être exacts au centime près.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3">🔗 Interopérabilité (Interoperability)</h4>
                  <p className="text-gray-700 mb-2">Capacité à fonctionner avec d&apos;autres systèmes ou composants.</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800"><strong>Exemple :</strong> Capacité d&apos;import/export de données vers Excel, compatibilité avec différents formats.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3">🛡️ Sécurité (Security)</h4>
                  <p className="text-gray-700 mb-2">Protection contre les accès non autorisés aux données et fonctions.</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800"><strong>Exemple :</strong> Authentification, chiffrement des données, gestion des droits d&apos;accès.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-3">✅ Conformité (Compliance)</h4>
                  <p className="text-gray-700 mb-2">Respect des standards, normes et réglementations en vigueur.</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="text-blue-800"><strong>Exemple :</strong> Conformité RGPD, respect des normes comptables, accessibilité web.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Moyen mnémotechnique</h4>
                <p className="text-blue-700 font-medium">&quot;PAISC&quot; - Pertinence, Exactitude, Interopérabilité, Sécurité, Conformité</p>
              </div>
            </div>
          </section>

          {/* Axe utilisation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-green-600" />
              L&apos;axe utilisation
            </h2>
            
            <p className="text-gray-700 mb-4">
              Le point de vue de la mise en œuvre et de l&apos;exploitation du logiciel. Il comporte cinq facteurs :
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">😊 La convivialité</h4>
                <p className="text-green-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à être convivial et aisé d&apos;emploi pour le type d&apos;utilisateur 
                  auquel il est destiné. Concerne les interfaces homme-machine, le paramétrage, l&apos;assistance.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">🛡️ La fiabilité</h4>
                <p className="text-green-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à accomplir sans défaillance l&apos;ensemble des fonctions spécifiées 
                  dans un document de référence, pour une durée d&apos;utilisation donnée.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">⚡ L&apos;efficience</h4>
                <p className="text-green-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à minimiser l&apos;utilisation des ressources disponibles 
                  (mémoire, processeur, réseau).
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">🔒 La confidentialité</h4>
                <p className="text-green-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à être protégé contre tout accès par des personnes non autorisées.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">🔗 La couplabilité (interopérabilité)</h4>
                <p className="text-green-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à communiquer, s&apos;interfacer, interagir avec d&apos;autres logiciels 
                  ou parties d&apos;un système d&apos;information. Permet l&apos;échange de données.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">⚡ Axe d&apos;Utilisation</h3>
              <p className="text-gray-700 mb-4">Facilité d&apos;usage et performance du logiciel.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">🧠 Compréhensibilité (Understandability)</h4>
                  <p className="text-gray-700 mb-2">Facilité pour l&apos;utilisateur de comprendre le logiciel et ses fonctionnalités.</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800"><strong>Exemple :</strong> Interface intuitive, terminologie claire, organisation logique des menus.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">📚 Facilité d&apos;apprentissage (Learnability)</h4>
                  <p className="text-gray-700 mb-2">Rapidité avec laquelle un utilisateur peut apprendre à utiliser le logiciel.</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800"><strong>Exemple :</strong> Tutoriels intégrés, aide contextuelle, courbe d&apos;apprentissage douce.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">🎮 Facilité d&apos;exploitation (Operability)</h4>
                  <p className="text-gray-700 mb-2">Simplicité d&apos;utilisation une fois le logiciel maîtrisé.</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800"><strong>Exemple :</strong> Raccourcis clavier, automatisation des tâches répétitives, ergonomie optimisée.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">⚡ Efficacité (Efficiency)</h4>
                  <p className="text-gray-700 mb-2">Rapidité d&apos;exécution et optimisation des performances.</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800"><strong>Exemple :</strong> Temps de réponse rapides, traitement efficace des gros volumes de données.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-3">📞 Communicabilité (Communicativeness)</h4>
                  <p className="text-gray-700 mb-2">Qualité des messages et de la communication avec l&apos;utilisateur.</p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="text-green-800"><strong>Exemple :</strong> Messages d&apos;erreur explicites, notifications claires, feedback utilisateur.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-green-800 mb-2">💡 Moyen mnémotechnique</h4>
                <p className="text-green-700 font-medium">&quot;CFEEC&quot; - Compréhensibilité, Facilité d&apos;apprentissage, Facilité d&apos;Exploitation, Efficacité, Communicabilité</p>
              </div>
            </div>


          </section>

          {/* Axe maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-orange-600" />
              L&apos;axe maintenance
            </h2>
            
            <p className="text-gray-700 mb-4">
              Le point de vue de l&apos;évolution du logiciel. Il comporte trois facteurs :
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🔧 La maintenabilité</h4>
                <p className="text-orange-700 text-sm">
                  Le degré de facilité avec laquelle on peut localiser et corriger des erreurs résiduelles. 
                  Cette caractéristique a un effet direct sur la maintenance corrective.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🔄 L&apos;adaptabilité</h4>
                <p className="text-orange-700 text-sm">
                  L&apos;aptitude d&apos;un logiciel à évoluer aisément, quand on souhaite modifier 
                  ou ajouter des fonctionnalités.
                </p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-2">📦 La portabilité</h4>
                <p className="text-orange-700 text-sm">
                  Le degré de facilité avec laquelle on peut transférer le logiciel 
                  dans un autre environnement logiciel ou matériel.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">🔧 Axe de Maintenance</h3>
              <p className="text-gray-700 mb-4">Facilité de maintenance et d&apos;évolution du logiciel.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-3">🔍 Analysabilité (Analyzability)</h4>
                  <p className="text-gray-700 mb-2">Facilité d&apos;analyse du code pour identifier les causes de défaillances ou les parties à modifier.</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800"><strong>Exemple :</strong> Code bien documenté, architecture claire, logs détaillés, outils de debugging.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-3">🛠️ Modifiabilité (Changeability)</h4>
                  <p className="text-gray-700 mb-2">Facilité d&apos;implémentation des modifications, corrections ou améliorations.</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800"><strong>Exemple :</strong> Code modulaire, faible couplage, respect des patterns de conception.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-3">🧪 Testabilité (Testability)</h4>
                  <p className="text-gray-700 mb-2">Facilité de validation des modifications apportées au logiciel.</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800"><strong>Exemple :</strong> Tests unitaires, tests d'intégration, couverture de code, environnements de test.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-3">🔄 Stabilité (Stability)</h4>
                  <p className="text-gray-700 mb-2">Capacité à éviter les effets de bord lors des modifications.</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800"><strong>Exemple :</strong> Encapsulation, interfaces stables, gestion des dépendances.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-3">📦 Portabilité (Portability)</h4>
                  <p className="text-gray-700 mb-2">Facilité de transfert du logiciel d&apos;un environnement à un autre.</p>
                  <div className="bg-orange-50 p-3 rounded text-sm">
                    <p className="text-orange-800"><strong>Exemple :</strong> Compatibilité multi-plateforme, standards ouverts, configuration externalisée.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-orange-800 mb-2">💡 Moyen mnémotechnique</h4>
                <p className="text-orange-700 font-medium">&quot;AMTSP&quot; - Analysabilité, Modifiabilité, Testabilité, Stabilité, Portabilité</p>
              </div>
            </div>


          </section>

          {/* Axe économique */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-purple-600" />
              L&apos;axe économique
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed">
                C&apos;est celui de la rentabilité des applications. Il se traduit par un seul facteur 
                prenant en compte les coûts de développement, ceux d&apos;exploitation et les gains effectifs 
                dus au logiciel : c&apos;est <strong>l&apos;efficacité du logiciel</strong>.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">💰 Axe Économique</h3>
              <p className="text-gray-700 mb-4">Optimisation des ressources et des coûts.</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-3">⚡ Efficacité temporelle (Time Efficiency)</h4>
                  <p className="text-gray-700 mb-2">Optimisation du temps d&apos;exécution et de réponse du logiciel.</p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="text-purple-800"><strong>Exemple :</strong> Algorithmes optimisés, cache intelligent, traitement asynchrone, indexation des données.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-3">💾 Efficacité des ressources (Resource Efficiency)</h4>
                  <p className="text-gray-700 mb-2">Optimisation de l&apos;utilisation des ressources système (mémoire, CPU, stockage).</p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="text-purple-800"><strong>Exemple :</strong> Gestion mémoire optimisée, compression des données, utilisation efficace du CPU.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-3">💵 Coût de possession (Total Cost of Ownership)</h4>
                  <p className="text-gray-700 mb-2">Coût total du logiciel incluant développement, maintenance, formation et exploitation.</p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="text-purple-800"><strong>Exemple :</strong> Licences, formation utilisateurs, maintenance, évolutions, infrastructure.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-3">📈 Retour sur investissement (ROI)</h4>
                  <p className="text-gray-700 mb-2">Bénéfices apportés par le logiciel par rapport à son coût.</p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="text-purple-800"><strong>Exemple :</strong> Gains de productivité, réduction des erreurs, automatisation des processus.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-100 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-purple-800 mb-2">💡 Moyen mnémotechnique</h4>
                <p className="text-purple-700 font-medium">&quot;ETCR&quot; - Efficacité Temporelle, Efficacité des ressources, Coût de possession, ROI</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📋 Synthèse des facteurs de qualité</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-blue-100 p-3 rounded">
                    <h4 className="font-semibold text-blue-800">🎯 Axe Fonctionnel</h4>
                    <p className="text-blue-700 text-sm font-medium">&quot;PAISC&quot;</p>
                    <p className="text-blue-600 text-xs">Pertinence, Exactitude, Interopérabilité, Sécurité, Conformité</p>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded">
                    <h4 className="font-semibold text-green-800">⚡ Axe d&apos;Utilisation</h4>
                    <p className="text-green-700 text-sm font-medium">&quot;CFEEC&quot;</p>
                    <p className="text-green-600 text-xs">Compréhensibilité, Facilité d&apos;apprentissage, Facilité d&apos;Exploitation, Efficacité, Communicabilité</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-orange-100 p-3 rounded">
                    <h4 className="font-semibold text-orange-800">🔧 Axe de Maintenance</h4>
                    <p className="text-orange-700 text-sm font-medium">&quot;AMTSP&quot;</p>
                    <p className="text-orange-600 text-xs">Analysabilité, Modifiabilité, Testabilité, Stabilité, Portabilité</p>
                  </div>
                  
                  <div className="bg-purple-100 p-3 rounded">
                    <h4 className="font-semibold text-purple-800">💰 Axe Économique</h4>
                    <p className="text-purple-700 text-sm font-medium">&quot;ETCR&quot;</p>
                    <p className="text-purple-600 text-xs">Efficacité Temporelle, Efficacité des ressources, Coût de possession, ROI</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">🎯 Points clés à retenir</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• La qualité logicielle se mesure selon 4 axes complémentaires</li>
                  <li>• Chaque axe contient plusieurs facteurs spécifiques</li>
                  <li>• Les moyens mnémotechniques facilitent la mémorisation</li>
                  <li>• L&apos;évaluation doit être adaptée au contexte du projet</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Synthèse */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-600" />
              Synthèse des facteurs qualité
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">🎯 Récapitulatif des 4 axes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">1. Fonctionnel (3 facteurs)</h4>
                  <p className="text-gray-700">Pertinence, Adéquation, Généralité</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">2. Utilisation (5 facteurs)</h4>
                  <p className="text-gray-700">Convivialité, Fiabilité, Efficience, Confidentialité, Couplabilité</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-2">3. Maintenance (3 facteurs)</h4>
                  <p className="text-gray-700">Maintenabilité, Adaptabilité, Portabilité</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">4. Économique (1 facteur)</h4>
                  <p className="text-gray-700">Efficacité</p>
                </div>
              </div>
            </div>


          </section>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <Link 
              href="/section-2" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent : Le suivi de l&apos;avancement
            </Link>
            
            <Link 
              href="/quiz" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suivant : Quiz
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}