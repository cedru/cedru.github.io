"use client"
import { useTransition } from "react";
import { deleteProduct, toggleProductAvailability } from "../../_actions/products"
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";





export function ActiveToggleDropdownItem({ id, isAvailableForPurchase}: { id: string, isAvailableForPurchase: boolean}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
    <button
        disabled={isPending}
        onClick={() => {
        startTransition (async () => {
            await toggleProductAvailability(id, !isAvailableForPurchase)
            router.refresh()
        })
    }}>{isAvailableForPurchase ? "Deactivate" : "Activate"}
    </button>
    )
}

export function DeleteDropdownItem({ id, disabled}: {
    id: string
    disabled: boolean
}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
        <button
        
        disabled={disabled || isPending}
        onClick={() => {
        startTransition (async () => {
            
            await deleteProduct(id)
            router.refresh()
        })
    }}
    >
        Delete 
    </button>
    )
}