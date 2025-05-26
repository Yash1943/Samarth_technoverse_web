export function generateStaticParams() {
    return [
        { slug: 'web-development' },
        { slug: 'mobile-apps' },
        { slug: 'consulting' },
        { slug: 'erp-solutions' },
        { slug: 'automation-solutions' },
    ]
}

export default function Page({ params }: { params: { slug: string } }) {
    return <p>Service: {params.slug}</p>
} 