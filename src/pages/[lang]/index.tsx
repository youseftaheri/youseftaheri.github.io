import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Home() {
  const { t } = useTranslation('common');
  return <main>{t('welcome')}</main>;
}

// Define supported languages
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { lang: 'en' } }, // Pre-render English
      { params: { lang: 'fr' } }, // Pre-render French
      // Add other supported languages
    ],
    fallback: false, // Show 404 for unsupported languages
  };
};

// Provide translations for each language
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as string;
  return {
    props: {
      ...(await serverSideTranslations(lang, ['common'])),
    },
  };
};