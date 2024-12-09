export function ErrorFeedBackForm({ errors }: { errors?: string }) {
    if (!errors) return
    return (
        <p className='bg-red-500/25 text-red-100 text-xs p-1 rounded-md text-center mt-2'>{errors}</p>
    )

}