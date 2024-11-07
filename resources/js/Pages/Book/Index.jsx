export default function Index({books}) {
    return (
        <>
            <h1>Books List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </>
    )
}
