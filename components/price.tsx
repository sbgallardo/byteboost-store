import clsx from 'clsx';

const Price = ({
                   amount,
                   className,
                   currencyCode = 'USD',
                   discount,
                   currencyCodeClassName
               }: {
    amount: string;
    className?: string;
    currencyCode: string;
    discount?: number | null;
    currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
    <p suppressHydrationWarning={true} className={className}>
        {!discount ?
        <>
            {`${new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
                currencyDisplay: 'narrowSymbol'
            }).format(parseFloat(amount))}`}
        </>
        :
        <>
            {`${new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
                currencyDisplay: 'narrowSymbol'
            }).format(parseFloat(amount) - parseFloat(amount) * discount / 100)}`}
        </>
        }

        {discount ?
            <span className="ml-1 text-sm text-neutral-300 dark:text-neutral-200 line-through">
                {`${new Intl.NumberFormat(undefined, {
                    style: 'currency',
                    currency: currencyCode,
                    currencyDisplay: 'narrowSymbol'
                }).format(parseFloat(amount))}`}
            </span>
            : null
        }
        <span> CLP</span>
    </p>
);

export default Price;