
export interface EnvironmentConstructor {
    new (size: number): Environment;
}

export interface Environment {
    type: string
    size: number
    generate(): void
}