"use client"

import type { Product } from "@/lib/products"
import { MagneticButton } from "@/components/magnetic-button"
import { useState } from "react"
import Image from "next/image"

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedColor, setSelectedColor] = useState(0)

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-foreground/10 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all hover:bg-foreground/20 hover:rotate-90"
        >
          ✕
        </button>

        <div className="grid gap-8 p-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
            <div className="aspect-square relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} - ${product.description}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="mb-3 font-sans text-3xl font-light leading-tight text-foreground md:text-4xl">
              {product.name}
            </h2>
            <p className="mb-4 font-mono text-3xl font-semibold text-foreground">{product.price}</p>
            <p className="mb-6 text-base leading-relaxed text-foreground/80">{product.detailedDescription}</p>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="mb-3 font-sans text-lg font-medium text-foreground">Available Colors</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    className={`group relative flex h-14 w-14 flex-col items-center justify-center rounded-lg border-2 transition-all ${
                      selectedColor === index
                        ? "scale-110 border-foreground shadow-lg"
                        : "border-foreground/20 hover:border-foreground/40"
                    }`}
                  >
                    <div
                      className="h-7 w-7 rounded-full border border-foreground/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="mt-0.5 text-[10px] text-foreground/70">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="mb-3 font-sans text-lg font-medium text-foreground">Specifications</h3>
              <div className="space-y-2 rounded-xl border border-foreground/10 bg-foreground/5 p-4">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between border-b border-foreground/10 pb-2 text-sm last:border-0"
                  >
                    <span className="text-foreground/60">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping */}
            <div className="mb-6">
              <h3 className="mb-3 font-sans text-lg font-medium text-foreground">Shipping Information</h3>
              <div className="space-y-2 rounded-xl border border-foreground/10 bg-foreground/5 p-4">
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-foreground/60">🚚</span>
                  <div>
                    <div className="font-medium text-foreground">Standard Delivery</div>
                    <div className="text-xs text-foreground/70">{product.shipping.standard}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-foreground/60">⚡</span>
                  <div>
                    <div className="font-medium text-foreground">Express Delivery</div>
                    <div className="text-xs text-foreground/70">{product.shipping.express}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-foreground/60">🎁</span>
                  <div>
                    <div className="font-medium text-foreground">Free Shipping</div>
                    <div className="text-xs text-foreground/70">{product.shipping.freeShippingThreshold}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <MagneticButton size="lg" variant="primary" className="flex-1">
                Buy Now
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" className="flex-1">
                Add to Cart
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
