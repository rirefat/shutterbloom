import PhotoDetails from "@/components/PhotoDetails";

export default function SinglePhoto({ params: { id, lang } }) {
    return <PhotoDetails id={id} lang={lang} />;
}