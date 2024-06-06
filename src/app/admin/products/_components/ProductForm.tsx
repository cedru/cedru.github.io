"use client"

import { formatCurrency } from "@/lib/formatters"
import { useState } from "react"
import { addProduct, updateProduct } from "../../_actions/products"
import { useFormState, useFormStatus } from "react-dom"
import { Product } from "@prisma/client"
import Image from "next/image"

export function ProductForm({ product}: { product?: Product | null}) {
    const [error, action] = useFormState(product == null ? addProduct : updateProduct.bind(null, product.id), {})
    const [priceInCents, setPriceInCents] = useState<number | undefined>(product?.priceInCents)
    return (

    <form action={action}>
        <div>
            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="name" className="label-text text-white text-l">Name</label>
                </div>
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="..." 
                className="input input-bordered w-full max-w-xs" 
                required
                defaultValue={product?.name || ""} 
                />
                {error.name && <div className="text-destructive">{error.name}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="priceInCents" className="label-text text-white text-l mt-4">Price In Cents</label>
                </div>
                <input type="number"
                       id="priceInCents"
                       name="priceInCents"
                       placeholder="..."
                       className="input input-bordered w-full max-w-xs"
                       required
                       value={priceInCents}
                       onChange={e => setPriceInCents(Number(e.target.value) || undefined)} 
                />
                <div className="text-muted-foreground mt-2">
                    {formatCurrency((priceInCents || 0) / 100)}
                </div>
                {error.priceInCents && <div className="text-destructive">{error.priceInCents}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="description" className="label-text text-white text-l mt-4">Description</label>
                </div>
                <textarea 
                rows={10} 
                id="description" 
                name="description" 
                placeholder="..." 
                className="input input-bordered w-full max-w-xs" 
                required
                defaultValue={product?.description} 
                />
                {error.description && <div className="text-destructive">{error.description}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="file" className="label-text text-white text-l mt-4">File</label>
                </div>
                <input type="file" id="file" name="file" className="w-full max-w-xs" required={product == null} />
                {product != null && ( <div className="text-muted-foreground">{product.filePath}</div>)}
                {error.file && <div className="text-destructive">{error.file}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="image" className="label-text text-white text-l mt-4">Image</label>
                </div>
                <input type="file" id="image" name="image" className="w-full max-w-xs" required={product == null} />
                {product != null && ( <Image src={product.imagePath} height="640" width="400" alt="Product Image" /> )}
                {error.image && <div className="text-destructive">{error.image}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="color" className="label-text text-white text-l mt-4">Color</label>
                </div>
                <input type="color" id="color" name="color" className="" defaultValue={product?.color}  required />
                {error.color && <div className="text-destructive">{error.color}</div>}
            </label>

            <label className="ml-4 form-control w-full max-w-xs">
                <div className="label">
                    <label htmlFor="size" className="label-text text-white text-l mt-4">Size</label>
                </div>
                <select id="size" name="size" defaultValue={product?.size} className="select select-bordered w-full max-w-xs">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                {error.size && <div className="text-destructive">{error.size}</div>}
            </label>

            <SubmitButton />

        </div>
    </form>

    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button className="ml-4 mt-8 btn bg-ourOrange text-black hover:bg-white" type="submit" disabled={pending}>{pending ? "Saving..." : "Save"}
        </button>
    )
}