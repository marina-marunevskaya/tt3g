export function formatDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export function calculateDate(initialDate: Date, numberOfDays: number, goBack: boolean = true): Date {
    const coefficient = (goBack ? -1 : 1) * 24 * 60 * 60 * 1000

    return new Date(
        initialDate.getTime() + numberOfDays * coefficient
    )
}
