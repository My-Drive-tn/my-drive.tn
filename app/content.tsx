'use client';
import Image from 'next/image';

export default function Accueil() {
  return (
    <div>
      <div id="accueil">
        <Image src="/safety.png" width={700} height={600} alt="safety" />
        <h1>Un espace sécurisé pour accomplir votre meilleur travail </h1>
        <p>La protection des données personnelles et la confidentialité ne sont pas des options avec My-drive, c’est la norme.<br />
          Nous croyons en effet que tout le monde devrait pouvoir stocker des données et communiquer en ligne en toute sécurité et confidentialité.</p>
      </div>
      <div id="caract">
        <Image src="/safety.png" width={140} height={40} alt="safety" />
        <h1>Protection des données personnelles et confidentialité : une priorité absolue Chez My-drive, la protection de vos données personnelles et la confidentialité
          en ligne ne sont pas simplement des options, elles sont intégrées à notre service. Nous croyons fermement que chaque utilisateur mérite de pouvoir
          stocker et partager ses fichiers en toute sécurité, sans compromettre sa vie privée. Profitez de la tranquillité d'esprit,
          sachant que vos informations sont protégées avec les normes de sécurité les plus strictes.</h1>
      </div>
      <div id="tarifs">
        <Image src="/safety.png" width={140} height={40} alt="safety" />
        <h1>Stockez, collaborez et échangez, tout en un seul endroit My-drive simplifie votre quotidien
          en centralisant tous vos fichiers, conversations et réunions en ligne. Que ce soit pour le stockage, le partage de documents ou pour travailler en équipe,
          tout est facilement accessible à tout moment, depuis n'importe quel appareil. Optimisez votre organisation et
          collaborez efficacement, sans jamais perdre de vue la sécurité.</h1>
      </div>
      <div id="FAQ"></div>
      <h1>Une expérience de travail fluide et sans accroc Nous savons à quel point il est important de travailler sans interruptions.
        My-drive vous offre une interface simple et intuitive qui vous permet d’accéder à vos fichiers et de collaborer en temps réel, sans les tracas techniques.
        Simplifiez vos processus tout en maximisant votre productivité.</h1>
      <h1>Votre espace, votre contrôle Avec My-drive, vous avez un contrôle total sur vos fichiers. Gérez facilement qui peut voir, modifier ou partager vos documents,
        et assurez-vous que seules les bonnes personnes y ont accès. Nous vous offrons une transparence totale sur la gestion de vos données.</h1>
      <h1>L’avenir du stockage sécurisé dans le cloud My-drive n’est pas seulement une solution de stockage de fichiers, c’est une plateforme intelligente qui évolue avec vous.
        Grâce à une technologie de pointe et une approche axée sur la sécurité, vous pouvez vous concentrer sur ce qui compte vraiment : votre travail.</h1>
      <h1>L’accès à vos fichiers, où que vous soyez Peu importe où vous vous trouvez, vos fichiers sont toujours à portée de main. Notre solution de cloud sécurisé
        garantit un accès facile et rapide, pour vous permettre de travailler en toute flexibilité, tout en restant protégé.</h1>
    </div>
  );
}
