
import Link from "next/link";
import { PageHeader } from "../_components/pageHeader";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import { ActiveToggleDropdownItem, DeleteDropdownItem } from "./_components/ProductActions";



export default function AdminProductsPage() {
    return (
        <>
        <div className="gap-4 flex items-center">
            <PageHeader>Products</PageHeader>
            <button className="btn bg-ourOrange text-black hover:bg-white">
                <Link href="/admin/products/new">Add Product</Link>
            </button>
        </div>
        <ProductsTable></ProductsTable>
        </>
    )
}

async function ProductsTable() {
    const products = await db.product.findMany({
         select: { 
            id: true, 
            name: true, 
            priceInCents: true, 
            isAvailableForPurchase: true, 
            _count: { select: {orders: true}}
        },
        orderBy: { name: "asc" }
    })

    if (products.length === 0) return <p>No products found</p>

    return (
    <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th><span className="sr-only">Available For Purchase</span></th>
          <th className="text-white text-xl font-normal">Name</th>
          <th className="text-white text-xl font-normal">Price</th>
          <th className="text-white text-xl font-normal">Orders</th>
          <th className="text-white text-xl font-normal"></th>
          <th><span className="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
            <tr key={product.id}>
                <th>
                    {product.isAvailableForPurchase ? ( 
                    <>
                        <div className="badge badge-info gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            Available
                        </div>
                    </>
                    ) : (
                    <>
                    <div className="badge badge-warning gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            Unavailable
                        </div>   
                    </>
                    )}
                </th>
                <td>
                    {product.name}
                </td>  
                <td>
                    {formatCurrency(product.priceInCents / 100)}
                </td> 
                <td>
                    {formatNumber(product._count.orders)}
                </td> 
                <td>
                <ActiveToggleDropdownItem id={product.id} isAvailableForPurchase={product.isAvailableForPurchase}></ActiveToggleDropdownItem>
                </td>
                <td>
                <DeleteDropdownItem id={product.id} disabled={product._count.orders > 0}></DeleteDropdownItem>
                </td>
                <td>
                    <details className="dropdown">
                        <summary className="m-1 btn">...</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 dark:text-white text-black">
                            <li><a download href={`/admin/products/${product.id}/download`}>Download</a></li>
                            <li><a href={`/admin/products/${product.id}/edit`}>Edit</a></li>
                        
                        
                        </ul>
                    </details>
                </td>
            </tr>
        ))}

      </tbody>
    </table>
  </div>
    )
}