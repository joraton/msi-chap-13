import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

export default function CoursePlan() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      {/* Titre de la section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Target className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez le parcours structuré pour maîtriser le suivi de projet SI
        </p>
      </div>

      {/* Blocs de sections */}
      <div className="space-y-4">
        <SectionBlock
          title="Introduction"
          description="Concepts de base et enjeux du suivi de projet SI"
          href="/introduction"
          icon="rocket"
          color="blue"
        />
        
        <SectionBlock
          title="Section I : Le suivi du risque"
          description="Identification, évaluation et gestion des risques projet"
          href="/section-1"
          icon="shield"
          color="green"
        />
        
        <SectionBlock
          title="Section II : Le suivi de l'avancement"
          description="Méthodes de suivi des coûts, délais et correction du reste à faire"
          href="/section-2"
          icon="trending-up"
          color="orange"
        />
        
        <SectionBlock
          title="Section III : La qualité"
          description="Facteurs qualité et critères d'évaluation des logiciels"
          href="/section-3"
          icon="star"
          color="purple"
        />
        
        <SectionBlock
          title="Quiz"
          description="Évaluez vos connaissances avec des questions interactives"
          href="/quiz"
          icon="help-circle"
          color="red"
        />
        
        <SectionBlock
          title="Cas pratiques"
          description="Exercices pratiques et cas d'étude DSCG"
          href="/questions-dscg"
          icon="award"
          color="indigo"
        />
        
        <SectionBlock
          title="Questions DSCG"
          description="Questions d'examens DSCG avec corrections détaillées (2016-2024)"
          href="/questions-dscg-new"
          icon="file-text"
          color="teal"
        />
      </div>
    </div>
  );
}