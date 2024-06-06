import db from "@/db/db"
import { formatCurrency, formatNumber } from "@/lib/formatters"

async function getSalesData() {
    const data = await db?.order.aggregate({
        _sum: { pricePaidInCents: true },
        _count: true
    })

    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count
    }
}

async function getUserData() {
    const [userCount, orderData] = await Promise.all([
        db.user.count(),
        db.order.aggregate({
            _sum: { pricePaidInCents: true },
        }),
    ])

    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
    }
}

async function getProductData() {
    const [activeCount, inactiveCount] = await Promise.all([
        db.product.count({ where: {isAvailableForPurchase: true }}),
        db.product.count({ where: {isAvailableForPurchase: false }}),
    ])

    return { activeCount, inactiveCount }
}

export default async function AdminDashboard() {
    const [salesData, userData, productData] = await Promise.all([
        getSalesData(),
        getUserData(),
        getProductData()
    ])

    return (
        <div>
            <DashBoardCard 
                title="Sales" 
                subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
                body={formatCurrency(salesData.amount)}
            />
            <DashBoardCard 
                title="Customers" 
                subtitle={`${formatCurrency(userData.averageValuePerUser)} Average Value`}
                body={formatNumber(userData.userCount)}
            />
            <DashBoardCard 
                title="Active Products" 
                subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
                body={formatNumber(productData.activeCount)}
            />
        </div>
    )
}

type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashBoardCard({title, subtitle, body}:
    DashboardCardProps) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card w-96 text-white">
                    <div className="card-body">
                      <h2 className="text-4xl">{title}</h2>
                      <h2 className="text-xl">{subtitle}</h2>
                      <p className="text-xl">{body}</p>
                    </div>
                </div>
            </div>
        )
    }