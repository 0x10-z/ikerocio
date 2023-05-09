import useTranslation from "next-translate/useTranslation";

export default function useIndexTranslation() {
  const { t, lang } = useTranslation("index");
  return { t, lang };
}
