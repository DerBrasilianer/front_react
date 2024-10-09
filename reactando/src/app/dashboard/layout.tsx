interface DashboardLayoutProps {

    children: React.ReactNode

}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {

    return (

        <div className="dashboard-layout">

            <header>

                <h1>Dashboard</h1>

            </header>

            {children}

        </div>

    )

}

export default DashboardLayout