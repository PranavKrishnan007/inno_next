import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function CreateProblem() {
    const { quill, quillRef } = useQuill();
    console.log(quill, quillRef);

    return (
        <div>
            <div className="container mx-auto md:px-8 px-4">
                <h1 className='text-3xl font-bold underline'>Create Problem page comes here!</h1>
                <div style={{ width: 500, height: 300 }}>
                    <div ref={quillRef} />
                </div>
            </div>
        </div>

    )
}