import { useForm } from "@inertiajs/react"
import { useRoute } from 'ziggy-js';

export default function Create() {
    const route = useRoute();

    const { data, setData, post, errors, processing } = useForm({
        title: ''
    });

    function submit(e) {
        e.preventDefault();
        post(route('books.store'));
    }

    return (
        <>
            <h1 className="title">Create Book</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <input value={data.title} onChange={(e) => setData('title',e.target.value)}/>
                    <button className="primary-btn mt-4" disabled={processing}>Create Book</button>
                </form>
            </div>
        </>
    )
}
