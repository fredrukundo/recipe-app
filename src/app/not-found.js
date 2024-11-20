import Link from "next/link";


export default function NotFound() {
    return (
        <div>
            <h1>Not Found page</h1>
            <Link href={"/"}>Go back Home</Link>
        </div>
    );
}