interface CollectionCardProps {
    title: string
    image: string
    className?: string
  }
  
  export default function CollectionCard({ title, image, className = '' }: CollectionCardProps) {
    return (
      <div className={`group relative overflow-hidden rounded-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity group-hover:opacity-75" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <h3 className="absolute bottom-4 left-4 text-lg font-medium text-white">
          {title}
        </h3>
      </div>
    )
  }
  
  