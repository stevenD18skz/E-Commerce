"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

export type Currency = "COP" | "USD" | "EUR";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
    undefined
);

const EXCHANGE_RATES: Record<Currency, number> = {
    USD: 1,
    COP: 4000,
    EUR: 0.92,
};

const LOCALE_MAP: Record<Currency, string> = {
    USD: "en-US",
    COP: "es-CO",
    EUR: "es-ES",
};

export function CurrencyProvider({ children }: { children: ReactNode }) {
    const [currency, setCurrency] = useState<Currency>("COP");

    const formatPrice = (priceInUSD: number) => {
        const rate = EXCHANGE_RATES[currency];
        const convertedPrice = priceInUSD * rate;

        return convertedPrice.toLocaleString(LOCALE_MAP[currency], {
            style: "currency",
            currency: currency,
            minimumFractionDigits: currency === "COP" ? 0 : 2,
            maximumFractionDigits: currency === "COP" ? 0 : 2,
        });
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
