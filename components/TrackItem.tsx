import Image from "next/image";

interface TrackItemProps {
  imageSrc: string;
  artist: string;
  title: string;
  alt?: string;
}

export default function TrackItem({ imageSrc, artist, title, alt }: TrackItemProps) {
  return (
    <div className="flex w-full items-center border-b border-white/10 py-4">
      {/* 1/4 de l'espace pour l'image */}
      <div className="relative w-1/4 aspect-square overflow-hidden" style={{ aspectRatio: "1/1" }}>
        <Image
          src={imageSrc}
          alt={alt || `${artist} - ${title}`}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 25vw, 25vw"
        />
      </div>

      {/* 2/4 de l'espace pour le texte (Artiste + Titre) */}
      <div className="flex w-2/4 flex-col justify-center px-4">
        <h3 className="font-anton text-xl md:text-3xl uppercase">{artist}</h3>
        <p className="text-sm md:text-lg opacity-80">{title}</p>
      </div>

      {/* Le dernier quart restant (vide) */}
      <div className="w-1/4"></div>
    </div>
  );
}
