export default function DashboardLayout({children,})
{
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                <ul>
                    <li>test</li>
                    <li>test1</li>
                    <li>test2</li>
                </ul>
            </nav>

            {children}
        </section>
    )
}