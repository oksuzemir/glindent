"use client"
import { useReveal } from "@/hooks/use-reveal"
import { products, type Product } from "@/lib/products"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { useState } from "react"
import Image from "next/image"

export function ProductsSection() {
  const { ref: sectionRef, isVisible: isRevealed } = useReveal(0.3)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen w-screen shrink-0 flex-col px-6 pt-32 pb-8 md:px-12 md:pt-40 md:pb-12 lg:px-16"
      >
        <div className="flex h-full w-full flex-col">
          <div
            className={`mb-8 shrink-0 md:mb-12 transition-all duration-1000 ${
              isRevealed ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-md"
            }`}
          >
            <h2 className="font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">Products</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Explore our comprehensive range of premium dental supplies designed for excellence
            </p>
          </div>

          <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`group relative block overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-foreground/20 hover:bg-foreground/10 ${
                    isRevealed ? "translate-y-0 opacity-100 blur-0" : "translate-y-12 opacity-0 blur-md"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-foreground/5">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} - ${product.description}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-left">
                    <h3 className="mb-1 font-sans text-base font-medium text-foreground transition-colors group-hover:text-foreground">
                      {product.name}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-foreground/70">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-lg font-semibold text-foreground">{product.price}</span>
                      <span className="text-xs text-foreground/60 transition-all group-hover:translate-x-1">
                        View →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
