import { useTranslation } from 'next-i18next';
import Section from '../../components/Section';

export default function Experiences() {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Section imgSrc="/images/open-source.jpg" delay={0.1}>
        <h2 className="text-3xl font-bold">{t('openSource')}</h2>
        <p>{t('openSourceDesc')}</p>
      </Section>
      
      <Section imgSrc="/images/private-experiences.jpg" delay={0.3}>
        <h2 className="text-3xl font-bold">{t('privateExperiences')}</h2>
        <p>{t('privateExperiencesDesc')}</p>
      </Section>
    </>
  );
}