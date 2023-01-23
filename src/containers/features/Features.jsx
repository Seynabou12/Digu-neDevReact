import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Améliorer instantanément les méfiances',
    text: 'De leur beau jean il donne de riche il. Ils vieillissent et dessinent madame comme. L&apos;amélioration des méfiances de fin peut être immédiatement applaudie par la famille.',
  },
  {
    title: 'Devenir l&apos;actif tendu',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message ou je ne suis rien',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Compté de la loi vraiment garçon',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">L&apos;avenir est maintenant et vous avez juste besoin de le réaliser. Entrez dans l&apos;avenir aujourd&apos;hui. & Arangez-vous pour que cela arrive.</h1>
      <p>Demandez un accès anticipé pour intégrer</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
