export default function MoreLayout({children,})
{
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                <ul>
                    <li>4</li>
                    <li>5</li>
                    <li>5</li>
                </ul>
            </nav>

            {children}
        </section>
    )
}