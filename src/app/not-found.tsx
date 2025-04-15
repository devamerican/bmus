import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <h1 className="text-4xl font-bold tracking-tight text-center text-zinc-800">
                    404
                </h1>
                <p className="mt-6 text-center text-zinc-700 mb-6">
                    This page does not exist.
                </p>
                    <Link href="/" >
                        <Button variant="outline" >
                           <Home /> Go back home
                        </Button>
                    </Link>
            </div>
        </div>
    );
}