export default function ProductDetailsPage() {
    const keyNotes = [
        {
            title: "Top Note",
            description: "Citrus Accord, Sun-kissed Fruits",
            image: "/placeholder.svg?height=200&width=200"
        },
        {
            title: "Heart Note",
            description: "Golden Roses, Paris Blooms",
            image: "/placeholder.svg?height=200&width=200"
        },
        {
            title: "Base Note",
            description: "Amber, Vanilla, Sandalwood",
            image: "/placeholder.svg?height=200&width=200"
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-4xl space-y-24">
                    {/* Product Details */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light">Product Details</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Step into a world of unparalleled opulence with Luxurious Elixir, an exquisite fragrance that weaves an enchanting symphony of gold and
                            luxury. This gilded elixir is a celebration of sophistication, crafted with the finest essences and imbued with the allure of precious golden hues.
                            Allow this scent to be the beginning of a dream, Luxurious Elixir promises an intoxicating experience that promises to take you to the essence of depth.
                        </p>
                    </section>

                    {/* The Golden Overture */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light">The Golden Overture</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Luxurious Elixir opens with a grand flourish of radiant citrus and sun-kissed fruits, reminiscent of golden rays caressing your senses. The
                            vibrant fresh unfolds with a bouquet of velvety roses and rare blooms. Your essence merging with the allure of gilded petals. As the
                            journey continues, a mysterious blend of warm amber, earthy vanilla, and smooth sandalwood marks a sweet yet sophisticated finale to your olfactory
                            adventure.
                        </p>
                    </section>

                    {/* Key Notes */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-light">Key Notes</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {keyNotes.map((note, index) => (
                                <div key={index} className="text-center space-y-4">
                                    <h3 className="text-lg font-medium">{note.title}</h3>
                                    <div className="mx-auto h-48 w-48 overflow-hidden rounded-full">
                                        <img
                                            src={note.image}
                                            alt={note.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-300">{note.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* The Heart of Elegance */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light">The Heart of Elegance</h2>
                        <p className="text-gray-300 leading-relaxed">
                            In the heart of this enchanting composition, cherish as you step a world where glamour and prestige unite. With every spray, this fragrance
                            weaves a tapestry of glittering gold around you, enhancing your allure and capturing the admiration of those around.
                        </p>
                    </section>

                    {/* The Ultimate Expression of Luxury */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-light">The Ultimate Expression of Luxury</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Luxurious Elixir makes an extraordinary gift, an expression of your discerning taste and admiration for the extraordinary. Delight your loved
                            ones with this lavish note, a symbol of admiration and devotion.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

