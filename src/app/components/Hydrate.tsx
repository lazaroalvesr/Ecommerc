'use client';

import { ReactNode, useState, useEffect } from "react";

export default function Hydrate({ children }: { children: ReactNode }) {
    const [isMounted, setIsmounted] = useState(false);

    useEffect(() => {
        setIsmounted(true);
    }, []);

    return isMounted ? <>{children}</> : <span>Carregando...</span>;
}