import React from 'react'

export default ({children, color}) => (
    <section>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}>
            {children}
        </div>
    </section>
)