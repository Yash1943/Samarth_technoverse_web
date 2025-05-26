import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-9xl mx-auto px-2 md:px-8 lg:px-16 py-12 md:py-16'>
            {children}
        </div>
    )
}

export default layout
